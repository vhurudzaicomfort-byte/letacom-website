interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function EquipmentIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Machine body */}
      <path d="M3 8 L3 20 L21 20 L21 8 Z" />
      {/* Control panel top */}
      <path d="M6 4 L18 4 L18 8 L6 8 Z" />
      {/* Display screen */}
      <path d="M8 5 L13 5 L13 7 L8 7 Z" />
      {/* Control knob */}
      <circle cx="15.5" cy="6" r="0.8" />
      {/* Machine chamber */}
      <path d="M5 10 L19 10 L19 18 L5 18 Z" />
      {/* Internal mechanism */}
      <circle cx="12" cy="14" r="2.5" />
      <path d="M12 11.5 L12 10" />
      <path d="M12 16.5 L12 18" />
      <path d="M9.5 14 L5 14" />
      <path d="M14.5 14 L19 14" />
      {/* Base feet */}
      <path d="M5 20 L5 22" />
      <path d="M19 20 L19 22" />
    </svg>
  );
}
