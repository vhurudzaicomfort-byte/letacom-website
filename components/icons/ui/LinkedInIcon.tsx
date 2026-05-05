interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function LinkedInIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Outer rounded square */}
      <rect x="2" y="2" width="20" height="20" rx="3" />
      {/* "i" - dot */}
      <path d="M7 7 L7.5 7 L7.5 7.5 L7 7.5 Z" />
      {/* "i" - stem */}
      <path d="M7 10 L7.5 10 L7.5 17 L7 17 Z" />
      {/* "n" shape */}
      <path d="M10 10 L10.5 10 L10.5 11.5 C11 10.5 12 10 13 10 C15 10 16 11.5 16 13.5 L16 17 L15.5 17 L15.5 13.5 C15.5 12 14.5 11 13 11 C11.5 11 10.5 12 10.5 13.5 L10.5 17 L10 17 Z" />
    </svg>
  );
}
