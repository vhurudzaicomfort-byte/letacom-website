interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function ArrowRightIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      <path d="M4 12 L20 12" />
      <path d="M14 6 L20 12 L14 18" />
    </svg>
  );
}
