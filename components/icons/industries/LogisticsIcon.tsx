interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function LogisticsIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Truck cargo body */}
      <path d="M2 5 L2 16 L15 16 L15 5 Z" />
      {/* Truck cab */}
      <path d="M15 9 L20 9 L22 12 L22 16 L15 16" />
      {/* Windshield */}
      <path d="M15 9 L15 12 L20 12" />
      {/* Ground line */}
      <path d="M1 18 L23 18" />
      {/* Front wheel */}
      <circle cx="6" cy="18" r="2" />
      {/* Rear wheel */}
      <circle cx="19" cy="18" r="2" />
      {/* Axle connections */}
      <path d="M4 16 L4 18" />
      <path d="M17 16 L17 18" />
    </svg>
  );
}
