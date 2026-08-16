"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { Logo } from "@/components/Logo";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { useProfileStore } from "@/lib/stores/profile-store";

const LEVELS = ["A1", "A2", "B1", "B2"] as const;

const COFFEE_URL = process.env.NEXT_PUBLIC_COFFEE_URL;

export default function ProfilePage() {
  const { data: session } = useSession();
  const { cefrLevel, fetch: fetchProfile, updateCefr } = useProfileStore();
  const [showLogout, setShowLogout] = useState(false);
  const [savedLevel, setSavedLevel] = useState<string>(cefrLevel);
  const [selectedLevel, setSelectedLevel] = useState<string>(cefrLevel);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { fetchProfile(); }, [fetchProfile]);

  useEffect(() => { setSavedLevel(cefrLevel); setSelectedLevel(cefrLevel); }, [cefrLevel]);

  const isDirty = selectedLevel !== savedLevel;

  const handleSave = async () => {
    if (!selectedLevel || !isDirty) return;
    setSaving(true);
    setSaved(false);
    try {
      await updateCefr(selectedLevel);
      setSavedLevel(selectedLevel);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch {}
    setSaving(false);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-md mx-auto px-margin-mobile pt-8 space-y-6">
        {/* Profile card */}
        <div className="bg-white rounded-2xl border border-outline-variant/30 p-8 text-center shadow-sm">
          <Logo size={48} className="mx-auto mb-3" />
          <h2 className="font-headline text-xl text-on-surface font-bold">Profile</h2>
          <p className="text-sm text-on-surface-variant mt-1 truncate">{session?.user?.email}</p>
        </div>

        {/* CEFR level card */}
        <div className="bg-white rounded-2xl border border-outline-variant/30 p-8 shadow-sm">
          <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-4">
            Your CEFR Level
          </label>
          <div className="flex gap-3">
            {LEVELS.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`flex-1 py-3 rounded-xl text-sm font-bold border transition-all ${
                  selectedLevel === lvl
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-surface-container-low text-on-surface-variant border-outline-variant hover:border-primary"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <button
            onClick={handleSave}
            disabled={!isDirty || saving}
            className="mt-6 w-full h-12 flex items-center justify-center gap-2 bg-primary text-on-primary rounded-xl font-semibold transition-all duration-200 hover:bg-primary-container active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? (
              <span className="material-symbols-outlined animate-spin">progress_activity</span>
            ) : (
              <span className="material-symbols-outlined text-lg">save</span>
            )}
            <span>{saving ? "Saving..." : "Save Changes"}</span>
          </button>

          {saved && (
            <p className="text-sm text-green-600 mt-3 font-medium text-center flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-lg">check_circle</span>
              Level updated successfully!
            </p>
          )}
        </div>

        {COFFEE_URL && (
          <div className="bg-white rounded-2xl border border-outline-variant/30 p-8 shadow-sm">
            <div className="text-center mb-4">
              <span className="material-symbols-outlined text-4xl text-primary">local_cafe</span>
              <h3 className="font-headline text-lg text-on-surface font-bold mt-2">Enjoying CanGo?</h3>
              <p className="text-sm text-on-surface-variant mt-1">
                CanGo is free during beta. If the app helps you, consider buying me a coffee.
              </p>
            </div>
            <a
              href={COFFEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-primary text-on-primary font-semibold px-5 py-3 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-lg">local_cafe</span>
              Buy me a coffee
            </a>
          </div>
        )}

        {/* Logout card */}
        <div className="bg-white rounded-2xl border border-outline-variant/30 p-8 shadow-sm">
          <button
            onClick={() => setShowLogout(true)}
            className="flex items-center justify-center gap-2 w-full border border-outline-variant text-on-surface font-medium px-5 py-3 rounded-xl hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            Logout
          </button>
        </div>
      </div>

      <ConfirmDialog
        open={showLogout}
        title="Logout"
        message="Are you sure you want to log out?"
        confirmLabel="Logout"
        onConfirm={() => signOut({ callbackUrl: "/" })}
        onCancel={() => setShowLogout(false)}
      />
    </div>
  );
}
