import { db } from "../src/lib/db";
import { betaCodes } from "../src/lib/db/schema";

const codes = process.argv.slice(2).filter((c) => c.trim());

async function main() {
  if (codes.length === 0) {
    console.error("Usage: npm run gen:code -- innovators-club sonia-learn-italiano");
    process.exit(1);
  }
  for (const code of codes) {
    await db
      .insert(betaCodes)
      .values({ code: code.trim().toLowerCase() })
      .onConflictDoNothing();
    console.log(`Code ready: ${code.trim().toLowerCase()}`);
  }
  console.log(`${codes.length} code(s) created for ${process.env.APP_LANG || "it"} DB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});