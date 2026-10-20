import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand">{children}</p>;
}

export function SectionHeading({ eyebrow, title, intro, center = false }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div data-reveal className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-ink-muted">{intro}</p>}
    </div>
  );
}

export function Button({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light" | "ghost"; className?: string }) {
  const styles = {
    primary: "bg-brand text-white hover:bg-brand-deep shadow-sm shadow-brand/20 hover:shadow-md hover:shadow-brand/30 active:scale-[0.98]",
    secondary: "bg-white text-ink ring-1 ring-line hover:ring-ink/30",
    light: "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/15",
    ghost: "text-brand hover:text-brand-deep px-0",
  }[variant];
  return (
    <Link href={href} className={`group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all ${styles} ${className}`}>
      {children}
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}

export function PageHero({ eyebrow, title, intro, image, children, crumbs }: { eyebrow: string; title: string; intro: string; image?: string; children?: ReactNode; crumbs?: Crumb[] }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {image && (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/40" />
        </>
      )}
      <Container className="relative py-16 sm:py-24">
        {crumbs && <Breadcrumbs items={crumbs} dark />}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#7fa8ff]">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  );
}

export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-sm text-ink-muted">
          <Check size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function CTABand({ title = "Have a project in mind?", text = "Tell us what you need. We respond to every enquiry within one business day with next steps or a written quotation." }: { title?: string; text?: string }) {
  return (
    <section className="py-20">
      <Container>
        <div data-reveal className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" />
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/70">{text}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Request a Quote</Button>
            <Button href="/services" variant="light">Explore Our Services</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
