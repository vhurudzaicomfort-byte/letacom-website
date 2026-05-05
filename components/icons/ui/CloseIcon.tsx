interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function CloseIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      <path d="M5 5 L19 19" />
      <path d="M19 5 L5 19" />
    </svg>
  );
}
