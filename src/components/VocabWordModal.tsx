"use client";

import { useState } from "react";

interface VocabWord {
  wordId: number;
  targetWord: string;
  translationText: string;
  article: string | null;
  plural: string | null;
  status: "learning" | "review" | "mastered";
  notes: string | null;
  scenarioId: number | null;
  scenarios: { id: number; name: string }[];
}

interface Props {
  word: VocabWord;
  allScenarios: { id: number; name: string }[];
  onClose: () => void;
  onUpdated: (wordId: number, updates: { status?: string; notes?: string; scenarioId?: number | null }) => void;
  onDeleted: (wordId: number) => void;
}

const STATUS_OPTIONS: { value: "learning" | "review" | "mastered"; label: string }[] = [
  { value: "learning", label: "Learning" },
  { value: "review", label: "Review" },
  { value: "mastered", label: "Mastered" },
];

export function VocabWordModal({ word, allScenarios, onClose, onUpdated, onDeleted }: Props) {
  const [status, setStatus] = useState(word.status);
  const [notes, setNotes] = useState(word.notes || "");
  const [scenarioId, setScenarioId] = useState<number | null>(word.scenarioId);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);

  const hasChanges = status !== word.status || notes !== (word.notes || "") || scenarioId !== word.scenarioId;

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/vocabulary", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wordId: word.wordId, status, notes: notes || null, scenarioId }),
      });
      if (res.ok) {
        onUpdated(word.wordId, { status, notes: notes || null, scenarioId });
        onClose();
      }
    } catch {}
    setSaving(false);
  };

  const handleDelete = async () => {
    if (confirmingDelete) {
      setDeleting(true);
      try {
        const res = await fetch("/api/vocabulary", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ wordId: word.wordId }),
        });
        if (res.ok) onDeleted(word.wordId);
      } catch {}
      setDeleting(false);
    } else {
      setConfirmingDelete(true);
    }
  };

  const displayScenarios = scenarioId
    ? allScenarios.filter((s) => s.id === scenarioId)
    : word.scenarios;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl border border-outline-variant/30 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="p-6 pb-4 border-b border-outline-variant/20">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl font-bold text-on-surface">
              {word.article ? `${word.article} ` : ""}{word.targetWord}
            </h2>
            <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <p className="text-sm text-on-surface-variant">{word.translationText}</p>
          {word.plural && (
            <p className="text-xs text-on-surface-variant mt-0.5">Plural: {word.plural}</p>
          )}
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">

          {/* Scenarios */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-2">
              Scenarios
            </label>
            <div className="flex flex-wrap gap-1.5">
              {displayScenarios.length > 0 ? displayScenarios.map((s) => (
                <span key={s.id} className="text-xs text-primary bg-primary/5 px-2 py-1 rounded font-medium border border-primary/10">
                  {s.name}
                </span>
              )) : (
                <span className="text-xs text-on-surface-variant">General</span>
              )}
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-2">
              Status
            </label>
            <div className="flex gap-2">
              {STATUS_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setStatus(opt.value)}
                  className={`flex-1 py-2 rounded-lg text-sm font-bold border transition-all ${
                    status === opt.value
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-surface-container-low text-on-surface-variant border-outline-variant hover:border-primary"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-2">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add your notes about this word..."
              rows={3}
              className="w-full px-3 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed resize-none transition-all"
            />
          </div>

          {/* Scenario assignment */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-2">
              Assign to Scenario
            </label>
            <select
              value={scenarioId ?? ""}
              onChange={(e) => setScenarioId(e.target.value ? parseInt(e.target.value) : null)}
              className="w-full px-3 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-all"
            >
              <option value="">General (no scenario)</option>
              {allScenarios.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Footer */}
        {confirmingDelete ? (
          <div className="p-6 pt-4 border-t border-outline-variant/20 space-y-3">
            <p className="text-sm text-on-surface-variant">Remove this word from your vocabulary?</p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setConfirmingDelete(false)}
                className="px-5 py-2.5 rounded-xl border border-outline-variant text-on-surface font-medium text-sm hover:bg-surface-container-high transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="px-5 py-2.5 rounded-xl bg-error text-white font-semibold text-sm shadow-sm hover:opacity-90 transition-colors disabled:opacity-50"
              >
                {deleting ? "Removing..." : "Yes, Remove"}
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between gap-3">
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="text-sm text-error font-medium px-3 py-2 rounded-lg hover:bg-error/5 transition-colors disabled:opacity-50"
            >
              Remove
            </button>
            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-outline-variant text-on-surface font-medium text-sm hover:bg-surface-container-high transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={!hasChanges || saving}
                className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold text-sm shadow-sm hover:bg-primary-container transition-colors disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
