interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function CustomisationIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Slider track 1 */}
      <path d="M3 6 L21 6" />
      <rect x="6" y="4" width="3" height="4" />
      {/* Slider track 2 */}
      <path d="M3 12 L21 12" />
      <rect x="13" y="10" width="3" height="4" />
      {/* Slider track 3 */}
      <path d="M3 18 L21 18" />
      <rect x="9" y="16" width="3" height="4" />
    </svg>
  );
}
