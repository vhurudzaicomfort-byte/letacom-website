interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function AfricaIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Stylized Africa continent outline */}
      <path d="M13 2 L11 2 L9 3 L8 5 L9 6 L8 7 L7 7 L6 9 L6 11 L7 12 L7 14 L8 15 L9 16 L10 18 L11 19 L12 21 L13 22 L14 21 L15 19 L16 17 L17 15 L18 13 L18 11 L17 9 L18 7 L17 5 L16 4 L15 3 L14 2 L13 2 Z" />
      {/* Madagascar */}
      <path d="M17 15 L18 16 L18 18 L17 17 Z" />
    </svg>
  );
}
