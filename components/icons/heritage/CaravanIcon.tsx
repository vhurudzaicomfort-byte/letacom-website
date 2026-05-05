interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function CaravanIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Camel hump back */}
      <path d="M3 17 C5 14 6 14 7 16 C8 14 9 14 11 17" />
      {/* Camel neck and head */}
      <path d="M11 17 L13 11 L15 9 L17 9 L17 11 L15 12" />
      {/* Camel legs */}
      <path d="M5 17 L5 21" />
      <path d="M9 17 L9 21" />
      <path d="M14 13 L14 21" />
      <path d="M16 13 L16 21" />
      {/* Sun on horizon */}
      <circle cx="20" cy="5" r="1.5" />
      <path d="M20 2 L20 3" />
      <path d="M22 5 L23 5" />
    </svg>
  );
}
