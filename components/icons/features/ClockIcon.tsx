interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function ClockIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      {/* Hour hand */}
      <path d="M12 12 L12 7" />
      {/* Minute hand */}
      <path d="M12 12 L16 12" />
      {/* Center dot */}
      <circle cx="12" cy="12" r="0.5" />
      {/* Hour markers */}
      <path d="M12 3 L12 4" />
      <path d="M21 12 L20 12" />
      <path d="M12 21 L12 20" />
      <path d="M3 12 L4 12" />
    </svg>
  );
}
