import { defineConfig } from "drizzle-kit";

const lang = process.env.APP_LANG?.toUpperCase() || "IT";
const dbUrl = process.env[`DATABASE_URL_${lang}`] || process.env.DATABASE_URL!;

export default defineConfig({
  schema: "./src/lib/db/schema/*.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl,
  },
});
