import { sql } from "drizzle-orm";
import { db } from "../../src/lib/db";
import { languages, levels, scenarios, scenarioLevels, modules } from "../../src/lib/db/schema";

export async function seedGerman() {
  console.log("🌱 Seeding German CanGo content...\n");

  // ── Migrate old German schema to match current Italian schema ──
  // Columns that changed names
  await db.execute(sql`ALTER TABLE transcript_lines RENAME COLUMN german_text TO target_text`).catch(() => {});
  await db.execute(sql`ALTER TABLE transcript_lines RENAME COLUMN english_text TO translation_text`).catch(() => {});
  await db.execute(sql`ALTER TABLE transcript_lines ADD COLUMN speaker varchar(50)`).catch(() => {});

  await db.execute(sql`ALTER TABLE words RENAME COLUMN german_word TO target_word`).catch(() => {});
  await db.execute(sql`ALTER TABLE words RENAME COLUMN english_translation TO translation_text`).catch(() => {});

  await db.execute(sql`ALTER TABLE questions RENAME COLUMN english_translation TO translation_text`).catch(() => {});
  await db.execute(sql`ALTER TABLE questions ADD COLUMN audio_timestamp_start real`).catch(() => {});
  await db.execute(sql`ALTER TABLE questions ADD COLUMN audio_timestamp_end real`).catch(() => {});

  await db.execute(sql`ALTER TABLE question_options RENAME COLUMN german_text TO target_text`).catch(() => {});
  await db.execute(sql`ALTER TABLE question_options RENAME COLUMN english_text TO translation_text`).catch(() => {});

  await db.execute(sql`ALTER TABLE challenges RENAME COLUMN question_english TO question_translation`).catch(() => {});
  await db.execute(sql`ALTER TABLE challenges ADD COLUMN description text`).catch(() => {});
  await db.execute(sql`ALTER TABLE challenges ADD COLUMN data jsonb`).catch(() => {});

  await db.execute(sql`ALTER TABLE user_vocabulary ADD COLUMN notes text`).catch(() => {});
  await db.execute(sql`ALTER TABLE user_vocabulary ADD COLUMN scenario_id integer`).catch(() => {});

  // ── Clean old data ──
  await db.execute(sql`DELETE FROM user_scenario_settings`);
  await db.execute(sql`DELETE FROM user_experience_progress`);
  await db.execute(sql`DELETE FROM user_vocabulary`);
  await db.execute(sql`DELETE FROM challenge_items`);
  await db.execute(sql`DELETE FROM challenges`);
  await db.execute(sql`DELETE FROM question_options`);
  await db.execute(sql`DELETE FROM questions`);
  await db.execute(sql`DELETE FROM experience_words`);
  await db.execute(sql`DELETE FROM transcript_lines`);
  await db.execute(sql`DELETE FROM experiences`);
  await db.execute(sql`DELETE FROM modules`);
  await db.execute(sql`DELETE FROM scenario_levels`);
  await db.execute(sql`DELETE FROM scenarios`);
  await db.execute(sql`DELETE FROM levels`);
  await db.execute(sql`DELETE FROM languages`);
  await db.execute(sql`DELETE FROM words`);

  // ── Languages ──
  await db.insert(languages).values([{ id: 2, name: "German", code: "de" }]).onConflictDoNothing();

  // ── Levels ──
  await db.insert(levels).values([
    { id: 1, name: "A2", order: 1 },
    { id: 2, name: "B1", order: 2 },
    { id: 3, name: "B2", order: 3 },
    { id: 4, name: "A1", order: 0 },
  ]).onConflictDoNothing();

  // ── Scenarios ──
  await db.insert(scenarios).values([
    { id: 101, languageId: 2, name: "Transportation", slug: "transportation", description: "Tickets, delays, and navigating German public transport", order: 1 },
    { id: 102, languageId: 2, name: "Doctor & Healthcare", slug: "doctor", description: "Appointments, symptoms, and pharmacy visits", order: 2 },
    { id: 103, languageId: 2, name: "Job Interview", slug: "job-interview", description: "Professional communication and interview preparation", order: 3 },
    { id: 104, languageId: 2, name: "Greetings & Introductions", slug: "greetings", description: "Basic greetings, introductions, and polite expressions", order: 4 },
    { id: 105, languageId: 2, name: "Numbers, Time & Money", slug: "numbers", description: "Numbers, telling time, prices and money", order: 5 },
    { id: 106, languageId: 2, name: "Colors & Descriptions", slug: "colors", description: "Colors, adjectives, and describing objects", order: 6 },
    { id: 107, languageId: 2, name: "Basic Needs", slug: "basic-needs", description: "Asking for help, directions, and emergencies", order: 7 },
    { id: 108, languageId: 2, name: "Restaurant & Food", slug: "restaurant", description: "Ordering food, dietary needs, and dining out", order: 8 },
    { id: 109, languageId: 2, name: "Shopping", slug: "shopping", description: "Buying clothes, groceries, and customer service", order: 9 },
    { id: 110, languageId: 2, name: "Hotel & Accommodation", slug: "hotel", description: "Booking, check-in, and hotel services", order: 10 },
    { id: 111, languageId: 2, name: "Emergency", slug: "emergency", description: "Medical emergencies, police, and urgent help", order: 11 },
    { id: 112, languageId: 2, name: "Social & Friends", slug: "social", description: "Making plans, small talk, and social events", order: 12 },
  ]).onConflictDoNothing();

  // ── Scenario Levels ──
  const slValues: { id: number; scenarioId: number; levelId: number }[] = [];
  let slId = 101;
  for (let s = 101; s <= 103; s++) {
    for (let l = 1; l <= 3; l++) {
      slValues.push({ id: slId++, scenarioId: s, levelId: l });
    }
  }
  for (let s = 104; s <= 107; s++) {
    slValues.push({ id: slId++, scenarioId: s, levelId: 4 });
  }
  for (let s = 108; s <= 112; s++) {
    for (let l = 1; l <= 3; l++) {
      slValues.push({ id: slId++, scenarioId: s, levelId: l });
    }
  }
  await db.insert(scenarioLevels).values(slValues).onConflictDoNothing();

  // ── Modules ──
  const moduleData: { id: number; scenarioLevelId: number; title: string; order: number }[] = [
    // SC101: Transportation (A2=101, B1=102, B2=103)
    { id: 101, scenarioLevelId: 101, title: "Buying a Ticket", order: 1 },
    { id: 102, scenarioLevelId: 101, title: "Finding Your Way", order: 2 },
    { id: 103, scenarioLevelId: 102, title: "Delay Announcements", order: 1 },
    { id: 104, scenarioLevelId: 102, title: "Platform Changes", order: 2 },
    { id: 105, scenarioLevelId: 103, title: "Complex Itinerary", order: 1 },
    { id: 106, scenarioLevelId: 103, title: "Customer Service", order: 2 },
    // SC102: Doctor (A2=104, B1=105, B2=106)
    { id: 107, scenarioLevelId: 104, title: "Making an Appointment", order: 1 },
    { id: 108, scenarioLevelId: 104, title: "Basic Symptoms", order: 2 },
    { id: 109, scenarioLevelId: 105, title: "Describing Symptoms", order: 1 },
    { id: 110, scenarioLevelId: 105, title: "At the Pharmacy", order: 2 },
    { id: 111, scenarioLevelId: 106, title: "Medical History", order: 1 },
    { id: 112, scenarioLevelId: 106, title: "Specialist Visit", order: 2 },
    // SC103: Job Interview (A2=107, B1=108, B2=109)
    { id: 113, scenarioLevelId: 107, title: "Self-Introduction", order: 1 },
    { id: 114, scenarioLevelId: 107, title: "First Interview", order: 2 },
    { id: 115, scenarioLevelId: 108, title: "Experience & Skills", order: 1 },
    { id: 116, scenarioLevelId: 108, title: "Common Questions", order: 2 },
    { id: 117, scenarioLevelId: 109, title: "Salary Negotiation", order: 1 },
    { id: 118, scenarioLevelId: 109, title: "Technical Discussion", order: 2 },
    // SC104: Greetings (A1=110)
    { id: 119, scenarioLevelId: 110, title: "Hello & Goodbye", order: 1 },
    { id: 120, scenarioLevelId: 110, title: "Introducing Yourself", order: 2 },
    // SC105: Numbers (A1=111)
    { id: 121, scenarioLevelId: 111, title: "Counting & Prices", order: 1 },
    { id: 122, scenarioLevelId: 111, title: "Telling Time", order: 2 },
    // SC106: Colors (A1=112)
    { id: 123, scenarioLevelId: 112, title: "Basic Adjectives", order: 1 },
    { id: 124, scenarioLevelId: 112, title: "Describing Objects", order: 2 },
    // SC107: Basic Needs (A1=113)
    { id: 125, scenarioLevelId: 113, title: "Asking for Help", order: 1 },
    { id: 126, scenarioLevelId: 113, title: "Emergencies", order: 2 },
    // SC108: Restaurant (A2=114, B1=115, B2=116)
    { id: 127, scenarioLevelId: 114, title: "Ordering Food", order: 1 },
    { id: 128, scenarioLevelId: 114, title: "At the Table", order: 2 },
    { id: 129, scenarioLevelId: 115, title: "Dietary Needs", order: 1 },
    { id: 130, scenarioLevelId: 115, title: "Complaints", order: 2 },
    { id: 131, scenarioLevelId: 116, title: "Wine & Dining", order: 1 },
    { id: 132, scenarioLevelId: 116, title: "Special Occasions", order: 2 },
    // SC109: Shopping (A2=117, B1=118, B2=119)
    { id: 133, scenarioLevelId: 117, title: "Light Shopping", order: 1 },
    { id: 134, scenarioLevelId: 117, title: "Clothes & Sizes", order: 2 },
    { id: 135, scenarioLevelId: 118, title: "Comparing Products", order: 1 },
    { id: 136, scenarioLevelId: 118, title: "Returns & Exchanges", order: 2 },
    { id: 137, scenarioLevelId: 119, title: "Customer Service", order: 1 },
    { id: 138, scenarioLevelId: 119, title: "Negotiating", order: 2 },
    // SC110: Hotel (A2=120, B1=121, B2=122)
    { id: 139, scenarioLevelId: 120, title: "Checking In", order: 1 },
    { id: 140, scenarioLevelId: 120, title: "During Your Stay", order: 2 },
    { id: 141, scenarioLevelId: 121, title: "Making Requests", order: 1 },
    { id: 142, scenarioLevelId: 121, title: "Dealing with Issues", order: 2 },
    { id: 143, scenarioLevelId: 122, title: "Checking Out", order: 1 },
    { id: 144, scenarioLevelId: 122, title: "Filing Complaints", order: 2 },
    // SC111: Emergency (A2=123, B1=124, B2=125)
    { id: 145, scenarioLevelId: 123, title: "Calling for Help", order: 1 },
    { id: 146, scenarioLevelId: 123, title: "At the Hospital", order: 2 },
    { id: 147, scenarioLevelId: 124, title: "Describing an Accident", order: 1 },
    { id: 148, scenarioLevelId: 124, title: "At the Pharmacy", order: 2 },
    { id: 149, scenarioLevelId: 125, title: "Police & Documents", order: 1 },
    { id: 150, scenarioLevelId: 125, title: "Lost & Found", order: 2 },
    // SC112: Social (A2=126, B1=127, B2=128)
    { id: 151, scenarioLevelId: 126, title: "Making Plans", order: 1 },
    { id: 152, scenarioLevelId: 126, title: "At a Social Event", order: 2 },
    { id: 153, scenarioLevelId: 127, title: "Small Talk", order: 1 },
    { id: 154, scenarioLevelId: 127, title: "Talking About Hobbies", order: 2 },
    { id: 155, scenarioLevelId: 128, title: "Deep Conversations", order: 1 },
    { id: 156, scenarioLevelId: 128, title: "Making Arrangements", order: 2 },
  ];
  await db.insert(modules).values(moduleData).onConflictDoNothing();

  // ── Sync serial sequences ──
  const seqs = [
    "challenges_id_seq", "challenge_items_id_seq", "questions_id_seq",
    "question_options_id_seq", "transcript_lines_id_seq", "words_id_seq"
  ];
  for (const seq of seqs) {
    const table = seq.replace("_id_seq", "");
    await db.execute(sql`SELECT setval('${sql.raw(seq)}', COALESCE((SELECT MAX(id) FROM ${sql.identifier(table)}), 0) + 1, false)`);
  }

  // ── Seed content ──
  const { seedTransportation } = await import("./transportation");
  await seedTransportation();
  const { seedDoctor } = await import("./doctor");
  await seedDoctor();
  const { seedJobInterview } = await import("./job-interview");
  await seedJobInterview();
  const { seedGreetings } = await import("./greetings");
  await seedGreetings();
  const { seedNumbers } = await import("./numbers");
  await seedNumbers();
  const { seedColors } = await import("./colors");
  await seedColors();
  const { seedBasicNeeds } = await import("./basic-needs");
  await seedBasicNeeds();
  const { seedRestaurant } = await import("./restaurant");
  await seedRestaurant();
  const { seedShopping } = await import("./shopping");
  await seedShopping();
  const { seedHotel } = await import("./hotel");
  await seedHotel();
  const { seedEmergency } = await import("./emergency");
  await seedEmergency();
  const { seedSocial } = await import("./social");
  await seedSocial();

  console.log("✅ German seeding complete!");
}
