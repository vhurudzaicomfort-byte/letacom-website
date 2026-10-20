import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ClipboardList, FileSignature, Gauge, Handshake, LockKeyhole, MapPin, MessagesSquare, Rocket, Smartphone, Wrench } from "lucide-react";
import { Button, CTABand, Container, Section, SectionHeading } from "@/components/ui";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FaqList } from "@/components/FaqList";
import { services } from "@/lib/services";
import { faqs } from "@/lib/faqs";
import { company } from "@/lib/site";

const capabilities = [
  { icon: Gauge, title: "Modern, fast stacks", text: "Next.js, React, TypeScript and Node.js for websites and applications that load quickly and scale." },
  { icon: Smartphone, title: "Mobile-first by default", text: "Every interface is designed and tested for phones, tablets and desktops." },
  { icon: LockKeyhole, title: "Security and POPIA", text: "HTTPS, secure hosting, access control and privacy-conscious data handling." },
  { icon: Wrench, title: "Built to maintain", text: "Clean code, documentation and handover so your platform can evolve." },
];

const steps = [
  { icon: MessagesSquare, title: "Enquiry", text: "Tell us what you need through our enquiry form, email or phone." },
  { icon: ClipboardList, title: "Quotation", text: "We confirm scope and send a written quotation with timeline and price in ZAR." },
  { icon: FileSignature, title: "Agreement and invoice", text: "You accept the quotation and terms, and we issue an invoice for the deposit." },
  { icon: Rocket, title: "Delivery", text: "We deliver in agreed milestones, with review and approval at each stage." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <Image src="/media/hero-developers.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/30" />
        <Container className="relative py-24 sm:py-32 lg:py-40">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <MapPin size={14} className="text-[#7fa8ff]" aria-hidden />
            Registered South African company &middot; Reg. No. {company.registration}
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
            Building Smarter Digital Solutions for Modern Businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Letacom (Pty) Ltd is a South African technology company delivering custom software, professional websites, digital business tools and innovative learning platforms that help businesses grow, automate and succeed.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/services">Explore Our Services</Button>
            <Button href="/contact" variant="light">Request a Quote</Button>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A software company focused on practical outcomes"
              intro="We design, build and support digital products for South African businesses, schools and organisations: from a first professional website to custom software that runs daily operations."
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                ["Registered with CIPC", `${company.legalName}, ${company.registration}`],
                ["Based in Pretoria", "Gauteng, South Africa, serving clients nationwide"],
                ["Transparent pricing", "Written quotations in South African Rand"],
                ["Clear policies", "Published refund, delivery and privacy policies"],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <BadgeCheck size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                  <span>
                    <span className="block font-semibold text-ink">{t}</span>
                    <span className="text-sm text-ink-muted">{d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Button href="/about" variant="ghost" className="mt-8">More about Letacom</Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/media/team-collaboration.jpg" alt="Letacom team collaborating on a client project" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-surface">
        <SectionHeading eyebrow="Products & services" title="What we deliver" intro="Ten focused service lines covering the full lifecycle of a digital product." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s) => (
            <Link key={s.slug} href={`/services#${s.slug}`} className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy-900/5">
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <ServiceIcon name={s.icon} size={22} />
              </span>
              <h3 className="font-bold text-ink">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Details <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-auto">
            <Image src="/media/code-laptop.jpg" alt="Developer writing application code" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Technology capabilities" title="Engineered for performance, security and growth" />
            <div className="grid gap-8 sm:grid-cols-2">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <Icon size={24} className="text-brand" aria-hidden />
                  <h3 className="mt-3 font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* How we work */}
      <Section className="bg-navy-900 text-white">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#7fa8ff]">How we work</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A clear process from enquiry to delivery</h2>
          <p className="mt-4 text-lg text-white/70">No work starts and no payment is requested until you have a written quotation and have accepted our terms.</p>
        </div>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <Icon size={24} className="text-[#7fa8ff]" aria-hidden />
                <span className="text-sm font-semibold text-white/40">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQs */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading eyebrow="FAQs" title="Frequently asked questions" intro="Answers about our services, payments, delivery and policies." />
            <Button href="/faqs" variant="secondary">View all FAQs</Button>
          </div>
          <FaqList items={faqs.slice(0, 8)} />
        </div>
      </Section>

      {/* Contact strip */}
      <section className="border-y border-line bg-surface">
        <Container className="grid gap-6 py-10 text-sm sm:grid-cols-3">
          <div className="flex items-center gap-3"><Handshake size={20} className="text-brand" aria-hidden /><span><strong className="block text-ink">Enquiries</strong><a className="text-ink-muted hover:text-brand" href={`mailto:${company.email}`}>{company.email}</a></span></div>
          <div className="flex items-center gap-3"><MessagesSquare size={20} className="text-brand" aria-hidden /><span><strong className="block text-ink">Telephone</strong><a className="text-ink-muted hover:text-brand" href={company.phoneHref}>{company.phone}</a></span></div>
          <div className="flex items-center gap-3"><MapPin size={20} className="text-brand" aria-hidden /><span><strong className="block text-ink">Registered office</strong><span className="text-ink-muted">Equestria, Pretoria, Gauteng</span></span></div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
