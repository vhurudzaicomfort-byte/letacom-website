import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

export function HomeHero() {
  return (
    <section className="relative bg-primary-900 text-white overflow-hidden noise-overlay">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/media/hero-kilimanjaro.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic gradient: solid navy on the left fading to transparent right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--color-navy-deep) 0%, rgba(8,22,40,0.92) 40%, rgba(8,22,40,0.55) 70%, rgba(8,22,40,0.25) 100%)",
          }}
        />
        {/* Subtle vertical bottom fade so caption tag sits on a darker plate */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background:
              "linear-gradient(to top, rgba(8,22,40,0.7), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 container-site py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl reveal-stagger">
          <p className="reveal font-heading text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-accent-300 mb-6">
            Industrial Supply &amp; Procurement
          </p>
          <h1
            className="reveal font-heading font-bold text-white leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[5rem]"
          >
            Sourced globally.
            <br />
            <span className="text-on-navy">Built for Africa.</span>
          </h1>
          <p className="reveal mt-6 text-lg md:text-xl text-on-navy leading-relaxed max-w-xl">
            Procurement, design, and lifecycle support for breweries,
            manufacturers, and logistics operators across Southern Africa.
          </p>
          <div className="reveal mt-9 flex flex-wrap gap-4">
            <Link
              href="/request-quote"
              className="hover-lift group inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 text-white font-heading font-medium rounded shadow-[0_8px_30px_-8px_rgba(226,88,34,0.5)] hover:bg-accent-600 hover:shadow-[0_12px_36px_-8px_rgba(226,88,34,0.7)]"
            >
              Request a Quote
              <ArrowRightIcon
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/about"
              className="hover-lift inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-heading font-medium rounded hover:bg-white/10 hover:border-white/60"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom-right caption tag */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-10 z-10 hidden sm:flex items-center gap-2 text-on-navy-subtle">
        <span className="block w-8 h-px bg-on-navy-subtle" />
        <span className="font-heading text-xs uppercase tracking-[0.2em]">
          Pretoria · South Africa
        </span>
      </div>
    </section>
  );
}
