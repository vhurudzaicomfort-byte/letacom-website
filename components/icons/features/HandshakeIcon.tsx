interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function HandshakeIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Left arm */}
      <path d="M2 14 L5 11 L8 11" />
      {/* Right arm */}
      <path d="M22 14 L19 11 L16 11" />
      {/* Left hand (angular) */}
      <path d="M8 11 L10 9 L12 10 L14 9 L16 11" />
      {/* Clasp / grip area */}
      <path d="M9 13 L11 11 L13 12 L15 11 L17 13" />
      {/* Lower hand outlines */}
      <path d="M8 11 L7 13 L9 15 L12 15" />
      <path d="M16 11 L17 13 L15 15 L12 15" />
      {/* Cuff lines */}
      <path d="M2 14 L5 14 L6 13" />
      <path d="M22 14 L19 14 L18 13" />
    </svg>
  );
}
