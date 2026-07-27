"use client";

import { useEffect, useState, useRef } from "react";
import { VocabWordModal } from "@/components/VocabWordModal";
import { VocabAddModal } from "@/components/VocabAddModal";
import { useVocabStore } from "@/lib/stores/vocab-store";

interface VocabWord {
  wordId: number;
  targetWord: string;
  translationText: string;
  article: string | null;
  plural: string | null;
  status: "learning" | "review" | "mastered";
  notes: string | null;
  scenarioId: number | null;
  addedAt: string;
  scenarios: { id: number; name: string }[];
  timesCompleted: number;
}

const SCENARIOS: { id: number; name: string }[] = [
  { id: 1, name: "Transportation" },
  { id: 2, name: "Doctor" },
  { id: 3, name: "Job Interview" },
  { id: 4, name: "Greetings" },
  { id: 5, name: "Numbers" },
  { id: 6, name: "Colors" },
  { id: 7, name: "Basic Needs" },
  { id: 8, name: "Restaurant" },
  { id: 9, name: "Shopping" },
  { id: 10, name: "Hotel" },
  { id: 11, name: "Emergency" },
  { id: 12, name: "Social" },
];

const STATUS_COLUMNS: { key: "learning" | "review" | "mastered"; label: string; color: string }[] = [
  { key: "learning", label: "Learning", color: "bg-blue-500" },
  { key: "review", label: "Review", color: "bg-amber-500" },
  { key: "mastered", label: "Mastered", color: "bg-green-500" },
];

export default function VocabPage() {
  const { words, loaded, fetch: fetchVocab, updateStatus, updateWord, deleteWord, refresh } = useVocabStore();
  const [filterScenario, setFilterScenario] = useState<number | "all">("all");
  const [selectedWord, setSelectedWord] = useState<VocabWord | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const dragItem = useRef<VocabWord | null>(null);

  useEffect(() => { fetchVocab(); }, [fetchVocab]);

  const handleStatusChange = async (wordId: number, newStatus: "learning" | "review" | "mastered") => {
    await updateStatus(wordId, newStatus);
  };

  const handleDragStart = (word: VocabWord) => {
    dragItem.current = word;
  };

  const handleDrop = (targetStatus: "learning" | "review" | "mastered") => {
    if (dragItem.current && dragItem.current.status !== targetStatus) {
      handleStatusChange(dragItem.current.wordId, targetStatus);
    }
    dragItem.current = null;
  };

  const handleWordUpdated = (wordId: number, updates: { status?: string; notes?: string; scenarioId?: number | null }) => {
    updateWord(wordId, updates);
  };

  const handleWordDeleted = (wordId: number) => {
    deleteWord(wordId);
    setSelectedWord(null);
  };

  const handleWordAdded = () => {
    setShowAddModal(false);
    refresh();
  };

  const filteredWords = filterScenario === "all"
    ? words
    : words.filter((w) => w.scenarioId === filterScenario || w.scenarios.some((s) => s.id === filterScenario));

  const sections = STATUS_COLUMNS.map((col) => ({
    ...col,
    items: filteredWords.filter((w) => w.status === col.key),
  }));

  const filteredWordsCount = sections.reduce((sum, s) => sum + s.items.length, 0);

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-[1280px] mx-auto px-margin-mobile py-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-headline text-2xl text-on-surface font-bold">My Vocabulary</h1>
            <p className="text-sm text-on-surface-variant">{filteredWordsCount} words</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-semibold text-sm shadow-sm hover:bg-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            Add Word
          </button>
        </div>

        {/* Scenario filter bar */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setFilterScenario("all")}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
              filterScenario === "all"
                ? "bg-primary text-white border-primary"
                : "bg-white text-on-surface-variant border-outline-variant hover:border-primary"
            }`}
          >
            All
          </button>
          {SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              onClick={() => setFilterScenario(sc.id)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                filterScenario === sc.id
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-on-surface-variant border-outline-variant hover:border-primary"
              }`}
            >
              {sc.name}
            </button>
          ))}
        </div>

        {/* Loading */}
        {!loaded && (
          <div className="flex flex-col gap-4 md:flex-row md:overflow-x-auto pb-4">
            {[1, 2, 3].map((col) => (
              <div key={col} className="w-full md:min-w-[260px] md:flex-1 bg-surface-container rounded-xl p-4 animate-pulse space-y-3">
                <div className="h-5 bg-surface-container-highest rounded w-20" />
                {[1, 2, 3].map((c) => (
                  <div key={c} className="h-16 bg-white rounded-lg border border-outline-variant/30" />
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {loaded && filteredWordsCount === 0 && (
          <div className="text-center py-16">
            <span className="material-symbols-outlined text-5xl text-outline-variant mb-3">menu_book</span>
            <h3 className="text-lg font-bold text-on-surface mb-1">No words yet</h3>
            <p className="text-sm text-on-surface-variant mb-4">
              {filterScenario === "all"
                ? "Complete experiences to build your vocabulary, or add words manually."
                : "No words found for this scenario."}
            </p>
            {filterScenario === "all" && (
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-semibold text-sm"
              >
                Add Your First Word
              </button>
            )}
          </div>
        )}

        {/* Kanban columns */}
        {loaded && filteredWordsCount > 0 && (
          <div className="flex flex-col gap-4 md:flex-row md:overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
            {sections.map((section) => (
              <div
                key={section.key}
                className="w-full md:min-w-[260px] md:flex-1 bg-surface-container rounded-xl p-4"
                onDragOver={(e) => { e.preventDefault(); }}
                onDrop={(e) => { e.preventDefault(); handleDrop(section.key); }}
              >
                {/* Column header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2.5 h-2.5 rounded-full ${section.color}`} />
                  <h3 className="font-bold text-sm text-on-surface">{section.label}</h3>
                  <span className="text-xs text-on-surface-variant ml-auto">{section.items.length}</span>
                </div>

                {/* Cards */}
                <div className="space-y-2">
                  {section.items.map((word) => (
                    <div key={word.wordId}>
                      <div
                        draggable
                        onDragStart={() => handleDragStart(word)}
                        onClick={() => setSelectedWord(word)}
                        className="bg-white rounded-xl border border-outline-variant/30 p-3.5 shadow-sm cursor-grab active:cursor-grabbing hover:border-primary transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-on-surface truncate">
                              {word.article ? `${word.article} ` : ""}{word.targetWord}
                            </p>
                            <p className="text-xs text-on-surface-variant truncate">{word.translationText}</p>
                          </div>
                          {word.timesCompleted >= 3 && word.status === "learning" && (
                            <span className="shrink-0 text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                              {word.timesCompleted}x
                            </span>
                          )}
                        </div>

                        {/* Scenario badge */}
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {(word.scenarioId
                            ? SCENARIOS.filter((s) => s.id === word.scenarioId)
                            : word.scenarios
                          ).slice(0, 2).map((s) => (
                            <span key={s.id} className="text-[10px] text-primary bg-primary/5 px-1.5 py-0.5 rounded font-medium">
                              {s.name}
                            </span>
                          ))}
                        </div>

                        {/* Smart suggestion */}
                        {word.timesCompleted >= 3 && word.status === "learning" && (
                          <div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center gap-2">
                            <span className="text-[10px] text-amber-700 font-medium">Seen {word.timesCompleted}x</span>
                            <button
                              onClick={(e) => { e.stopPropagation(); handleStatusChange(word.wordId, "review"); }}
                              className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded hover:bg-amber-100 transition-colors"
                            >
                              Move to Review
                            </button>
                          </div>
                        )}

                        {word.timesCompleted >= 8 && word.status === "review" && (
                          <div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center gap-2">
                            <span className="text-[10px] text-green-700 font-medium">Seen {word.timesCompleted}x</span>
                            <button
                              onClick={(e) => { e.stopPropagation(); handleStatusChange(word.wordId, "mastered"); }}
                              className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded hover:bg-green-100 transition-colors"
                            >
                              Move to Mastered
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Drop zone hint */}
                  {section.items.length === 0 && (
                    <div
                      className="border-2 border-dashed border-outline-variant/30 rounded-xl p-6 text-center text-xs text-on-surface-variant"
                      onDragOver={(e) => { e.preventDefault(); }}
                      onDrop={(e) => { e.preventDefault(); handleDrop(section.key); }}
                    >
                      Drag words here
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Word detail modal */}
      {selectedWord && (
        <VocabWordModal
          word={selectedWord}
          allScenarios={SCENARIOS}
          onClose={() => setSelectedWord(null)}
          onUpdated={handleWordUpdated}
          onDeleted={handleWordDeleted}
        />
      )}

      {/* Add word modal */}
      {showAddModal && (
        <VocabAddModal
          allScenarios={SCENARIOS}
          onClose={() => setShowAddModal(false)}
          onAdded={handleWordAdded}
        />
      )}
    </div>
  );
}
