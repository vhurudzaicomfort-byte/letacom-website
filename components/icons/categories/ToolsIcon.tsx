interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function ToolsIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Wrench */}
      <path d="M5 3 C3 3 2 4.5 2 6 C2 7.5 3 9 5 9 L6 9 L14 17 L16 15 L8 7 L8 6 C8 4 6.5 3 5 3 Z" />
      <path d="M3.5 4.5 L5.5 6.5" />
      {/* Caliper jaw - top */}
      <path d="M16 2 L22 2 L22 5 L19 5 L19 10 L17 10 L17 5 L16 5 Z" />
      {/* Caliper jaw - bottom / sliding */}
      <path d="M19 10 L19 15 L21 15 L21 12 L22 12 L22 10" />
      {/* Caliper depth rod */}
      <path d="M20 15 L20 21" />
      {/* Caliper scale marks */}
      <path d="M17.5 6 L18.5 6" />
      <path d="M17.5 8 L18.5 8" />
    </svg>
  );
}
