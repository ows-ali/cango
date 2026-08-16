"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { useRouter } from "next/navigation";

interface PendingLinkProps {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

export function PendingLink({ href, className = "", style, children }: PendingLinkProps) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  useEffect(() => {
    router.prefetch(href);
  }, [router, href]);

  return (
    <a
      href={href}
      aria-disabled={pending}
      onClick={(e) => {
        if (pending) {
          e.preventDefault();
          return;
        }
        e.preventDefault();
        setPending(true);
        router.push(href);
      }}
      style={style}
      className={`${className} ${pending ? "pointer-events-none opacity-70" : ""}`}
    >
      {children}
      {pending && (
        <span
          aria-hidden="true"
          className="ml-2 inline-block h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}
    </a>
  );
}