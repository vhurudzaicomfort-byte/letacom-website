import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

interface HeroProps {
  variant?: "default" | "industry" | "inner";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundClass?: string;
  backgroundImage?: string;
}

export function Hero({
  variant = "default",
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundClass = "bg-primary-900",
  backgroundImage,
}: HeroProps) {
  const isInner = variant === "inner";
  const paddingClass = isInner ? "py-16 md:py-20" : "py-20 md:py-28 lg:py-36";

  return (
    <section className={`relative ${backgroundClass} ${paddingClass} overflow-hidden`}>
      {/* Background image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary-900/75" />
        </>
      )}

      {/* Subtle grid pattern overlay */}
      {!backgroundImage && (
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
      )}

      <div className="container-site relative z-10">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="font-heading text-sm font-medium uppercase tracking-wider text-accent-300 mb-4">
              {eyebrow}
            </p>
          )}
          <h1
            className={`font-heading font-bold text-white leading-tight ${
              isInner ? "text-3xl md:text-4xl lg:text-5xl" : "text-4xl md:text-5xl lg:text-6xl"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg md:text-xl text-primary-300 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white font-heading font-medium rounded hover:bg-accent-600 transition-colors"
                >
                  {primaryCta.label}
                  <ArrowRightIcon size={18} />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-heading font-medium rounded hover:bg-white/10 transition-colors"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
