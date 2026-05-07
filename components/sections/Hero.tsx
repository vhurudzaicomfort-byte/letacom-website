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
        <div className="max-w-3xl reveal-stagger">
          {eyebrow && (
            <p className="reveal font-heading text-sm font-medium uppercase tracking-[0.18em] text-accent-300 mb-4">
              {eyebrow}
            </p>
          )}
          <h1
            className={`reveal font-heading font-bold text-white leading-tight tracking-tight ${
              isInner ? "text-3xl md:text-4xl lg:text-5xl" : "text-4xl md:text-5xl lg:text-6xl"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="reveal mt-5 text-lg md:text-xl text-on-navy leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="reveal mt-8 flex flex-wrap gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="hover-lift group inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white font-heading font-medium rounded shadow-[0_8px_30px_-8px_rgba(226,88,34,0.5)] hover:bg-accent-600"
                >
                  {primaryCta.label}
                  <ArrowRightIcon
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="hover-lift inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-heading font-medium rounded hover:bg-white/10 hover:border-white/60 transition-colors"
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
