import { NextResponse } from "next/server";
import { supabase } from "@/lib/db-supabase";

export async function GET(req: Request) {
  if ((process.env.BETA_CODE_REQUIRED ?? "true") !== "true") {
    return NextResponse.json({ valid: true });
  }
  const url = new URL(req.url);
  const code = (url.searchParams.get("code") || "").trim().toLowerCase();
  if (!code) return NextResponse.json({ valid: false });

  const { data } = await supabase
    .from("beta_codes")
    .select("code")
    .ilike("code", code)
    .maybeSingle();

  return NextResponse.json({ valid: Boolean(data) });
}