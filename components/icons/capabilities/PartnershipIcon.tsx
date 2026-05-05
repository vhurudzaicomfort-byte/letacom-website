interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function PartnershipIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Left hexagon */}
      <path d="M3 8 L8 5 L13 8 L13 14 L8 17 L3 14 Z" />
      {/* Right hexagon — interlocking */}
      <path d="M11 10 L16 7 L21 10 L21 16 L16 19 L11 16 Z" />
    </svg>
  );
}
