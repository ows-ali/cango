"use client";

import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#070d18] text-white flex flex-col justify-between relative overflow-hidden font-body">
      {/* Background & Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/scenario-restaurant.jpg"
          alt="Italy background"
          className="w-full h-full object-cover opacity-25 filter blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d18]/80 via-[#070d18]/90 to-[#070d18]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-30 pt-8 px-6 flex justify-center w-full">
        <Logo size={48} />
      </header>

      {/* Content */}
      <main className="relative z-30 flex flex-col items-center justify-center px-6 text-center max-w-2xl mx-auto flex-grow my-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-amber-300 mb-6">
          <span>✨ Welcome to CanGo Italy</span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          Learn Italian for{" "}
          <span className="bg-gradient-to-r from-amber-200 via-orange-400 to-rose-400 bg-clip-text text-transparent">
            Real Life in Italy
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto font-normal leading-relaxed">
          Esercitati con scenari realistici che affronti davvero. Pensato per professionisti e studenti in Italia.
        </p>
      </main>

      {/* Footer CTA */}
      <footer className="relative z-30 pb-12 px-6 flex flex-col items-center">
        <div className="w-full max-w-sm">
          <button
            onClick={() => router.push("/onboarding/goals")}
            className="group relative w-full h-14 bg-gradient-to-r from-primary to-orange-500 text-white rounded-xl text-base font-bold flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span className="relative z-10">Get Started</span>
            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>
        <div className="mt-6 flex items-center gap-3 text-slate-400 text-[11px] tracking-widest uppercase font-mono">
          <span className="w-6 h-px bg-white/20" />
          Professional &bull; Academic &bull; Living
          <span className="w-6 h-px bg-white/20" />
        </div>
      </footer>
    </div>
  );
}
