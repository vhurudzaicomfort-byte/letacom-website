interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function UploadIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Upload arrow */}
      <path d="M12 16 L12 4" />
      <path d="M7 9 L12 4 L17 9" />
      {/* Tray */}
      <path d="M3 15 L3 20 L21 20 L21 15" />
    </svg>
  );
}
