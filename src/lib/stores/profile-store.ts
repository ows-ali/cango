import { create } from "zustand";

const REVERSE_LEVEL_MAP: Record<number, string> = { 4: "A1", 1: "A2", 2: "B1", 3: "B2" };

interface ProfileState {
  cefrLevel: string;
  name: string | null;
  email: string | null;
  goals: string[] | null;
  scenarioLevels: Record<number, string>;
  loaded: boolean;
  fetch: () => Promise<void>;
  refresh: () => Promise<void>;
  updateCefr: (level: string) => Promise<void>;
}

export const useProfileStore = create<ProfileState>((set, get) => ({
  cefrLevel: "B1",
  name: null,
  email: null,
  goals: null,
  scenarioLevels: {},
  loaded: false,
  fetch: async () => {
    if (get().loaded) return;
    await get().refresh();
  },
  refresh: async () => {
    try {
      const [profile, settings] = await Promise.all([
        fetch("/api/user/profile").then((r) => r.json()),
        fetch("/api/user/scenario-setting/batch?ids=1,2,3,4,5,6,7,8,9,10,11,12").then((r) => r.json()),
      ]);
      const scenarioLevels: Record<number, string> = {};
      for (const [id, data] of Object.entries(settings)) {
        const levelId = (data as { selectedLevelId: number | null }).selectedLevelId;
        if (levelId && REVERSE_LEVEL_MAP[levelId]) scenarioLevels[Number(id)] = REVERSE_LEVEL_MAP[levelId];
      }
      set({
        cefrLevel: profile.cefrLevel || "B1",
        name: profile.name || null,
        email: profile.email || null,
        goals: profile.goals || null,
        scenarioLevels,
        loaded: true,
      });
    } catch {}
  },
  updateCefr: async (level: string) => {
    set({ cefrLevel: level });
    await fetch("/api/user/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cefrLevel: level }),
    });
  },
}));
