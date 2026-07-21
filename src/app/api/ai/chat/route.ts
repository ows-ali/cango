import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { supabase } from "@/lib/db-supabase";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { messages, context } = await req.json() as { messages: Message[]; context?: { experienceId?: number } };
  if (!messages?.length) {
    return NextResponse.json({ error: "Missing messages" }, { status: 400 });
  }

  // Build system prompt
  const systemParts: string[] = [];

  systemParts.push(
    "You are an Italian language tutor. Your goal is to help the user practice Italian in a natural, encouraging way."
  );

  // User profile
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

  // Experience context
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

  // User's vocab status
  const { data: uvCount } = await supabase
    .from("user_vocabulary")
    .select("status")
    .eq("user_id", session.user.id);

  const learningCount = uvCount?.filter(v => v.status === "learning").length || 0;
  const masteredCount = uvCount?.filter(v => v.status === "mastered").length || 0;
  systemParts.push(`The user has ${learningCount} words they're learning and ${masteredCount} they've mastered.`);

  systemParts.push(
    "Guidelines: Respond in Italian primarily, with English translations in parentheses for complex sentences. "
    + "Correct mistakes gently. Be encouraging. If the user asks about a word, explain its usage with examples. "
    + "Keep responses concise (2-4 sentences)."
  );

  const systemPrompt = systemParts.join("\n");

  // Build Gemini request
  const geminiMessages = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ reply: "AI tutor is not configured yet. Set your GEMINI_API_KEY in .env to enable it." });
  }

  const geminiRes = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: geminiMessages,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        },
      }),
    }
  );

  if (geminiRes.status === 429) {
    return NextResponse.json({
      reply: "The AI tutor is currently busy with too many requests. Please wait a moment and try again."
    });
  }

  if (!geminiRes.ok) {
    const errBody = await geminiRes.text();
    console.error("Gemini error:", errBody);
    return NextResponse.json({ reply: "Something went wrong with the AI tutor. Please try again." });
  }

  const geminiData = await geminiRes.json();
  const reply = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";

  return NextResponse.json({ reply });
}
