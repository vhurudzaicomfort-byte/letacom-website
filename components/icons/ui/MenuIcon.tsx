interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function MenuIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      <path d="M3 6 L21 6" />
      <path d="M3 12 L21 12" />
      <path d="M3 18 L21 18" />
    </svg>
  );
}
