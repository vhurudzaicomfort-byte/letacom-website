interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function ITHardwareIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Server rack outer */}
      <rect x="4" y="2" width="16" height="20" rx="1" />
      {/* Server unit 1 */}
      <path d="M6 4 L18 4 L18 8 L6 8 Z" />
      <circle cx="16" cy="6" r="0.7" />
      <path d="M8 6 L13 6" />
      {/* Server unit 2 */}
      <path d="M6 9 L18 9 L18 13 L6 13 Z" />
      <circle cx="16" cy="11" r="0.7" />
      <path d="M8 11 L13 11" />
      {/* Server unit 3 */}
      <path d="M6 14 L18 14 L18 18 L6 18 Z" />
      <circle cx="16" cy="16" r="0.7" />
      <path d="M8 16 L13 16" />
      {/* Ventilation holes */}
      <path d="M7 20 L7 20.5" />
      <path d="M9 20 L9 20.5" />
      <path d="M11 20 L11 20.5" />
    </svg>
  );
}
