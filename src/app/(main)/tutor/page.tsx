"use client";

import { ChatUI } from "@/components/ChatUI";

export default function TutorPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-[720px] mx-auto px-margin-mobile py-6">
        <div className="mb-6">
          <h1 className="font-headline text-2xl text-on-surface font-bold">AI Tutor</h1>
          <p className="text-sm text-on-surface-variant">
            Practice Italian conversation, ask about grammar, or roleplay any scenario.
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-outline-variant/30 p-4 shadow-sm min-h-[500px]">
          <ChatUI />
        </div>
      </div>
    </div>
  );
}
