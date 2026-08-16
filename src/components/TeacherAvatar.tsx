import { getLang } from "@/lib/lang-config";

export function TeacherAvatar({ size = 80, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={getLang().teacherLabel}
    >
      {/* Hair back */}
      <path
        d="M60 8C38 8 20 20 20 40v12c0 18 10 34 24 42l-2 10c-2 8 4 14 10 14h16c6 0 12-6 10-14l-2-10c14-8 24-24 24-42V40c0-20-18-32-40-32z"
        fill="#2D1B00"
      />
      {/* Neck */}
      <rect x="50" y="76" width="20" height="14" rx="4" fill="#E8C39E" />
      {/* Body / shirt */}
      <path
        d="M30 90c0-12 14-20 30-20s30 8 30 20v22c0 4-4 8-8 8H38c-4 0-8-4-8-8V90z"
        fill="#FF6B35"
      />
      <path
        d="M50 70c-4 0-8 2-10 6l-2 4h44l-2-4c-2-4-6-6-10-6H50z"
        fill="#FF8C5A"
        opacity="0.5"
      />
      {/* Head */}
      <circle cx="60" cy="44" r="28" fill="#F4D1B8" />
      {/* Hair sides */}
      <path
        d="M32 40c0-12 8-22 18-26-6 4-10 12-10 20v8c0 6 2 12 6 16-8-4-14-12-14-18v0z"
        fill="#2D1B00"
      />
      <path
        d="M88 40c0-12-8-22-18-26 6 4 10 12 10 20v8c0 6-2 12-6 16 8-4 14-12 14-18v0z"
        fill="#2D1B00"
      />
      {/* Hair bangs */}
      <path
        d="M40 34c0-6 6-14 20-14s20 8 20 14c0 4-4 6-10 6-4 0-6-2-10-2s-6 2-10 2c-6 0-10-2-10-6z"
        fill="#2D1B00"
      />
      {/* Eyes */}
      <circle cx="48" cy="44" r="4" fill="#1C1B16" />
      <circle cx="72" cy="44" r="4" fill="#1C1B16" />
      {/* Eye shine */}
      <circle cx="49" cy="42" r="1.5" fill="white" />
      <circle cx="73" cy="42" r="1.5" fill="white" />
      {/* Glasses */}
      <circle cx="48" cy="44" r="9" stroke="#7C3AED" strokeWidth="2" fill="none" />
      <circle cx="72" cy="44" r="9" stroke="#7C3AED" strokeWidth="2" fill="none" />
      <line x1="57" y1="44" x2="63" y2="44" stroke="#7C3AED" strokeWidth="2" />
      <line x1="39" y1="42" x2="34" y2="40" stroke="#7C3AED" strokeWidth="2" />
      <line x1="81" y1="42" x2="86" y2="40" stroke="#7C3AED" strokeWidth="2" />
      {/* Smile */}
      <path
        d="M50 56c4 4 16 4 20 0"
        stroke="#8B5A2B"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cheeks */}
      <circle cx="38" cy="52" r="5" fill="#FF9999" opacity="0.3" />
      <circle cx="82" cy="52" r="5" fill="#FF9999" opacity="0.3" />
    </svg>
  );
}
