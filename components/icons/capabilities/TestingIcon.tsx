interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function TestingIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Gauge dial */}
      <path d="M3 18 A9 9 0 0 1 21 18" />
      {/* Dial baseline */}
      <path d="M3 18 L21 18" />
      {/* Tick marks */}
      <path d="M5 14 L6 13" />
      <path d="M9 10 L9.5 9" />
      <path d="M12 9 L12 10" />
      <path d="M15 10 L14.5 9" />
      <path d="M19 14 L18 13" />
      {/* Needle */}
      <path d="M12 18 L16 11" />
      {/* Center pin */}
      <circle cx="12" cy="18" r="1" />
    </svg>
  );
}
