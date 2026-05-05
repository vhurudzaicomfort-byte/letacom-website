interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function TradeRouteIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Curved trade path */}
      <path d="M4 20 C 8 14 6 8 12 6 C 18 4 20 8 20 4" />
      {/* Waypoints */}
      <circle cx="4" cy="20" r="1.5" />
      <circle cx="12" cy="6" r="1.5" />
      <circle cx="20" cy="4" r="1.5" />
      {/* Cardinal indicators */}
      <path d="M4 16 L4 18" />
      <path d="M20 6 L20 8" />
    </svg>
  );
}
