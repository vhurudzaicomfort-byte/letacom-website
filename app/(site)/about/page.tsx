import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Eye, Scale, ShieldCheck, Target, Users } from "lucide-react";
import { CTABand, PageHero, Section, SectionHeading } from "@/components/ui";
import { MapEmbed } from "@/components/MapEmbed";
import { Downloads } from "@/components/Downloads";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About Letacom (Pty) Ltd | South African Software Company" },
  description: "Letacom (Pty) Ltd (Reg. No. 2023/189890/07) is a CIPC-registered South African software development and digital solutions company based in Pretoria, Gauteng.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Target, title: "Practical", text: "We build what solves the problem, not what inflates the invoice." },
  { icon: Eye, title: "Transparent", text: "Written quotations, clear milestones and published policies." },
  { icon: ShieldCheck, title: "Responsible", text: "Secure systems and POPIA-conscious handling of personal information." },
  { icon: Users, title: "Partnership", text: "We support clients beyond launch with maintenance and advice." },
];

export default function AboutPage() {
  const facts: [string, string][] = [
    ["Registered name", company.legalName],
    ["Registration number", company.registration],
    ["Company type", "Private company, registered with CIPC"],
    ["Registration date", company.registeredOn],
    ["Tax registration", company.taxStatus],
    ["Registered office", company.address.oneLine],
    ["Email", company.email],
    ["Telephone", company.phone],
  ];

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A South African technology company"
        intro="Letacom (Pty) Ltd designs, builds and supports software, websites, e-commerce, learning platforms and digital products for businesses and organisations."
        image="/media/african-tech-team-office.jpg"
        crumbs={[{ href: "/about", label: "About" }]}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our story" title="Technology that helps businesses grow, automate and succeed" />
            <div className="space-y-4 leading-relaxed text-ink-muted">
              <p>
                Letacom was registered in South Africa in November 2023 with a straightforward aim: to give businesses access to well-built, affordable digital solutions without the complexity that often comes with technology projects.
              </p>
              <p>
                From our registered office in Pretoria, Gauteng, we work with clients across South Africa on websites, custom business software, online stores and learning platforms, and we develop our own digital products and templates.
              </p>
              <p>
                We sell our own services and products directly to our customers. We do not operate a marketplace and do not collect payments on behalf of third parties.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/media/consultants-reviewing-project.jpg" alt="Consultants discussing a client project" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Our values" title="How we work with clients" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-line bg-white p-6">
              <Icon size={24} className="text-brand" aria-hidden />
              <h3 className="mt-4 font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Company information" title="Registered business details" intro="Our details as recorded with the Companies and Intellectual Property Commission (CIPC)." />
          <div className="rounded-2xl border border-line">
            <div className="flex items-center gap-3 border-b border-line px-6 py-4">
              <Building2 size={20} className="text-brand" aria-hidden />
              <span className="font-bold text-ink">{company.name}</span>
            </div>
            <dl className="divide-y divide-line">
              {facts.map(([k, v]) => (
                <div key={k} className="grid gap-1 px-6 py-4 sm:grid-cols-[180px_1fr]">
                  <dt className="text-sm text-ink-subtle">{k}</dt>
                  <dd className="text-sm font-semibold text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="flex gap-2 border-t border-line px-6 py-4 text-xs text-ink-subtle">
              <Scale size={14} className="mt-0.5 shrink-0" aria-hidden />
              Operating from South Africa and governed by South African law.
            </p>
            <p className="border-t border-line px-6 py-4 text-xs leading-relaxed text-ink-subtle">
              This is the official website of Letacom (Pty) Ltd, the South African company registered under number {company.registration}. Information published elsewhere about businesses with similar names does not describe this company&apos;s registration, services or contact details unless it matches the details on this page.
            </p>
          </div>
        </div>
      </Section>
      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Downloads" title="Company profile and catalogue" intro="Download our company profile and our services and products catalogue." />
            <Downloads />
          </div>
          <div>
            <SectionHeading eyebrow="Location" title="Our registered office" />
            <MapEmbed />
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
