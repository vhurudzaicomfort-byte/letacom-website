import type { Metadata } from "next";
import Image from "next/image";
import { Gauge, Search, ShieldCheck, ShoppingCart, Smartphone, Wrench } from "lucide-react";
import { Button, CTABand, CheckList, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Website Design & Development South Africa",
  description: "Professional website design and development in South Africa: business websites, e-commerce online stores and landing pages built for speed, SEO and mobile by Letacom (Pty) Ltd.",
  alternates: { canonical: "/website-development" },
};

const features = [
  { icon: Smartphone, title: "Mobile-first design", text: "Layouts designed for phones first, then tablets and desktops." },
  { icon: Gauge, title: "Fast loading", text: "Modern frameworks, optimised images and global hosting for strong Core Web Vitals." },
  { icon: Search, title: "Search-ready", text: "Page titles, descriptions, sitemaps and structured data configured from day one." },
  { icon: ShieldCheck, title: "Secure by default", text: "HTTPS, security headers and POPIA-conscious enquiry forms." },
  { icon: ShoppingCart, title: "E-commerce", text: "Online stores connected to a payment gateway account in your business's name." },
  { icon: Wrench, title: "Maintained", text: "Optional maintenance plans for updates, backups and support." },
];

export default function WebsiteDevelopmentPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website design and development",
    serviceType: "Website development",
    provider: { "@id": "https://letacom.co.za/#organization" },
    areaServed: { "@type": "Country", name: "South Africa" },
    url: "https://letacom.co.za/website-development",
  };
  return (
    <>
      <PageHero
        eyebrow="Website development"
        title="Professional websites for South African businesses"
        intro="We design and build business websites, online stores and landing pages that load fast, rank well and turn visitors into enquiries."
        image="/media/professionals-digital-solutions.jpg"
        crumbs={[{ href: "/services", label: "Services" }, { href: "/website-development", label: "Website Development" }]}
      >
        <Button href="/contact?service=Website%20Design%20%26%20Development">Request a Quote</Button>
        <Button href="/marketplace/category/website-solutions" variant="light">Website solutions</Button>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="What you get" title="Websites engineered for results" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} data-reveal className="group rounded-2xl border border-line p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy-900/5">
              <Icon size={24} className="text-brand transition-transform duration-300 group-hover:scale-110" aria-hidden />
              <h3 className="mt-4 font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/media/ux-wireframes.jpg" alt="Website wireframes sketched before development" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Website types" title="From first website to online store" />
            <CheckList items={["Corporate and company websites", "E-commerce online stores", "Campaign and product landing pages", "Website redesigns and migrations", "Website templates and components"]} />
            <p className="mt-6 text-sm text-ink-muted">Every project starts with a written quotation in South African Rand, with milestones for design approval, development on a staging link and launch on your domain.</p>
          </div>
        </div>
      </Section>
      <CTABand title="Ready for a website that works as hard as you do?" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
