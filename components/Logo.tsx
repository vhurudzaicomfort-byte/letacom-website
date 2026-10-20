import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  return (
    <Link href="/" aria-label="Letacom home" className={`inline-flex items-center ${className}`}>
      <Image
        src={variant === "light" ? "/brand/letacom-logo-white@2x.png" : "/brand/letacom-logo@2x.png"}
        alt="Letacom"
        width={1261}
        height={160}
        priority
        className="h-6 w-auto sm:h-7"
      />
    </Link>
  );
}
