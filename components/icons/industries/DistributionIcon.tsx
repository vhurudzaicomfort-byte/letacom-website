interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function DistributionIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Central node */}
      <circle cx="12" cy="12" r="2.5" />
      {/* Top node */}
      <circle cx="12" cy="3" r="1.5" />
      {/* Bottom left node */}
      <circle cx="4" cy="19" r="1.5" />
      {/* Bottom right node */}
      <circle cx="20" cy="19" r="1.5" />
      {/* Top right node */}
      <circle cx="20" cy="6" r="1.5" />
      {/* Bottom center node */}
      <circle cx="12" cy="21" r="1.5" />
      {/* Lines connecting center to outer nodes */}
      <path d="M12 9.5 L12 4.5" />
      <path d="M9.8 13.5 L5.2 17.8" />
      <path d="M14.2 13.5 L18.8 17.8" />
      <path d="M14.2 10.8 L18.5 7.2" />
      <path d="M12 14.5 L12 19.5" />
    </svg>
  );
}
