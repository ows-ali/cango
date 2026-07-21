"use client";

import { useState } from "react";

interface Props {
  allScenarios: { id: number; name: string }[];
  onClose: () => void;
  onAdded: () => void;
}

export function VocabAddModal({ allScenarios, onClose, onAdded }: Props) {
  const [targetWord, setTargetWord] = useState("");
  const [translationText, setTranslationText] = useState("");
  const [article, setArticle] = useState("");
  const [plural, setPlural] = useState("");
  const [scenarioId, setScenarioId] = useState<number | null>(null);
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const canSave = targetWord.trim() && translationText.trim() && !saving;

  const handleSubmit = async () => {
    if (!canSave) return;
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/vocabulary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetWord: targetWord.trim(),
          translationText: translationText.trim(),
          article: article.trim() || null,
          plural: plural.trim() || null,
          scenarioId,
          notes: notes.trim() || null,
        }),
      });
      if (res.ok) {
        onAdded();
      } else {
        const data = await res.json();
        setError(data.error || "Failed to add word");
      }
    } catch {
      setError("Something went wrong");
    }
    setSaving(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl border border-outline-variant/30 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 pb-4 border-b border-outline-variant/20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-on-surface">Add New Word</h2>
            <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-1.5">
                Italian *
              </label>
              <input
                value={targetWord}
                onChange={(e) => setTargetWord(e.target.value)}
                placeholder="e.g. biglietto"
                className="w-full px-3 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-all"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-1.5">
                English *
              </label>
              <input
                value={translationText}
                onChange={(e) => setTranslationText(e.target.value)}
                placeholder="e.g. ticket"
                className="w-full px-3 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-1.5">
                Article
              </label>
              <input
                value={article}
                onChange={(e) => setArticle(e.target.value)}
                placeholder="il / la / l'"
                className="w-full px-3 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-all"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-1.5">
                Plural
              </label>
              <input
                value={plural}
                onChange={(e) => setPlural(e.target.value)}
                placeholder="e.g. biglietti"
                className="w-full px-3 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-1.5">
              Scenario (optional)
            </label>
            <select
              value={scenarioId ?? ""}
              onChange={(e) => setScenarioId(e.target.value ? parseInt(e.target.value) : null)}
              className="w-full px-3 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-all"
            >
              <option value="">None (General)</option>
              {allScenarios.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-1.5">
              Notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any notes for this word..."
              rows={2}
              className="w-full px-3 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed resize-none transition-all"
            />
          </div>

          {error && (
            <p className="text-sm text-error text-center">{error}</p>
          )}
        </div>

        <div className="p-6 pt-4 border-t border-outline-variant/20 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-outline-variant text-on-surface font-medium text-sm hover:bg-surface-container-high transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!canSave}
            className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold text-sm shadow-sm hover:bg-primary-container transition-colors disabled:opacity-50 flex items-center gap-1.5"
          >
            {saving ? (
              <>
                <span className="material-symbols-outlined text-lg animate-spin">progress_activity</span>
                Adding...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">add</span>
                Add to Vocabulary
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
