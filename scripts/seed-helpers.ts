import { and, eq, inArray, sql } from "drizzle-orm";
import { db } from "../src/lib/db";
import {
  languages, scenarios, levels, scenarioLevels, modules, experiences,
  transcriptLines, words, experienceWords, questions, questionOptions,
  challenges, challengeItems
} from "../src/lib/db/schema";

const SKIP_EXISTING = true;

export async function addWord(target: string, english: string, article?: string, plural?: string, exp?: number) {
  const existing = await db.select({ id: words.id }).from(words)
    .where(eq(words.targetWord, target)).limit(1);
  if (existing.length > 0) {
    if (exp && !SKIP_EXISTING) {
      await db.insert(experienceWords).values({ experienceId: exp, wordId: existing[0].id }).onConflictDoNothing();
    }
    return existing[0].id;
  }
  const [result] = await db.insert(words).values({
    targetWord: target, translationText: english, article, plural,
  }).returning({ id: words.id });
  if (exp) {
    await db.insert(experienceWords).values({ experienceId: exp, wordId: result.id });
  }
  return result.id;
}

export async function addExperience(
  moduleId: number, title: string, level: number, scenario: string,
  lines: { target: string; en: string; speaker?: string }[],
  vocab: { target: string; en: string; article?: string; plural?: string }[],
  mcqs: { target: string; en: string; options: { target: string; en: string; correct: boolean }[] }[],
  matchingPairs: { target: string; en: string }[],
  bestResponse: { question: string; questionTranslation: string; options: { text: string; translation: string; correct: boolean }[] },
  extraVocabPairs?: { target: string; en: string }[],
  manualVocabMatchItems?: { text: string; translation: string; correctValue: string }[],
) {
  const durs = ["1:15", "1:45", "2:00", "2:30", "3:00"];
  const desc = `${scenario} — ${level === 1 ? "A2" : level === 2 ? "B1" : level === 3 ? "B2" : "A1"}`;

  const existing = await db.select({ id: experiences.id }).from(experiences)
    .where(and(eq(experiences.moduleId, moduleId), eq(experiences.title, title)))
    .limit(1);

  if (existing.length > 0 && SKIP_EXISTING) return existing[0].id;

  let eid: number;
  if (existing.length > 0) {
    eid = existing[0].id;
    const chIds = (await db.select({ id: challenges.id }).from(challenges)
      .where(eq(challenges.experienceId, eid))).map(c => c.id);
    if (chIds.length > 0) {
      await db.delete(challengeItems).where(inArray(challengeItems.challengeId, chIds));
      await db.delete(challenges).where(eq(challenges.experienceId, eid));
    }
    const qIds = (await db.select({ id: questions.id }).from(questions)
      .where(eq(questions.experienceId, eid))).map(q => q.id);
    if (qIds.length > 0) {
      await db.delete(questionOptions).where(inArray(questionOptions.questionId, qIds));
      await db.delete(questions).where(eq(questions.experienceId, eid));
    }
    await db.delete(transcriptLines).where(eq(transcriptLines.experienceId, eid));
    await db.delete(experienceWords).where(eq(experienceWords.experienceId, eid));

    await db.update(experiences).set({
      moduleId, title,
      order: 1, duration: durs[Math.floor(Math.random() * durs.length)],
      xpReward: 50, description: desc,
    }).where(eq(experiences.id, eid));
  } else {
    const [result] = await db.insert(experiences).values({
      moduleId, title,
      order: 1, duration: durs[Math.floor(Math.random() * durs.length)],
      xpReward: 50, description: desc,
    }).returning({ id: experiences.id });
    eid = result.id;
  }

  const transVals: (typeof transcriptLines.$inferInsert)[] = [];
  lines.forEach((l, i) => transVals.push({ experienceId: eid, order: i + 1, targetText: l.target, translationText: l.en, speaker: l.speaker ?? null }));
  if (transVals.length) await db.insert(transcriptLines).values(transVals);

  for (const v of vocab) await addWord(v.target, v.en, v.article, v.plural, eid);

  for (let i = 0; i < mcqs.length; i++) {
    const [q] = await db.insert(questions).values({
      experienceId: eid, type: "MCQ", questionText: mcqs[i].target, translationText: mcqs[i].en, order: i + 1,
    }).returning({ id: questions.id });
    await db.insert(questionOptions).values(
      mcqs[i].options.map(o => ({ questionId: q.id, targetText: o.target, translationText: o.en, correct: o.correct }))
    );
  }

  if (matchingPairs.length > 0) {
    const [m] = await db.insert(questions).values({
      experienceId: eid, type: "MATCHING", questionText: "Match the words",
      translationText: "Match the words", order: mcqs.length + 1,
    }).returning({ id: questions.id });
    await db.insert(questionOptions).values(
      matchingPairs.map(p => ({ questionId: m.id, targetText: p.target, translationText: p.en, correct: false }))
    );
  }

  const [ac] = await db.insert(challenges).values({ experienceId: eid, type: "ARRANGE_DIALOGUE" }).returning({ id: challenges.id });
  await db.insert(challengeItems).values(lines.map((l, i) => ({ challengeId: ac.id, text: l.target, order: i + 1 })));

  const [vc] = await db.insert(challenges).values({ experienceId: eid, type: "VOCAB_MATCH" }).returning({ id: challenges.id });
  if (manualVocabMatchItems) {
    await db.insert(challengeItems).values(manualVocabMatchItems.map(ci => ({ challengeId: vc.id, text: ci.text, translation: ci.translation, correctValue: ci.correctValue })));
  } else {
    const allPairs = [...matchingPairs, ...(extraVocabPairs || [])];
    const targetPairs = allPairs.slice(0, 5);
    while (targetPairs.length < 5) targetPairs.push({ target: `Word ${targetPairs.length + 1}`, en: `Word ${targetPairs.length + 1}` });
    await db.insert(challengeItems).values(targetPairs.map((pair, i) => ({ challengeId: vc.id, text: pair.target, translation: pair.en, correctValue: `pair_${i}` })));
  }

  const [bc] = await db.insert(challenges).values({
    experienceId: eid, type: "BEST_RESPONSE",
    question: bestResponse.question, questionTranslation: bestResponse.questionTranslation,
  }).returning({ id: challenges.id });
  await db.insert(challengeItems).values(bestResponse.options.map((opt, i) => ({
    challengeId: bc.id, text: opt.text, translation: opt.translation,
    order: i + 1, correctValue: opt.correct ? "correct" : "wrong",
  })));
}
