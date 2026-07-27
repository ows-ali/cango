"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ChatUI } from "@/components/ChatUI";
import { TeacherAvatar } from "@/components/TeacherAvatar";
import { useContentStore } from "@/lib/stores/content-store";
import { useProfileStore } from "@/lib/stores/profile-store";

interface CompletedData {
  scenarios: { slug: string; name: string }[];
  count: number;
}

export default function TutorPage() {
  const { fetch: fetchContent } = useContentStore();
  const { cefrLevel: cefr, fetch: fetchProfile } = useProfileStore();
  const [completed, setCompleted] = useState<CompletedData>({ scenarios: [], count: 0 });

  useEffect(() => { fetchContent(); fetchProfile(); }, [fetchContent, fetchProfile]);

  useEffect(() => {
    fetch("/api/user/experience/completed")
      .then((r) => r.json())
      .then((data) => setCompleted(data))
      .catch(() => {});
  }, []);

  const suggestions: string[] = [];

  const completedNames = completed.scenarios.map((s) => s.name);
  if (completed.scenarios.length > 0) {
    completed.scenarios.forEach((s) => {
      suggestions.push(`Roleplay: ${s.name}`);
    });
  }

  suggestions.push("Revise vocabulary", "Practice grammar", "Free conversation");

  const scenarioList =
    completed.scenarios.length > 0
      ? completed.scenarios.map((s) => s.name).join(", ")
      : "";

  const welcomeMessage = `Ciao! You're at ${cefr} level.${
    scenarioList ? ` I see you've done ${scenarioList}.` : ""
  } What would you like to practice today?`;

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-[720px] mx-auto px-margin-mobile py-6">
        <div className="mb-6 flex items-start gap-4 bg-primary-container rounded-2xl p-5">
          <TeacherAvatar size={56} className="shrink-0" />
          <div className="min-w-0">
            <h1 className="font-headline text-2xl text-on-primary-container font-bold">AI Tutor</h1>
            <p className="text-sm text-on-primary-container/80">
              Practice Italian conversation, ask about grammar, or roleplay any scenario.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-outline-variant/30 p-4 shadow-sm min-h-[500px]">
          <ChatUI
            welcomeMessage={welcomeMessage}
            placeholder="Type your message or pick a suggestion above..."
            suggestions={suggestions}
          />
        </div>
      </div>
    </div>
  );
}