import { create } from "zustand";

interface VocabWord {
  wordId: number; targetWord: string; translationText: string;
  article: string | null; plural: string | null;
  status: "learning" | "review" | "mastered";
  notes: string | null; scenarioId: number | null;
  addedAt: string; scenarios: { id: number; name: string }[];
  timesCompleted: number;
}

interface VocabState {
  words: VocabWord[];
  loaded: boolean;
  fetch: () => Promise<void>;
  refresh: () => Promise<void>;
  updateStatus: (wordId: number, status: "learning" | "review" | "mastered") => Promise<void>;
  updateWord: (wordId: number, updates: Partial<VocabWord>) => void;
  deleteWord: (wordId: number) => void;
}

export const useVocabStore = create<VocabState>((set, get) => ({
  words: [],
  loaded: false,
  fetch: async () => {
    if (get().loaded) return;
    await get().refresh();
  },
  refresh: async () => {
    try {
      const res = await fetch("/api/vocabulary");
      const data = await res.json();
      set({ words: data.words || [], loaded: true });
    } catch {}
  },
  updateStatus: async (wordId, status) => {
    const prev = get().words;
    set((s) => ({ words: s.words.map((w) => w.wordId === wordId ? { ...w, status } : w) }));
    try {
      await fetch("/api/vocabulary", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wordId, status }),
      });
    } catch {
      set({ words: prev });
    }
  },
  updateWord: (wordId, updates) => {
    set((s) => ({ words: s.words.map((w) => w.wordId === wordId ? { ...w, ...updates } as VocabWord : w) }));
  },
  deleteWord: (wordId) => {
    set((s) => ({ words: s.words.filter((w) => w.wordId !== wordId) }));
  },
}));
