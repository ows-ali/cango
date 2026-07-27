# CanGo — Learn Italian for Real Life

**CanGo** is a modern, AI-powered Progressive Web App (PWA) that teaches
Italian through realistic, scenario-based conversations. Built on a
modern AI stack — Next.js 16, TypeScript, Tailwind CSS v4, Drizzle ORM,
NextAuth.js, and Supabase — with offline-first support via IndexedDB and
speech synthesis for authentic pronunciation practice.

- **Prototype:** [Prototype by Google Stitch](https://stitch.withgoogle.com/preview/205405448292237550?node-id=88c0e749cfc44e6ebd7d17ce16426edb)
- **PRD:** [PRD.md](./PRD.md)


## Built With

- **AI Coding Assistant:** Opencode, Antigravity
- **AI Models:** DeepSeek, Gemini, Groq
- **AI SDK:** Vercel AI SDK
- **Prototyping:** Google Stitch
- **Image Generation:** Nano Banana


## Tech Stack

- Next.js 16, TypeScript, Tailwind CSS v4
- Drizzle ORM + Supabase Postgres
- NextAuth.js v5 (Credentials provider)
- Dexie.js (offline IndexedDB cache)
- Vitest (unit/integration), Playwright (E2E)
- Web Speech API / edge-tts (audio)
- Web Speech API (SpeechRecognition)
- PWA (manifest, service worker)


## Features

- Real-world scenarios: transportation, doctor visits, job interviews, restaurant, shopping, social
- Adaptive CEFR levels (A2 → B1 → B2), with per-scenario level settings
- Interactive challenges: MCQs, matching, dialogue ordering, best-response
- AI tutor chatbot with streaming responses — adapts to your CEFR level per scenario
- Roleplay mode: pick any character from the dialogue and converse with the AI
- Speech recognition (mic input) for Italian speaking practice
- Text-to-speech in Italian and German with playback controls
- Collapsible translations — view meanings on demand without clutter
- Personalized practice suggestions based on completed experiences and CEFR
- PWA: installable with offline support via service worker
- Streak tracking and XP rewards
- Supabase + NextAuth credentials authentication

---

## Setup

### 1. Environment Variables

```bash
cp .env.local .env
```

Fill in your Supabase credentials in `.env`:

- `DATABASE_URL` — Postgres connection string (Supabase)
- `AUTH_SECRET` — Generate with `npx auth secret`
- `AUTH_URL` — `http://localhost:3000`

### 2. Install Dependencies

```bash
npm install
```

### 3. Push Database Schema

```bash
npm run db:push
```

### 4. Seed Content Data

```bash
npm run seed
```

> The seed script is idempotent — it can be run multiple times without errors.
> Existing experiences are updated in place, preserving user progress data.

### 5. Generate Audio (Optional)

```bash
bash scripts/generate-audio.sh
```

### 6. Run Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

- **Production** — `main` branch auto-deploys to Vercel production
- **Development** — `dev` branch auto-deploys to Vercel preview
- Environment variables configured in Vercel project dashboard

## Testing

```bash
# Unit & integration tests
npm test

# E2E tests (requires a test user — sign up at /auth first)
npm run test:e2e

# E2E tests with visible browser (headed mode)
npm run test:e2e -- --headed

# E2E interactive UI debugger
npm run test:e2e -- --ui
```

> E2E tests use Playwright with Chromium. Update credentials in `e2e/auth.setup.ts` to match your test account.

## Auth

- Sign up / Log in with email + password via `/auth`
- Credentials are stored in Supabase `users` table with bcrypt-hashed passwords
- Protected routes redirect to `/auth` if unauthenticated

## Screenshots

| View | Mobile | Desktop |
|------|--------|---------|
| **Landing Page** | ![Landing](screenshot/mobile_landing.png) | ![Landing](screenshot/desktop_landing.png) |
| **Onboarding Welcome** | ![Onboarding Welcome](screenshot/mobile_onboarding_welcome.png) | ![Onboarding Welcome](screenshot/desktop_onboarding_welcome.png) |
| **Level Selection** | ![Onboarding Level](screenshot/mobile_onboarding_level.png) | ![Onboarding Level](screenshot/desktop_onboarding_level.png) |
| **Goals Selection** | ![Onboarding Goals](screenshot/mobile_onboarding_goals.png) | ![Onboarding Goals](screenshot/desktop_onboarding_goals.png) |
| **Main Dashboard** | ![Home](screenshot/mobile_home.png) | ![Home](screenshot/desktop_home.png) |
| **Scenario Overview** | ![Scenario](screenshot/mobile_scenario.png) | ![Scenario](screenshot/desktop_scenario.png) |
| **Experience Player** | ![Experience](screenshot/mobile_experience.png) | ![Experience](screenshot/desktop_experience.png) |
