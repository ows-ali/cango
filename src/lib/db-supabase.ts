import { createClient } from "@supabase/supabase-js";

function env(name: string): string {
  const lang = (process.env.APP_LANG || "it").toUpperCase();
  return process.env[`${name}_${lang}`] || process.env[name]!;
}

export const supabase = createClient(
  env("NEXT_PUBLIC_SUPABASE_URL"),
  env("SUPABASE_SERVICE_ROLE_KEY")
);
