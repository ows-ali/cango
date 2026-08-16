import { sql } from "drizzle-orm";
import { db } from "../../src/lib/db";
import { languages, levels, scenarios, scenarioLevels, modules } from "../../src/lib/db/schema";
import { addExperience } from "../seed-helpers";

export async function seedItalian() {
  console.log("🌱 Seeding Italian CanGo content...\n");

  // ── Languages ──
  await db.insert(languages).values([{ id: 1, name: "Italian", code: "it" }]).onConflictDoNothing();

  // ── Levels ──
  await db.insert(levels).values([
    { id: 1, name: "A2", order: 1 },
    { id: 2, name: "B1", order: 2 },
    { id: 3, name: "B2", order: 3 },
    { id: 4, name: "A1", order: 0 },
  ]).onConflictDoNothing();

  // ── Scenarios ──
  await db.insert(scenarios).values([
    { id: 1, languageId: 1, name: "Transportation", slug: "transportation", description: "Tickets, delays, and navigating Italian public transport", order: 1 },
    { id: 2, languageId: 1, name: "Doctor & Healthcare", slug: "doctor", description: "Appointments, symptoms, and pharmacy visits", order: 2 },
    { id: 3, languageId: 1, name: "Job Interview", slug: "job-interview", description: "Professional communication and interview preparation", order: 3 },
    { id: 4, languageId: 1, name: "Greetings & Introductions", slug: "greetings", description: "Basic greetings, introductions, and polite expressions", order: 4 },
    { id: 5, languageId: 1, name: "Numbers, Time & Money", slug: "numbers", description: "Numbers, telling time, prices and money", order: 5 },
    { id: 6, languageId: 1, name: "Colors & Descriptions", slug: "colors", description: "Colors, adjectives, and describing objects", order: 6 },
    { id: 7, languageId: 1, name: "Basic Needs", slug: "basic-needs", description: "Asking for help, directions, and emergencies", order: 7 },
    { id: 8, languageId: 1, name: "Restaurant & Food", slug: "restaurant", description: "Ordering food, dietary needs, and dining out", order: 8 },
    { id: 9, languageId: 1, name: "Shopping", slug: "shopping", description: "Buying clothes, groceries, and customer service", order: 9 },
    { id: 10, languageId: 1, name: "Hotel & Accommodation", slug: "hotel", description: "Booking, check-in, and hotel services", order: 10 },
    { id: 11, languageId: 1, name: "Emergency", slug: "emergency", description: "Medical emergencies, police, and urgent help", order: 11 },
    { id: 12, languageId: 1, name: "Social & Friends", slug: "social", description: "Making plans, small talk, and social events", order: 12 },
  ]).onConflictDoNothing();

  // ── Scenario Levels ──
  const slValues: { id: number; scenarioId: number; levelId: number }[] = [];
  let slId = 1;
  for (let s = 1; s <= 3; s++) {
    for (let l = 1; l <= 3; l++) {
      slValues.push({ id: slId++, scenarioId: s, levelId: l });
    }
  }
  for (let s = 4; s <= 7; s++) {
    slValues.push({ id: slId++, scenarioId: s, levelId: 4 });
  }
  for (let s = 8; s <= 12; s++) {
    for (let l = 1; l <= 3; l++) {
      slValues.push({ id: slId++, scenarioId: s, levelId: l });
    }
  }
  await db.insert(scenarioLevels).values(slValues).onConflictDoNothing();

  // ── Modules ──
  const moduleData: { id: number; scenarioLevelId: number; title: string; order: number }[] = [
    { id: 1, scenarioLevelId: 1, title: "Buying a Ticket", order: 1 },
    { id: 2, scenarioLevelId: 1, title: "Finding Your Way", order: 2 },
    { id: 3, scenarioLevelId: 2, title: "Delay Announcements", order: 1 },
    { id: 4, scenarioLevelId: 2, title: "Platform Changes", order: 2 },
    { id: 5, scenarioLevelId: 3, title: "Complex Itinerary", order: 1 },
    { id: 6, scenarioLevelId: 3, title: "Customer Service", order: 2 },
    { id: 7, scenarioLevelId: 4, title: "Making an Appointment", order: 1 },
    { id: 8, scenarioLevelId: 4, title: "Basic Symptoms", order: 2 },
    { id: 9, scenarioLevelId: 5, title: "Describing Symptoms", order: 1 },
    { id: 10, scenarioLevelId: 5, title: "At the Pharmacy", order: 2 },
    { id: 11, scenarioLevelId: 6, title: "Medical History", order: 1 },
    { id: 12, scenarioLevelId: 6, title: "Specialist Visit", order: 2 },
    { id: 13, scenarioLevelId: 7, title: "Self-Introduction", order: 1 },
    { id: 14, scenarioLevelId: 7, title: "First Interview", order: 2 },
    { id: 15, scenarioLevelId: 8, title: "Experience & Skills", order: 1 },
    { id: 16, scenarioLevelId: 8, title: "Common Questions", order: 2 },
    { id: 17, scenarioLevelId: 9, title: "Salary Negotiation", order: 1 },
    { id: 18, scenarioLevelId: 9, title: "Technical Discussion", order: 2 },
    { id: 19, scenarioLevelId: 10, title: "Hello & Goodbye", order: 1 },
    { id: 20, scenarioLevelId: 10, title: "Introducing Yourself", order: 2 },
    { id: 21, scenarioLevelId: 11, title: "Counting & Prices", order: 1 },
    { id: 22, scenarioLevelId: 11, title: "Telling Time", order: 2 },
    { id: 23, scenarioLevelId: 12, title: "Basic Adjectives", order: 1 },
    { id: 24, scenarioLevelId: 12, title: "Describing Objects", order: 2 },
    { id: 25, scenarioLevelId: 13, title: "Asking for Help", order: 1 },
    { id: 26, scenarioLevelId: 13, title: "Emergencies", order: 2 },
    { id: 27, scenarioLevelId: 14, title: "Ordering Food", order: 1 },
    { id: 28, scenarioLevelId: 14, title: "At the Table", order: 2 },
    { id: 29, scenarioLevelId: 15, title: "Dietary Needs", order: 1 },
    { id: 30, scenarioLevelId: 15, title: "Complaints", order: 2 },
    { id: 31, scenarioLevelId: 16, title: "Wine & Dining", order: 1 },
    { id: 32, scenarioLevelId: 16, title: "Special Occasions", order: 2 },
    { id: 33, scenarioLevelId: 17, title: "Light Shopping", order: 1 },
    { id: 34, scenarioLevelId: 17, title: "Clothes & Sizes", order: 2 },
    { id: 35, scenarioLevelId: 18, title: "Comparing Products", order: 1 },
    { id: 36, scenarioLevelId: 18, title: "Returns & Exchanges", order: 2 },
    { id: 37, scenarioLevelId: 19, title: "Customer Service", order: 1 },
    { id: 38, scenarioLevelId: 19, title: "Negotiating", order: 2 },
    { id: 39, scenarioLevelId: 20, title: "Checking In", order: 1 },
    { id: 40, scenarioLevelId: 20, title: "During Your Stay", order: 2 },
    { id: 41, scenarioLevelId: 21, title: "Making Requests", order: 1 },
    { id: 42, scenarioLevelId: 21, title: "Dealing with Issues", order: 2 },
    { id: 43, scenarioLevelId: 22, title: "Checking Out", order: 1 },
    { id: 44, scenarioLevelId: 22, title: "Filing Complaints", order: 2 },
    { id: 45, scenarioLevelId: 23, title: "Calling for Help", order: 1 },
    { id: 46, scenarioLevelId: 23, title: "At the Hospital", order: 2 },
    { id: 47, scenarioLevelId: 24, title: "Describing an Accident", order: 1 },
    { id: 48, scenarioLevelId: 24, title: "At the Pharmacy", order: 2 },
    { id: 49, scenarioLevelId: 25, title: "Police & Documents", order: 1 },
    { id: 50, scenarioLevelId: 25, title: "Lost & Found", order: 2 },
    { id: 51, scenarioLevelId: 26, title: "Making Plans", order: 1 },
    { id: 52, scenarioLevelId: 26, title: "At a Social Event", order: 2 },
    { id: 53, scenarioLevelId: 27, title: "Small Talk", order: 1 },
    { id: 54, scenarioLevelId: 27, title: "Talking About Hobbies", order: 2 },
    { id: 55, scenarioLevelId: 28, title: "Deep Conversations", order: 1 },
    { id: 56, scenarioLevelId: 28, title: "Making Arrangements", order: 2 },
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

  // ── Seed all content ──
  const { seedTransportation } = await import("./transportation");
  await seedTransportation(addExperience);
  const { seedDoctor } = await import("./doctor");
  await seedDoctor(addExperience);
  const { seedJobInterview } = await import("./job-interview");
  await seedJobInterview(addExperience);
  const { seedA1 } = await import("./a1");
  await seedA1(addExperience);
  const { seedRestaurant } = await import("./restaurant");
  await seedRestaurant(addExperience);
  const { seedShopping } = await import("./shopping");
  await seedShopping(addExperience);
  const { seedHotel } = await import("./hotel");
  await seedHotel(addExperience);
  const { seedEmergency } = await import("./emergency");
  await seedEmergency(addExperience);
  const { seedSocial } = await import("./social");
  await seedSocial(addExperience);

  console.log("✅ Italian seeding complete!");
}