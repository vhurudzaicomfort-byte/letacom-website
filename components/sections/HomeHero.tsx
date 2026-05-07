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

      <div className="relative z-10 container-site py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl reveal-stagger">
          <h1
            className="reveal font-heading text-white leading-none font-medium tracking-[-0.025em] text-[44px] sm:text-5xl md:text-[56px]"
          >
            <span className="block reveal">We supply.</span>
            <span className="block reveal">We deliver.</span>
            <span className="block reveal" style={{ color: "#E25822" }}>
              We stay.
            </span>
          </h1>

          <p
            className="reveal mt-7 text-sm leading-[1.55] max-w-[480px]"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            Industrial equipment, components, and systems delivered across
            Southern Africa — installed, supported, and maintained by one
            accountable team.
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="hover-lift group inline-flex items-center gap-2 px-7 py-3.5 text-white font-medium rounded shadow-[0_8px_30px_-8px_rgba(226,88,34,0.5)] transition-colors duration-300"
              style={{ backgroundColor: "#E25822" }}
            >
              Request a Quote
              <ArrowRightIcon
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/products"
              className="hover-lift inline-flex items-center gap-2 px-7 py-3.5 text-white font-medium rounded transition-colors duration-300 hover:bg-white/10"
              style={{
                border: "1px solid rgba(255,255,255,0.35)",
              }}
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
