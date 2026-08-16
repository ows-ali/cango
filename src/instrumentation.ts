export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { initLangfuse } = await import("@/lib/langfuse");
    initLangfuse();
  }
}