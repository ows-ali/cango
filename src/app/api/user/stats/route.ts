import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { supabase } from "@/lib/db-supabase";

const LEVEL_MAP: Record<string, number> = { A1: 4, A2: 1, B1: 2, B2: 3 };

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const uid = session.user.id;

  const { data: user } = await supabase
    .from("users")
    .select("cefr_level")
    .eq("id", uid)
    .maybeSingle();

  const { data: stats, error: statsError } = await supabase
    .from("user_stats")
    .select("*")
    .eq("user_id", uid)
    .maybeSingle();

  if (statsError) throw statsError;

  let finalStats = stats;
  if (!finalStats) {
    const { data: newStats, error: insertError } = await supabase
      .from("user_stats")
      .insert({ user_id: uid })
      .select()
      .maybeSingle();

    if (insertError) throw insertError;
    finalStats = newStats;
  }

  const today = new Date().toISOString().slice(0, 10);
  const { data: todayRow, error: activityError } = await supabase
    .from("user_activity")
    .select("xp_earned")
    .eq("user_id", uid)
    .eq("date", today)
    .maybeSingle();

  if (activityError) throw activityError;

  const { data: progressRows, error: progressError } = await supabase
    .from("user_experience_progress")
    .select("experience_id")
    .eq("user_id", uid)
    .eq("completed", true);

  if (progressError) throw progressError;

  const completedIds = new Set((progressRows || []).map((r) => r.experience_id));

  const { data: settingsRows } = await supabase
    .from("user_scenario_settings")
    .select("scenario_id, selected_level_id")
    .eq("user_id", uid);

  const settingsMap: Record<number, number> = {};
  for (const s of settingsRows || []) settingsMap[s.scenario_id] = s.selected_level_id;

  const defaultLevelId = LEVEL_MAP[user?.cefr_level] || null;

  const { data: scenarioRows, error: scenarioError } = await supabase
    .from("scenarios")
    .select("id, name, slug, scenario_levels(level_id, modules(id, experiences(id)))")
    .order("order");

  if (scenarioError) throw scenarioError;

  const scenarioProgress = (scenarioRows || []).map((sc) => {
    const selectedLevelId = settingsMap[sc.id] || defaultLevelId;
    const level = (sc.scenario_levels || []).find((sl: { level_id: number }) => sl.level_id === selectedLevelId);
    const experiences = (level?.modules || []).flatMap((m: { experiences: { id: number }[] }) => m.experiences || []);
    const total = experiences.length;
    const completed = experiences.filter((e: { id: number }) => completedIds.has(e.id)).length;
    return {
      id: sc.id,
      name: sc.name,
      slug: sc.slug,
      total,
      completed,
      progress: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  });

  const todayDate = new Date();
  const days: { date: string; xpEarned: number }[] = [];
  const cutoff = new Date(todayDate);
  cutoff.setDate(cutoff.getDate() - 6);

  const { data: activityRows } = await supabase
    .from("user_activity")
    .select("date, xp_earned")
    .eq("user_id", uid)
    .gte("date", cutoff.toISOString().slice(0, 10));

  const activityMap: Record<string, number> = {};
  for (const a of activityRows || []) activityMap[a.date] = a.xp_earned;

  for (let i = 6; i >= 0; i--) {
    const d = new Date(todayDate);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push({ date: key, xpEarned: activityMap[key] || 0 });
  }

  return NextResponse.json({
    totalXp: finalStats.total_xp,
    currentStreak: finalStats.current_streak,
    longestStreak: finalStats.longest_streak,
    todayXp: todayRow?.xp_earned ?? 0,
    completedCount: completedIds.size,
    weeklyActivity: days,
    scenarioProgress,
  });
}