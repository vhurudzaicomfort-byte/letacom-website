interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function SparePartsIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Exploded gear - top piece */}
      <path d="M10 2 L14 2 L14 4 L13 5 L11 5 L10 4 Z" />
      {/* Gear body (center, offset down-right to show explosion) */}
      <path d="M14 9 L16 8 L17 9 L17 11 L16 12 L14 12 L13 11 L13 9 Z" />
      <circle cx="15" cy="10.5" r="1" />
      {/* Bolt (bottom left, separated) */}
      <path d="M4 17 L8 17 L8 19 L4 19 Z" />
      <path d="M5 19 L5 22" />
      <path d="M7 19 L7 22" />
      {/* Washer (middle left, separated) */}
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="6" cy="12" r="1" />
      {/* Exploded lines showing separation */}
      <path d="M12 5.5 L13.5 8.5" strokeDasharray="1.5 1" />
      <path d="M8.5 12 L12.5 11" strokeDasharray="1.5 1" />
      <path d="M7 14.5 L7 16.5" strokeDasharray="1.5 1" />
      {/* Small nut piece (top right) */}
      <path d="M18 3 L21 3 L21 6 L18 6 Z" />
      <circle cx="19.5" cy="4.5" r="0.8" />
    </svg>
  );
}
