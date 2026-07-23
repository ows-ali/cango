import { NextResponse } from "next/server";
import { streamText } from "ai";
import { auth } from "@/lib/auth";
import { supabase } from "@/lib/db-supabase";
import { getModel } from "@/lib/ai-provider";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { messages, context } = await req.json() as { messages: { role: string; content: string }[]; context?: { experienceId?: number } };
  if (!messages?.length) {
    return NextResponse.json({ error: "Missing messages" }, { status: 400 });
  }

  const systemParts: string[] = [];

  systemParts.push(
    "You are an Italian language tutor. Your goal is to help the user practice Italian in a natural, encouraging way."
  );

  const { data: user } = await supabase
    .from("users")
    .select("cefr_level, goals")
    .eq("id", session.user.id)
    .maybeSingle();

  // Resolve CEFR level: scenario-specific if in an experience, global otherwise
  let level = user?.cefr_level || "A2";

  if (context?.experienceId) {
    const { data: exp } = await supabase
      .from("experiences")
      .select("module_id")
      .eq("id", context.experienceId)
      .single();
    if (exp) {
      const { data: mod } = await supabase
        .from("modules")
        .select("scenario_level_id")
        .eq("id", exp.module_id)
        .single();
      if (mod) {
        const { data: sl } = await supabase
          .from("scenario_levels")
          .select("scenario_id")
          .eq("id", mod.scenario_level_id)
          .single();
        if (sl) {
          const { data: setting } = await supabase
            .from("user_scenario_settings")
            .select("selected_level_id")
            .eq("user_id", session.user.id)
            .eq("scenario_id", sl.scenario_id)
            .maybeSingle();
          if (setting?.selected_level_id) {
            const { data: lvl } = await supabase
              .from("levels")
              .select("name")
              .eq("id", setting.selected_level_id)
              .single();
            if (lvl) level = lvl.name;
          }
        }
      }
    }
  }

  systemParts.push(`The user's current CEFR level is ${level}. Adjust your Italian complexity to match.`);

  if (user?.goals?.length) {
    systemParts.push(`Their learning goals are: ${user.goals.join(", ")}.`);
  }

  if (context?.experienceId) {
    const { data: transcripts } = await supabase
      .from("transcript_lines")
      .select("target_text, translation_text, speaker")
      .eq("experience_id", context.experienceId)
      .order("order");

    if (transcripts?.length) {
      const dialogue = transcripts
        .map((t) => `${t.speaker ? `[${t.speaker}] ` : ""}${t.target_text} [t]${t.translation_text}[/t]`)
        .join("\n");
      systemParts.push(
        `The user just practiced this dialogue:\n${dialogue}\n\n`
        + `Use it as reference for roleplay.`
      );
    }

    const wordIds = (await supabase
      .from("experience_words")
      .select("word_id")
      .eq("experience_id", context.experienceId)
    ).data?.map(r => r.word_id) || [];

    if (wordIds.length > 0) {
      const { data: vocab } = await supabase
        .from("words")
        .select("target_word, translation_text")
        .in("id", wordIds);

      if (vocab?.length) {
        systemParts.push(
          `Key vocabulary from this experience: ${vocab.map(v => `${v.target_word} [t]${v.translation_text}[/t]`).join(", ")}.`
        );
      }
    }
  }

  const { data: uvCount } = await supabase
    .from("user_vocabulary")
    .select("status")
    .eq("user_id", session.user.id);

  const learningCount = uvCount?.filter(v => v.status === "learning").length || 0;
  const masteredCount = uvCount?.filter(v => v.status === "mastered").length || 0;
  systemParts.push(`The user has ${learningCount} words they're learning and ${masteredCount} they've mastered.`);

  if (context?.experienceId) {
    systemParts.push(
      "Guidelines: Respond in Italian. After any sentence that may need clarification, append [t]English translation[/t]. "
      + "Do not use parentheses for translations. "
      + "Correct mistakes gently. Be encouraging. If the user asks about a word, explain its usage with examples. "
      + "Keep responses concise (2-4 sentences)."
    );
    systemParts.push(
      "When the user says they'll play a role (e.g. 'Play as: Patient'), immediately start roleplaying as the other character from the dialogue. "
      + "Do NOT ask what they want to practice — just begin the roleplay conversation. "
      + "If they choose 'Play as: Yourself', be the Italian tutor helping them practice naturally."
    );
  } else {
    systemParts.push(
      "Guidelines: Respond in Italian. After any sentence that may need clarification, append [t]English translation[/t]. "
      + "Do not use parentheses for translations. "
      + "Correct mistakes gently. Be encouraging. If the user asks about a word, explain its usage with examples. "
      + "Keep responses concise (2-4 sentences)."
    );
    systemParts.push(
      "You are ONLY an Italian language tutor. Do NOT answer questions unrelated to Italian language learning or Italian culture. "
      + "If the user asks about something off-topic, gently redirect them back to Italian practice. "
      + "When the user selects a suggestion ('Roleplay...', 'Revise vocabulary', 'Practice grammar', 'Free conversation'), "
      + "immediately engage in that activity. For roleplay, act as the native Italian speaker."
    );
  }

  const systemPrompt = systemParts.join("\n");

  const result = streamText({
    model: getModel(),
    system: systemPrompt,
    messages: messages.map(m => ({ role: m.role as "user" | "assistant", content: m.content })),
  });

  return result.toTextStreamResponse();
}