# CanGo — Italian Learning PWA

## Stack
- Next.js 16, React 19, TypeScript, Tailwind CSS v4
- Drizzle ORM + Supabase PostgreSQL
- NextAuth v5 (Credentials provider, JWT strategy)
- Vercel AI SDK with Groq (default) / OpenAI / Gemini — configured via `AI_PROVIDER` and `AI_MODEL` in `.env`
- Vitest (unit/integration), Playwright (E2E)
- `@/` maps to `./src/`

## Commands
- `npm run dev` — dev server at localhost:3000
- `npm run build` — generates icons → `vitest run` → `next build` (ALL three steps)
- `npm test` — vitest (no DB, uses MSW mocks; 38 tests across 7 files)
- `npm run test:e2e` — Playwright (requires test user, see e2e/auth.setup.ts)
- `npm run seed` — `dotenv -- tsx scripts/seed.ts` (idempotent, uses Drizzle ORM)
- `npm run db:push` — `drizzle-kit push` (pushes schema to Supabase)
- `npm run db:studio` — Drizzle Studio GUI

## Auth
- `middleware.ts` at root protects all routes except `/auth`, `/_next`, `/api/auth`, static assets
- NextAuth Credentials provider with Supabase `users` table + bcryptjs password hashing
- Auth page at `/auth` (signup/login in one page)

## Database
- **Two access patterns**: Drizzle ORM (`src/lib/db/index.ts`, postgres driver) for seed scripts; Supabase client (`src/lib/db-supabase.ts`, service role key) for API routes
- Schema in `src/lib/db/schema/` — content.ts (scenarios, levels, modules, experiences, words, etc.) + user.ts (users, progress, vocabulary)
- Tables use `snake_case` columns; Drizzle properties map to `camelCase` in TypeScript
- CEFR level IDs: A1=4, A2=1, B1=2, B2=3

## Key Routes
- `/auth` — login/signup (public)
- `/onboarding/welcome` → `/onboarding/level` → `/onboarding/goals` — sets CEFR level, seeds vocabulary
- `/home` — main dashboard
- `/tutor` — AI tutor with personalized suggestions based on completed experiences + CEFR
- `/vocabulary` — kanban board (Learning/Review/Mastered), client-side scenario filtering, single fetch on mount
- `/experience/[id]` — audio player + transcript + practice (MCQs, matching) + bonus challenges (3 tabs) + collapsible AI Tutor section
- `/scenario/[slug]` — scenario overview with per-scenario CEFR level selector
- `/profile`, `/progress` — user settings and stats

## Testing
- Vitest: MSW mocks all API calls, `jsdom` environment, `@testing-library/react`
- next-auth, next/navigation, next/image are mocked globally via `src/__tests__/setup.tsx`
- Test fixtures in `src/__tests__/fixtures.ts`, MSW handlers in `src/__tests__/api/mocks/`
- E2E: Playwright with Chromium, headless=false by default, `playwright/.auth/user.json` for auth state

## Notable
- `next.config.ts` has `typescript.ignoreBuildErrors: true` — TS errors don't block build, test failures do
- Seed scripts are idempotent; use Drizzle ORM directly (not Supabase client)
- Vocabulary auto-populated for new users at onboarding (10 words per scenario at their CEFR level via `seedVocabularyForUser`)
- Existing `src/lib/vocab-utils.ts` contains `seedVocabularyForUser()`, `getWordScenarios()`, `getScenarioWordIds()`
- ChatUI supports role-play suggestions extracted from transcript speakers
- AI chat route resolves CEFR level at scenario granularity, not just user global level

## AI Observability (Langfuse)
- AI tutor chats are traced with Langfuse via OpenTelemetry (AI SDK v6 `experimental_telemetry`), wired in `src/instrumentation.ts` + `src/lib/langfuse.ts` and the chat route
- To enable: sign up free at `cloud.langfuse.com`, create a project, then set `LANGFUSE_PUBLIC_KEY`, `LANGFUSE_SECRET_KEY`, `LANGFUSE_BASE_URL` in `.env`
- Tracing is a **no-op when the keys are absent** (dev/test unaffected); traces are tagged with `userId`, `sessionId`, `lang`, `provider`, `model`, `experienceId`, `cefrLevel`
- Sentry is intentionally **not** used — error visibility is handled by Vercel

## Fresh Setup (new empty Supabase projects)
1. Create two Supabase projects (IT + DE); copy their DB URLs into `DATABASE_URL` / `DATABASE_URL_DE` and the Supabase URL/keys into the `_DE`-suffixed vars as needed
2. `npm run db:push` then `npm run db:push:de` — creates the schema (no committed migrations; this project uses drizzle-kit push)
3. `npm run seed` (IT) and `npm run seed:de` (DE) — seeds all content; matching activities are built with 5 real pairs by `buildMatchPairs` in `scripts/seed-helpers.ts` (no placeholder words)
4. Media (`audio_url`/`image_url`) is not seeded — run `scripts/generate-audio.sh` if needed
