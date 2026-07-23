import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { supabase } from "@/lib/db-supabase";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: rows, error } = await supabase
    .from("user_experience_progress")
    .select("experience_id, completed, experiences!inner(module_id, modules!inner(scenario_level_id, scenario_levels!inner(scenario_id, scenarios!inner(slug, name))))")
    .eq("user_id", session.user.id)
    .eq("completed", true);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const seen = new Set<string>();
  const scenarios: { slug: string; name: string }[] = [];
  for (const row of rows || []) {
    const exp = (row as any).experiences;
    const module = exp?.modules;
    const sl = module?.scenario_levels;
    const s = sl?.scenarios;
    if (s?.slug && !seen.has(s.slug)) {
      seen.add(s.slug);
      scenarios.push({ slug: s.slug, name: s.name });
    }
  }

  return NextResponse.json({ scenarios, count: scenarios.length });
}