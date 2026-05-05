interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function GlobeIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Outer circle */}
      <circle cx="12" cy="12" r="10" />
      {/* Vertical meridian */}
      <path d="M12 2 C9 6 9 10 9 12 C9 14 9 18 12 22" />
      <path d="M12 2 C15 6 15 10 15 12 C15 14 15 18 12 22" />
      {/* Horizontal parallels */}
      <path d="M3 8 C6 9 9 9.5 12 9.5 C15 9.5 18 9 21 8" />
      <path d="M2 12 L22 12" />
      <path d="M3 16 C6 15 9 14.5 12 14.5 C15 14.5 18 15 21 16" />
    </svg>
  );
}
