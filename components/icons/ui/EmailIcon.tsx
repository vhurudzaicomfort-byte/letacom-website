interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function EmailIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" />
      <path d="M2 4 L12 13 L22 4" />
      <path d="M2 20 L9 13" />
      <path d="M22 20 L15 13" />
    </svg>
  );
}
