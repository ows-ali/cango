import { LangfuseSpanProcessor } from "@langfuse/otel";
import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";

let processor: LangfuseSpanProcessor | null = null;

export function isLangfuseEnabled() {
  return Boolean(process.env.LANGFUSE_PUBLIC_KEY && process.env.LANGFUSE_SECRET_KEY);
}

export function initLangfuse() {
  if (processor || !isLangfuseEnabled()) return;
  processor = new LangfuseSpanProcessor({ exportMode: "immediate" });
  const provider = new NodeTracerProvider({ spanProcessors: [processor] });
  provider.register();
}

export async function forceFlushLangfuse() {
  if (processor) await processor.forceFlush();
}