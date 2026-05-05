interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function BrandedConsumablesIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Glass / bottle */}
      <path d="M3 8 L3 20 C3 21 4 22 5 22 L9 22 C10 22 11 21 11 20 L11 8" />
      <path d="M3 8 C3 7 4 6 5 6 L9 6 C10 6 11 7 11 8" />
      {/* Glass liquid level */}
      <path d="M3 14 L11 14" />
      {/* Box */}
      <path d="M13 6 L22 6 L22 22 L13 22 Z" />
      {/* Box flap */}
      <path d="M13 6 L15 3 L21 3 L22 6" />
      {/* Box center line */}
      <path d="M17.5 6 L17.5 22" />
      {/* Box label */}
      <path d="M14.5 10 L16.5 10 L16.5 14 L14.5 14 Z" />
      {/* Glass rim */}
      <path d="M2.5 8 L11.5 8" />
    </svg>
  );
}
