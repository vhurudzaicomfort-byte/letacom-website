import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: "primary" | "accent";
}

export function CTABanner({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  variant = "primary",
}: CTABannerProps) {
  const bgClass = variant === "accent" ? "bg-accent-500" : "bg-primary-900";

  return (
    <section className={`${bgClass} section-padding`}>
      <div className="container-site text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-lg text-white/80 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="mt-8">
          <Link
            href={ctaHref}
            className={`inline-flex items-center gap-2 px-6 py-3 font-heading font-medium rounded transition-colors ${
              variant === "accent"
                ? "bg-white text-accent-600 hover:bg-graphite-100"
                : "bg-accent-500 text-white hover:bg-accent-600"
            }`}
          >
            {ctaLabel}
            <ArrowRightIcon size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
