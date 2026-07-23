"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useContent } from "@/lib/content-context";
import { InstallPrompt } from "@/components/InstallPrompt";
import { TeacherAvatar } from "@/components/TeacherAvatar";

interface Scenario {
  id: number;
  slug: string;
  name: string;
  description: string | null;
  imageUrl: string | null;
  levels?: { level: { id: number; name: string } }[];
}

const LEVEL_MAP: Record<string, number> = { A1: 4, A2: 1, B1: 2, B2: 3 };
const REVERSE_LEVEL_MAP: Record<number, string> = { 4: "A1", 1: "A2", 2: "B1", 3: "B2" };
const HERO_IMAGES: Record<string, string> = {
  transportation: "/images/scenario-transportation.jpg",
  doctor: "/images/scenario-doctor.jpg",
  "job-interview": "/images/scenario-job-interview.jpg",
};

export default function HomePage() {
  const { data: session, status } = useSession();
  const { content: rawScenarios, loaded } = useContent();
  const scenarios = (rawScenarios as Scenario[]) || [];
  const [userLevel, setUserLevel] = useState<string>("B1");
  const [scenarioLevels, setScenarioLevels] = useState<Record<number, string>>({});

  useEffect(() => {
    if (status !== "authenticated") return;
    fetch("/api/user/profile").then((r) => r.json()).then((u) => {
      if (u.cefrLevel) setUserLevel(u.cefrLevel);
    }).catch(() => { });
    if (scenarios.length > 0) {
      const ids = scenarios.map((s) => s.id).join(",");
      fetch(`/api/user/scenario-setting/batch?ids=${ids}`)
        .then((r) => r.json())
        .then((res) => {
          const map: Record<number, string> = {};
          for (const [id, data] of Object.entries(res)) {
            const levelId = (data as { selectedLevelId: number | null }).selectedLevelId;
            if (levelId && REVERSE_LEVEL_MAP[levelId]) map[Number(id)] = REVERSE_LEVEL_MAP[levelId];
          }
          setScenarioLevels(map);
        }).catch(() => { });
    }
  }, [status, scenarios.length]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1280px] mx-auto px-margin-mobile py-6 pb-24">
        <InstallPrompt />

        <section className="mb-8 flex items-start gap-4 bg-primary-container rounded-2xl p-5">
          <TeacherAvatar size={72} className="shrink-0" />
          <div className="min-w-0">
            <h1 className="font-headline text-3xl md:text-4xl text-on-primary-container mb-1">Buongiorno!</h1>
            <p className="text-lg text-on-primary-container/90 mb-2">Ready to master your next Italy experience today?</p>
            <p className="text-sm italic text-on-primary-container/70">Our no experience is locked and never will be.</p>
          </div>
        </section>

        {/* My Italy */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h3 className="font-headline text-2xl text-on-surface">My Italy</h3>
          </div>

          {!loaded && scenarios.length === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-pulse">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30">
                  <div className="aspect-[16/9] bg-surface-container-highest" />
                  <div className="p-4 space-y-3">
                    <div className="h-5 bg-surface-container-highest rounded w-1/3" />
                    <div className="h-4 bg-surface-container-highest rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {scenarios.filter((s) =>
              s.levels?.some((sl) => sl.level.name === userLevel)
            ).map((s, i) => (
              <Link key={s.id} href={`/scenario/${s.slug}`} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="bg-white flex flex-col rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img src={HERO_IMAGES[s.slug] || "/images/onboarding-bg.jpg"} alt={s.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-1">
                      {(["A1", "A2", "B1", "B2"] as const).map((lvl) => {
                        const levelNum = LEVEL_MAP[lvl];
                        const hasLevel = s.levels?.some((sl) => sl.level.id === levelNum);
                        const isActive = (scenarioLevels[s.id] || userLevel) === lvl;
                        return (
                          <span
                            key={lvl}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${!hasLevel
                              ? "bg-gray-100 text-gray-400 border-gray-200 line-through"
                              : isActive
                                ? "bg-primary text-white border-primary shadow-sm"
                                : "bg-white/80 text-on-surface-variant border-outline-variant"
                              }`}
                          >
                            {lvl}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h4 className="text-lg font-bold text-on-surface mb-1">{s.name}</h4>
                    <p className="text-sm text-on-surface-variant mb-4 flex-1">{s.description}</p>
                    <div className="flex items-center justify-end">
                      <span className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold text-xs shadow-sm hover:shadow-md transition-shadow">
                        Start &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Coming Soon */}
            <div className="opacity-0 animate-fadeIn flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-dashed border-primary/30 p-6 text-center hover:border-secondary/50 transition-colors h-full" style={{ animationDelay: `${scenarios.filter(s => s.levels?.some(sl => sl.level.name === userLevel)).length * 100}ms` }}>
              <span className="material-symbols-outlined text-4xl text-primary mb-2">rocket_launch</span>
              <h4 className="text-base font-bold text-on-surface mb-1">More Coming Soon</h4>
              <p className="text-xs text-on-surface-variant">Exciting new scenarios are on the way!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
