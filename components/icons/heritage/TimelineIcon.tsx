interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function TimelineIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Horizontal axis */}
      <path d="M3 12 L21 12" />
      {/* Anchor points */}
      <circle cx="6" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="18" cy="12" r="1.5" />
      {/* Tick marks */}
      <path d="M6 9 L6 7" />
      <path d="M12 15 L12 17" />
      <path d="M18 9 L18 7" />
    </svg>
  );
}
