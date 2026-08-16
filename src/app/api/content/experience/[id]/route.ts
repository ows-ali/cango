import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/db-supabase";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const expId = parseInt(id);
  if (isNaN(expId)) return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

  const [expResult, transcriptsResult, questsResult, chalsResult, vocabLinksResult] = await Promise.all([
    supabase
      .from("experiences")
      .select("*, modules(scenario_level_id, scenario_levels(scenario_id, scenarios(slug)))")
      .eq("id", expId)
      .maybeSingle(),
    supabase.from("transcript_lines").select("*").eq("experience_id", expId).order("order"),
    supabase.from("questions").select("*, question_options(*)").eq("experience_id", expId).order("order"),
    supabase
      .from("challenges")
      .select("*, challenge_items(*)")
      .eq("experience_id", expId)
      .order("order", { foreignTable: "challenge_items" }),
    supabase.from("experience_words").select("*").eq("experience_id", expId),
  ]);

  if (expResult.error) throw expResult.error;
  if (transcriptsResult.error) throw transcriptsResult.error;
  if (questsResult.error) throw questsResult.error;
  if (chalsResult.error) throw chalsResult.error;
  if (vocabLinksResult.error) throw vocabLinksResult.error;

  const exp = expResult.data;
  if (!exp) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const scenarioSlug: string | null = exp.modules?.scenario_levels?.scenarios?.slug ?? null;

  const wordIds = (vocabLinksResult.data ?? []).map((vw) => vw.word_id);
  let vocabWords: any[] = [];
  if (wordIds.length > 0) {
    const { data, error } = await supabase.from("words").select("*").in("id", wordIds);
    if (error) throw error;
    vocabWords = (data ?? []).map((w) => ({
      id: w.id,
      targetWord: w.target_word,
      translationText: w.translation_text,
      article: w.article,
      plural: w.plural,
    }));
  }

  const questionsWithOptions = (questsResult.data ?? []).map((q) => ({
    id: q.id,
    experienceId: q.experience_id,
    type: q.type,
    questionText: q.question_text,
    translationText: q.translation_text,
    order: q.order,
    options: (q.question_options ?? []).map((o: { id: number; question_id: number; target_text: string; translation_text: string; correct: boolean }) => ({
      id: o.id,
      questionId: o.question_id,
      targetText: o.target_text,
      translationText: o.translation_text,
      correct: o.correct,
    })),
  }));

  const challengesWithItems = (chalsResult.data ?? []).map((ch) => ({
    id: ch.id,
    experienceId: ch.experience_id,
    type: ch.type,
    question: ch.question,
    questionTranslation: ch.question_translation,
    items: (ch.challenge_items ?? []).map((i: { id: number; challenge_id: number; text: string; translation: string; order: number; correct_value: string }) => ({
      id: i.id,
      challengeId: i.challenge_id,
      text: i.text,
      translation: i.translation,
      order: i.order,
      correctValue: i.correct_value,
    })),
  }));

  return NextResponse.json({
    id: exp.id,
    moduleId: exp.module_id,
    scenarioSlug,
    title: exp.title,
    description: exp.description,
    audioUrl: exp.audio_url,
    imageUrl: exp.image_url,
    duration: exp.duration,
    xpReward: exp.xp_reward,
    order: exp.order,
    transcripts: (transcriptsResult.data ?? []).map((t) => ({
      id: t.id,
      experienceId: t.experience_id,
      order: t.order,
      targetText: t.target_text,
      translationText: t.translation_text,
      speaker: t.speaker,
    })),
    questions: questionsWithOptions,
    challenges: challengesWithItems,
    vocabulary: vocabWords,
  });
}