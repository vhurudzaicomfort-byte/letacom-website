import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function HomeHero() {
  return (
    <section className="relative bg-primary-900 text-white overflow-hidden">
      {/* Background video — autoplay muted loop, with image poster for fast first paint */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/hero-kilimanjaro.jpg"
        aria-hidden
      >
        <source src="/media/video/heritage-barrels.mp4" type="video/mp4" />
      </video>

      {/* Cinematic gradient — keeps text legible while video plays underneath */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(95deg, rgba(8,22,40,0.92) 0%, rgba(8,22,40,0.78) 35%, rgba(8,22,40,0.45) 70%, rgba(8,22,40,0.2) 100%)",
        }}
      />
      {/* Subtle bottom plate so the caption tag and CTAs sit on a darker area */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(8,22,40,0.7), transparent)",
        }}
      />
      {/* Soft noise texture for editorial polish */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 container-site py-24 sm:py-28 md:py-32 lg:py-40">
        <div className="max-w-3xl reveal-stagger">
          <h1
            className="reveal font-heading text-white leading-[1.02] font-medium tracking-[-0.025em] text-[52px] sm:text-[64px] md:text-[80px] lg:text-[92px]"
          >
            <span className="block reveal">We supply.</span>
            <span className="block reveal">We deliver.</span>
            <span className="block reveal text-accent-500">
              We stay.
            </span>
          </h1>

          <p
            className="reveal mt-7 md:mt-8 text-base md:text-lg leading-[1.55] max-w-[520px]"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Industrial equipment, components, and systems delivered across
            Southern Africa — installed, supported, and maintained by one
            accountable team.
          </p>

          <div className="reveal mt-9 md:mt-10 flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="hover-lift group inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 text-white font-medium rounded shadow-[0_8px_30px_-8px_rgba(226,88,34,0.5)] hover:bg-accent-600 hover:shadow-[0_12px_36px_-8px_rgba(226,88,34,0.7)] transition-colors duration-300"
            >
              Request a Quote
              <ArrowRightIcon
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/products"
              className="hover-lift inline-flex items-center gap-2 px-7 py-3.5 text-white font-medium rounded border border-white/35 hover:border-white/60 hover:bg-white/10 transition-colors duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-10 z-10 hidden sm:flex items-center gap-2 text-on-navy-subtle">
        <span className="block w-8 h-px bg-on-navy-subtle" />
        <span className="font-heading text-xs uppercase tracking-[0.2em]">
          Pretoria · South Africa
        </span>
      </div>
    </section>
  );
}
