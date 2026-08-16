import { google } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";

export function getModel() {
  switch (process.env.AI_PROVIDER) {
    case "openai":
      return createOpenAI({ apiKey: process.env.OPENAI_API_KEY }).chat(
        process.env.AI_MODEL || "gpt-4o-mini"
      );
    case "groq":
      return createOpenAI({
        baseURL: "https://api.groq.com/openai/v1",
        apiKey: process.env.GROQ_API_KEY,
      }).chat(process.env.AI_MODEL || "llama3-8b-8192");
    case "gemini":
    default:
      return google(process.env.AI_MODEL || "gemini-2.0-flash-lite");
  }
}
