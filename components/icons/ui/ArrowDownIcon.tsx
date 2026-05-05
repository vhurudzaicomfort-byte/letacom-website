interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function ArrowDownIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      <path d="M12 4 L12 20" />
      <path d="M6 14 L12 20 L18 14" />
    </svg>
  );
}
