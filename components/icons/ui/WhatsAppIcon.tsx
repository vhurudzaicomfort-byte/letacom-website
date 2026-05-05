interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function WhatsAppIcon({ className = '', size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden="true">
      {/* Chat bubble */}
      <path d="M12 2 C6.5 2 2 6 2 11 C2 13.5 3 15.5 4.5 17 L3 22 L8 20.5 C9.3 21.2 10.6 21.5 12 21.5 C17.5 21.5 22 17 22 12 C22 6.5 17.5 2 12 2 Z" />
      {/* Phone handset inside bubble */}
      <path d="M8.5 7.5 C8.5 7.5 9.5 7 10 7.5 L11 9 C11 9 10.5 9.8 11 10.5 C11.5 11.2 12.5 12 13.5 13 C14.2 13.5 15 13 15 13 L16.5 14 C17 14.5 16.5 15.5 16.5 15.5 C15.5 17 13 16.5 11 14.5 C9 12.5 7 10.5 8.5 7.5 Z" />
    </svg>
  );
}
