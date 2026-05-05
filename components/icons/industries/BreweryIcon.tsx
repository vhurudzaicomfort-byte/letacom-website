interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function BreweryIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Dome top */}
      <path d="M8 6 C8 3.5 10 2 12 2 C14 2 16 3.5 16 6" />
      {/* Cylindrical tank body */}
      <path d="M8 6 L8 16 L16 16 L16 6" />
      {/* Tank legs */}
      <path d="M9 16 L9 20" />
      <path d="M15 16 L15 20" />
      {/* Base feet */}
      <path d="M8 20 L10 20" />
      <path d="M14 20 L16 20" />
      {/* Valve at bottom center */}
      <path d="M12 16 L12 18" />
      <path d="M11 18 L13 18" />
      {/* Tank band details */}
      <path d="M8 9 L16 9" />
      <path d="M8 13 L16 13" />
    </svg>
  );
}
