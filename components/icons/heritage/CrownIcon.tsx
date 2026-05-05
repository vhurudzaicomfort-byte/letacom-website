interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function CrownIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Crown peaks */}
      <path d="M3 17 L4 7 L9 12 L12 5 L15 12 L20 7 L21 17 Z" />
      {/* Base band */}
      <path d="M3 20 L21 20" />
      <path d="M3 17 L21 17" />
      {/* Jewels */}
      <circle cx="9" cy="12" r="0.6" fill="currentColor" />
      <circle cx="12" cy="9" r="0.6" fill="currentColor" />
      <circle cx="15" cy="12" r="0.6" fill="currentColor" />
    </svg>
  );
}
