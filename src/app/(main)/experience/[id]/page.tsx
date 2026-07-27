"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useStats } from "@/lib/stats-context";
import { Logo } from "@/components/Logo";
import { ChatUI } from "@/components/ChatUI";
import { HeroMedia } from "@/components/HeroMedia";

interface TranscriptLine {
  id: number; targetText: string; translationText: string; speaker: string | null;
}

interface QuestionOption {
  id: number; targetText: string; translationText: string; correct: boolean;
}

interface Question {
  id: number; type: "MCQ" | "MATCHING"; questionText: string;
  translationText: string | null; options: QuestionOption[];
}

interface ChallengeItem {
  id: number; text: string; translation: string | null; order: number; correctValue: string | null;
}

interface Challenge {
  id: number; type: string; items: ChallengeItem[]; question?: string; questionTranslation?: string;
}

interface ExperienceData {
  id: number; title: string; audioUrl: string | null; imageUrl?: string | null; scenarioSlug?: string | null; duration: string;
  transcripts: TranscriptLine[]; questions: Question[]; challenges: Challenge[];
}

const CHALLENGE_TABS = ["VOCAB_MATCH", "ARRANGE_DIALOGUE", "BEST_RESPONSE"] as const;
const TAB_LABELS: Record<string, string> = {
  VOCAB_MATCH: "Match",
  ARRANGE_DIALOGUE: "Arrange Dialogue",
  BEST_RESPONSE: "Best Response",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ExperiencePlayerPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { refreshStats } = useStats();
  const { data: session } = useSession();
  const [data, setData] = useState<ExperienceData | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [mcqCorrect, setMcqCorrect] = useState<Record<number, boolean>>({});
  const [mcqSelected, setMcqSelected] = useState<Record<number, number | null>>({});

  // Matching
  const [matchingPairs, setMatchingPairs] = useState<{ targetText: string; translationText: string; matched: boolean }[]>([]);
  const [matchShuffledTarget, setMatchShuffledTarget] = useState<string[]>([]);
  const [matchShuffledEnglish, setMatchShuffledEnglish] = useState<string[]>([]);
  const [matchSelectedTarget, setMatchSelectedTarget] = useState<string | null>(null);
  const [matchWrong, setMatchWrong] = useState(false);

  const [xpEarned, setXpEarned] = useState(false);
  const [xpThisSession, setXpThisSession] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [completing, setCompleting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bonusDone, setBonusDone] = useState(false);
  const [progress, setProgress] = useState<{ completed: boolean; lessonXpClaimed: boolean; bonusXpClaimed: boolean } | null>(null);
  const [vocabWords, setVocabWords] = useState<{ id: number; targetWord: string; translationText: string }[]>([]);
  const [selectedWordIds, setSelectedWordIds] = useState<Set<number>>(new Set());
  const [addingVocab, setAddingVocab] = useState(false);
  const waveformRef = useRef<HTMLDivElement>(null);
  const italianVoices = useRef<SpeechSynthesisVoice[]>([]);
  const femaleRoles = ["ticket_agent", "shop_assistant", "doctor", "receptionist", "waiter", "nurse", "pharmacist"];

  useEffect(() => {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    if (italianVoices.current.length > 0 || !("speechSynthesis" in window)) return;
    const load = () => {
      italianVoices.current = speechSynthesis.getVoices().filter((v) => v.lang.startsWith("it"));
    };
    load();
    speechSynthesis.onvoiceschanged = load;
    return () => { if ("speechSynthesis" in window) speechSynthesis.cancel(); };
  }, []);

  // Challenge tab state
  const [activeTab, setActiveTab] = useState(0);
  const [showAiChat, setShowAiChat] = useState(false);
  const [tabVocabCompleted, setTabVocabCompleted] = useState(false);
  const [tabArrangeCompleted, setTabArrangeCompleted] = useState(false);
  const [tabBestCompleted, setTabBestCompleted] = useState(false);

  // Vocab Match challenge
  const [vocabMatchPairs, setVocabMatchPairs] = useState<{ item: ChallengeItem; matched: boolean }[]>([]);
  const [vocabSelected, setVocabSelected] = useState<string | null>(null);
  const [vocabLeftOrder, setVocabLeftOrder] = useState<number[]>([]);
  const [vocabRightOrder, setVocabRightOrder] = useState<number[]>([]);

  // Arrange Dialogue challenge
  const [arrangeOrder, setArrangeOrder] = useState<number[]>([]);
  const [arrangeShuffled, setArrangeShuffled] = useState<ChallengeItem[]>([]);
  const [arrangeWrong, setArrangeWrong] = useState(false);
  const arrangeCheckTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Best Response challenge
  const [bestShuffled, setBestShuffled] = useState<ChallengeItem[]>([]);
  const [bestResponseSelected, setBestResponseSelected] = useState<number | null>(null);
  const [bestResponseCorrect, setBestResponseCorrect] = useState(false);

  useEffect(() => {
    fetch(`/api/content/experience/${id}`).then((r) => r.json()).then((d) => {
      setData(d);
      const matching = d.questions?.find((q: Question) => q.type === "MATCHING");
      if (matching) {
        const pairs = matching.options.map((o: QuestionOption) => ({ targetText: o.targetText, translationText: o.translationText, matched: false }));
        setMatchingPairs(pairs);
        // Shuffle target and translation independently
        const de = pairs.map((p: { targetText: string; translationText: string; matched: boolean }) => p.targetText).sort(() => Math.random() - 0.5);
        const en = pairs.map((p: { targetText: string; translationText: string; matched: boolean }) => p.translationText).sort(() => Math.random() - 0.5);
        setMatchShuffledTarget(de);
        setMatchShuffledEnglish(en);
      }
      const vocabChal = d.challenges?.find((c: Challenge) => c.type === "VOCAB_MATCH");
      if (vocabChal) {
        const pairs = vocabChal.items.map((i: ChallengeItem) => ({ item: i, matched: false }));
        setVocabMatchPairs(pairs);
        const indices = pairs.map((_: unknown, i: number) => i);
        setVocabLeftOrder([...indices].sort(() => Math.random() - 0.5));
        setVocabRightOrder([...indices].sort(() => Math.random() - 0.5));
      }
      const arrangeChal = d.challenges?.find((c: Challenge) => c.type === "ARRANGE_DIALOGUE");
      if (arrangeChal) {
        setArrangeShuffled(shuffle(arrangeChal.items));
        setArrangeOrder([]);
      }
      const bestChal = d.challenges?.find((c: Challenge) => c.type === "BEST_RESPONSE");
      if (bestChal) {
        setBestShuffled(shuffle(bestChal.items));
      }
    }).catch(() => { });
  }, [id]);

  useEffect(() => {
    if (!session?.user?.id || !id) return;
    fetch(`/api/user/experience/progress?experienceId=${id}`).then((r) => r.json()).then((p: { completed: boolean; lessonXpClaimed: boolean; bonusXpClaimed: boolean }) => {
      setProgress(p);
      if (p.bonusXpClaimed) setBonusDone(true);
    }).catch(() => { });
  }, [session, id]);

  const [currentTime, setCurrentTime] = useState(0);

  function parseDurationSeconds(durationStr?: string | null, transcripts?: TranscriptLine[]): number {
    if (durationStr && durationStr.includes(":")) {
      const [m, s] = durationStr.split(":").map(Number);
      if (!isNaN(m) && !isNaN(s) && (m > 0 || s > 0)) {
        return m * 60 + s;
      }
    }
    if (transcripts && transcripts.length > 0) {
      const charCount = transcripts.reduce((acc, t) => acc + t.targetText.length, 0);
      return Math.max(15, Math.ceil(charCount / 10));
    }
    return 45;
  }

  function formatMMSS(totalSec: number): string {
    const m = Math.floor(totalSec / 60);
    const s = Math.floor(totalSec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  const totalSeconds = parseDurationSeconds(data?.duration, data?.transcripts);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalSeconds) {
            setIsPlaying(false);
            if ("speechSynthesis" in window) speechSynthesis.cancel();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, totalSeconds]);

  function getVoiceForSpeaker(speaker: string | null): SpeechSynthesisVoice | null {
    const voices = italianVoices.current;
    if (voices.length === 0) return null;
    if (!speaker) return voices[0];
    const idx = femaleRoles.includes(speaker) ? 0 : Math.min(1, voices.length - 1);
    return voices[idx] ?? voices[0];
  }

  function speakerLabel(speaker: string): string {
    const labels: Record<string, string> = {
      passenger: "Passeggero", ticket_agent: "Bigliettaio",
      customer: "Cliente", shop_assistant: "Commesso",
      patient: "Paziente", doctor: "Dottore",
      receptionist: "Receptionist", waiter: "Cameriere",
      nurse: "Infermiere", pharmacist: "Farmacista",
      guest: "Ospite", friend: "Amico",
      colleague: "Collega", interviewer: "Interviewer",
    };
    return labels[speaker] ?? speaker;
  }

  function speakTranscript(index: number) {
    if (!data || index >= data.transcripts.length) { setIsPlaying(false); return; }
    const line = data.transcripts[index];
    if (!("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(line.targetText);
    utterance.lang = "it-IT";
    utterance.rate = 0.85;
    const voice = getVoiceForSpeaker(line.speaker);
    if (voice) utterance.voice = voice;
    utterance.onend = () => speakTranscript(index + 1);
    speechSynthesis.speak(utterance);
  }

  const togglePlay = useCallback(() => {
    if (!data) return;
    if (isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }
    speechSynthesis.cancel();
    speakTranscript(0);
    setIsPlaying(true);
  }, [data, isPlaying]);

  function handleReplay3() {
    setCurrentTime((prev) => {
      const next = Math.max(0, prev - 3);
      if (data?.transcripts?.length) {
        const lineIdx = Math.floor((next / totalSeconds) * data.transcripts.length);
        if ("speechSynthesis" in window) speechSynthesis.cancel();
        if (isPlaying) speakTranscript(lineIdx);
      }
      return next;
    });
  }

  function handleForward3() {
    setCurrentTime((prev) => {
      const next = Math.min(totalSeconds, prev + 3);
      if (data?.transcripts?.length) {
        const lineIdx = Math.floor((next / totalSeconds) * data.transcripts.length);
        if ("speechSynthesis" in window) speechSynthesis.cancel();
        if (isPlaying) speakTranscript(lineIdx);
      }
      return next;
    });
  }

  // Per-tab completion (derived before early return so hooks stay ordered)
  const vocabChallengeDone = vocabMatchPairs.length > 0 && vocabMatchPairs.every((p) => p.matched);
  const bestChallengeDone = bestResponseCorrect;
  const bonusReady = tabVocabCompleted || tabArrangeCompleted || tabBestCompleted;

  useEffect(() => {
    if (vocabChallengeDone && !tabVocabCompleted) setTabVocabCompleted(true);
  }, [vocabChallengeDone]);
  useEffect(() => {
    const arrangeChal = data?.challenges?.find((c: Challenge) => c.type === "ARRANGE_DIALOGUE");
    if (!arrangeChal) return;
    const allPlaced = arrangeOrder.length === arrangeChal.items.length && arrangeOrder.length > 0;
    if (allPlaced && !tabArrangeCompleted && !arrangeWrong) {
      const isCorrect = arrangeOrder.every((idx, pos) => arrangeShuffled[idx]?.order === pos + 1);
      if (isCorrect) {
        setTabArrangeCompleted(true);
      } else {
        setArrangeWrong(true);
        if (arrangeCheckTimeout.current) clearTimeout(arrangeCheckTimeout.current);
        arrangeCheckTimeout.current = setTimeout(() => {
          setArrangeOrder([]);
          setArrangeWrong(false);
        }, 1500);
      }
    }
  }, [arrangeOrder, arrangeShuffled]);
  useEffect(() => {
    if (bestChallengeDone && !tabBestCompleted) setTabBestCompleted(true);
  }, [bestChallengeDone]);

  useEffect(() => {
    if (completed && data) {
      fetch(`/api/content/experience/${data.id}`).then((r) => r.json()).then((d) => {
        if (d?.vocabulary?.length) setVocabWords(d.vocabulary);
      }).catch(() => { });
    }
  }, [completed, data]);

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-[1200px] mx-auto px-margin-mobile py-6 animate-pulse space-y-6">
          <div className="h-48 bg-surface-container-highest rounded-2xl" />
          <div className="h-32 bg-white rounded-2xl border border-outline-variant/30" />
          <div className="h-64 bg-white rounded-2xl border border-outline-variant/30" />
          <div className="h-40 bg-white rounded-2xl border border-outline-variant/30" />
        </div>
      </div>
    );
  }

  const mcqQuestions = data.questions.filter((q) => q.type === "MCQ");
  const matchingQuestion = data.questions.find((q) => q.type === "MATCHING");
  const vocabMatchChallenge = data.challenges?.find((c) => c.type === "VOCAB_MATCH");
  const arrangeChallenge = data.challenges?.find((c) => c.type === "ARRANGE_DIALOGUE");
  const bestChallenge = data.challenges?.find((c) => c.type === "BEST_RESPONSE");

  const allMcqCorrect = mcqQuestions.length === 0 || mcqQuestions.every((q) => mcqCorrect[q.id]);
  const matchingComplete = matchingPairs.length === 0 || matchingPairs.every((p) => p.matched);
  const canComplete = allMcqCorrect && matchingComplete;

  const isReview = progress?.lessonXpClaimed === true;
  const bonusClaimed = bonusDone || progress?.bonusXpClaimed;

  function handleMcqSelect(qId: number, optionIndex: number, isCorrect: boolean) {
    setMcqSelected((prev) => ({ ...prev, [qId]: optionIndex }));
    if (isCorrect) setMcqCorrect((prev) => ({ ...prev, [qId]: true }));
  }

  function handleMatchingTargetSelect(targetText: string) {
    if (matchingPairs.find((p) => p.targetText === targetText)?.matched) return;
    setMatchSelectedTarget(targetText);
    setMatchWrong(false);
  }

  function handleMatchingEnglishSelect(english: string) {
    if (!matchSelectedTarget) return;
    const pair = matchingPairs.find((p) => p.targetText === matchSelectedTarget);
    if (!pair || pair.matched) return;
    if (pair.translationText === english) {
      setMatchingPairs((prev) => prev.map((p) => p.targetText === matchSelectedTarget ? { ...p, matched: true } : p));
      setMatchSelectedTarget(null);
      setMatchWrong(false);
    } else {
      setMatchWrong(true);
      setMatchSelectedTarget(null);
      setTimeout(() => setMatchWrong(false), 600);
    }
  }

  function handleComplete() {
    if (!canComplete || completing || !data) return;
    if (progress?.lessonXpClaimed) {
      setCompleted(true);
      return;
    }
    setCompleting(true);
    const p1 = fetch("/api/user/experience/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ experienceId: data.id }),
    }).then((r) => r.json());

    const p2 = bonusReady && !bonusClaimed
      ? fetch("/api/user/experience/bonus-complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ experienceId: data.id }),
      }).then((r) => r.json())
      : Promise.resolve({ bonusXpAwarded: false });

    Promise.all([p1, p2]).then(([res1, res2]) => {
      let earned = 0;
      if (res1.lessonXpAwarded) earned += 50;
      if (res2?.bonusXpAwarded) { setBonusDone(true); earned += 20; }
      setXpThisSession(earned);
      setXpEarned(earned > 0);
      setCompleted(true);
      refreshStats();
    }).catch(() => setCompleting(false));
  }

  const handleAddVocab = async () => {
    if (selectedWordIds.size === 0) { router.push("/home"); return; }
    setAddingVocab(true);
    try {
      await fetch("/api/vocabulary/batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wordIds: [...selectedWordIds] }),
      });
    } catch { }
    router.push("/home");
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-margin-mobile py-12">
        <div className="text-center max-w-sm w-full">
          <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-4xl text-white">check</span>
          </div>
          <h2 className="font-headline text-3xl text-on-surface mb-2">Completed!</h2>
          <p className="text-2xl font-bold text-primary mb-2">+{xpThisSession} XP</p>
          <p className="text-on-surface-variant mb-2">
            {xpThisSession === 70 ? "Great job with bonus!"
              : xpThisSession === 50 ? "Great job!"
                : xpThisSession === 20 ? "Bonus claimed!"
                  : "Reviewing"}
          </p>

          {vocabWords.length > 0 && (
            <div className="bg-white rounded-2xl border border-outline-variant/30 p-5 text-left mt-6 mb-6 shadow-sm">
              <h3 className="font-bold text-on-surface mb-1">Add words to your vocabulary</h3>
              <p className="text-xs text-on-surface-variant mb-4">Select words you want to practice later:</p>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {vocabWords.map((vw) => (
                  <label key={vw.id} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={selectedWordIds.has(vw.id)}
                      onChange={() => {
                        setSelectedWordIds((prev) => {
                          const next = new Set(prev);
                          if (next.has(vw.id)) next.delete(vw.id);
                          else next.add(vw.id);
                          return next;
                        });
                      }}
                      className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary"
                    />
                    <div>
                      <p className="text-sm font-medium text-on-surface">{vw.targetWord}</p>
                      <p className="text-xs text-on-surface-variant">{vw.translationText}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => router.push("/home")}
              className="flex-1 border border-outline-variant text-on-surface px-5 py-3 rounded-xl font-medium text-sm hover:bg-surface-container-high transition-colors"
            >
              {vocabWords.length > 0 ? "Skip" : "Back to Home"}
            </button>
            {vocabWords.length > 0 && (
              <button
                onClick={handleAddVocab}
                disabled={addingVocab}
                className="flex-1 bg-primary text-on-primary px-5 py-3 rounded-xl font-semibold text-sm shadow-sm hover:bg-primary-container transition-colors disabled:opacity-50"
              >
                {addingVocab ? "Adding..." : `Add Selected (${selectedWordIds.size})`}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md px-margin-mobile h-16 flex items-center justify-between border-b border-outline-variant/10">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined text-on-surface">close</span>
          </button>
          <Logo size={32} />
          <div className="flex flex-col">
            <span className="text-xs text-on-surface-variant">Experience</span>
          </div>
        </div>
        {isReview && <span className="text-xs text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">Review</span>}
      </header>

      <main className="flex-grow flex flex-col max-w-[1200px] mx-auto w-full gap-6 px-margin-mobile py-6 pb-32">
        {/* Hero + Audio */}
        <section className="w-full space-y-6">
          <HeroMedia
            slug={data.scenarioSlug ?? undefined}
            mediaUrl={data.imageUrl}
            altText={data.title}
            aspectRatio="aspect-video md:aspect-[21/9]"
            className="w-full rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="absolute bottom-4 left-4 z-30">
              <h2 className="font-headline text-2xl text-white drop-shadow-lg">{data.title}</h2>
              <p className="text-white/80 text-sm">{data.duration}</p>
            </div>
          </HeroMedia>

          {/* Waveform + Controls */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-outline-variant/30">
            {/* Dynamic Equalizer Waveform Bars */}
            <div className="flex items-end justify-between h-16 gap-1 mb-4 px-2 overflow-hidden">
              {Array.from({ length: 48 }).map((_, i) => {
                const progressRatio = totalSeconds > 0 ? currentTime / totalSeconds : 0;
                const barRatio = i / 48;
                const isPlayed = barRatio <= progressRatio;
                const heights = [30, 45, 60, 80, 50, 35, 70, 90, 65, 40, 55, 75, 30, 60, 85, 45, 65, 95, 50, 35, 75, 60, 40, 80];
                const baseHeight = heights[i % heights.length];

                return (
                  <div
                    key={i}
                    className={`w-1.5 rounded-t-full transition-all duration-300 ${isPlayed
                        ? `bg-primary ${isPlaying ? "animate-eq" : ""}`
                        : "bg-primary/20"
                      }`}
                    style={{
                      height: `${baseHeight}%`,
                      animationDelay: `${(i % 6) * 0.1}s`,
                      animationDuration: `${0.4 + (i % 3) * 0.15}s`,
                    }}
                  />
                );
              })}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-on-surface-variant min-w-[36px]">{formatMMSS(currentTime)}</span>
              <div className="flex items-center gap-4 md:gap-6">
                <button
                  onClick={handleReplay3}
                  className="flex items-center gap-1 text-on-surface-variant hover:text-primary font-bold text-xs bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant/30 hover:border-primary transition-colors cursor-pointer"
                  title="Rewind 3 seconds"
                >
                  <span className="material-symbols-outlined text-[16px]">replay</span>
                  <span>-3s</span>
                </button>

                <button
                  onClick={togglePlay}
                  className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all shadow-md cursor-pointer"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {isPlaying ? "pause" : "play_arrow"}
                  </span>
                </button>

                <button
                  onClick={handleForward3}
                  className="flex items-center gap-1 text-on-surface-variant hover:text-primary font-bold text-xs bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant/30 hover:border-primary transition-colors cursor-pointer"
                  title="Forward 3 seconds"
                >
                  <span>+3s</span>
                  <span className="material-symbols-outlined text-[16px]" style={{ transform: "scaleX(-1)" }}>replay</span>
                </button>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant min-w-[36px] text-right">{formatMMSS(totalSeconds)}</span>
            </div>
          </div>
        </section>

        {/* Content Stack */}
        <div className="flex flex-col gap-6">
          {/* Transcript */}
          <section className="space-y-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-outline-variant/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline text-xl text-on-surface">Transcript</h3>
                <button onClick={() => setShowTranslation(!showTranslation)} className="text-primary text-sm hover:underline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">translate</span>
                  {showTranslation ? "Hide Translations" : "Show Translations"}
                </button>
              </div>
              <div className="space-y-4">
                {data.transcripts.map((line) => (
                  <div key={line.id} className="p-3 rounded-lg hover:bg-surface-container-low transition-colors">
                    {line.speaker && <span className="text-xs font-semibold text-primary mb-0.5 block">{speakerLabel(line.speaker)}</span>}
                    <p className="text-base text-on-surface leading-relaxed">{line.targetText}</p>
                    {showTranslation && <p className="text-sm text-on-surface-variant mt-1">{line.translationText}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Practice */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full" />
              <h3 className="font-headline text-xl text-on-surface">Practice</h3>
            </div>

            {/* MCQ Questions - live feedback */}
            {mcqQuestions.map((q) => (
              <div key={q.id} className="bg-white rounded-2xl p-4 shadow-sm border border-outline-variant/30">
                <div className="flex items-start gap-4 mb-4">
                  <button onClick={() => speechSynthesis.speak(new SpeechSynthesisUtterance(q.questionText))} className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl text-white">volume_up</span>
                  </button>
                  <div>
                    <p className="font-medium text-on-surface">{q.questionText}</p>
                    {q.translationText && <p className="text-sm text-on-surface-variant">{q.translationText}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  {q.options.map((opt, oi) => {
                    const isSelected = mcqSelected[q.id] === oi;
                    const isCorrectOpt = opt.correct;
                    const isAnsweredCorrectly = mcqCorrect[q.id];
                    let borderClass = "border-outline-variant";
                    if (isSelected) borderClass = isCorrectOpt ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50";
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleMcqSelect(q.id, oi, isCorrectOpt)}
                        className={`w-full flex items-center text-left p-3 bg-white border-2 rounded-xl transition-colors ${isAnsweredCorrectly && isCorrectOpt ? "border-green-500 bg-green-50" : borderClass}`}
                      >
                        <div className={`w-8 h-8 flex items-center justify-center rounded-lg mr-3 text-sm font-semibold ${isAnsweredCorrectly && isCorrectOpt ? "bg-green-500 text-white" : isSelected && !isCorrectOpt ? "bg-red-500 text-white" : "bg-surface-container-highest text-on-surface-variant"}`}>
                          {String.fromCharCode(65 + oi)}
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium">{opt.targetText}</span>
                          <span className="text-xs text-on-surface-variant ml-2">({opt.translationText})</span>
                        </div>
                        {isAnsweredCorrectly && isCorrectOpt && (
                          <span className="material-symbols-outlined text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Matching Exercise - fixed: shuffled independent columns */}
            {matchingQuestion && matchingPairs.length > 0 && (
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-outline-variant/30">
                <h4 className="text-xs text-on-surface-variant uppercase tracking-wider mb-4 font-semibold">Vocabulary Match</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    {matchShuffledTarget.map((targetText) => {
                      const pair = matchingPairs.find((p) => p.targetText === targetText);
                      const isSelected = matchSelectedTarget === targetText;
                      return (
                        <button
                          key={targetText}
                          onClick={() => handleMatchingTargetSelect(targetText)}
                          className={`w-full p-3 rounded-lg border text-left text-sm transition-colors ${pair?.matched ? "border-green-500 bg-green-50 text-green-800" : isSelected ? "border-primary bg-primary/5" : "border-outline-variant bg-white hover:border-primary"}`}
                        >
                          {targetText}
                        </button>
                      );
                    })}
                  </div>
                  <div className="space-y-2">
                    {matchShuffledEnglish.map((english) => {
                      const pair = matchingPairs.find((p) => p.translationText === english);
                      const isWrong = matchWrong && matchSelectedTarget === null && pair && !pair.matched;
                      return (
                        <button
                          key={english}
                          onClick={() => handleMatchingEnglishSelect(english)}
                          className={`w-full p-3 rounded-lg border text-left text-sm transition-colors ${pair?.matched ? "border-green-500 bg-green-50 text-green-800" : isWrong ? "border-red-500 bg-red-50" : "border-outline-variant bg-white hover:border-primary"}`}
                        >
                          {english}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* Bonus Challenge Section - placed after Practice, before Complete button */}
        <section className="max-w-[1200px] mx-auto w-full">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-outline-variant/30">
            <h4 className="font-headline text-lg text-on-surface ">Bonus Challenge</h4>
            <p className=" text-sm text-on-surface mb-3">Do any one challenge and earn upto +20 XP</p>

            {/* 3-tab toggle */}
            <div className="flex p-1 bg-surface-container-high rounded-xl gap-1 mb-4">
              {CHALLENGE_TABS.map((type, i) => {
                const tabDone = type === "VOCAB_MATCH" ? tabVocabCompleted : type === "ARRANGE_DIALOGUE" ? tabArrangeCompleted : tabBestCompleted;
                return (
                  <button
                    key={type}
                    onClick={() => setActiveTab(i)}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium text-center transition-colors flex items-center justify-center gap-1 ${activeTab === i ? "bg-white shadow-sm text-primary" : "text-on-surface-variant hover:bg-surface-variant/50"}`}
                  >
                    {TAB_LABELS[type]}
                    {tabDone && (
                      <span className="material-symbols-outlined text-green-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            {activeTab === 0 && (
              <div className="space-y-3">
                {vocabMatchPairs.length === 0 ? (
                  <p className="text-xs text-on-surface-variant text-center py-4">No vocabulary match available</p>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        {vocabLeftOrder.map((idx) => {
                          const vp = vocabMatchPairs[idx];
                          return (
                            <button
                              key={vp.item.id}
                              onClick={() => { if (!vp.matched) setVocabSelected(vp.item.text); }}
                              className={`w-full p-3 rounded-lg border text-left text-sm transition-colors ${vp.matched ? "border-green-500 bg-green-50 text-green-800" : vocabSelected === vp.item.text ? "border-primary bg-primary/5" : "border-outline-variant bg-white hover:border-primary"}`}
                            >
                              {vp.item.text}
                            </button>
                          );
                        })}
                      </div>
                      <div className="space-y-2">
                        {vocabRightOrder.map((idx) => {
                          const vp = vocabMatchPairs[idx];
                          return (
                            <button
                              key={vp.item.id + "-en"}
                              onClick={() => {
                                if (!vocabSelected || vp.matched) return;
                                const selectedItem = vocabMatchPairs.find((p) => p.item.text === vocabSelected);
                                if (selectedItem && selectedItem.item.correctValue === vp.item.correctValue) {
                                  setVocabMatchPairs((prev) => prev.map((p) => p.item.id === selectedItem.item.id || p.item.id === vp.item.id ? { ...p, matched: true } : p));
                                }
                                setVocabSelected(null);
                              }}
                              disabled={vp.matched}
                              className={`w-full p-3 rounded-lg border text-left text-sm transition-colors ${vp.matched ? "border-green-500 bg-green-50 text-green-800" : "border-outline-variant bg-white hover:border-primary"}`}
                            >
                              {vp.item.translation}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {activeTab === 1 && (
              <div className="space-y-2">
                {!arrangeChallenge ? (
                  <p className="text-xs text-on-surface-variant text-center py-4">No dialogue arrangement available</p>
                ) : (
                  <>
                    <p className="text-xs text-on-surface-variant mb-2">Tap lines in the correct order:</p>
                    {arrangeWrong && (
                      <p className="text-xs text-red-500 text-center mb-2">Incorrect order, try again</p>
                    )}
                    {arrangeShuffled.map((item, i) => {
                      const position = arrangeOrder.indexOf(i);
                      return (
                        <button
                          key={item.id}
                          onClick={() => { if (position < 0 && !arrangeWrong) setArrangeOrder((prev) => [...prev, i]); }}
                          disabled={arrangeWrong}
                          className={`w-full p-3 rounded-lg border text-left text-sm transition-colors flex items-center gap-3 ${position >= 0 ? "border-green-500 bg-green-50" : "border-outline-variant bg-white hover:border-primary"}`}
                        >
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${position >= 0 ? "bg-green-500 text-white" : "bg-surface-container-highest text-on-surface-variant"}`}>
                            {position >= 0 ? position + 1 : "?"}
                          </span>
                          <span>{item.text}</span>
                        </button>
                      );
                    })}
                    {arrangeOrder.length > 0 && !arrangeWrong && (
                      <button onClick={() => setArrangeOrder([])} className="text-xs text-primary hover:underline">Reset order</button>
                    )}
                  </>
                )}
              </div>
            )}

            {activeTab === 2 && (
              <div className="space-y-2">
                {bestShuffled.length === 0 || !bestChallenge ? (
                  <p className="text-xs text-on-surface-variant text-center py-4">No best response challenge available</p>
                ) : (
                  <>
                    {bestChallenge.question && (
                      <div className="bg-surface-container-low rounded-xl p-4 mb-3 border border-outline-variant/30">
                        <p className="text-sm font-medium text-on-surface">{bestChallenge.question}</p>
                        {bestChallenge.questionTranslation && (
                          <p className="text-xs text-on-surface-variant mt-1">{bestChallenge.questionTranslation}</p>
                        )}
                      </div>
                    )}
                    <p className="text-xs text-on-surface-variant mb-2">Select the best response:</p>
                    {bestShuffled.map((item, i) => {
                      const isSelected = bestResponseSelected === i;
                      const isCorrectItem = item.correctValue === "correct";
                      return (
                        <button
                          key={item.id}
                          onClick={() => { setBestResponseSelected(i); if (isCorrectItem) setBestResponseCorrect(true); }}
                          className={`w-full p-3 rounded-lg border text-left text-sm transition-colors ${isSelected && isCorrectItem ? "border-green-500 bg-green-50" : isSelected && !isCorrectItem ? "border-red-500 bg-red-50" : "border-outline-variant bg-white hover:border-primary"}`}
                        >
                          <span className="font-medium">{item.text}</span>
                          {item.translation && <span className="text-xs text-on-surface-variant ml-2">({item.translation})</span>}
                        </button>
                      );
                    })}
                    {bestResponseSelected !== null && !bestResponseCorrect && (
                      <p className="text-xs text-red-500 text-center">Not quite, try again</p>
                    )}
                  </>
                )}
              </div>
            )}

          </div>
        </section>

        {/* AI Tutor - collapsed by default */}
        <section className="max-w-[1200px] mx-auto w-full">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-outline-variant/30">
            <button
              onClick={() => setShowAiChat(!showAiChat)}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                <h4 className="font-headline text-lg text-on-surface">Practice with AI Tutor (Optional)</h4>
              </div>
              <span className={`material-symbols-outlined transition-transform ${showAiChat ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </button>
            {showAiChat && (
              <div className="mt-4 min-h-[300px]">
                <ChatUI
                  context={{ experienceId: data.id }}
                  experienceTitle={data.title}
                  roleSuggestions={[...new Set(data.transcripts.map(t => t.speaker).filter(Boolean))] as string[]}
                  placeholder="Type your response in Italian..."
                />
              </div>
            )}
          </div>
        </section>

        {/* Complete Lesson button - at the very end */}
        <section className="max-w-[1200px] mx-auto w-full">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-outline-variant/30">
            <button
              onClick={handleComplete}
              disabled={!canComplete || completing}
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-semibold text-lg shadow-sm disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-all"
            >
              {(() => {
                let text = "Complete Lesson";
                if (completing) text = "Completing...";
                else if (!isReview) text = `Complete Lesson +${bonusReady ? "70" : "50"} XP`;
                else if (!bonusClaimed && bonusReady) text = "Claim Bonus +20 XP";
                else if (!bonusClaimed) text = "Review Complete";
                else text = "Completed \u2713";
                return text;
              })()}
            </button>
            {!isReview && !bonusReady && (
              <p className="text-xs text-on-surface-variant text-center mt-2">Complete the bonus challenge for +20 XP</p>
            )}
            {isReview && !bonusClaimed && (
              <p className="text-xs text-on-surface-variant text-center mt-2">Complete the bonus challenge to claim +20 XP</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
