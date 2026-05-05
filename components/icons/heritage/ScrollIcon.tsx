interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function ScrollIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Top roll */}
      <path d="M5 5 L19 5" />
      <path d="M5 5 C5 4 6 3 7 3 L7 7 C6 7 5 6 5 5 Z" />
      <path d="M19 5 C19 4 18 3 17 3 L17 7 C18 7 19 6 19 5 Z" />
      {/* Body */}
      <path d="M5 5 L5 19" />
      <path d="M19 5 L19 19" />
      {/* Text lines */}
      <path d="M8 9 L16 9" />
      <path d="M8 12 L16 12" />
      <path d="M8 15 L13 15" />
      {/* Bottom roll */}
      <path d="M5 19 C5 20 6 21 7 21 L17 21 C18 21 19 20 19 19" />
    </svg>
  );
}
