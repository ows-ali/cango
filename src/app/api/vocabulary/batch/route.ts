import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { supabase } from "@/lib/db-supabase";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { wordIds, scenarioId } = await req.json();
  if (!wordIds?.length) {
    return NextResponse.json({ error: "Missing wordIds" }, { status: 400 });
  }

  const { data: existing } = await supabase
    .from("user_vocabulary")
    .select("word_id")
    .eq("user_id", session.user.id)
    .in("word_id", wordIds);

  const existingSet = new Set((existing || []).map((r) => r.word_id));
  const toAdd = wordIds.filter((id: number) => !existingSet.has(id));

  if (toAdd.length === 0) {
    return NextResponse.json({ added: 0 });
  }

  const rows = toAdd.map((wordId: number) => ({
    user_id: session.user.id,
    word_id: wordId,
    status: "learning",
    scenario_id: scenarioId || null,
  }));

  const { error } = await supabase.from("user_vocabulary").insert(rows);
  if (error) throw error;

  return NextResponse.json({ added: toAdd.length });
}
