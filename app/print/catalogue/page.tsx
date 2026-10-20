/* eslint-disable @next/next/no-img-element */
import { company } from "@/lib/site";
import { services } from "@/lib/services";
import { categories, kindLabel, listings, statusLabel, type Listing } from "@/lib/catalogue";
import { ContactPanel, H, Page, PageFooter } from "../doc";

function chunk(a: Listing[], n: number) {
  return Array.from({ length: Math.ceil(a.length / n) }, (_, i) => a.slice(i * n, i * n + n));
}

export default function Catalogue() {
  const available = chunk(listings.filter((l) => !l.planned), 6);
  const planned = listings.filter((l) => l.planned);
  return (
    <main>
      <Page dark>
        <img src="/media/professionals-digital-solutions.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/85 to-navy-950" />
        <div className="relative flex h-full flex-col">
          <img src="/brand/letacom-logo-white@2x.png" alt="Letacom" className="h-8 w-auto self-start" />
          <div className="mt-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7fa8ff]">Services &amp; Products Catalogue</p>
            <h1 className="mt-4 text-[44px] font-extrabold leading-[1.05] tracking-tight">Discover Digital Solutions Built for Business.</h1>
            <p className="mt-6 max-w-[150mm] text-[15px] leading-relaxed text-white/75">Software, websites, learning platforms, APIs, digital tools, templates and technology services from {company.name}.</p>
            <p className="mt-8 inline-block rounded-full border border-white/20 px-4 py-1.5 text-[11px] text-white/80">Pricing by written quotation in ZAR · Online payments coming soon</p>
          </div>
        </div>
      </Page>

      <Page>
        <H eyebrow="Services" title="Professional services" />
        <div className="space-y-3">
          {services.map((s) => (
            <div key={s.slug} className="grid grid-cols-[52mm_1fr] gap-4 border-b border-line pb-3">
              <h3 className="text-[12.5px] font-bold">{s.title}</h3>
              <div className="text-[10.5px] leading-relaxed text-ink-muted">
                <p>{s.summary}</p>
                <p className="mt-1"><span className="font-semibold text-ink">Deliverables:</span> {s.deliverables.join("; ")}.</p>
              </div>
            </div>
          ))}
        </div>
        <PageFooter n={2} />
      </Page>

      {available.map((group, gi) => (
        <Page key={gi}>
          <H eyebrow="Marketplace" title={gi === 0 ? "Available now, by quotation" : "Available now (continued)"} />
          <div className="grid grid-cols-2 gap-4">
            {group.map((l) => (
              <div key={l.slug} className="overflow-hidden rounded-xl border border-line">
                <img src={l.image} alt="" className="h-[30mm] w-full object-cover" />
                <div className="p-3">
                  <p className="text-[8.5px] font-bold uppercase tracking-wider text-ink-subtle">{categories.find((c) => c.slug === l.category)?.name} · Ref. {l.ref}</p>
                  <h3 className="mt-1 text-[12px] font-bold">{l.name}</h3>
                  <p className="mt-1 text-[10px] leading-relaxed text-ink-muted">{l.summary}</p>
                  <p className="mt-2 text-[9.5px] font-semibold text-brand">{statusLabel[l.status]} · {kindLabel[l.kind]}</p>
                </div>
              </div>
            ))}
          </div>
          <PageFooter n={3 + gi} />
        </Page>
      ))}

      <Page>
        <H eyebrow="Coming soon" title="Planned products in development" />
        <p className="mb-4 text-[11px] text-ink-muted">These Letacom products are in development and not yet available for purchase. Pricing, licence terms and release dates will be published at launch. Register your interest at letacom.co.za/contact.</p>
        <table className="w-full text-[10px]">
          <thead className="bg-surface text-left text-[9px] uppercase tracking-wider text-ink-subtle">
            <tr><th className="px-3 py-2">Product</th><th className="px-3 py-2">Type</th><th className="px-3 py-2">Format / platform</th><th className="px-3 py-2">Ref.</th></tr>
          </thead>
          <tbody className="divide-y divide-line">
            {planned.map((l) => (
              <tr key={l.slug}>
                <td className="px-3 py-2"><span className="font-bold">{l.name}</span><span className="block text-ink-muted">{l.summary}</span></td>
                <td className="px-3 py-2 text-ink-muted">{kindLabel[l.kind]}</td>
                <td className="px-3 py-2 text-ink-muted">{l.format ?? l.platforms.join(", ")}</td>
                <td className="whitespace-nowrap px-3 py-2 font-mono text-ink-muted">{l.ref}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <PageFooter n={3 + available.length} />
      </Page>

      <Page>
        <H eyebrow="How to buy" title="Requesting a quotation" />
        <ol className="grid grid-cols-2 gap-4 text-[12px]">
          {[
            ["Choose", "Select a service or listing and note its reference number."],
            ["Enquire", "Request a quote at letacom.co.za/contact, by email or by telephone."],
            ["Quotation", "Receive a written quotation in ZAR with scope, timeline and terms."],
            ["Invoice and delivery", "Accept the quotation, pay the invoice by EFT, and we deliver as agreed."],
          ].map(([t, d], i) => (
            <li key={t} className="rounded-xl bg-surface p-4">
              <p className="text-[10px] font-bold text-brand">0{i + 1}</p>
              <p className="mt-1 font-bold">{t}</p>
              <p className="mt-1 text-ink-muted">{d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-[11px] leading-relaxed text-ink-muted">All listings are products and services of {company.name}, sold and supported by Letacom only. Online payments are coming soon; until then, purchases are made against a formal invoice. Purchases are governed by our Terms &amp; Conditions, Delivery &amp; Fulfilment Policy and Refund &amp; Cancellation Policy, published at letacom.co.za.</p>
        <div className="mt-10 flex flex-1 flex-col">
          <ContactPanel title="Request a quotation" text="Quote the reference number of any listing in your enquiry." />
        </div>
        <PageFooter n={4 + available.length} />
      </Page>
    </main>
  );
}
