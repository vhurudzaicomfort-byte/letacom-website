interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function AfricaContinentIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Stylised African continent outline */}
      <path d="M9 3 L14 3 L17 5 L18 8 L17 11 L19 13 L18 16 L15 18 L14 21 L11 21 L10 18 L8 16 L7 13 L6 10 L7 6 Z" />
      {/* Equator line */}
      <path d="M6 12 L19 12" />
    </svg>
  );
}
