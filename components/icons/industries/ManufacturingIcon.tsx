interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function ManufacturingIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Factory roof with sawtooth */}
      <path d="M2 12 L2 21 L22 21 L22 12 L18 12 L18 8 L14 12 L14 8 L10 12" />
      {/* Chimney */}
      <path d="M4 12 L4 6 L7 6 L7 12" />
      {/* Gear (bottom right area) */}
      <circle cx="18" cy="17" r="2.5" />
      <path d="M18 13.5 L18 14.5" />
      <path d="M18 19.5 L18 20.5" />
      <path d="M14.5 17 L15.5 17" />
      <path d="M20.5 17 L21.5 17" />
      <path d="M15.5 14.5 L16.2 15.2" />
      <path d="M19.8 18.8 L20.5 19.5" />
      <path d="M20.5 14.5 L19.8 15.2" />
      <path d="M16.2 18.8 L15.5 19.5" />
    </svg>
  );
}
