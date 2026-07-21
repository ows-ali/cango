import { supabase } from "./db-supabase";

export async function getWordScenarios(wordId: number): Promise<{ id: number; name: string }[]> {
  const { data: ewRows, error } = await supabase
    .from("experience_words")
    .select("experience_id")
    .eq("word_id", wordId);

  if (error || !ewRows?.length) return [];

  const expIds = ewRows.map((r) => r.experience_id);

  const { data: expRows } = await supabase
    .from("experiences")
    .select("module_id")
    .in("id", expIds);

  if (!expRows?.length) return [];

  const modIds = [...new Set(expRows.map((r) => r.module_id))];

  const { data: modRows } = await supabase
    .from("modules")
    .select("scenario_level_id")
    .in("id", modIds);

  if (!modRows?.length) return [];

  const slIds = [...new Set(modRows.map((r) => r.scenario_level_id))];

  const { data: slRows } = await supabase
    .from("scenario_levels")
    .select("scenario_id")
    .in("id", slIds);

  if (!slRows?.length) return [];

  const scIds = [...new Set(slRows.map((r) => r.scenario_id))];

  const { data: scRows } = await supabase
    .from("scenarios")
    .select("id, name")
    .in("id", scIds);

  return (scRows || []).map((s) => ({ id: s.id, name: s.name }));
}

export async function getScenarioWordIds(scenarioId: number): Promise<number[]> {
  const { data: slRows } = await supabase
    .from("scenario_levels")
    .select("id")
    .eq("scenario_id", scenarioId);

  if (!slRows?.length) return [];

  const slIds = slRows.map((r) => r.id);

  const { data: modRows } = await supabase
    .from("modules")
    .select("id")
    .in("scenario_level_id", slIds);

  if (!modRows?.length) return [];

  const modIds = modRows.map((r) => r.id);

  const { data: expRows } = await supabase
    .from("experiences")
    .select("id")
    .in("module_id", modIds);

  if (!expRows?.length) return [];

  const expIds = expRows.map((r) => r.id);

  const { data: ewRows } = await supabase
    .from("experience_words")
    .select("word_id")
    .in("experience_id", expIds);

  if (!ewRows?.length) return [];

  return [...new Set(ewRows.map((r) => r.word_id))];
}

export async function getCompletedCountForWord(userId: string, wordId: number): Promise<number> {
  const { data: ewRows } = await supabase
    .from("experience_words")
    .select("experience_id")
    .eq("word_id", wordId);

  if (!ewRows?.length) return 0;

  const expIds = ewRows.map((r) => r.experience_id);

  const { count, error } = await supabase
    .from("user_experience_progress")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId)
    .eq("completed", true)
    .in("experience_id", expIds);

  if (error) return 0;
  return count || 0;
}
