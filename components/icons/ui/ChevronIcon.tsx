interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function ChevronIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      <path d="M9 6 L15 12 L9 18" />
    </svg>
  );
}
