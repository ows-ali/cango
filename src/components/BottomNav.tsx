"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/home", icon: "home", label: "Home" },
  { href: "/tutor", icon: "auto_awesome", label: "AI Tutor" },
  { href: "/vocabulary", icon: "menu_book", label: "Vocab" },
  { href: "/progress", icon: "insights", label: "Stats" },
  { href: "/profile", icon: "person", label: "Profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center py-1 bg-surface border-t border-surface-container z-50 md:hidden rounded-t-2xl shadow-sm">
      {items.map((item) => {
        const active = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center px-3 py-1.5 transition-all relative ${
              active ? "text-primary" : "text-on-surface-variant"
            }`}
          >
            {active && (
              <span className="absolute -top-0.5 w-8 h-1 bg-primary rounded-full" />
            )}
            <span
              className="material-symbols-outlined text-xl"
              style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className={`text-[10px] font-semibold ${active ? "font-bold" : ""}`}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
