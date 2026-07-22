const PROVIDER = process.env.AI_PROVIDER || "gemini";

interface ProviderMessage {
  role: string;
  parts: { text: string }[];
}

export async function getChatReply(
  messages: ProviderMessage[],
  systemPrompt: string
): Promise<string> {
  if (PROVIDER === "openai") return callOpenAI(messages, systemPrompt);
  return callGemini(messages, systemPrompt);
}

async function callGemini(
  messages: ProviderMessage[],
  systemPrompt: string
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return "AI tutor is not configured yet. Set your GEMINI_API_KEY in .env to enable it.";

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: messages,
        generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
      }),
    }
  );

  if (res.status === 429) {
    return "The AI tutor is currently busy with too many requests. Please wait a moment and try again.";
  }

  if (!res.ok) {
    const errBody = await res.text();
    console.error("Gemini error:", errBody);
    return "Something went wrong with the AI tutor. Please try again.";
  }

  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
}

async function callOpenAI(
  messages: ProviderMessage[],
  systemPrompt: string
): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return "AI tutor is not configured yet. Set your OPENAI_API_KEY in .env to enable it.";

  const openaiMessages = [
    { role: "system", content: systemPrompt },
    ...messages.map((m) => ({
      role: m.role === "model" ? "assistant" : "user",
      content: m.parts[0].text,
    })),
  ];

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: openaiMessages,
      temperature: 0.7,
      max_tokens: 500,
    }),
  });

  if (res.status === 429) {
    return "The AI tutor is currently busy with too many requests. Please wait a moment and try again.";
  }

  if (!res.ok) {
    const errBody = await res.text();
    console.error("OpenAI error:", errBody);
    return "Something went wrong with the AI tutor. Please try again.";
  }

  const data = await res.json();
  return data?.choices?.[0]?.message?.content || "No response.";
}
