interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function SupportIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Headband */}
      <path d="M4 13 C4 8 7 4 12 4 C17 4 20 8 20 13" />
      {/* Left ear cup */}
      <path d="M4 11 L2 12 L2 16 L4 17 L4 11 Z" />
      {/* Right ear cup */}
      <path d="M20 11 L22 12 L22 16 L20 17 L20 11 Z" />
      {/* Microphone arm */}
      <path d="M2 16 L2 18 C2 19 3 20 4 20 L10 20" />
      {/* Microphone head */}
      <path d="M10 18.5 L13 18.5 L13 21.5 L10 21.5 Z" />
    </svg>
  );
}
