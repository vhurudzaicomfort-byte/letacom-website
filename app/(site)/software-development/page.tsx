import type { Metadata } from "next";
import Image from "next/image";
import { Boxes, Database, LayoutDashboard, Plug, ShieldCheck, Workflow } from "lucide-react";
import { Button, CTABand, CheckList, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Custom Software Development South Africa",
  description: "Custom software development in South Africa: business applications, SaaS and web applications, portals, automation and integrations by Letacom (Pty) Ltd.",
  alternates: { canonical: "/software-development" },
};

const offerings = [
  { icon: LayoutDashboard, title: "Business applications", text: "Web applications and dashboards for operations, sales, HR and finance teams." },
  { icon: Boxes, title: "Client and staff portals", text: "Secure self-service portals with role-based access." },
  { icon: Workflow, title: "Process automation", text: "Automated approvals, notifications, document generation and reporting." },
  { icon: Plug, title: "Integrations and APIs", text: "Connections between your systems, third-party services and payment gateways." },
  { icon: Database, title: "Data and reporting", text: "Structured databases and reporting dashboards that turn data into decisions." },
  { icon: ShieldCheck, title: "Security and compliance", text: "Encrypted connections, access control and POPIA-conscious data handling." },
];

const phases = [
  ["Discovery", "Workshops to understand your processes, users and goals; written specification."],
  ["Design", "Wireframes and interface designs for approval before development."],
  ["Build", "Iterative development with regular demonstrations on a staging environment."],
  ["Test and launch", "Quality assurance, user acceptance testing and production deployment."],
  ["Support", "Warranty period for defects, then optional maintenance and support."],
];

export default function SoftwarePage() {
  return (
    <>
      <PageHero crumbs={[{ href: "/software-development", label: "Software Development" }]}
        eyebrow="Software development"
        title="Custom software built around your business"
        intro="We build reliable web-based applications that replace spreadsheets, paperwork and manual processes, delivered in clear milestones with full documentation."
        image="/media/code-laptop.jpg"
      >
        <Button href="/contact?service=Custom%20Software%20Development">Request a Quote</Button>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="What we build" title="Software for real business problems" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-line p-6">
              <Icon size={24} className="text-brand" aria-hidden />
              <h3 className="mt-4 font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Delivery approach" title="Milestone-based delivery" intro="Projects are split into milestones, each with defined deliverables, review and sign-off. Payments are linked to milestones as stated in your quotation." />
            <ol className="space-y-4">
              {phases.map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">{i + 1}</span>
                  <span>
                    <span className="block font-bold text-ink">{t}</span>
                    <span className="text-sm text-ink-muted">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src="/media/developers-collaborating-laptop.jpg" alt="Software developers collaborating on code" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="mb-4 font-bold text-ink">Every project includes</h3>
              <CheckList items={["Written quotation and project schedule", "Staging environment for review", "Source code and documentation", "Handover and training", "Warranty period for defect fixes"]} />
            </div>
          </div>
        </div>
      </Section>
      <CTABand title="Ready to scope your software project?" />
    </>
  );
}
