interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function SystemsIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Horizontal pipes */}
      <path d="M2 6 L10 6" />
      <path d="M14 6 L22 6" />
      <path d="M2 18 L10 18" />
      <path d="M14 18 L22 18" />
      {/* Vertical connecting pipes */}
      <path d="M6 6 L6 18" />
      <path d="M18 6 L18 18" />
      {/* Junction nodes */}
      <rect x="4" y="4" width="4" height="4" />
      <rect x="16" y="4" width="4" height="4" />
      <rect x="4" y="16" width="4" height="4" />
      <rect x="16" y="16" width="4" height="4" />
      {/* Cross connection */}
      <path d="M8 12 L16 12" />
      {/* Center valve/control node */}
      <circle cx="12" cy="12" r="2" />
      <path d="M10 12 L8 12" />
      <path d="M14 12 L16 12" />
      {/* Vertical tees */}
      <path d="M12 10 L12 6" />
      <path d="M12 14 L12 18" />
    </svg>
  );
}
