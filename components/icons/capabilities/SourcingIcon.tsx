interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function SourcingIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Globe */}
      <circle cx="12" cy="12" r="7" />
      <path d="M5 12 L19 12" />
      <path d="M12 5 C9 8 9 16 12 19" />
      <path d="M12 5 C15 8 15 16 12 19" />
      {/* Inbound arrow top-right */}
      <path d="M21 3 L17 7" />
      <path d="M17 3 L21 3 L21 7" />
      {/* Inbound arrow bottom-left */}
      <path d="M3 21 L7 17" />
      <path d="M3 17 L3 21 L7 21" />
    </svg>
  );
}
