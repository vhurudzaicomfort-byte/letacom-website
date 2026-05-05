interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function MigrationIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Bottom arrow → */}
      <path d="M3 18 L19 18" />
      <path d="M16 15 L19 18 L16 21" />
      {/* Middle arrow ↗ */}
      <path d="M3 12 L17 12" />
      <path d="M14 9 L17 12 L14 15" />
      {/* Top arrow ↗ */}
      <path d="M3 6 L15 6" />
      <path d="M12 3 L15 6 L12 9" />
    </svg>
  );
}
