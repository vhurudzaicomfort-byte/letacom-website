interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function ShieldIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      <path d="M12 2 L4 6 L4 12 C4 16 7 20 12 22 C17 20 20 16 20 12 L20 6 L12 2 Z" />
      {/* Inner checkmark for trust */}
      <path d="M9 12 L11 14 L15 10" />
    </svg>
  );
}
