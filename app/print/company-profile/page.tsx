/* eslint-disable @next/next/no-img-element */
import { company } from "@/lib/site";
import { services } from "@/lib/services";
import { ContactPanel, H, Page, PageFooter } from "../doc";

const steps: [string, string][] = [
  ["Enquiry", "Tell us what you need through our website, email or telephone."],
  ["Quotation", "We confirm scope and send a written quotation with timeline and price in ZAR."],
  ["Agreement and invoice", "You accept the quotation and our terms; we issue an invoice for the deposit."],
  ["Delivery", "We deliver in agreed milestones, with review and approval at each stage."],
];

export default function CompanyProfile() {
  const facts: [string, string][] = [
    ["Registered name", company.legalName],
    ["Registration number", company.registration],
    ["Company type", "Private company, registered with CIPC"],
    ["Registration date", company.registeredOn],
    ["Tax registration", company.taxStatus],
    ["Registered office", company.address.oneLine],
    ["Email", company.email],
    ["Telephone", company.phone],
    ["Website", company.url],
  ];
  return (
    <main>
      <Page dark>
        <img src="/media/hero-team-coding-poster.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/80 to-navy-950" />
        <div className="relative flex h-full flex-col">
          <img src="/brand/letacom-logo-white@2x.png" alt="Letacom" className="h-8 w-auto self-start" />
          <div className="mt-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7fa8ff]">Company Profile</p>
            <h1 className="mt-4 text-[46px] font-extrabold leading-[1.05] tracking-tight">Building Smarter Digital Solutions for Modern Businesses.</h1>
            <p className="mt-6 max-w-[150mm] text-[15px] leading-relaxed text-white/75">
              {company.name} is a South African technology company delivering custom software, professional websites, digital business tools and innovative learning platforms that help businesses grow, automate and succeed.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-4 border-t border-white/15 pt-5 text-[11px] text-white/70">
            <div><p className="text-white/45">Registration No.</p><p className="font-semibold text-white">{company.registration}</p></div>
            <div><p className="text-white/45">Email</p><p className="font-semibold text-white">{company.email}</p></div>
            <div><p className="text-white/45">Telephone</p><p className="font-semibold text-white">{company.phone}</p></div>
          </div>
        </div>
      </Page>

      <Page>
        <H eyebrow="About us" title="A South African software company focused on practical outcomes" />
        <div className="grid grid-cols-2 gap-8 text-[12.5px] leading-relaxed text-ink-muted">
          <div className="space-y-3">
            <p>Letacom (Pty) Ltd was registered with the Companies and Intellectual Property Commission in November 2023 with a straightforward aim: to give businesses access to well-built, affordable digital solutions without the complexity that often comes with technology projects.</p>
            <p>From our registered office in Pretoria, Gauteng, we work with clients across South Africa on websites, custom business software, online stores and learning platforms, and we develop our own digital products and templates.</p>
            <p>We sell our own services and products directly to our customers. We do not operate an open marketplace and do not collect payments on behalf of third parties.</p>
          </div>
          <img src="/media/african-tech-team-office.jpg" alt="" className="h-[80mm] w-full rounded-2xl object-cover" />
        </div>
        <div className="mt-10">
          <H eyebrow="Company information" title="Registered business details" />
          <table className="w-full text-[12px]">
            <tbody className="divide-y divide-line">
              {facts.map(([k, v]) => (
                <tr key={k}><td className="w-[55mm] py-2.5 text-ink-subtle">{k}</td><td className="py-2.5 font-semibold">{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <PageFooter n={2} />
      </Page>

      <Page>
        <H eyebrow="What we do" title="Our services" />
        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
          {services.map((s) => (
            <div key={s.slug} className="border-l-2 border-brand pl-4">
              <h3 className="text-[13px] font-bold">{s.title}</h3>
              <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">{s.description}</p>
            </div>
          ))}
        </div>
        <PageFooter n={3} />
      </Page>

      <Page>
        <H eyebrow="How we work" title="From enquiry to delivery" />
        <ol className="grid grid-cols-2 gap-4 text-[12px]">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-xl bg-surface p-4">
              <p className="text-[10px] font-bold text-brand">0{i + 1}</p>
              <p className="mt-1 font-bold">{t}</p>
              <p className="mt-1 text-ink-muted">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <H eyebrow="Commitments" title="Transparent and responsible" />
          <ul className="grid grid-cols-2 gap-4 text-[11.5px] leading-relaxed text-ink-muted">
            <li><strong className="text-ink">Payments:</strong> EFT to our business bank account against a formal invoice. Online card payments will be introduced once payment gateway verification is complete.</li>
            <li><strong className="text-ink">Policies:</strong> Published refund and cancellation, delivery, privacy (POPIA) and payment policies at letacom.co.za.</li>
            <li><strong className="text-ink">Ownership:</strong> Custom work transfers to the client on full payment.</li>
            <li><strong className="text-ink">Support:</strong> A warranty period on every project, with optional maintenance plans.</li>
          </ul>
        </div>
        <div className="mt-10 flex flex-1 flex-col">
          <ContactPanel title="Let us build something useful together." />
        </div>
        <PageFooter n={4} />
      </Page>
    </main>
  );
}
