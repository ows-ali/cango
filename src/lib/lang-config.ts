export const LANGUAGES = {
  it: {
    code: "it",
    label: "Italian",
    country: "Italy",
    locale: "it-IT",
    brand: "CanGo Italy",
    greeting: "Buongiorno!",
    greetingFallback: "Ciao!",
    teacherLabel: "Your Italian teacher",
    tutorPrompt: "You are an Italian language tutor.",
    speakLanguage: "Italian",
    speakLabel: "Speak in Italian",
    inputPlaceholder: "Type your response in Italian...",
    roleLabel: "Ciao! Pick a role to practice:",
    defaultWelcome: "Ciao! I'm your Italian tutor! Ready to practice?",
    practiceDesc: "Practice Italian conversation, ask about grammar, or roleplay any scenario.",
    continueJourney: "Continue your Italian journey.",
    mySection: "My Italy",
    chooseLevel: "Choose your Italian Level",
    learnFor: "Learn Italian for Real Life in Italy",
  },
  de: {
    code: "de",
    label: "German",
    country: "Germany",
    locale: "de-DE",
    brand: "CanGo Germany",
    greeting: "Hallo!",
    greetingFallback: "Hallo!",
    teacherLabel: "Your German teacher",
    tutorPrompt: "You are a German language tutor.",
    speakLanguage: "German",
    speakLabel: "Speak in German",
    inputPlaceholder: "Type your response in German...",
    roleLabel: "Hallo! Pick a role to practice:",
    defaultWelcome: "Hallo! I'm your German tutor! Ready to practice?",
    practiceDesc: "Practice German conversation, ask about grammar, or roleplay any scenario.",
    continueJourney: "Continue your German journey.",
    mySection: "My Germany",
    chooseLevel: "Choose your German Level",
    learnFor: "Learn German for Real Life in Germany",
  },
} as const;

export type LangCode = keyof typeof LANGUAGES;

export function getLang(): (typeof LANGUAGES)["it"] {
  const code: LangCode =
    typeof window === "undefined"
      ? (process.env.APP_LANG as LangCode)
      : (process.env.NEXT_PUBLIC_APP_LANG as LangCode);
  return LANGUAGES[code] || LANGUAGES.it;
}
