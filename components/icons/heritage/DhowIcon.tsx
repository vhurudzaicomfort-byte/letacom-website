interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function DhowIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Triangular lateen sail */}
      <path d="M12 3 L12 16 L4 16 Z" />
      {/* Mast */}
      <path d="M12 3 L12 18" />
      {/* Hull */}
      <path d="M3 18 L21 18 L18 21 L6 21 Z" />
      {/* Waterline */}
      <path d="M2 21 L4 21" />
      <path d="M20 21 L22 21" />
    </svg>
  );
}
