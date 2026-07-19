import { and, eq, inArray, sql } from "drizzle-orm";
import { db } from "../src/lib/db";
import {
  languages, scenarios, levels, scenarioLevels, modules, experiences,
  transcriptLines, words, experienceWords, questions, questionOptions,
  challenges, challengeItems
} from "../src/lib/db/schema";

async function main() {
  console.log("🌱 Seeding CanGo content...\n");

  // ── Languages ──
  await db.insert(languages).values([{ id: 1, name: "Italian", code: "it" }]).onConflictDoNothing();

  // ── Levels ──
  await db.insert(levels).values([
    { id: 1, name: "A2", order: 1 },
    { id: 2, name: "B1", order: 2 },
    { id: 3, name: "B2", order: 3 },
  ]).onConflictDoNothing();

  // ── Scenarios ──
  await db.insert(scenarios).values([
    { id: 1, languageId: 1, name: "Transportation", slug: "transportation", description: "Tickets, delays, and navigating Italian public transport", order: 1 },
    { id: 2, languageId: 1, name: "Doctor & Healthcare", slug: "doctor", description: "Appointments, symptoms, and pharmacy visits", order: 2 },
    { id: 3, languageId: 1, name: "Job Interview", slug: "job-interview", description: "Professional communication and interview preparation", order: 3 },
  ]).onConflictDoNothing();

  // ── Scenario Levels (all 3 scenarios × all 3 levels) ──
  const slValues = [];
  for (let s = 1; s <= 3; s++) {
    for (let l = 1; l <= 3; l++) {
      slValues.push({ id: (s - 1) * 3 + l, scenarioId: s, levelId: l });
    }
  }
  await db.insert(scenarioLevels).values(slValues).onConflictDoNothing();

  // ── Modules ──
  const moduleData: { id: number; scenarioLevelId: number; title: string; order: number }[] = [];
  let modId = 1;
  // SC1: Transportation
  for (let l = 1; l <= 3; l++) { // A2, B1, B2
    const baseSL = l;
    const titles = l === 1
      ? ["Buying a Ticket", "Finding Your Way"]
      : l === 2
      ? ["Delay Announcements", "Platform Changes"]
      : ["Complex Itinerary", "Customer Service"];
    for (const t of titles) {
      moduleData.push({ id: modId++, scenarioLevelId: baseSL, title: t, order: t === titles[0] ? 1 : 2 });
    }
  }
  // SC2: Doctor
  for (let l = 1; l <= 3; l++) {
    const baseSL = 3 + l;
    const titles = l === 1
      ? ["Making an Appointment", "Basic Symptoms"]
      : l === 2
      ? ["Describing Symptoms", "At the Pharmacy"]
      : ["Medical History", "Specialist Visit"];
    for (const t of titles) {
      moduleData.push({ id: modId++, scenarioLevelId: baseSL, title: t, order: t === titles[0] ? 1 : 2 });
    }
  }
  // SC3: Job Interview
  for (let l = 1; l <= 3; l++) {
    const baseSL = 6 + l;
    const titles = l === 1
      ? ["Self-Introduction", "First Interview"]
      : l === 2
      ? ["Experience & Skills", "Common Questions"]
      : ["Salary Negotiation", "Technical Discussion"];
    for (const t of titles) {
      moduleData.push({ id: modId++, scenarioLevelId: baseSL, title: t, order: t === titles[0] ? 1 : 2 });
    }
  }
  await db.insert(modules).values(moduleData).onConflictDoNothing();

  // ── Experiences + Transcripts + Questions + Challenges ──

  // Sync serial sequences (previous seed used explicit IDs, so sequences may be stale)
  const seqs = [
    "challenges_id_seq", "challenge_items_id_seq", "questions_id_seq",
    "question_options_id_seq", "transcript_lines_id_seq", "words_id_seq"
  ];
  for (const seq of seqs) {
    const table = seq.replace("_id_seq", "");
    await db.execute(sql`SELECT setval('${sql.raw(seq)}', COALESCE((SELECT MAX(id) FROM ${sql.identifier(table)}), 0) + 1, false)`);
  }

  // Helper: upsert word + link to experience
  async function addWord(target: string, english: string, article?: string, plural?: string, exp?: number) {
    const existing = await db.select({ id: words.id }).from(words)
      .where(eq(words.targetWord, target)).limit(1);
    if (existing.length > 0) {
      if (exp) {
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

  // Helper: upsert experience with transcripts, words, questions, matching, challenges
  async function addExperience(
    moduleId: number, title: string, level: number, scenario: string,
    lines: { it: string; en: string }[],
    vocab: { it: string; en: string; article?: string; plural?: string }[],
    mcqs: { it: string; en: string; options: { it: string; en: string; correct: boolean }[] }[],
    matchingPairs: { it: string; en: string }[],
    bestResponse: { question: string; questionTranslation: string; options: { text: string; translation: string; correct: boolean }[] },
    extraVocabPairs?: { it: string; en: string }[],
    manualVocabMatchItems?: { text: string; translation: string; correctValue: string }[],
  ) {
    const durs = ["1:15", "1:45", "2:00", "2:30", "3:00"];
    const desc = `${scenario} — ${level === 1 ? "A2" : level === 2 ? "B1" : "B2"}`;

    // Check if experience already exists
    const existing = await db.select({ id: experiences.id }).from(experiences)
      .where(and(eq(experiences.moduleId, moduleId), eq(experiences.title, title)))
      .limit(1);

    let eid: number;
    if (existing.length > 0) {
      eid = existing[0].id;
      // Delete existing child data (no user progress references these)
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

    // Transcript lines
    const transVals: (typeof transcriptLines.$inferInsert)[] = [];
    lines.forEach((l, i) => transVals.push({ experienceId: eid, order: i + 1, targetText: l.it, translationText: l.en }));
    if (transVals.length) await db.insert(transcriptLines).values(transVals);

    // Vocabulary
    for (const v of vocab) await addWord(v.it, v.en, v.article, v.plural, eid);

    // MCQs
    for (let i = 0; i < mcqs.length; i++) {
      const [q] = await db.insert(questions).values({
        experienceId: eid, type: "MCQ", questionText: mcqs[i].it, translationText: mcqs[i].en, order: i + 1,
      }).returning({ id: questions.id });
      await db.insert(questionOptions).values(
        mcqs[i].options.map(o => ({ questionId: q.id, targetText: o.it, translationText: o.en, correct: o.correct }))
      );
    }

    // Matching
    if (matchingPairs.length > 0) {
      const [m] = await db.insert(questions).values({
        experienceId: eid, type: "MATCHING", questionText: "Collega le parole",
        translationText: "Match the words", order: mcqs.length + 1,
      }).returning({ id: questions.id });
      await db.insert(questionOptions).values(
        matchingPairs.map(p => ({ questionId: m.id, targetText: p.it, translationText: p.en, correct: false }))
      );
    }

    // Challenge 1: ARRANGE_DIALOGUE
    const [ac] = await db.insert(challenges).values({ experienceId: eid, type: "ARRANGE_DIALOGUE" }).returning({ id: challenges.id });
    await db.insert(challengeItems).values(lines.map((l, i) => ({ challengeId: ac.id, text: l.it, order: i + 1 })));

    // Challenge 2: VOCAB_MATCH
    const [vc] = await db.insert(challenges).values({ experienceId: eid, type: "VOCAB_MATCH" }).returning({ id: challenges.id });
    if (manualVocabMatchItems) {
      await db.insert(challengeItems).values(manualVocabMatchItems.map(ci => ({ challengeId: vc.id, text: ci.text, translation: ci.translation, correctValue: ci.correctValue })));
    } else {
      const allPairs = [...matchingPairs, ...(extraVocabPairs || [])];
      const targetPairs = allPairs.slice(0, 5);
      while (targetPairs.length < 5) targetPairs.push({ it: `Parola ${targetPairs.length + 1}`, en: `Word ${targetPairs.length + 1}` });
      await db.insert(challengeItems).values(targetPairs.map((pair, i) => ({ challengeId: vc.id, text: pair.it, translation: pair.en, correctValue: `pair_${i}` })));
    }

    // Challenge 3: BEST_RESPONSE
    const [bc] = await db.insert(challenges).values({
      experienceId: eid, type: "BEST_RESPONSE",
      question: bestResponse.question, questionTranslation: bestResponse.questionTranslation,
    }).returning({ id: challenges.id });
    await db.insert(challengeItems).values(bestResponse.options.map((opt, i) => ({
      challengeId: bc.id, text: opt.text, translation: opt.translation,
      order: i + 1, correctValue: opt.correct ? "correct" : "wrong",
    })));
  }

  // ========================================
  // SCENARIO 1: TRANSPORTATION (Trasporti)
  // ========================================

  // ── A2 Modules (id 1,2) ──
  // Module 1: Buying a Ticket
  await addExperience(1, "Buying a Ticket at the Counter", 1, "Transportation",
    [
      { it: "Buongiorno, vorrei comprare un biglietto per Roma.", en: "Good morning, I'd like to buy a ticket to Rome." },
      { it: "Solo andata o andata e ritorno?", en: "One-way or round trip?" },
      { it: "Solo andata, per favore. Quanto costa?", en: "One-way please. How much does it cost?" },
      { it: "Sono 45 euro.", en: "That's 45 euros." },
      { it: "Ecco i soldi. Grazie mille!", en: "Here's the money. Thank you very much!" },
    ],
    [{ it: "il biglietto", en: "ticket", article: "il", plural: "i biglietti" }],
    [
      { it: "Cosa vuole comprare il passeggero?", en: "What does the passenger want to buy?", options: [{ it: "Un biglietto per Roma", en: "A ticket to Rome", correct: true }, { it: "Uno spuntino", en: "A snack", correct: false }, { it: "Un giornale", en: "A newspaper", correct: false }] },
      { it: "Quanto costa il biglietto?", en: "How much does the ticket cost?", options: [{ it: "35 euro", en: "35 euros", correct: false }, { it: "45 euro", en: "45 euros", correct: true }, { it: "55 euro", en: "55 euros", correct: false }] },
    ],
    [{ it: "solo andata", en: "one-way" }, { it: "andata e ritorno", en: "round trip" }, { it: "costare", en: "to cost" }],
    { question: "Cosa fa prima alla biglietteria?", questionTranslation: "What do you do first at the ticket counter?", options: [
      { text: "Saluta e chiede un biglietto.", translation: "Greet and ask for a ticket.", correct: true },
      { text: "Si siede e aspetta.", translation: "Sit down and wait.", correct: false },
      { text: "Telefona a un amico.", translation: "Call a friend.", correct: false }
    ] },
  );

  await addExperience(1, "Asking for a Discount Card", 1, "Transportation",
    [
      { it: "Avete una carta fedeltà?", en: "Do you have a loyalty card?" },
      { it: "No, ancora no. Posso richiederne una?", en: "No, not yet. Can I apply for one?" },
      { it: "Sì, ecco il modulo. La carta costa 30 euro all'anno.", en: "Yes, here is the form. The card costs 30 euros per year." },
      { it: "E quanto risparmio con questa carta?", en: "And how much do I save with this card?" },
      { it: "Riceve uno sconto del 20% sul biglietto.", en: "You get a 20% discount on the ticket." },
    ],
    [{ it: "la carta fedeltà", en: "loyalty card", article: "la" }, { it: "lo sconto", en: "discount", article: "lo" }, { it: "risparmiare", en: "to save" }],
    [
      { it: "Cosa si può richiedere alla biglietteria?", en: "What can you apply for at the counter?", options: [{ it: "Una carta fedeltà", en: "A loyalty card", correct: true }, { it: "Un biglietto", en: "A ticket", correct: false }, { it: "Un visto", en: "A visa", correct: false }] },
      { it: "Quanto sconto si ottiene con la carta?", en: "How much discount do you get with the card?", options: [{ it: "10%", en: "10 percent", correct: false }, { it: "20%", en: "20 percent", correct: true }, { it: "50%", en: "50 percent", correct: false }] },
    ],
    [{ it: "richiedere", en: "to apply for" }, { it: "il modulo", en: "form" }],
    { question: "Cosa chiede alla biglietteria?", questionTranslation: "What do you ask at the ticket counter?", options: [
      { text: "Scusi, dove posso richiedere una carta fedeltà?", translation: "Excuse me, where can I get a loyalty card?", correct: true },
      { text: "Vorrei una birra, per favore.", translation: "I'd like a beer, please.", correct: false },
      { text: "Può mostrarmi la strada per l'hotel?", translation: "Can you show me the way to the hotel?", correct: false }
    ] },
  );

  await addExperience(1, "Buying a Ticket from the Machine", 1, "Transportation",
    [
      { it: "Scusi, come funziona questa macchinetta?", en: "Excuse me, how does this machine work?" },
      { it: "Premere prima 'Acquista biglietto'.", en: "First press 'Buy ticket'." },
      { it: "E poi scelgo la mia destinazione?", en: "And then I select my destination?" },
      { it: "Esatto. Poi si paga con carta o contanti.", en: "Exactly. Then you pay with card or cash." },
      { it: "Grazie mille per l'aiuto!", en: "Thank you very much for your help!" },
    ],
    [{ it: "la macchinetta", en: "vending machine", article: "la" }, { it: "i contanti", en: "cash", article: "i" }, { it: "scegliere", en: "to select" }],
    [
      { it: "Cosa bisogna premere prima?", en: "What must you press first?", options: [{ it: "Acquista biglietto", en: "Buy ticket", correct: true }, { it: "Resto", en: "Change", correct: false }, { it: "Aiuto", en: "Help", correct: false }] },
      { it: "Come si può pagare alla macchinetta?", en: "How can you pay at the machine?", options: [{ it: "Solo contanti", en: "Cash only", correct: false }, { it: "Con carta o contanti", en: "With card or cash", correct: true }, { it: "Solo con carta", en: "Card only", correct: false }] },
    ],
    [{ it: "premere", en: "to press" }, { it: "la destinazione", en: "destination" }],
    { question: "Cosa chiede alla fermata dell'autobus?", questionTranslation: "What do you ask at the bus stop?", options: [
      { text: "Questo autobus va alla stazione centrale?", translation: "Does this bus go to the main station?", correct: true },
      { text: "Dov'è il distributore più vicino?", translation: "Where is the nearest gas station?", correct: false },
      { text: "Quanto costa un taxi?", translation: "How much does a taxi cost?", correct: false }
    ] },
  );

  // Module 2: Finding Your Way (A2)
  await addExperience(2, "Asking for Directions", 1, "Transportation",
    [
      { it: "Scusi, dov'è il binario 5?", en: "Excuse me, where is platform 5?" },
      { it: "Salga le scale e poi vada a destra.", en: "Go up the stairs and then to the right." },
      { it: "È lontano da qui?", en: "Is that far from here?" },
      { it: "No, solo due minuti a piedi.", en: "No, just two minutes on foot." },
      { it: "Grazie mille!", en: "Thank you very much!" },
    ],
    [{ it: "il binario", en: "platform/track", article: "il", plural: "i binari" }, { it: "la scala", en: "stairs", article: "la" }],
    [
      { it: "Cosa cerca il passeggero?", en: "What is the passenger looking for?", options: [{ it: "L'uscita", en: "The exit", correct: false }, { it: "Il binario 5", en: "Platform 5", correct: true }, { it: "Il ristorante", en: "The restaurant", correct: false }] },
      { it: "Quanto dista il binario?", en: "How far is the platform?", options: [{ it: "Dieci minuti", en: "Ten minutes", correct: false }, { it: "Due minuti", en: "Two minutes", correct: true }, { it: "Cinque minuti", en: "Five minutes", correct: false }] },
    ],
    [{ it: "salire", en: "to go up" }, { it: "a destra", en: "to the right" }],
    { question: "Come chiede indicazioni?", questionTranslation: "How do you ask for directions?", options: [
      { text: "Scusi, dov'è il binario 5?", translation: "Excuse me, where is platform 5?", correct: true },
      { text: "Può chiamarmi un taxi?", translation: "Can you call me a taxi?", correct: false },
      { text: "Vorrei prenotare una camera.", translation: "I'd like to reserve a room.", correct: false }
    ] },
  );

  await addExperience(2, "Finding the Right Bus", 1, "Transportation",
    [
      { it: "Questo autobus va alla stazione centrale?", en: "Does this bus go to the main train station?" },
      { it: "Sì, ma deve cambiare a Piazza del Duomo.", en: "Yes, but you need to change at Piazza del Duomo." },
      { it: "Che linea devo prendere?", en: "Which line do I need to take then?" },
      { it: "La linea 60 direzione stazione centrale.", en: "Line 60 towards the main station." },
      { it: "Grazie per l'informazione!", en: "Thank you for the information!" },
    ],
    [{ it: "la stazione centrale", en: "main train station", article: "la" }, { it: "cambiare", en: "to change/transfer" }, { it: "la linea", en: "line", article: "la" }],
    [
      { it: "Dove va l'autobus?", en: "Where does the bus go?", options: [{ it: "All'aeroporto", en: "To the airport", correct: false }, { it: "Alla stazione centrale", en: "To the main station", correct: true }, { it: "Al museo", en: "To the museum", correct: false }] },
      { it: "Cosa deve fare il passeggero a Piazza del Duomo?", en: "What does the passenger need to do at Piazza del Duomo?", options: [{ it: "Scendere e prendere un taxi", en: "Get off and take a taxi", correct: false }, { it: "Cambiare con la linea 60", en: "Change to line 60", correct: true }, { it: "Comprare un biglietto", en: "Buy a ticket", correct: false }] },
    ],
    [{ it: "l'informazione", en: "information" }],
    { question: "Non capisce il tabellone. Cosa dice?", questionTranslation: "You don't understand the board. What do you say?", options: [
      { text: "Scusi, non capisco il tabellone delle partenze.", translation: "Excuse me, I don't understand the departure board.", correct: true },
      { text: "Vorrei prenotare una camera.", translation: "I'd like to book a room.", correct: false },
      { text: "Dov'è l'ufficio oggetti smarriti?", translation: "Where is lost and found?", correct: false }
    ] },
    undefined,
    [
      { text: "l'autobus", translation: "bus", correctValue: "bus" },
      { text: "cambiare", translation: "to transfer", correctValue: "transfer" },
      { text: "la stazione centrale", translation: "main station", correctValue: "mainstation" }
    ],
  );

  await addExperience(2, "Reading the Departure Board", 1, "Transportation",
    [
      { it: "Scusi, non capisco il tabellone delle partenze.", en: "Excuse me, I don't understand the departure board." },
      { it: "Che treno sta cercando?", en: "Which train are you looking for?" },
      { it: "Il Frecciarossa per Milano delle 14:30.", en: "The Frecciarossa to Milan at 2:30 PM." },
      { it: "È al binario 7. La partenza è in orario.", en: "It's on platform 7. The departure is on time." },
      { it: "Perfetto, grazie mille!", en: "Perfect, thank you very much!" },
    ],
    [{ it: "il tabellone", en: "departure board", article: "il" }, { it: "in orario", en: "on time" }, { it: "la partenza", en: "departure", article: "la" }],
    [
      { it: "Cosa cerca il passeggero?", en: "What is the passenger looking for?", options: [{ it: "Il Frecciarossa per Milano", en: "The Frecciarossa to Milan", correct: true }, { it: "L'autobus per l'aeroporto", en: "The bus to the airport", correct: false }, { it: "L'ufficio oggetti smarriti", en: "The lost and found", correct: false }] },
      { it: "A che ora parte il treno?", en: "When does the train depart?", options: [{ it: "Alle 13:30", en: "At 1:30 PM", correct: false }, { it: "Alle 14:30", en: "At 2:30 PM", correct: true }, { it: "Alle 15:30", en: "At 3:30 PM", correct: false }] },
    ],
    [{ it: "capire", en: "to understand" }, { it: "cercare", en: "to look for" }],
    { question: "Il suo treno è cancellato. Cosa fa?", questionTranslation: "Your train is cancelled. What do you do?", options: [
      { text: "Vada al binario 4 e prenda il treno sostitutivo.", translation: "Go to platform 4 and take the replacement train.", correct: true },
      { text: "Aspetti semplicemente al binario.", translation: "Just wait at the platform.", correct: false },
      { text: "Chiami un taxi.", translation: "Call a taxi.", correct: false }
    ] },
  );

  // ── B1 Modules (id 3,4) ──
  await addExperience(3, "Train Delay Announcement", 2, "Transportation",
    [
      { it: "Attenzione, un annuncio per i viaggiatori.", en: "Attention, an announcement for travelers." },
      { it: "Il Frecciarossa 952 per Napoli avrà circa 20 minuti di ritardo.", en: "Frecciarossa 952 to Naples will be approximately 20 minutes late." },
      { it: "Il motivo è un guasto tecnico sulla linea.", en: "The reason is a technical fault on the line." },
      { it: "Ci scusiamo per il disagio.", en: "We apologize for the inconvenience." },
      { it: "Maggiori informazioni sono disponibili al banco assistenza.", en: "Further information is available at the service desk." },
    ],
    [{ it: "il ritardo", en: "delay", article: "il" }, { it: "il guasto", en: "fault/breakdown", article: "il" }, { it: "il banco assistenza", en: "service desk", article: "il" }],
    [
      { it: "Perché il treno è in ritardo?", en: "Why is the train delayed?", options: [{ it: "A causa del maltempo", en: "Because of the weather", correct: false }, { it: "A causa di un guasto tecnico", en: "Because of a technical fault", correct: true }, { it: "Per mancanza di personale", en: "Because of staff shortage", correct: false }] },
      { it: "Quanto ritardo ha il treno?", en: "How late is the train?", options: [{ it: "10 minuti", en: "10 minutes", correct: false }, { it: "20 minuti", en: "20 minutes", correct: true }, { it: "30 minuti", en: "30 minutes", correct: false }] },
    ],
    [{ it: "circa", en: "approximately" }, { it: "il disagio", en: "inconvenience" }],
    { question: "Cosa chiede al capotreno?", questionTranslation: "What do you ask the conductor?", options: [
      { text: "Scusi, perché il treno è in ritardo?", translation: "Excuse me, why is the train delayed?", correct: true },
      { text: "Vorrei comprare un biglietto.", translation: "I'd like to buy a ticket.", correct: false },
      { text: "Dov'è il ristorante?", translation: "Where is the restaurant?", correct: false }
    ] },
  );

  await addExperience(3, "Cancelled Train — Finding Alternatives", 2, "Transportation",
    [
      { it: "Signore e signori, l'Intercity 608 per Bologna è cancellato oggi.", en: "Ladies and gentlemen, Intercity 608 to Bologna is cancelled today." },
      { it: "Vi preghiamo di recarvi al binario 4. Un treno sostitutivo vi aspetta.", en: "Please proceed to platform 4. A replacement train is waiting there." },
      { it: "La partenza è alle 17:15, circa 30 minuti più tardi.", en: "Departure is at 5:15 PM, about 30 minutes later." },
      { it: "In alternativa, potete prendere il prossimo Intercity delle 18:00.", en: "Alternatively, you can take the next Intercity at 6:00 PM." },
      { it: "Ci scusiamo per il disagio.", en: "We apologize for the inconvenience." },
    ],
    [{ it: "cancellato", en: "cancelled" }, { it: "il treno sostitutivo", en: "replacement train", article: "il" }, { it: "il disagio", en: "inconvenience", article: "il" }],
    [
      { it: "Cosa è successo all'Intercity 608?", en: "What happened to Intercity 608?", options: [{ it: "È in ritardo", en: "It is delayed", correct: false }, { it: "È cancellato", en: "It is cancelled", correct: true }, { it: "Parte prima", en: "It departs earlier", correct: false }] },
      { it: "A che ora parte il treno sostitutivo?", en: "When does the replacement train depart?", options: [{ it: "Alle 17:15", en: "At 5:15 PM", correct: true }, { it: "Alle 18:00", en: "At 6:00 PM", correct: false }, { it: "Alle 16:45", en: "At 4:45 PM", correct: false }] },
    ],
    [{ it: "recarsi", en: "to proceed" }, { it: "in alternativa", en: "alternatively" }],
    { question: "Il binario è cambiato. Cosa fa?", questionTranslation: "The platform has changed. What do you do?", options: [
      { text: "Faccia attenzione ai nuovi avvisi.", translation: "Pay attention to the new notices.", correct: true },
      { text: "Torni a casa.", translation: "Just go home.", correct: false },
      { text: "Sali sul primo treno che vede.", translation: "Board the first train you see.", correct: false }
    ] },
  );

  await addExperience(3, "Understanding Platform Changes", 2, "Transportation",
    [
      { it: "A causa di lavori sui binari, il punto di partenza cambia.", en: "Due to track work, the departure point is changing." },
      { it: "Il Regionale 7 per Torino parte oggi dal binario 12 invece del binario 8.", en: "Regionale 7 to Turin departs from platform 12 instead of platform 8 today." },
      { it: "Si prega di prestare attenzione ai nuovi avvisi.", en: "Please pay attention to the new notices." },
      { it: "I treni per Torino fermano anche al marciapiede C.", en: "Trains to Turin also stop at platform C." },
      { it: "Grazie per l'attenzione.", en: "Thank you for your attention." },
    ],
    [{ it: "i lavori", en: "track work/renovation", article: "i" }, { it: "l'avviso", en: "notice", article: "l'" }],
    [
      { it: "Perché cambia il binario?", en: "Why is the platform changing?", options: [{ it: "A causa di un ritardo", en: "Due to a delay", correct: false }, { it: "A causa di lavori sui binari", en: "Due to track work", correct: true }, { it: "A causa del maltempo", en: "Due to weather", correct: false }] },
      { it: "Da quale binario parte il Regionale 7 adesso?", en: "From which platform does Regionale 7 depart now?", options: [{ it: "Binario 8", en: "Platform 8", correct: false }, { it: "Binario 12", en: "Platform 12", correct: true }, { it: "Binario 6", en: "Platform 6", correct: false }] },
    ],
    [{ it: "cambiare", en: "to change" }, { it: "prestare attenzione", en: "to pay attention to" }],
    { question: "Ha perso la coincidenza. Cosa fa?", questionTranslation: "You missed your connection. What do you do?", options: [
      { text: "Vada al banco assistenza e chieda aiuto.", translation: "Go to the service desk and ask for help.", correct: true },
      { text: "Prenoti un nuovo volo.", translation: "Book a new flight.", correct: false },
      { text: "Aspetti e basta.", translation: "Just wait.", correct: false }
    ] },
    undefined,
    [
      { text: "i lavori", translation: "track work", correctValue: "work" },
      { text: "l'avviso", translation: "notice", correctValue: "notice" },
      { text: "il marciapiede", translation: "platform", correctValue: "platform" }
    ],
  );

  // ── B2 Modules (id 5,6) ──
  await addExperience(5, "Planning a Complex Multi-Leg Trip", 3, "Transportation",
    [
      { it: "Devo viaggiare da Milano via Firenze a Roma.", en: "I need to travel from Milan via Florence to Rome." },
      { it: "Può consigliarmi un itinerario con tempi di coincidenza brevi?", en: "Can you recommend a route with the shortest possible transfer times?" },
      { it: "Prenda il Frecciarossa 1005 delle 7:30. A Firenze ha 15 minuti per la coincidenza.", en: "Take Frecciarossa 1005 at 7:30 AM. In Florence you have a 15-minute transfer." },
      { it: "E da Firenze a Roma parte un Frecciarossa alle 10:15.", en: "And from Florence to Rome, a Frecciarossa departs at 10:15 AM." },
      { it: "Perfetto. Mi prenoti un posto in carrozza open space, per favore.", en: "Perfect. Please reserve me a seat in the open-plan carriage." },
    ],
    [{ it: "la coincidenza", en: "transfer/connection", article: "la" }, { it: "la carrozza", en: "carriage", article: "la" }],
    [
      { it: "Dove vuole viaggiare il passeggero?", en: "Where does the passenger want to travel?", options: [{ it: "Milano via Firenze a Roma", en: "Milan via Florence to Rome", correct: true }, { it: "Firenze via Milano a Roma", en: "Florence via Milan to Rome", correct: false }, { it: "Milano direttamente a Roma", en: "Milan directly to Rome", correct: false }] },
      { it: "Quanto tempo ha per la coincidenza a Firenze?", en: "How long is his transfer in Florence?", options: [{ it: "10 minuti", en: "10 minutes", correct: false }, { it: "15 minuti", en: "15 minutes", correct: true }, { it: "20 minuti", en: "20 minutes", correct: false }] },
    ],
    [{ it: "consigliare", en: "to recommend" }, { it: "prenotare", en: "to book" }],
    { question: "Cosa dice al centro viaggi?", questionTranslation: "What do you say at the travel center?", options: [
      { text: "Può consigliarmi un itinerario con coincidenze brevi?", translation: "Can you recommend a route with short transfers?", correct: true },
      { text: "Vorrei una birra e una pizza.", translation: "I'd like a beer and a pizza.", correct: false },
      { text: "Dove posso lasciare i bagagli?", translation: "Where can I drop off my luggage?", correct: false }
    ] },
  );

  await addExperience(5, "Handling a Missed Connection", 3, "Transportation",
    [
      { it: "Ho perso la coincidenza a causa del ritardo.", en: "I missed my connecting train because of the delay." },
      { it: "Nessun problema. Le riprogrammo il biglietto sul prossimo treno gratuitamente.", en: "No problem. I'll rebook you on the next train for free." },
      { it: "Il prossimo treno parte tra 45 minuti dal binario 6.", en: "The next train departs in 45 minutes from platform 6." },
      { it: "Devo sbrigarmi per trovare un posto?", en: "Do I need to hurry to get a seat?" },
      { it: "No, il treno ha abbastanza posti. Può salire con calma.", en: "No, the train has enough capacity. You can board calmly." },
    ],
    [{ it: "perdere", en: "to miss" }, { it: "la coincidenza", en: "connection", article: "la" }, { it: "la capienza", en: "capacity", article: "la" }],
    [
      { it: "Perché il passeggero ha perso la coincidenza?", en: "Why did the passenger miss the connection?", options: [{ it: "Ha dormito troppo", en: "He overslept", correct: false }, { it: "A causa del ritardo", en: "Because of the delay", correct: true }, { it: "Era al binario sbagliato", en: "He was at the wrong platform", correct: false }] },
      { it: "Cosa fa l'impiegato dell'assistenza?", en: "What does the service employee do?", options: [{ it: "Dà un risarcimento al passeggero", en: "He gives compensation", correct: false }, { it: "Riprogramma il biglietto gratis", en: "He rebooks the passenger for free", correct: true }, { it: "Chiama un taxi", en: "He calls a taxi", correct: false }] },
    ],
    [{ it: "riprogrammare", en: "to rebook" }, { it: "con calma", en: "calmly" }],
    { question: "È insoddisfatto. Cosa fa?", questionTranslation: "You're dissatisfied. What do you do?", options: [
      { text: "Presenti un reclamo scritto.", translation: "File a written complaint.", correct: true },
      { text: "Scriva una lettera arrabbiata.", translation: "Write an angry letter.", correct: false },
      { text: "Se ne dimentichi e basta.", translation: "Just forget about it.", correct: false }
    ] },
  );

  await addExperience(6, "Lodge a Formal Complaint", 3, "Transportation",
    [
      { it: "Vorrei presentare un reclamo per il viaggio in treno di ieri.", en: "I would like to file a complaint about yesterday's train journey." },
      { it: "L'aria condizionata nella carrozza 3 non funzionava.", en: "The air conditioning in carriage 3 was not working." },
      { it: "Ha con sé il biglietto e il numero del treno?", en: "Do you have your ticket and the train number ready?" },
      { it: "Sì, ecco tutti i documenti. Attendo un rimborso.", en: "Yes, here are all the documents. I expect a refund." },
      { it: "Esamineremo il suo caso e la contatteremo entro 14 giorni.", en: "We will review your case and get back to you within 14 days." },
    ],
    [{ it: "il reclamo", en: "complaint", article: "il" }, { it: "il rimborso", en: "refund", article: "il" }, { it: "i documenti", en: "documents", article: "i" }],
    [
      { it: "Perché il passeggero vuole presentare un reclamo?", en: "Why does the passenger want to file a complaint?", options: [{ it: "Il treno era in ritardo", en: "The train was late", correct: false }, { it: "L'aria condizionata non funzionava", en: "The AC was not working", correct: true }, { it: "Il cibo era cattivo", en: "The food was bad", correct: false }] },
      { it: "Quanto tempo ci vuole per la gestione del reclamo?", en: "How long does the complaint processing take?", options: [{ it: "7 giorni", en: "7 days", correct: false }, { it: "14 giorni", en: "14 days", correct: true }, { it: "30 giorni", en: "30 days", correct: false }] },
    ],
    [{ it: "presentare", en: "to file" }, { it: "esaminare", en: "to review" }],
    { question: "Viaggia per lavoro. Che biglietto?", questionTranslation: "You're traveling for business. Which ticket?", options: [
      { text: "C'è uno sconto per chi viaggia spesso?", translation: "Is there a discount for frequent travelers?", correct: true },
      { text: "Dov'è l'hotel più vicino?", translation: "Where is the nearest hotel?", correct: false },
      { text: "Può dirmi la data?", translation: "Can you tell me the date?", correct: false }
    ] },
    undefined,
    [
      { text: "il reclamo", translation: "complaint", correctValue: "complaint" },
      { text: "il rimborso", translation: "refund", correctValue: "refund" },
      { text: "i documenti", translation: "documents", correctValue: "documents" }
    ],
  );

  await addExperience(6, "Negotiating a Better Fare", 3, "Transportation",
    [
      { it: "Viaggio per lavoro e ho bisogno di un biglietto flessibile.", en: "I'm traveling for business and need a flexible ticket." },
      { it: "Allora le consiglio il biglietto flessibile. Costa 130 euro.", en: "Then I recommend the flex fare ticket. It costs 130 euros." },
      { it: "C'è uno sconto per chi viaggia spesso?", en: "Is there a discount for frequent travelers?" },
      { it: "Con l'abbonamento annuale viaggia illimitatamente per un anno.", en: "With the annual pass you travel unlimited for a year." },
      { it: "È un buon investimento per i miei viaggi regolari.", en: "That's a good investment for my regular trips." },
    ],
    [{ it: "per lavoro", en: "for business" }, { it: "il biglietto flessibile", en: "flex fare ticket" }, { it: "illimitatamente", en: "unlimited" }],
    [
      { it: "Che biglietto consiglia?", en: "Which ticket do you recommend?", options: [{ it: "Il biglietto economico", en: "The saver fare", correct: false }, { it: "Il biglietto flessibile", en: "The flex fare", correct: true }, { it: "Il biglietto speciale", en: "The special ticket", correct: false }] },
      { it: "Qual è il vantaggio dell'abbonamento annuale?", en: "What is the advantage of the annual pass?", options: [{ it: "Sconto del 25%", en: "25 percent discount", correct: false }, { it: "Viaggi illimitati per un anno", en: "Unlimited travel for a year", correct: true }, { it: "Bevande gratis sul treno", en: "Free drinks on the train", correct: false }] },
    ],
    [{ it: "il viaggiatore frequente", en: "frequent traveler" }, { it: "l'investimento", en: "investment" }],
    { question: "Telefona al medico. Cosa dice?", questionTranslation: "You call the doctor. What do you say?", options: [
      { text: "Buongiorno, vorrei fissare un appuntamento.", translation: "Hello, I'd like to make an appointment.", correct: true },
      { text: "Può farmi una ricetta?", translation: "Can you give me a prescription?", correct: false },
      { text: "Ho bisogno di un'ambulanza.", translation: "I need an ambulance.", correct: false }
    ] },
  );

  // ========================================
  // SCENARIO 2: DOCTOR & HEALTHCARE (Salute e Medico)
  // ========================================

  // A2 Module 7: Making an Appointment
  await addExperience(7, "Calling the Doctor's Office", 1, "Doctor",
    [
      { it: "Studio del dottor Rossi, buongiorno. Come posso aiutarla?", en: "Dr. Rossi's practice, good day. How can I help you?" },
      { it: "Buongiorno, vorrei fissare un appuntamento.", en: "Good day, I'd like to make an appointment." },
      { it: "Ha dolori o è una visita di controllo?", en: "Do you have pain or is it a check-up?" },
      { it: "È una visita di controllo.", en: "It's a check-up." },
      { it: "Allora lunedì prossimo alle 10:00. Le va bene?", en: "Then next Monday at 10:00 AM. Does that work?" },
    ],
    [{ it: "lo studio", en: "medical practice", article: "lo" }, { it: "l'appuntamento", en: "appointment", article: "l'" }, { it: "la visita di controllo", en: "check-up", article: "la" }],
    [
      { it: "Perché il paziente chiama?", en: "Why is the patient calling?", options: [{ it: "Vuole un appuntamento", en: "He wants an appointment", correct: true }, { it: "Ha un'emergenza", en: "He has an emergency", correct: false }, { it: "Vuole la fattura", en: "He wants the bill", correct: false }] },
      { it: "Quando è l'appuntamento?", en: "When is the appointment?", options: [{ it: "Domani alle 10:00", en: "Tomorrow at 10 AM", correct: false }, { it: "Lunedì prossimo alle 10:00", en: "Next Monday at 10 AM", correct: true }, { it: "Oggi alle 14:00", en: "Today at 2 PM", correct: false }] },
    ],
    [{ it: "fissare", en: "to arrange" }, { it: "il dolore", en: "pain" }],
    { question: "L'appuntamento va bene. Cosa dice?", questionTranslation: "The time suits you. What do you say?", options: [
      { text: "Sì, questo appuntamento mi va bene.", translation: "Yes, this appointment suits me.", correct: true },
      { text: "No, non ho tempo.", translation: "No, I don't have time.", correct: false },
      { text: "Chiami di nuovo domani.", translation: "Call again tomorrow.", correct: false }
    ] },
  );

  await addExperience(7, "Confirming the Appointment", 1, "Doctor",
    [
      { it: "Ho un appuntamento per oggi alle 15:30 con il dottor Rossi.", en: "I have an appointment today at 3:30 PM with Dr. Rossi." },
      { it: "Un momento, prego. Sì, la vedo nella lista. È la prima volta qui?", en: "One moment please. Yes, I see you in the list. Is this your first time here?" },
      { it: "Sì, è la prima volta.", en: "Yes, this is my first time here." },
      { it: "Allora compili questo modulo, per favore.", en: "Then please fill out this form." },
      { it: "Devo consegnare la tessera sanitaria?", en: "Do I need to hand in my health insurance card?" },
    ],
    [{ it: "la tessera sanitaria", en: "health insurance card", article: "la" }, { it: "compilare", en: "to fill out" }],
    [
      { it: "Cosa deve fare il paziente alla prima visita?", en: "What does the patient need to do on the first visit?", options: [{ it: "Compilare un modulo", en: "Fill out a form", correct: true }, { it: "Pagare in contanti", en: "Pay cash", correct: false }, { it: "Fare un esame", en: "Take a test", correct: false }] },
      { it: "Cosa chiede il paziente riguardo alla tessera sanitaria?", en: "What does the patient ask about the insurance card?", options: [{ it: "Se deve consegnarla", en: "Whether he needs to hand it in", correct: true }, { it: "Se è gratuita", en: "Whether it's free", correct: false }, { it: "Se può rinnovarla", en: "Whether he can renew it", correct: false }] },
    ],
    [{ it: "il modulo", en: "form" }],
    { question: "Deve spostare l'appuntamento. Cosa dice?", questionTranslation: "You need to reschedule. What do you say?", options: [
      { text: "Possiamo spostare l'appuntamento alla prossima settimana?", translation: "Can we move the appointment to next week?", correct: true },
      { text: "Semplicemente non vengo.", translation: "I just won't come.", correct: false },
      { text: "Mi dica solo un nuovo orario.", translation: "Just tell me a new time.", correct: false }
    ] },
  );

  await addExperience(7, "Rescheduling an Appointment", 1, "Doctor",
    [
      { it: "Purtroppo devo spostare il mio appuntamento.", en: "I unfortunately have to reschedule my appointment." },
      { it: "Nessun problema. Che giorno le andrebbe bene?", en: "No problem. Which day would suit you?" },
      { it: "È possibile giovedì alle 11:00?", en: "Is Thursday at 11:00 AM possible?" },
      { it: "Sì, ho un posto libero allora. La inserisco.", en: "Yes, I have a free slot then. I'll put you down." },
      { it: "Grazie mille e mi scusi per la cancellazione all'ultimo minuto.", en: "Thank you very much and sorry for the last-minute cancellation." },
    ],
    [{ it: "spostare", en: "to reschedule/postpone" }, { it: "la cancellazione", en: "cancellation", article: "la" }],
    [
      { it: "Perché il paziente chiama?", en: "Why is the patient calling?", options: [{ it: "È malato", en: "He is sick", correct: false }, { it: "Deve spostare l'appuntamento", en: "He needs to reschedule", correct: true }, { it: "Vuole pagare la fattura", en: "He wants to pay the bill", correct: false }] },
      { it: "Quando è il nuovo appuntamento?", en: "When is the new appointment?", options: [{ it: "Martedì alle 11:00", en: "On Tuesday at 11 AM", correct: false }, { it: "Giovedì alle 11:00", en: "On Thursday at 11 AM", correct: true }, { it: "Venerdì alle 10:00", en: "On Friday at 10 AM", correct: false }] },
    ],
    [{ it: "andare bene", en: "to suit" }, { it: "inserire", en: "to enter/register" }],
    { question: "Ha un forte mal di testa. Cosa dice?", questionTranslation: "You have a bad headache. What do you say?", options: [
      { text: "Ho un forte mal di testa e ho bisogno di qualcosa.", translation: "I have a bad headache and need something for it.", correct: true },
      { text: "Vorrei un caffè.", translation: "I'd like a coffee.", correct: false },
      { text: "Può operarmi?", translation: "Can you operate on me?", correct: false }
    ] },
  );

  // A2 Module 8: Basic Symptoms
  await addExperience(8, "Describing a Headache", 1, "Doctor",
    [
      { it: "Buongiorno, dottore. Ho mal di testa.", en: "Good day, doctor. I have a headache." },
      { it: "Da quando ha mal di testa?", en: "Since when have you had the headache?" },
      { it: "Da ieri sera. Niente aiuta.", en: "Since yesterday evening. Nothing helps." },
      { it: "Ha febbre o altri sintomi?", en: "Do you have a fever or other symptoms?" },
      { it: "No, solo il mal di testa. Ma è molto forte.", en: "No, just the headache. But it's very strong." },
    ],
    [{ it: "il mal di testa", en: "headache", article: "il" }, { it: "la febbre", en: "fever", article: "la" }, { it: "il sintomo", en: "symptom", article: "il" }],
    [
      { it: "Da quando il paziente ha mal di testa?", en: "Since when does the patient have a headache?", options: [{ it: "Da stamattina", en: "Since this morning", correct: false }, { it: "Da ieri sera", en: "Since yesterday evening", correct: true }, { it: "Da una settimana", en: "Since a week", correct: false }] },
      { it: "Il paziente ha altri sintomi?", en: "Does the patient have any other symptoms?", options: [{ it: "Sì, febbre", en: "Yes, fever", correct: false }, { it: "Sì, tosse", en: "Yes, cough", correct: false }, { it: "No, solo mal di testa", en: "No, just headache", correct: true }] },
    ],
    [{ it: "far male", en: "to hurt" }, { it: "forte", en: "strong/severe" }],
    { question: "Ha un raffreddore. Cosa dice?", questionTranslation: "You have a cold. What do you say?", options: [
      { text: "Ho tosse, naso che cola e mal di gola.", translation: "I have a cough, runny nose, and sore throat.", correct: true },
      { text: "Mi sono rotto il piede.", translation: "I broke my foot.", correct: false },
      { text: "Ho bisogno di occhiali nuovi.", translation: "I need new glasses.", correct: false }
    ] },
    undefined,
    [
      { text: "il mal di testa", translation: "headache", correctValue: "headache" },
      { text: "la febbre", translation: "fever", correctValue: "fever" },
      { text: "far male", translation: "to hurt", correctValue: "hurt" }
    ],
  );

  await addExperience(8, "Telling the Doctor About a Cold", 1, "Doctor",
    [
      { it: "Mi sono raffreddato. Tossisco e ho il naso che cola.", en: "I've caught a cold. I'm coughing and have a runny nose." },
      { it: "Ha misurato la temperatura?", en: "Have you taken your temperature?" },
      { it: "Sì, 38,5 gradi.", en: "Yes, 38.5 degrees." },
      { it: "È una febbre leggera. Le prescrivo uno sciroppo per la tosse.", en: "That's a mild fever. I'll prescribe you a cough syrup." },
      { it: "Devo stare a letto?", en: "Should I stay in bed?" },
    ],
    [{ it: "raffreddarsi", en: "to catch a cold" }, { it: "lo sciroppo per la tosse", en: "cough syrup", article: "lo" }, { it: "il naso che cola", en: "runny nose", article: "il" }],
    [
      { it: "Cosa ha il paziente?", en: "What does the patient have?", options: [{ it: "Un raffreddore", en: "A cold", correct: true }, { it: "Un'allergia", en: "An allergy", correct: false }, { it: "Una ferita", en: "An injury", correct: false }] },
      { it: "Che temperatura ha il paziente?", en: "What temperature does the patient have?", options: [{ it: "37,5 gradi", en: "37.5 degrees", correct: false }, { it: "38,5 gradi", en: "38.5 degrees", correct: true }, { it: "39,5 gradi", en: "39.5 degrees", correct: false }] },
    ],
    [{ it: "misurare", en: "to measure" }, { it: "prescrivere", en: "to prescribe" }],
    { question: "Il medico chiede delle allergie. Cosa dice?", questionTranslation: "The doctor asks about allergies. What do you say?", options: [
      { text: "Sono allergico alla penicillina.", translation: "I'm allergic to penicillin.", correct: true },
      { text: "Non mi piacciono le iniezioni.", translation: "I don't like injections.", correct: false },
      { text: "Ho freddo.", translation: "I'm cold.", correct: false }
    ] },
  );

  await addExperience(8, "Explaining an Allergy", 1, "Doctor",
    [
      { it: "In primavera ho sempre gli occhi che lacrimano.", en: "I always get watery eyes in spring." },
      { it: "Sembra un'allergia. Facciamo il test.", en: "That sounds like an allergy. Let's test it." },
      { it: "Devo preparare qualcosa?", en: "Do I need to prepare anything for that?" },
      { it: "No, basta un semplice esame del sangue.", en: "No, a simple blood test is enough." },
      { it: "E cosa posso fare per i sintomi?", en: "And what can I do about the symptoms?" },
    ],
    [{ it: "l'allergia", en: "allergy", article: "l'" }, { it: "gli occhi che lacrimano", en: "watery eyes" }, { it: "l'esame del sangue", en: "blood test", article: "l'" }],
    [
      { it: "Quando il paziente ha gli occhi che lacrimano?", en: "When does the patient get watery eyes?", options: [{ it: "In autunno", en: "In autumn", correct: false }, { it: "In primavera", en: "In spring", correct: true }, { it: "In inverno", en: "In winter", correct: false }] },
      { it: "Che tipo di esame viene fatto?", en: "Which test is done?", options: [{ it: "Un test cutaneo", en: "A skin test", correct: false }, { it: "Un semplice esame del sangue", en: "A simple blood test", correct: true }, { it: "Una radiografia", en: "An X-ray", correct: false }] },
    ],
    [{ it: "avere", en: "to get/have" }, { it: "bastare", en: "to be enough" }],
    { question: "I sintomi sono peggiorati. Cosa dice?", questionTranslation: "The symptoms got worse. What do you say?", options: [
      { text: "Il dolore è più forte e ho nausea.", translation: "The pain is worse and I feel nauseous.", correct: true },
      { text: "Vorrei spostare l'appuntamento.", translation: "I'd like to reschedule.", correct: false },
      { text: "Può accompagnarmi a casa?", translation: "Can you drive me home?", correct: false }
    ] },
  );

  // ── Doctor B1 (Module 9) ──
  await addExperience(9, "Describing Severe Symptoms", 2, "Doctor",
    [
      { it: "Ho forti dolori alla pancia da tre giorni.", en: "I've had severe stomach pain for three days." },
      { it: "Dove fa male esattamente? Può indicarmi?", en: "Where exactly does it hurt? Can you show me?" },
      { it: "Qui, sul lato destro. È un dolore pungente.", en: "Here, on the right side. It feels stabbing." },
      { it: "Ha nausea o diarrea?", en: "Do you have nausea or diarrhea?" },
      { it: "Sì, ieri ho vomitato.", en: "Yes, I vomited yesterday." },
    ],
    [{ it: "il dolore alla pancia", en: "stomach pain", article: "il" }, { it: "la nausea", en: "nausea", article: "la" }, { it: "pungente", en: "stabbing" }],
    [
      { it: "Da quanto tempo il paziente ha dolori?", en: "How long has the patient had pain?", options: [{ it: "Da un giorno", en: "For one day", correct: false }, { it: "Da tre giorni", en: "For three days", correct: true }, { it: "Da una settimana", en: "For a week", correct: false }] },
      { it: "Quali sintomi aggiuntivi ha il paziente?", en: "What additional symptoms does the patient have?", options: [{ it: "Tosse e febbre", en: "Cough and fever", correct: false }, { it: "Nausea e vomito", en: "Nausea and vomiting", correct: true }, { it: "Mal di testa e vertigini", en: "Headache and dizziness", correct: false }] },
    ],
    [{ it: "il vomito", en: "vomiting" }, { it: "il lato", en: "side" }],
    { question: "Il medico di base non può aiutare. Cosa chiede?", questionTranslation: "The GP can't help. What do you ask?", options: [
      { text: "Può darmi un'impegnativa per lo specialista?", translation: "Can you give me a referral to a specialist?", correct: true },
      { text: "Posso andare, per favore?", translation: "Can I please leave?", correct: false },
      { text: "Ha un farmaco migliore?", translation: "Do you have a better medication?", correct: false }
    ] },
    undefined,
    [
      { text: "la nausea", translation: "nausea", correctValue: "nausea" },
      { text: "pungente", translation: "stabbing", correctValue: "stabbing" },
      { text: "la diarrea", translation: "diarrhea", correctValue: "diarrhea" }
    ],
  );

  await addExperience(9, "Getting a Referral to a Specialist", 2, "Doctor",
    [
      { it: "Credo di aver bisogno di un'impegnativa per il dermatologo.", en: "I think I need a referral to a dermatologist." },
      { it: "Che disturbi ha?", en: "What complaints do you have?" },
      { it: "Ho un'eruzione sul braccio che non passa.", en: "I have a rash on my arm that won't go away." },
      { it: "Dovrebbe visitarla uno specialista. Le preparo l'impegnativa.", en: "A specialist should examine that. I'll write you the referral." },
      { it: "Quanto tempo ci vuole per avere un appuntamento?", en: "How long does it take to get an appointment?" },
    ],
    [{ it: "l'impegnativa", en: "referral", article: "l'" }, { it: "il dermatologo", en: "dermatologist", article: "il" }, { it: "l'eruzione", en: "rash", article: "l'" }],
    [
      { it: "Che tipo di medico serve al paziente?", en: "What type of doctor does the patient need?", options: [{ it: "Un oculista", en: "An eye doctor", correct: false }, { it: "Un dermatologo", en: "A dermatologist", correct: true }, { it: "Un dentista", en: "A dentist", correct: false }] },
      { it: "Cosa ha il paziente sul braccio?", en: "What does the patient have on his arm?", options: [{ it: "Un gonfiore", en: "A swelling", correct: false }, { it: "Un'eruzione", en: "A rash", correct: true }, { it: "Una ferita", en: "An injury", correct: false }] },
    ],
    [{ it: "visitare", en: "to examine" }, { it: "lo specialista", en: "specialist" }],
    { question: "Il medico fa una diagnosi. Cosa fa?", questionTranslation: "The doctor gives a diagnosis. What do you do?", options: [
      { text: "Chieda quali sono i prossimi passi e la cura.", translation: "Ask about next steps and treatment.", correct: true },
      { text: "Dica che sa già tutto.", translation: "Say you already know everything.", correct: false },
      { text: "Vada semplicemente a casa.", translation: "Just go home.", correct: false }
    ] },
  );

  await addExperience(9, "Understanding a Diagnosis", 2, "Doctor",
    [
      { it: "Gli esami del sangue mostrano che ha un'infezione.", en: "The blood test results show you have an infection." },
      { it: "È qualcosa di grave?", en: "Is it something serious?" },
      { it: "No, è un'infezione batterica innocua.", en: "No, it's a harmless bacterial infection." },
      { it: "Le prescrivo antibiotici per sette giorni.", en: "I'll prescribe you antibiotics for seven days." },
      { it: "Prenda le compresse tre volte al giorno dopo i pasti.", en: "Take the tablets three times a day after meals." },
    ],
    [{ it: "l'infezione", en: "infection", article: "l'" }, { it: "l'antibiotico", en: "antibiotic", article: "l'" }, { it: "la compressa", en: "tablet", article: "la" }],
    [
      { it: "Cosa mostrano gli esami del sangue?", en: "What do the blood test results show?", options: [{ it: "Un'allergia", en: "An allergy", correct: false }, { it: "Un'infezione", en: "An infection", correct: true }, { it: "Una carenza vitaminica", en: "A vitamin deficiency", correct: false }] },
      { it: "Quante volte al giorno deve prendere le compresse?", en: "How often should the patient take the tablets?", options: [{ it: "Una volta al giorno", en: "Once daily", correct: false }, { it: "Due volte al giorno", en: "Twice daily", correct: false }, { it: "Tre volte al giorno", en: "Three times daily", correct: true }] },
    ],
    [{ it: "gli esami del sangue", en: "blood test results" }, { it: "innocuo", en: "harmless" }],
    { question: "È in farmacia. Cosa chiede?", questionTranslation: "You're at the pharmacy. What do you ask?", options: [
      { text: "Avete qualcosa per la tosse?", translation: "Do you have something for a cough?", correct: true },
      { text: "Dov'è lo studio medico più vicino?", translation: "Where is the nearest doctor?", correct: false },
      { text: "Posso mangiare qui?", translation: "Can I eat here?", correct: false }
    ] },
  );

  // ── Doctor B1 Module 10: At the Pharmacy ──
  await addExperience(10, "Asking the Pharmacist for Medicine", 2, "Doctor",
    [
      { it: "Buongiorno, ho una ricetta del medico.", en: "Good day, I have a prescription from the doctor." },
      { it: "Certamente. Inserisca la tessera sanitaria, per favore.", en: "Certainly. Please put your health card with it." },
      { it: "Questo farmaco è disponibile anche senza ricetta?", en: "Is this medication also available over the counter?" },
      { it: "No, questo farmaco è soggetto a prescrizione medica.", en: "No, this medication is prescription-only." },
      { it: "D'accordo. Quanto devo pagare?", en: "Alright. How much do I need to pay?" },
    ],
    [{ it: "la ricetta", en: "prescription", article: "la" }, { it: "il farmaco", en: "medication", article: "il" }, { it: "soggetto a prescrizione", en: "prescription-only" }],
    [
      { it: "Cosa ha ricevuto il paziente dal medico?", en: "What did the patient get from the doctor?", options: [{ it: "Una ricetta", en: "A prescription", correct: true }, { it: "Un'impegnativa", en: "A referral", correct: false }, { it: "Un vaccino", en: "A vaccination", correct: false }] },
      { it: "Il farmaco è senza ricetta?", en: "Is the medication over-the-counter?", options: [{ it: "Sì", en: "Yes", correct: false }, { it: "No, è soggetto a prescrizione", en: "No, it's prescription-only", correct: true }] },
    ],
    [{ it: "senza ricetta", en: "over-the-counter" }, { it: "la tessera sanitaria", en: "health card" }],
    { question: "Le serve un antidolorifico. Cosa dice?", questionTranslation: "You need painkillers. What do you say?", options: [
      { text: "Vorrei un antidolorifico per il mal di testa.", translation: "I'd like a painkiller for headaches.", correct: true },
      { text: "Vorrei una birra.", translation: "I'd like a beer.", correct: false },
      { text: "Avete giornali?", translation: "Do you have newspapers?", correct: false }
    ] },
  );

  await addExperience(10, "Buying Painkillers", 2, "Doctor",
    [
      { it: "Ho bisogno di qualcosa per il mal di testa. Ha un consiglio?", en: "I need something for headaches. Do you have a recommendation?" },
      { it: "Le consiglio l'Ibuprofene 400. Agisce rapidamente.", en: "I recommend Ibuprofen 400. It works quickly." },
      { it: "Ci sono effetti collaterali?", en: "Are there side effects?" },
      { it: "Non lo prenda a stomaco vuoto. E beva molta acqua.", en: "Don't take it on an empty stomach. And drink plenty of water." },
      { it: "Grazie per il buon consiglio!", en: "Thanks for the good advice!" },
    ],
    [{ it: "il consiglio", en: "recommendation", article: "il" }, { it: "l'effetto collaterale", en: "side effect", article: "l'" }],
    [
      { it: "Quale farmaco consiglia il farmacista?", en: "Which medication does the pharmacist recommend?", options: [{ it: "Aspirina 500", en: "Aspirin 500", correct: false }, { it: "Ibuprofene 400", en: "Ibuprofen 400", correct: true }, { it: "Paracetamolo 500", en: "Paracetamol 500", correct: false }] },
      { it: "Cosa deve evitare il paziente?", en: "What should the patient avoid?", options: [{ it: "Bere molta acqua", en: "Drinking plenty of water", correct: false }, { it: "Prenderlo a stomaco vuoto", en: "Taking it on an empty stomach", correct: true }, { it: "Prenderlo con il cibo", en: "Taking it with food", correct: false }] },
    ],
    [{ it: "il farmacista", en: "pharmacist" }, { it: "il consiglio", en: "advice" }],
    { question: "Il farmacista le dà la medicina. Cosa chiede?", questionTranslation: "The pharmacist gives you medicine. What do you ask?", options: [
      { text: "Quante volte devo prendere il farmaco?", translation: "How often do I take the medication?", correct: true },
      { text: "È buono?", translation: "Does it taste good?", correct: false },
      { text: "Posso restituirlo?", translation: "Can I return it?", correct: false }
    ] },
  );

  await addExperience(10, "Understanding the Dosage", 2, "Doctor",
    [
      { it: "Quante volte devo prendere lo sciroppo per la tosse?", en: "How often should I take the cough syrup?" },
      { it: "Prenda 5 millilitri tre volte al giorno.", en: "Take 5 milliliters three times a day." },
      { it: "Prima o dopo i pasti?", en: "Before or after meals?" },
      { it: "Dopo i pasti. Agiti la bottiglia prima dell'uso.", en: "After meals. Shake the bottle before use." },
      { it: "Devo finire tutta la bottiglia?", en: "Do I need to finish the whole bottle?" },
    ],
    [{ it: "lo sciroppo per la tosse", en: "cough syrup", article: "lo" }, { it: "il millilitro", en: "milliliter" }, { it: "l'uso", en: "use" }],
    [
      { it: "Quanto sciroppo deve prendere il paziente?", en: "How much cough syrup should the patient take?", options: [{ it: "10 millilitri", en: "10 ml", correct: false }, { it: "5 millilitri", en: "5 ml", correct: true }, { it: "15 millilitri", en: "15 ml", correct: false }] },
      { it: "Cosa deve fare il paziente prima dell'uso?", en: "What should the patient do before use?", options: [{ it: "Riscaldare la bottiglia", en: "Warm the bottle", correct: false }, { it: "Agitare la bottiglia", en: "Shake the bottle", correct: true }, { it: "Aprire e annusare", en: "Open and smell", correct: false }] },
    ],
    [{ it: "prendere", en: "to take (medication)" }, { it: "agitare", en: "to shake" }],
    { question: "Il medico chiede della sua famiglia. Cosa dice?", questionTranslation: "The doctor asks about your family. What do you say?", options: [
      { text: "Mio padre aveva la pressione alta.", translation: "My father had high blood pressure.", correct: true },
      { text: "La mia famiglia vive a Roma.", translation: "My family lives in Rome.", correct: false },
      { text: "Non ho famiglia.", translation: "I don't have a family.", correct: false }
    ] },
    undefined,
    [
      { text: "lo sciroppo per la tosse", translation: "cough syrup", correctValue: "syrup" },
      { text: "prendere", translation: "to take", correctValue: "take" },
      { text: "agitare", translation: "to shake", correctValue: "shake" }
    ],
  );

  // ── Doctor B2 Module 11: Medical History ──
  await addExperience(11, "Discussing Family Medical History", 3, "Doctor",
    [
      { it: "Ci sono malattie ereditarie nella sua famiglia?", en: "Are there hereditary diseases in your family?" },
      { it: "Mio padre aveva il diabete e mia madre aveva la pressione alta.", en: "My father had diabetes and my mother had high blood pressure." },
      { it: "Allora dovremmo controllare regolarmente i suoi valori del sangue.", en: "Then we should check your blood values regularly." },
      { it: "Con che frequenza consiglia una visita di controllo?", en: "How often do you recommend a check-up?" },
      { it: "Una volta all'anno è sufficiente se non ha disturbi.", en: "Once a year is sufficient if you are symptom-free." },
    ],
    [{ it: "ereditario", en: "hereditary" }, { it: "la pressione alta", en: "high blood pressure" }, { it: "la visita di controllo", en: "preventive check-up" }],
    [
      { it: "Quali malattie avevano i genitori del paziente?", en: "What diseases did the patient's parents have?", options: [{ it: "Cancro e asma", en: "Cancer and asthma", correct: false }, { it: "Diabete e pressione alta", en: "Diabetes and high blood pressure", correct: true }, { it: "Infarto e ictus", en: "Heart attack and stroke", correct: false }] },
      { it: "Con che frequenza dovrebbe fare i controlli?", en: "How often should the patient go for check-ups?", options: [{ it: "Ogni sei mesi", en: "Every six months", correct: false }, { it: "Una volta all'anno", en: "Once a year", correct: true }, { it: "Ogni due anni", en: "Every two years", correct: false }] },
    ],
    [{ it: "controllare", en: "to check" }, { it: "sufficiente", en: "sufficient" }],
    { question: "Si prepara per un'operazione. Chi cerca?", questionTranslation: "You're preparing for surgery. Who do you ask?", options: [
      { text: "Vorrei parlare con il chirurgo dei rischi.", translation: "I'd like to discuss the risks with the surgeon.", correct: true },
      { text: "Vorrei mangiare qualcosa.", translation: "I'd like to eat something.", correct: false },
      { text: "Quando posso andare a casa?", translation: "When can I go home?", correct: false }
    ] },
  );

  await addExperience(11, "Preparing for Surgery Consultation", 3, "Doctor",
    [
      { it: "Abbiamo ricevuto i risultati della risonanza magnetica.", en: "We have received the MRI results." },
      { it: "La lesione del menisco richiede un intervento artroscopico.", en: "The meniscus tear requires an arthroscopic procedure." },
      { it: "Quanto durano l'operazione e la guarigione?", en: "How long does the surgery and recovery process take?" },
      { it: "L'intervento dura circa 45 minuti. Può tornare a casa lo stesso giorno.", en: "The procedure takes about 45 minutes. You can go home the same day." },
      { it: "Tra sei settimane dovrebbe riuscire a camminare normalmente.", en: "In six weeks you should be able to walk normally again." },
    ],
    [{ it: "l'intervento", en: "procedure/surgery", article: "l'" }, { it: "la guarigione", en: "recovery", article: "la" }],
    [
      { it: "Quale esame è stato fatto?", en: "Which examination was done?", options: [{ it: "Radiografia", en: "X-ray", correct: false }, { it: "Risonanza magnetica", en: "MRI", correct: true }, { it: "Ecografia", en: "Ultrasound", correct: false }] },
      { it: "Quanto dura l'intervento?", en: "How long does the procedure take?", options: [{ it: "30 minuti", en: "30 minutes", correct: false }, { it: "45 minuti", en: "45 minutes", correct: true }, { it: "60 minuti", en: "60 minutes", correct: false }] },
    ],
    [{ it: "la lesione del menisco", en: "meniscus tear" }, { it: "artroscopico", en: "arthroscopic" }],
    { question: "È insicuro sulla diagnosi. Cosa fa?", questionTranslation: "You're unsure about the diagnosis. What do you do?", options: [
      { text: "Vorrei un secondo parere.", translation: "I'd like a second opinion.", correct: true },
      { text: "Non accetto la diagnosi.", translation: "I don't accept the diagnosis.", correct: false },
      { text: "Può operarmi?", translation: "Can you operate on me?", correct: false }
    ] },
  );

  await addExperience(12, "Requesting a Second Opinion", 3, "Doctor",
    [
      { it: "Vorrei chiedere un secondo parere.", en: "I would like to get a second opinion." },
      { it: "È assolutamente comprensibile. Posso consigliarle una collega.", en: "That's completely understandable. I can recommend a colleague." },
      { it: "Può darmi i referti per l'appuntamento?", en: "Can you give me the findings for the appointment?" },
      { it: "Certamente. Le faccio copiare tutti i documenti.", en: "Of course. I'll have all the documents copied for you." },
      { it: "Grazie per la comprensione.", en: "Thank you for your understanding." },
    ],
    [{ it: "il secondo parere", en: "second opinion", article: "il" }, { it: "il referto", en: "medical finding/report", article: "il" }],
    [
      { it: "Cosa vuole il paziente?", en: "What does the patient want?", options: [{ it: "Un'impegnativa", en: "A referral", correct: false }, { it: "Un secondo parere", en: "A second opinion", correct: true }, { it: "Una ricetta", en: "A prescription", correct: false }] },
      { it: "Cosa offre il medico al paziente?", en: "What does the doctor offer the patient?", options: [{ it: "Copie dei referti", en: "Copies of the findings", correct: true }, { it: "Un appuntamento la prossima settimana", en: "An appointment next week", correct: false }, { it: "Una ricetta gratuita", en: "A free prescription", correct: false }] },
    ],
    [{ it: "chiedere", en: "to obtain/ask for" }, { it: "dare", en: "to give" }],
    { question: "Il colloquio inizia. Cosa dice?", questionTranslation: "The interview starts. What do you say?", options: [
      { text: "Buongiorno, mi chiamo ... e sono contento di essere qui.", translation: "Hello, my name is ... and I'm happy to be here.", correct: true },
      { text: "Buongiorno, vorrei comprare un biglietto.", translation: "Hello, I'd like to buy a ticket.", correct: false },
      { text: "Dov'è il bagno?", translation: "Where is the restroom?", correct: false }
    ] },
    undefined,
    [
      { text: "il secondo parere", translation: "second opinion", correctValue: "opinion" },
      { text: "il referto", translation: "medical report", correctValue: "report" },
      { text: "i documenti", translation: "documents", correctValue: "documents" }
    ],
  );

  // ── Job Interview A2 Module 13: Self-Introduction ──
  await addExperience(13, "Introducing Yourself", 1, "Job Interview",
    [
      { it: "Buongiorno, mi chiamo Anna Rossi.", en: "Good day, my name is Anna Rossi." },
      { it: "Vengo dalla Spagna e vivo a Milano da due anni.", en: "I come from Spain and have been living in Milan for two years." },
      { it: "Ho studiato economia e commercio.", en: "I studied economics and business." },
      { it: "Attualmente seguo un corso di italiano per migliorare il mio B2.", en: "Currently I'm taking an Italian course to improve my B2." },
      { it: "Sono molto motivata a lavorare in Italia.", en: "I am very motivated to work in Italy." },
    ],
    [{ it: "il nome", en: "name" }, { it: "studiare", en: "to study" }, { it: "motivato", en: "motivated" }],
    [
      { it: "Da dove viene Anna Rossi?", en: "Where does Anna Rossi come from?", options: [{ it: "Dall'Italia", en: "From Italy", correct: false }, { it: "Dalla Spagna", en: "From Spain", correct: true }, { it: "Dalla Francia", en: "From France", correct: false }] },
      { it: "Cosa ha studiato?", en: "What did she study?", options: [{ it: "Informatica", en: "Computer science", correct: false }, { it: "Economia e commercio", en: "Economics and business", correct: true }, { it: "Medicina", en: "Medicine", correct: false }] },
    ],
    [{ it: "l'economia", en: "economics" }, { it: "il corso di italiano", en: "Italian course" }],
    { question: "Il colloquiatore chiede del suo lavoro. Cosa dice?", questionTranslation: "The interviewer asks about your work. What do you say?", options: [
      { text: "Lavoro come ingegnere in un'azienda italiana.", translation: "I work as an engineer at an Italian company.", correct: true },
      { text: "Non lavoro.", translation: "I don't work.", correct: false },
      { text: "È un segreto.", translation: "That's a secret.", correct: false }
    ] },
  );

  await addExperience(13, "Talking About Your Current Job", 1, "Job Interview",
    [
      { it: "Di cosa si occupa?", en: "What do you do for a living?" },
      { it: "Lavoro come commessa in un negozio di abbigliamento.", en: "I work as a sales assistant in a clothing store." },
      { it: "Da quanto tempo lavora lì?", en: "Since when have you worked there?" },
      { it: "Da un anno. È un lavoro part-time.", en: "For a year. It's a part-time job." },
      { it: "Le piace il lavoro?", en: "Do you like the work?" },
    ],
    [{ it: "occuparsi", en: "to do (professionally)" }, { it: "il commesso", en: "sales assistant" }, { it: "il part-time", en: "part-time job" }],
    [
      { it: "Dove lavora Anna?", en: "Where does Anna work?", options: [{ it: "In un ristorante", en: "In a restaurant", correct: false }, { it: "In un negozio di abbigliamento", en: "In a clothing store", correct: true }, { it: "In un ufficio", en: "In an office", correct: false }] },
      { it: "Da quanto tempo lavora lì?", en: "How long has she worked there?", options: [{ it: "Da tre mesi", en: "For three months", correct: false }, { it: "Da un anno", en: "For a year", correct: true }, { it: "Da due anni", en: "For two years", correct: false }] },
    ],
    [{ it: "la commessa", en: "sales assistant (female)" }],
    { question: "Quali sono i suoi punti di forza?", questionTranslation: "What are your strengths?", options: [
      { text: "Sono organizzata, lavoro in squadra e imparo in fretta.", translation: "I'm organized, a team player, and learn fast.", correct: true },
      { text: "Dormo molto bene.", translation: "I can sleep very well.", correct: false },
      { text: "Arrivo sempre in ritardo.", translation: "I'm always late.", correct: false }
    ] },
  );

  await addExperience(13, "Describing Your Strengths", 1, "Job Interview",
    [
      { it: "Quali sono i suoi punti di forza?", en: "What are your strengths?" },
      { it: "Sono gentile e disponibile.", en: "I am friendly and helpful." },
      { it: "Inoltre imparo molto velocemente.", en: "Besides, I learn very quickly." },
      { it: "E mi piace lavorare in squadra.", en: "And I like working in a team." },
      { it: "Sono ottime qualità per la nostra azienda.", en: "Those are good qualities for our company." },
    ],
    [{ it: "il punto di forza", en: "strength" }, { it: "disponibile", en: "helpful" }, { it: "la qualità", en: "quality" }],
    [
      { it: "Quale punto di forza Anna NON menziona?", en: "Which strength does Anna NOT mention?", options: [{ it: "Gentile", en: "Friendly", correct: false }, { it: "Imparare in fretta", en: "Fast learning", correct: false }, { it: "Parlare italiano perfetto", en: "Speaking perfect Italian", correct: true }] },
      { it: "Come le piace lavorare?", en: "How does she like to work?", options: [{ it: "Da sola", en: "Alone", correct: false }, { it: "In squadra", en: "In a team", correct: true }, { it: "Da casa", en: "From home", correct: false }] },
    ],
    [{ it: "gentile", en: "friendly" }, { it: "la squadra", en: "team" }],
    { question: "Il colloquiatore fa domande semplici. Cosa fa?", questionTranslation: "The interviewer asks simple questions. What do you do?", options: [
      { text: "Risponda con calma e onestà a ogni domanda.", translation: "Answer calmly and honestly.", correct: true },
      { text: "Dica che non risponde alle domande.", translation: "Say you won't answer questions.", correct: false },
      { text: "Chiami l'avvocato.", translation: "Call your lawyer.", correct: false }
    ] },
    undefined,
    [
      { text: "il punto di forza", translation: "strength", correctValue: "strength" },
      { text: "disponibile", translation: "helpful", correctValue: "helpful" },
      { text: "gentile", translation: "friendly", correctValue: "friendly" }
    ],
  );

  // ── Job Interview A2 Module 14: First Interview ──
  await addExperience(14, "Answering Simple Questions", 1, "Job Interview",
    [
      { it: "Perché vuole lavorare per noi?", en: "Why do you want to work with us?" },
      { it: "Perché la vostra azienda ha un'ottima reputazione.", en: "Because your company has a very good reputation." },
      { it: "E il lavoro mi sembra molto interessante.", en: "And the work sounds very interesting." },
      { it: "Ha già esperienza in questo settore?", en: "Do you already have experience in this industry?" },
      { it: "Sì, ho lavorato per due anni in un lavoro simile.", en: "Yes, I worked for two years in a similar job." },
    ],
    [{ it: "la reputazione", en: "reputation" }, { it: "il settore", en: "industry" }, { it: "l'esperienza", en: "experience" }],
    [
      { it: "Perché Anna vuole lavorare per questa azienda?", en: "Why does Anna want to work for this company?", options: [{ it: "Per lo stipendio alto", en: "Because of the high salary", correct: false }, { it: "Per la buona reputazione", en: "Because of the good reputation", correct: true }, { it: "Per l'orario breve", en: "Because of the short hours", correct: false }] },
      { it: "Quanta esperienza ha Anna nel settore?", en: "How much experience does Anna have in the industry?", options: [{ it: "Un anno", en: "One year", correct: false }, { it: "Due anni", en: "Two years", correct: true }, { it: "Tre anni", en: "Three years", correct: false }] },
    ],
    [{ it: "la reputazione", en: "reputation" }, { it: "sembrare", en: "to sound" }],
    { question: "Vuole sapere di più sul posto. Cosa chiede?", questionTranslation: "You want to know more about the job. What do you ask?", options: [
      { text: "Può parlarmi dei compiti quotidiani?", translation: "Can you tell me about the daily tasks?", correct: true },
      { text: "Il cibo è gratuito?", translation: "Is there free food?", correct: false },
      { text: "Devo lavorare nei weekend?", translation: "Do I have to work weekends?", correct: false }
    ] },
  );

  await addExperience(14, "Asking About the Job", 1, "Job Interview",
    [
      { it: "Può dirmi di più sulla posizione?", en: "Can you tell me more about the position?" },
      { it: "Lavorerà nel servizio clienti e aiuterà i nostri clienti.", en: "You work in customer service and help our clients." },
      { it: "Qual è l'orario di lavoro?", en: "What are the working hours?" },
      { it: "Dal lunedì al venerdì, dalle 9 alle 17.", en: "Monday to Friday, 9 AM to 5 PM." },
      { it: "Mi sembra buono. Sono previste opzioni di smart working?", en: "That sounds good. Are there remote work options?" },
    ],
    [{ it: "la posizione", en: "position/job" }, { it: "il servizio clienti", en: "customer service" }, { it: "l'orario di lavoro", en: "working hours" }],
    [
      { it: "In quale reparto lavorerebbe Anna?", en: "In which department would Anna work?", options: [{ it: "Vendite", en: "Sales", correct: false }, { it: "Servizio clienti", en: "Customer service", correct: true }, { it: "Contabilità", en: "Accounting", correct: false }] },
      { it: "Qual è l'orario di lavoro?", en: "What are the working hours?", options: [{ it: "8-16", en: "8 AM to 4 PM", correct: false }, { it: "9-17", en: "9 AM to 5 PM", correct: true }, { it: "10-18", en: "10 AM to 6 PM", correct: false }] },
    ],
    [{ it: "raccontare", en: "to tell" }, { it: "la possibilità", en: "possibility/option" }],
    { question: "Parlami della sua esperienza.", questionTranslation: "Tell me about your experience.", options: [
      { text: "Ho cinque anni di esperienza nella comunicazione con i clienti.", translation: "I have 5 years in client communication.", correct: true },
      { text: "Non ho mai lavorato.", translation: "I've never worked.", correct: false },
      { text: "L'esperienza non è importante.", translation: "Experience isn't important.", correct: false }
    ] },
  );

  // ── Job Interview B1 Module 15: Experience & Skills ──
  await addExperience(15, "Presenting Your Work Experience", 2, "Job Interview",
    [
      { it: "Mi parli della sua precedente esperienza lavorativa.", en: "Tell me about your previous work experience." },
      { it: "Ho lavorato per tre anni come assistente di progetto.", en: "I worked for three years as a project assistant." },
      { it: "I miei compiti principali erano la pianificazione e la comunicazione con i clienti.", en: "My main tasks were scheduling and client communication." },
      { it: "Ha esperienza con software di project management?", en: "Do you have experience with project management software?" },
      { it: "Sì, ho lavorato con Trello e Jira.", en: "Yes, I have worked with Trello and Jira." },
    ],
    [{ it: "l'esperienza lavorativa", en: "work experience", article: "l'" }, { it: "il compito principale", en: "main task", article: "il" }, { it: "la pianificazione", en: "scheduling", article: "la" }],
    [
      { it: "Per quanto tempo Anna ha lavorato come assistente di progetto?", en: "How long did Anna work as a project assistant?", options: [{ it: "Due anni", en: "Two years", correct: false }, { it: "Tre anni", en: "Three years", correct: true }, { it: "Quattro anni", en: "Four years", correct: false }] },
      { it: "Con quale software ha lavorato?", en: "Which software has she worked with?", options: [{ it: "Excel e Word", en: "Excel and Word", correct: false }, { it: "Trello e Jira", en: "Trello and Jira", correct: true }, { it: "Photoshop e Illustrator", en: "Photoshop and Illustrator", correct: false }] },
    ],
    [{ it: "precedente", en: "previous" }, { it: "la comunicazione con i clienti", en: "client communication" }],
    { question: "Il colloquiatore fa una domanda difficile. Cosa fa?", questionTranslation: "The interviewer asks a tough question. What do you do?", options: [
      { text: "Si prenda un momento e risponda con calma.", translation: "Take a moment and answer calmly.", correct: true },
      { text: "Dica semplicemente 'Non lo so'.", translation: "Just say 'I don't know'.", correct: false },
      { text: "Cambi argomento.", translation: "Change the subject.", correct: false }
    ] },
  );

  await addExperience(15, "Handling Difficult Questions", 2, "Job Interview",
    [
      { it: "Perché ha lasciato il suo ultimo lavoro?", en: "Why did you quit your last job?" },
      { it: "Volevo crescere professionalmente.", en: "I wanted to develop professionally." },
      { it: "Non c'erano possibilità di avanzamento?", en: "Were there no advancement opportunities?" },
      { it: "Purtroppo no. L'azienda era molto piccola.", en: "Unfortunately not. The company was very small." },
      { it: "Capisco. Qui offriamo buone opportunità di crescita.", en: "I understand. Here we offer good growth opportunities." },
    ],
    [{ it: "lasciare", en: "to quit/resign" }, { it: "la possibilità di avanzamento", en: "advancement opportunity" }, { it: "l'opportunità di crescita", en: "growth opportunity" }],
    [
      { it: "Perché Anna ha lasciato il suo ultimo lavoro?", en: "Why did Anna quit her last job?", options: [{ it: "Per lo stipendio basso", en: "Because of the low salary", correct: false }, { it: "Per mancanza di possibilità di avanzamento", en: "Because of missing advancement opportunities", correct: true }, { it: "Per il lungo tragitto", en: "Because of the long commute", correct: false }] },
      { it: "Cosa offre la nuova azienda?", en: "What does the new company offer?", options: [{ it: "Stipendio più alto", en: "Higher salary", correct: false }, { it: "Opportunità di crescita", en: "Growth opportunities", correct: true }, { it: "Auto aziendale", en: "Company car", correct: false }] },
    ],
    [{ it: "crescere", en: "to develop/grow" }, { it: "offrire", en: "to offer" }],
    { question: "Qual è la sua aspettativa di stipendio?", questionTranslation: "What is your salary expectation?", options: [
      { text: "In base alla mia esperienza, ritengo adeguati 55.000 euro.", translation: "Based on my experience, 55k is appropriate.", correct: true },
      { text: "Il più possibile.", translation: "As much as possible.", correct: false },
      { text: "Non mi interessa.", translation: "I don't care.", correct: false }
    ] },
  );

  await addExperience(16, "Discussing Salary Expectations", 2, "Job Interview",
    [
      { it: "Che aspettative di stipendio ha?", en: "What salary expectations do you have?" },
      { it: "Mi sono informata sulla retribuzione media del settore.", en: "I informed myself about the usual compensation." },
      { it: "In base alla mia esperienza, ritengo adeguati 45.000 euro.", en: "Based on my experience, I find 45,000 euros appropriate." },
      { it: "Rientra nel nostro budget. L'azienda offre anche benefit aggiuntivi?", en: "That's within our budget. Does the company also offer additional benefits?" },
      { it: "Sì, paghiamo un contributo per l'asilo nido.", en: "Yes, we pay a subsidy for childcare." },
    ],
    [{ it: "l'aspettativa di stipendio", en: "salary expectation", article: "l'" }, { it: "la retribuzione", en: "compensation", article: "la" }, { it: "il benefit aggiuntivo", en: "additional benefit" }],
    [
      { it: "Quale stipendio Anna ritiene adeguato?", en: "What salary does Anna find appropriate?", options: [{ it: "40.000 euro", en: "40,000 euros", correct: false }, { it: "45.000 euro", en: "45,000 euros", correct: true }, { it: "50.000 euro", en: "50,000 euros", correct: false }] },
      { it: "Quale benefit aggiuntivo offre l'azienda?", en: "What additional benefit does the company offer?", options: [{ it: "Auto aziendale", en: "Company car", correct: false }, { it: "Contributo per l'asilo nido", en: "Childcare subsidy", correct: true }, { it: "Pranzo gratuito", en: "Free lunch", correct: false }] },
    ],
    [{ it: "adeguato", en: "appropriate" }, { it: "il contributo", en: "subsidy" }],
    { question: "L'offerta è troppo bassa. Cosa dice?", questionTranslation: "The offer is too low. What do you say?", options: [
      { text: "Possiamo trattare lo stipendio? Le mie qualifiche giustificano di più.", translation: "Can we negotiate? My qualifications justify more.", correct: true },
      { text: "Va bene, accetto.", translation: "That's fine, I'll take it.", correct: false },
      { text: "Allora cerco altro.", translation: "Then I'll find something else.", correct: false }
    ] },
  );

  // ── Job Interview B2 Module 17: Salary Negotiation ──
  await addExperience(17, "Negotiating a Higher Salary", 3, "Job Interview",
    [
      { it: "In base alle mie qualifiche ed esperienza, avrei aspettato 55.000 euro.", en: "Based on my qualifications and experience, I would have expected 55,000 euros." },
      { it: "Il nostro budget per questa posizione è di 50.000 euro.", en: "Our budget for this position is 50,000 euros." },
      { it: "Possiamo parlare di benefit aggiuntivi come i bonus?", en: "Can we talk about additional benefits like bonus payments?" },
      { it: "Sì, offriamo un bonus annuale di performance fino al 10%.", en: "Yes, we offer an annual performance bonus of up to 10 percent." },
      { it: "Potrei accettare. Allora firmiamo il contratto.", en: "I could live with that. Let's accept the contract then." },
    ],
    [{ it: "la qualifica", en: "qualification", article: "la" }, { it: "il bonus", en: "bonus payment" }, { it: "il bonus di performance", en: "performance bonus" }],
    [
      { it: "Quale stipendio si aspettava Anna?", en: "What salary did Anna expect?", options: [{ it: "50.000 euro", en: "50,000 euros", correct: false }, { it: "55.000 euro", en: "55,000 euros", correct: true }, { it: "60.000 euro", en: "60,000 euros", correct: false }] },
      { it: "Cosa offre l'azienda in più?", en: "What does the company offer additionally?", options: [{ it: "Un'auto aziendale", en: "A company car", correct: false }, { it: "Un bonus di performance", en: "A performance bonus", correct: true }, { it: "Opzioni su azioni", en: "Stock options", correct: false }] },
    ],
    [{ it: "aspettarsi", en: "to expect" }, { it: "annuale", en: "annual" }],
    { question: "Riceve il contratto. Cosa controlla?", questionTranslation: "You receive the contract. What do you check?", options: [
      { text: "Voglio controllare il preavviso e il periodo di prova.", translation: "I'd like to check the notice period and probation.", correct: true },
      { text: "Lo firmi e basta.", translation: "Just sign it.", correct: false },
      { text: "La carta è riciclata?", translation: "Is the paper recycled?", correct: false }
    ] },
  );

  await addExperience(17, "Discussing Contract Details", 3, "Job Interview",
    [
      { it: "Ho ricevuto e letto il contratto di lavoro.", en: "I received the employment contract and read through it." },
      { it: "Ha domande su clausole specifiche?", en: "Do you have questions about specific clauses?" },
      { it: "Il periodo di prova è di sei mesi. È prorogabile?", en: "The probation period is six months. Is it extendable?" },
      { it: "Di solito no. Ma in casi eccezionali possiamo prorogarlo.", en: "Usually not. But in exceptional cases we can extend." },
      { it: "E quanti giorni di ferie ho all'anno?", en: "And how many vacation days do I have per year?" },
    ],
    [{ it: "il contratto di lavoro", en: "employment contract", article: "il" }, { it: "il periodo di prova", en: "probation period", article: "il" }, { it: "il giorno di ferie", en: "vacation day", article: "il" }],
    [
      { it: "Quanto dura il periodo di prova?", en: "How long is the probation period?", options: [{ it: "Tre mesi", en: "Three months", correct: false }, { it: "Sei mesi", en: "Six months", correct: true }, { it: "Nove mesi", en: "Nine months", correct: false }] },
      { it: "Il periodo di prova è prorogabile?", en: "Is the probation period extendable?", options: [{ it: "No, mai", en: "No, never", correct: false }, { it: "In casi eccezionali sì", en: "In exceptional cases, yes", correct: true }, { it: "Sì, sempre", en: "Yes, always", correct: false }] },
    ],
    [{ it: "leggere", en: "to read through" }, { it: "la clausola", en: "clause" }],
    { question: "Le chiedono delle competenze tecniche. Cosa dice?", questionTranslation: "You're asked about your technical skills. What do you say?", options: [
      { text: "Conosco Python, JavaScript e database.", translation: "I'm proficient in Python, JS, and databases.", correct: true },
      { text: "Digito molto velocemente.", translation: "I can type very fast.", correct: false },
      { text: "La tecnica non è il mio campo.", translation: "Tech is not my area.", correct: false }
    ] },
    undefined,
    [
      { text: "il contratto di lavoro", translation: "employment contract", correctValue: "contract" },
      { text: "il periodo di prova", translation: "probation period", correctValue: "probation" },
      { text: "la clausola", translation: "clause", correctValue: "clause" }
    ],
  );

  await addExperience(18, "Technical Interview Questions", 3, "Job Interview",
    [
      { it: "Come guiderebbe un team attraverso una fase di progetto difficile?", en: "How would you lead a team through a difficult project phase?" },
      { it: "Prima identificherei e prioritizzerei i problemi.", en: "First, I would identify and prioritize the problems." },
      { it: "Poi stabilirei obiettivi chiari e distribuirei i compiti.", en: "Then I would set clear goals and distribute tasks." },
      { it: "Come gestisce i conflitti all'interno del team?", en: "How do you handle conflicts in the team?" },
      { it: "Parlo apertamente con tutti i coinvolti e cerco una soluzione comune.", en: "I speak openly with all involved and look for a joint solution." },
    ],
    [{ it: "identificare", en: "to identify" }, { it: "prioritizzare", en: "to prioritize" }, { it: "il conflitto", en: "conflict" }],
    [
      { it: "Cosa farebbe Anna per prima cosa?", en: "What would Anna do first?", options: [{ it: "Distribuire i compiti", en: "Distribute tasks", correct: false }, { it: "Identificare i problemi", en: "Identify problems", correct: true }, { it: "Stabilire obiettivi", en: "Set goals", correct: false }] },
      { it: "Come gestisce Anna i conflitti?", en: "How does Anna handle conflicts?", options: [{ it: "Li ignora", en: "She ignores them", correct: false }, { it: "Parla apertamente con tutti", en: "She speaks openly with everyone", correct: true }, { it: "Va dal superiore", en: "She goes to the supervisor", correct: false }] },
    ],
    [{ it: "guidare", en: "to lead" }, { it: "la soluzione", en: "solution" }],
    { question: "Il colloquio finisce. Cosa dice?", questionTranslation: "The interview ends. What do you say?", options: [
      { text: "Grazie per il colloquio. Attendo con interesse il vostro riscontro.", translation: "Thank you. I look forward to your response.", correct: true },
      { text: "Finalmente è finito!", translation: "Finally over!", correct: false },
      { text: "Posso andare?", translation: "Can I leave now?", correct: false }
    ] },
  );

  await addExperience(18, "Closing the Interview", 3, "Job Interview",
    [
      { it: "Avete altre domande per noi?", en: "Do you have any more questions for us?" },
      { it: "Sì, com'è il piano di inserimento per i nuovi dipendenti?", en: "Yes, what does the onboarding plan for new employees look like?" },
      { it: "Nella prima settimana riceverà un'introduzione completa.", en: "In the first week, you'll get a comprehensive introduction." },
      { it: "Dopodiché lavorerà con un mentor.", en: "After that, you'll work with a mentor." },
      { it: "Mi sembra molto strutturato. Non vedo l'ora di collaborare!", en: "That sounds very structured. I look forward to working together!" },
    ],
    [{ it: "il piano di inserimento", en: "onboarding plan", article: "il" }, { it: "il mentor", en: "mentor" }, { it: "la collaborazione", en: "collaboration" }],
    [
      { it: "Cosa succede nella prima settimana?", en: "What happens in the first week?", options: [{ it: "Si riceve un'introduzione", en: "You get an introduction", correct: true }, { it: "Si inizia subito a lavorare", en: "You start working immediately", correct: false }, { it: "Si firma il contratto", en: "You sign the contract", correct: false }] },
      { it: "Con chi lavora il nuovo dipendente dopo l'introduzione?", en: "Who does the new employee work with after the introduction?", options: [{ it: "Con il capo", en: "With the boss", correct: false }, { it: "Con un mentor", en: "With a mentor", correct: true }, { it: "Da solo", en: "Alone", correct: false }] },
    ],
    [{ it: "completo", en: "comprehensive" }, { it: "strutturato", en: "structured" }],
    { question: "Cosa fa prima alla biglietteria automatica?", questionTranslation: "What do you do first at the ticket machine?", options: [
      { text: "Preme 'Acquista biglietto'.", translation: "Press 'Buy ticket'.", correct: true },
      { text: "Chiama il tecnico.", translation: "Call the technician.", correct: false },
      { text: "Va alla macchinetta successiva.", translation: "Go to the next machine.", correct: false }
    ] },
  );

  // ── INSERT ALL DATA ──
  console.log("\n✅ Seed complete!");
}

main().catch(console.error);
