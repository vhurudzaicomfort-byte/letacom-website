interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function AccessoriesIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* 3x3 modular grid */}
      <rect x="2" y="2" width="5.5" height="5.5" />
      <rect x="9.25" y="2" width="5.5" height="5.5" />
      <rect x="16.5" y="2" width="5.5" height="5.5" />
      <rect x="2" y="9.25" width="5.5" height="5.5" />
      <rect x="9.25" y="9.25" width="5.5" height="5.5" />
      <rect x="16.5" y="9.25" width="5.5" height="5.5" />
      <rect x="2" y="16.5" width="5.5" height="5.5" />
      <rect x="9.25" y="16.5" width="5.5" height="5.5" />
      <rect x="16.5" y="16.5" width="5.5" height="5.5" />
    </svg>
  );
}
