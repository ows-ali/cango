import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

function env(name: string): string {
  const lang = (process.env.APP_LANG || "it").toUpperCase();
  return process.env[`${name}_${lang}`] || process.env[name]!;
}

const supabase = createClient(
  env("NEXT_PUBLIC_SUPABASE_URL"),
  env("SUPABASE_SERVICE_ROLE_KEY")
);

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        mode: { label: "Mode", type: "hidden" },
        code: { label: "Access code", type: "text" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;
        const mode = (credentials?.mode as string) || "login";

        if (!email || !password) return null;

        if (mode === "signup") {
          if ((process.env.BETA_CODE_REQUIRED ?? "true") === "true") {
            const code = ((credentials?.code as string) || "").trim().toLowerCase();
            if (!code) return null;
            const { data: codeRow, error: codeError } = await supabase
              .from("beta_codes")
              .select("code, use_count")
              .ilike("code", code)
              .maybeSingle();
            if (codeError) throw codeError;
            if (!codeRow) return null;
            await supabase
              .from("beta_codes")
              .update({ use_count: (codeRow.use_count || 0) + 1 })
              .eq("code", codeRow.code);
          }

          const { data: existing } = await supabase
            .from("users")
            .select("id")
            .eq("email", email)
            .maybeSingle();
          if (existing) return null;

          const passwordHash = await bcrypt.hash(password, 10);
          const id = crypto.randomUUID();
          await supabase.from("users").insert({
            id,
            email,
            name: email.split("@")[0],
            password_hash: passwordHash,
          });

          return { id, email, name: email.split("@")[0] };
        }

        const { data: user } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .maybeSingle();
        if (!user || !user.password_hash) return null;

        const valid = await bcrypt.compare(password, user.password_hash);
        if (!valid) return null;

        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) { token.id = user.id; }
      return token;
    },
    async session({ session, token }) {
      if (session.user) { session.user.id = token.id as string; }
      return session;
    },
  },
  session: { strategy: "jwt" },
});
