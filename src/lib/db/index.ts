import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const lang = (process.env.APP_LANG || "it").toUpperCase();
const connectionString = process.env[`DATABASE_URL_${lang}`] || process.env.DATABASE_URL!;

const globalForDb = globalThis as unknown as { client: ReturnType<typeof postgres> | undefined };
const client = globalForDb.client ?? postgres(connectionString, { max: 10, ssl: { rejectUnauthorized: false } });
if (process.env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema });
