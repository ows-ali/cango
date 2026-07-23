"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";

export default function WelcomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#070d18] text-white flex flex-col justify-between relative overflow-hidden font-body selection:bg-primary selection:text-white">
      {/* Ambient background glow & photographic overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/scenario-restaurant.jpg"
          alt="Italy background"
          className="w-full h-full object-cover opacity-20 filter blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d18]/90 via-[#070d18]/95 to-[#070d18]" />
        
        {/* Radial ambient lighting Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-sky-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Top Header / Navigation */}
      <header className="relative z-30 w-full max-w-[1280px] mx-auto px-6 pt-6 md:pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size={40} />
          <span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/10 hidden sm:inline-block">
            Italy Experience Platform
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/auth"
            className="text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-xl transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/auth"
            className="text-sm font-bold bg-primary text-white px-5 py-2.5 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Content Section */}
      <main className="relative z-30 max-w-[1280px] mx-auto px-6 py-12 md:py-16 flex flex-col items-center text-center flex-grow justify-center">
        {/* Feature Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs font-medium text-amber-300 mb-8 animate-fadeIn">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
          <span>Real Dialogues &bull; AI Voice Tutor &bull; CEFR A1-B2</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6 drop-shadow-md">
          Learn Italian for{" "}
          <span className="bg-gradient-to-r from-amber-200 via-orange-400 to-rose-400 bg-clip-text text-transparent">
            Real Life in Italy
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Practice realistic everyday scenarios you will actually face. Built for professionals, expats, and students navigating Italian transport, healthcare, housing, and dining.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <Link
            href="/auth"
            className="group w-full sm:w-auto bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-600 text-white font-headline font-bold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3"
          >
            <span>Start Practice Free</span>
            <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
          <Link
            href="/auth"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-headline font-semibold text-base px-6 py-4 rounded-2xl border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-amber-400">play_circle</span>
            <span>View Scenarios</span>
          </Link>
        </div>

        {/* Visual Feature Cards Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left">
          {/* Card 1 */}
          <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden shadow-lg">
            <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 relative">
              <img
                src="/images/scenario-transportation.jpg"
                alt="Transportation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-amber-300">
                B1 &bull; Public Transit
              </div>
            </div>
            <h3 className="font-headline font-bold text-base text-white mb-1">Transportation</h3>
            <p className="text-xs text-slate-400 line-clamp-2">Tickets, train delays, and platform changes at Italian stations.</p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden shadow-lg">
            <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 relative">
              <img
                src="/images/scenario-restaurant.jpg"
                alt="Dining"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-amber-300">
                A2 &bull; Trattoria & Food
              </div>
            </div>
            <h3 className="font-headline font-bold text-base text-white mb-1">Dining & Food</h3>
            <p className="text-xs text-slate-400 line-clamp-2">Ordering food, dietary needs, and authentic trattoria etiquette.</p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden shadow-lg">
            <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 relative">
              <img
                src="/images/scenario-doctor.jpg"
                alt="Healthcare"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-amber-300">
                B1 &bull; Healthcare
              </div>
            </div>
            <h3 className="font-headline font-bold text-base text-white mb-1">Doctor & Pharmacy</h3>
            <p className="text-xs text-slate-400 line-clamp-2">Appointments, medical symptoms, and filling prescriptions.</p>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden shadow-lg">
            <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 relative">
              <img
                src="/images/scenario-job-interview.jpg"
                alt="Job Interview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-amber-300">
                B2 &bull; Professional
              </div>
            </div>
            <h3 className="font-headline font-bold text-base text-white mb-1">Job Interview</h3>
            <p className="text-xs text-slate-400 line-clamp-2">Professional communication and corporate interviews in Milan.</p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="relative z-30 border-t border-white/10 py-6 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">CanGo Italy</span>
            <span>&bull; Realistic Italian Language Practice</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <span className="hover:text-white transition-colors cursor-pointer">Professional</span>
            <span>&bull;</span>
            <span className="hover:text-white transition-colors cursor-pointer">Academic</span>
            <span>&bull;</span>
            <span className="hover:text-white transition-colors cursor-pointer">Everyday Living</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
