"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStats } from "@/lib/stats-context";
import { Logo } from "@/components/Logo";
import { getLang } from "@/lib/lang-config";

const navItems = [
  { href: "/home", label: "Home", icon: "home" },
  { href: "/tutor", label: "AI Tutor", icon: "auto_awesome" },
  { href: "/vocabulary", label: "Vocab", icon: "menu_book" },
  { href: "/progress", label: "Stats", icon: "insights" },
  { href: "/profile", label: "Profile", icon: "person" },
];

export default function Header() {
  const { stats } = useStats();
  const pathname = usePathname();

  return (
    <header className="bg-surface/85 backdrop-blur-md sticky top-0 z-40 border-b border-outline-variant/15 shadow-xs transition-all">
      <div className="flex justify-between items-center w-full px-margin-mobile h-16 max-w-[1280px] mx-auto">
        {/* Brand & Teacher Coach */}
        <div className="flex items-center gap-6">
          <Link href="/home" className="flex items-center gap-2 group transition-transform active:scale-95">
            <Logo size={42} className="group-hover:scale-105 transition-transform" />
            <span className="font-headline font-extrabold text-lg text-on-surface tracking-tight hidden sm:inline-block">
              {getLang().brand}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 ml-2">
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-2.5 py-2  text-sm font-semibold transition-all duration-200 ${active
                    ? " text-primary"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                    }`}
                >
                  <span
                    className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${active ? "text-primary scale-110" : "text-on-surface-variant"
                      }`}
                    style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Stats & Badges */}
        <div className="flex items-center gap-3">
          {/* XP Pill Badge */}
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full shadow-2xs hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-amber-500 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              workspace_premium
            </span>
            <span className="text-xs font-extrabold text-amber-600 tracking-wide">{stats.totalXp} XP</span>
          </div>

          {/* Streak Flame Pill Badge */}
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-rose-500/10 to-orange-500/10 border border-rose-500/20 px-3 py-1.5 rounded-full shadow-2xs hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-orange-500 text-[18px] animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
              local_fire_department
            </span>
            <span className="text-xs font-extrabold text-orange-600 tracking-wide">{stats.currentStreak} Days</span>
          </div>
        </div>
      </div>
    </header>
  );
}