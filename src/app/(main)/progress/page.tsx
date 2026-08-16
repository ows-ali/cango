"use client";

import { useEffect, useState } from "react";
import { PendingLink } from "@/components/PendingLink";

interface ScenarioProgress {
  id: number;
  name: string;
  slug: string;
  total: number;
  completed: number;
  progress: number;
}

interface StatsData {
  totalXp: number;
  currentStreak: number;
  longestStreak: number;
  todayXp: number;
  completedCount: number;
  weeklyActivity: { date: string; xpEarned: number }[];
  scenarioProgress: ScenarioProgress[];
}

const DAILY_GOAL_XP = Number(process.env.NEXT_PUBLIC_DAILY_GOAL_XP || 50);

export default function ProgressPage() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/user/stats")
      .then((res) => res.json())
      .then((data) => {
        if (
          data &&
          Array.isArray(data.weeklyActivity) &&
          Array.isArray(data.scenarioProgress)
        ) {
          setStats(data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const todayPct = stats ? Math.min(100, Math.round((stats.todayXp / DAILY_GOAL_XP) * 100)) : 0;
  const maxDayXp = stats ? Math.max(1, ...stats.weeklyActivity.map((d) => d.xpEarned)) : 1;

  const weekLabels = (dateStr: string) => {
    const d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString(undefined, { weekday: "short" }).slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-[1280px] mx-auto px-margin-mobile py-6">
        <div className="mb-6">
          <h1 className="font-headline text-3xl md:text-4xl text-on-surface mb-1">Your Progress</h1>
          <p className="text-on-surface-variant">Keep the streak alive — small steps every day.</p>
        </div>

        {loading && !stats && (
          <div className="space-y-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-28 bg-white rounded-2xl border border-outline-variant/30 animate-pulse" />
              ))}
            </div>
            <div className="h-44 bg-white rounded-2xl border border-outline-variant/30 animate-pulse" />
          </div>
        )}

        {!loading && !stats && (
          <div className="bg-white rounded-2xl border border-outline-variant/30 p-8 text-center">
            <p className="text-on-surface-variant">Couldn&apos;t load your progress. Please try again.</p>
          </div>
        )}

        {stats && (
          <div className="space-y-5">
            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl border border-outline-variant/30 p-5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-2xl">stars</span>
                <p className="text-2xl font-bold text-on-surface mt-2">{stats.totalXp}</p>
                <p className="text-xs text-on-surface-variant font-medium">Total XP</p>
              </div>
              <div className="bg-white rounded-2xl border border-outline-variant/30 p-5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-2xl">local_fire_department</span>
                <p className="text-2xl font-bold text-on-surface mt-2">{stats.currentStreak}</p>
                <p className="text-xs text-on-surface-variant font-medium">Current streak</p>
              </div>
              <div className="bg-white rounded-2xl border border-outline-variant/30 p-5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-2xl">emoji_events</span>
                <p className="text-2xl font-bold text-on-surface mt-2">{stats.longestStreak}</p>
                <p className="text-xs text-on-surface-variant font-medium">Longest streak</p>
              </div>
              <div className="bg-white rounded-2xl border border-outline-variant/30 p-5 shadow-sm">
                <span className="material-symbols-outlined text-primary text-2xl">bolt</span>
                <p className="text-2xl font-bold text-on-surface mt-2">{stats.todayXp}</p>
                <p className="text-xs text-on-surface-variant font-medium">Today&apos;s XP</p>
              </div>
            </div>

            {/* Today's goal */}
            <div className="bg-primary-container rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-headline text-lg text-on-primary-container font-bold">Today&apos;s goal</h2>
                <span className="text-sm font-semibold text-on-primary-container">
                  {stats.todayXp} / {DAILY_GOAL_XP} XP
                </span>
              </div>
              <div className="h-3 bg-white/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${todayPct}%` }}
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <PendingLink href="/home" className="inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-container hover:text-on-primary-container transition-colors">
                  <span className="material-symbols-outlined text-base">play_arrow</span>
                  Practice now
                </PendingLink>
                {todayPct >= 100 && (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-on-primary-container">
                    <span className="material-symbols-outlined">check_circle</span>
                    Goal reached — nice work!
                  </span>
                )}
              </div>
              <p className="mt-3 text-xs text-on-primary-container/80">
                {stats.currentStreak > 0
                  ? `You've practiced ${stats.currentStreak} day${stats.currentStreak === 1 ? "" : "s"} in a row.`
                  : "Complete one lesson today to start your streak."}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Weekly activity */}
              <div className="bg-white rounded-2xl border border-outline-variant/30 p-6 shadow-sm">
                <h2 className="font-headline text-lg text-on-surface font-bold mb-4">Last 7 days</h2>
                <div className="flex items-end justify-between gap-2 h-32">
                  {stats.weeklyActivity.map((d, i) => (
                    <div key={d.date} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-[10px] text-on-surface-variant font-medium">{d.xpEarned || ""}</span>
                      <div
                        className={`w-full rounded-t-lg ${d.xpEarned > 0 ? "bg-primary" : "bg-surface-container-high"}`}
                        style={{ height: `${Math.max(6, (d.xpEarned / maxDayXp) * 100)}%` }}
                      />
                      <span className="text-[10px] text-on-surface-variant">{weekLabels(d.date)}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-on-surface-variant">
                  {stats.completedCount} lesson{stats.completedCount === 1 ? "" : "s"} completed in total.
                </p>
              </div>

              {/* Per-scenario progress */}
              <div className="bg-white rounded-2xl border border-outline-variant/30 p-6 shadow-sm">
                <h2 className="font-headline text-lg text-on-surface font-bold mb-4">Scenarios</h2>
                {stats.scenarioProgress.length === 0 && (
                  <p className="text-sm text-on-surface-variant">No scenarios available yet.</p>
                )}
                <div className="space-y-4">
                  {stats.scenarioProgress.map((s) => (
                    <PendingLink key={s.id} href={`/scenario/${s.slug}`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-on-surface">{s.name}</span>
                        <span className="text-xs text-on-surface-variant">
                          {s.completed}/{s.total} · {s.progress}%
                        </span>
                      </div>
                      <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${s.progress}%` }}
                        />
                      </div>
                    </PendingLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}