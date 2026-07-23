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

  const level = user?.cefr_level || "A2";
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
        .map((t) => `${t.speaker ? `[${t.speaker}] ` : ""}${t.target_text} (${t.translation_text})`)
        .join("\n");
      systemParts.push(
        `The user just practiced this dialogue:\n${dialogue}\n\n`
        + `Use it as reference. Suggest roleplay where you play one speaker and they play the other.`
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
          `Key vocabulary from this experience: ${vocab.map(v => `${v.target_word} (${v.translation_text})`).join(", ")}.`
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
      "Guidelines: Respond in Italian primarily, with English translations in parentheses for complex sentences. "
      + "Correct mistakes gently. Be encouraging. If the user asks about a word, explain its usage with examples. "
      + "Keep responses concise (2-4 sentences)."
    );
  } else {
    systemParts.push(
      "Guidelines: Respond in Italian primarily, with English translations in parentheses for complex sentences. "
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
