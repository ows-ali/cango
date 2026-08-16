import { create } from "zustand";

interface Scenario {
  id: number; slug: string; name: string; description: string | null;
  imageUrl: string | null; order: number;
  levels?: { level: { id: number; name: string } }[];
}

interface ContentState {
  scenarios: Scenario[];
  loaded: boolean;
  fetch: () => Promise<void>;
  getScenarioBySlug: (slug: string) => Scenario | null;
}

export const useContentStore = create<ContentState>((set, get) => ({
  scenarios: [],
  loaded: false,
  fetch: async () => {
    if (get().loaded) return;
    try {
      const res = await fetch("/api/content");
      const data = await res.json();
      set({ scenarios: data || [], loaded: true });
    } catch {
      setTimeout(() => get().fetch(), 2000);
    }
  },
  getScenarioBySlug: (slug: string) => {
    return get().scenarios.find((s) => s.slug === slug) || null;
  },
}));
