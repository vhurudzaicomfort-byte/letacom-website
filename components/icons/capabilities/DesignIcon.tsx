interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function DesignIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Compass pivot */}
      <circle cx="12" cy="4" r="1.2" />
      {/* Left leg */}
      <path d="M12 5 L6 20" />
      {/* Right leg */}
      <path d="M12 5 L18 20" />
      {/* Pencil tip on right leg */}
      <path d="M17 17 L19 17" />
      {/* Sweep arc */}
      <path d="M8 16 C10 18 14 18 16 16" />
      {/* Hinge cross-bar */}
      <path d="M10 8 L14 8" />
    </svg>
  );
}
