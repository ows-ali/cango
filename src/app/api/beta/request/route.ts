import { NextResponse } from "next/server";
import { supabase } from "@/lib/db-supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const { email } = await req.json();
  const clean = (email || "").toString().trim().toLowerCase();

  if (!EMAIL_RE.test(clean)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const id = crypto.randomUUID();
  const { error } = await supabase.from("beta_requests").insert({ id, email: clean });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({
        ok: true,
        message: "We already have your email — you'll get your access code soon!",
      });
    }
    throw error;
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks! We'll email you your access code soon.",
  });
}