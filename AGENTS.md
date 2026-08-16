# CanGo — Italian Learning PWA

## Stack
- Next.js 16, React 19, TypeScript, Tailwind CSS v4
- Drizzle ORM + Supabase PostgreSQL
- NextAuth v5 (Credentials provider, JWT strategy)
- Vercel AI SDK with Groq (default) / OpenAI / Gemini — configured via `AI_PROVIDER` and `AI_MODEL` in `.env`
- Vitest (unit/integration), Playwright (E2E)
- `@/` maps to `./src/`

## Commands
- `npm run dev` — dev server at localhost:3000 (targets `APP_LANG` DB; `npm run dev:de` forces German)
- `npm run build` — generates icons → `vitest run` → `next build` (ALL three steps)
- `npm test` — vitest (no DB, uses MSW mocks; 65 tests across 11 files)
- `npm run test:e2e` — Playwright (requires test user, see e2e/auth.setup.ts)
- `npm run seed` — `dotenv -- tsx scripts/seed.ts` (idempotent, uses Drizzle ORM; `npm run seed:de` for German DB)
- `npm run gen:code -- <code>...` — inserts beta access codes into the `APP_LANG` DB; `npm run gen:code:it` forces the Italian DB
- `npm run db:push` — `drizzle-kit push` (pushes schema to Supabase; `db:push:de` for German DB)
- `npm run db:studio` — Drizzle Studio GUI

## Auth
- `middleware.ts` at root protects all routes except `/auth`, `/_next`, `/api/auth`, `/api/beta`, static assets
- NextAuth Credentials provider with Supabase `users` table + bcryptjs password hashing
- Auth page at `/auth` (signup/login in one page)
- After login/signup the page confirms the session via `/api/auth/session` before navigating (avoids a middleware redirect loop on first load)
- `trustHost: true` is set in the NextAuth config (`src/lib/auth.ts`)

## Database
- **Two access patterns**: Drizzle ORM (`src/lib/db/index.ts`, postgres driver) for seed scripts; Supabase client (`src/lib/db-supabase.ts`, service role key) for API routes
- Schema in `src/lib/db/schema/` — content.ts (scenarios, levels, modules, experiences, words, etc.) + user.ts (users, progress, vocabulary)
- Tables use `snake_case` columns; Drizzle properties map to `camelCase` in TypeScript
- CEFR level IDs: A1=4, A2=1, B1=2, B2=3

## Key Routes
- `/auth` — login/signup (public); signup requires a beta access code by default
- `/onboarding/welcome` → `/onboarding/level` → `/onboarding/goals` — sets CEFR level, seeds vocabulary
- `/home` — main dashboard
- `/tutor` — AI tutor with personalized suggestions based on completed experiences + CEFR
- `/vocabulary` — kanban board (Learning/Review/Mastered), client-side scenario filtering, single fetch on mount
- `/experience/[id]` — audio player + transcript + practice (MCQs, matching) + bonus challenges (3 tabs) + collapsible AI Tutor section
- `/scenario/[slug]` — scenario overview with per-scenario CEFR level selector
- `/profile` — settings, Ko-fi tip jar card (hidden unless `NEXT_PUBLIC_COFFEE_URL` set)
- `/progress` — stats dashboard consuming `/api/user/stats`

## Beta Access (access codes + email capture)
- Schema in `src/lib/db/schema/user.ts`: `beta_codes` (code PK, use_count, created_at — unlimited use) and `beta_requests` (id, email unique, requested_at, code_sent_at, ip)
- Routes: `GET /api/beta/verify?code=` (public, `{ valid }`) and `POST /api/beta/request` (public)
- Signup flow: `/auth` verifies the code client-side via `/api/beta/verify`, then `auth.ts` re-validates server-side against `beta_codes` (case-insensitive) and increments `use_count`
- Gate toggle: `BETA_CODE_REQUIRED` (server) + `NEXT_PUBLIC_BETA_CODE_REQUIRED` (client), both default `true`
- `POST /api/beta/request` collects a lead and, with `RESEND_API_KEY` set, generates a fresh `cango-xxxxxxxx` code, emails it via Resend (`src/lib/email.ts`), and stamps `code_sent_at`; without a key, the code is returned in the response and shown on-screen instead (no email setup needed)
- **Spam protection built-in** (`src/app/api/beta/request/route.ts`): per-IP daily cap `BETA_MAX_PER_IP` (default 3, only enforced when an `x-forwarded-for` IP is present), global daily cap `BETA_DAILY_LIMIT` (default 90), and unique-email dedupe — over cap → HTTP 429
- `use_count` increments before the duplicate-email check, so failed signups still tick it up (harmless for unlimited codes)
- `gen-codes.ts` targets whatever DB `APP_LANG` points to (`.env` currently `APP_LANG=de` → German DB); the script logs the target lang
- `beta_requests.ip` column is nullable; requires `db:push` to create

## Monetization
- Ko-fi tip jar on `/profile` — link from `NEXT_PUBLIC_COFFEE_URL`, hidden when unset
- Daily goal on `/progress` — `NEXT_PUBLIC_DAILY_GOAL_XP` (default 50)
- Payment provider (Lemon Squeezy/Paddle MoR vs. Ko-fi/PayPal) is still undecided — tip money is taxable income for the owner; the assistant will not help hide payments/taxes

## Testing
- Vitest: MSW mocks all API calls, `jsdom` environment, `@testing-library/react`
- next-auth, next/navigation, next/image are mocked globally via `src/__tests__/setup.tsx`
- Test fixtures in `src/__tests__/fixtures.ts`, MSW handlers in `src/__tests__/api/mocks/` (incl. `/api/beta/verify`, `/api/beta/request`, `/api/auth/session`)
- Flow tests: `01-auth` (incl. beta code validation + email capture), `02-onboarding`, `03-home`, `04-scenario`, `05-experience`, `06-xp`, `07-cefr-persistence`, `08-progress`, `09-profile`
- Route-level test `10-beta-request` exercises the real `/api/beta/request` logic (email send + rate limits) with mocked `@/lib/db-supabase` + `@/lib/email` — the only route-level suite, since MSW can't test the real send
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
