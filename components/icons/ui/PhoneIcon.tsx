interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function PhoneIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      <path d="M5 2 L9 2 L11 7 L9 9 C9 9 10 12 12 14 C14 16 15 15 15 15 L17 13 L22 15 L22 19 C22 21 20 22 18 22 C14 22 10 20 7 17 C4 14 2 10 2 6 C2 4 3 2 5 2 Z" />
    </svg>
  );
}
