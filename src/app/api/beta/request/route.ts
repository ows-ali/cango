import { NextResponse } from "next/server";
import { supabase } from "@/lib/db-supabase";
import { hasEmailConfig, sendBetaCodeEmail } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_PER_IP = Number(process.env.BETA_MAX_PER_IP || 3);
const DAILY_LIMIT = Number(process.env.BETA_DAILY_LIMIT || 90);

function requestIp(req: Request): string | null {
  const xff = req.headers.get("x-forwarded-for");
  if (!xff) return null;
  const first = xff.split(",")[0].trim();
  return first || null;
}

function requestBaseUrl(req: Request): string {
  const proto = req.headers.get("x-forwarded-proto") || "http";
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  return host ? `${proto}://${host}` : "https://cango.app";
}

function safeOrigin(value: unknown): string | null {
  if (typeof value !== "string" || !value.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.origin;
  } catch {
    return null;
  }
}

function generateCode(): string {
  const suffix = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
  return `cango-${suffix}`;
}

export async function POST(req: Request) {
  const { email, origin } = await req.json();
  const clean = (email || "").toString().trim().toLowerCase();
  const authOrigin = safeOrigin(origin) || requestBaseUrl(req);

  if (!EMAIL_RE.test(clean)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const { data: existing } = await supabase
    .from("beta_requests")
    .select("id, code_sent_at")
    .eq("email", clean)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({
      ok: true,
      message: "We already have your email — you'll get your access code soon!",
    });
  }

  const today = new Date().toISOString().slice(0, 10);
  const ip = requestIp(req);

  if (ip) {
    const { count: perIp } = await supabase
      .from("beta_requests")
      .select("id", { count: "exact", head: true })
      .eq("ip", ip)
      .gte("requested_at", today);

    if ((perIp ?? 0) >= MAX_PER_IP) {
      return NextResponse.json(
        { error: "Too many requests from this device — please try again tomorrow." },
        { status: 429 }
      );
    }
  }

  const { count: todayCount } = await supabase
    .from("beta_requests")
    .select("id", { count: "exact", head: true })
    .gte("requested_at", today);

  if ((todayCount ?? 0) >= DAILY_LIMIT) {
    return NextResponse.json(
      { error: "We've hit today's request limit — please try again tomorrow." },
      { status: 429 }
    );
  }

  const code = generateCode();
  const id = crypto.randomUUID();

  const { error: codeError } = await supabase.from("beta_codes").insert({ code });
  if (codeError && codeError.code !== "23505") throw codeError;

  const { error } = await supabase
    .from("beta_requests")
    .insert({ id, email: clean, ip: ip ?? undefined });

  if (error) throw error;

  const sent = await sendBetaCodeEmail({
    to: clean,
    code,
    authUrl: `${authOrigin}/auth`,
  });

  if (sent) {
    await supabase
      .from("beta_requests")
      .update({ code_sent_at: new Date().toISOString() })
      .eq("id", id);
    return NextResponse.json({
      ok: true,
      message: "Check your inbox — your access code is on its way!",
    });
  }

  return NextResponse.json({
    ok: true,
    code,
    message: hasEmailConfig()
      ? "Email sending failed — here's your access code:"
      : "Email isn't configured yet — here's your access code:",
  });
}