import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { supabase } from "@/lib/db-supabase";
import { getWordScenarios, getScenarioWordIds, getCompletedCountForWord } from "@/lib/vocab-utils";

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const filterScenarioId = url.searchParams.get("scenarioId");

  const { data: uvRows, error } = await supabase
    .from("user_vocabulary")
    .select("word_id, status, notes, scenario_id, added_at, words!inner(*)")
    .eq("user_id", session.user.id);

  if (error) throw error;
  if (!uvRows?.length) return NextResponse.json({ words: [] });

  let filtered = uvRows;

  if (filterScenarioId) {
    const sid = parseInt(filterScenarioId);
    const scenarioWordIds = await getScenarioWordIds(sid);
    const scenarioWordSet = new Set(scenarioWordIds);

    filtered = uvRows.filter((row) => {
      const wordId = row.word_id;
      return row.scenario_id === sid || scenarioWordSet.has(wordId);
    });
  }

  const words = await Promise.all(
    filtered.map(async (row) => {
      const word = row.words as any;
      const scenarios = await getWordScenarios(row.word_id);
      const timesCompleted = await getCompletedCountForWord(session.user.id, row.word_id);
      return {
        wordId: row.word_id,
        targetWord: word.target_word,
        translationText: word.translation_text,
        article: word.article,
        plural: word.plural,
        status: row.status,
        notes: row.notes,
        scenarioId: row.scenario_id,
        addedAt: row.added_at,
        scenarios,
        timesCompleted,
      };
    })
  );

  return NextResponse.json({ words });
}

export async function PATCH(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { wordId, status, notes, scenarioId } = await req.json();
  if (!wordId) {
    return NextResponse.json({ error: "Missing wordId" }, { status: 400 });
  }

  const updateData: Record<string, any> = {};
  if (status) updateData.status = status;
  if (notes !== undefined) updateData.notes = notes;
  if (scenarioId !== undefined) updateData.scenario_id = scenarioId;

  const { error } = await supabase
    .from("user_vocabulary")
    .update(updateData)
    .eq("user_id", session.user.id)
    .eq("word_id", wordId);

  if (error) throw error;

  return NextResponse.json({ success: true });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { targetWord, translationText, article, plural, scenarioId, notes } = await req.json();
  if (!targetWord || !translationText) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  let wordId: number;

  const { data: existing } = await supabase
    .from("words")
    .select("id")
    .eq("target_word", targetWord)
    .maybeSingle();

  if (existing) {
    wordId = existing.id;
  } else {
    const { data: newWord, error: insertError } = await supabase
      .from("words")
      .insert({ target_word: targetWord, translation_text: translationText, article: article || null, plural: plural || null })
      .select("id")
      .single();

    if (insertError) throw insertError;
    wordId = newWord.id;
  }

  const { error: uvError } = await supabase
    .from("user_vocabulary")
    .upsert(
      { user_id: session.user.id, word_id: wordId, status: "learning", notes: notes || null, scenario_id: scenarioId || null, added_at: new Date().toISOString() },
      { onConflict: "user_id, word_id" }
    );

  if (uvError) throw uvError;

  return NextResponse.json({ success: true, wordId });
}

export async function DELETE(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { wordId } = await req.json();
  if (!wordId) {
    return NextResponse.json({ error: "Missing wordId" }, { status: 400 });
  }

  const { error } = await supabase
    .from("user_vocabulary")
    .delete()
    .eq("user_id", session.user.id)
    .eq("word_id", wordId);

  if (error) throw error;

  return NextResponse.json({ success: true });
}
