/* eslint-disable @next/next/no-img-element */
import { existsSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import QRCode from "qrcode";
import { company, policyUpdated } from "@/lib/site";
import { getPolicy, policies } from "@/lib/policies";

export const dynamicParams = false;
export function generateStaticParams() {
  return policies.map((p) => ({ slug: p.policy.slug }));
}

// The signature file is git-ignored and only present on the machine that renders the PDFs.
const SIGNATURE = "/private/director-signature.png";
const hasSignature = existsSync(join(process.cwd(), "public", SIGNATURE));

const HEADER_H = "34mm";
const FOOTER_H = "30mm";

export default async function PolicyPdf({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPolicy((await params).slug);
  if (!p) notFound();
  const { policy, PolicyContent } = p;
  const url = `${company.url}/${policy.slug}`;
  const qr = await QRCode.toString(url, { type: "svg", margin: 0, color: { dark: "#0a1628", light: "#ffffff" } });

  return (
    <>
      <style>{`
        @page { size: A4; margin: 0; }
        .lh-doc .prose-legal h2 { margin-top: 1.4rem; font-size: 14px; break-after: avoid; }
        .lh-doc .prose-legal h3 { margin-top: 0.9rem; font-size: 12.5px; break-after: avoid; }
        .lh-doc .prose-legal p, .lh-doc .prose-legal li { font-size: 11px; line-height: 1.6; color: #2d3748; }
        .lh-doc .prose-legal p { margin-bottom: 0.6rem; }
        .lh-doc .prose-legal a { color: #1556cc; text-decoration: none; }
        .lh-doc .prose-legal li { break-inside: avoid; }
      `}</style>

      {/* Letterhead repeated on every printed page */}
      <header className="fixed inset-x-0 top-0 z-10 bg-white px-[18mm] pt-[11mm]" style={{ height: HEADER_H }}>
        <div className="flex items-start justify-between border-b-2 border-navy-900 pb-3">
          <img src="/brand/letacom-logo@2x.png" alt="Letacom" className="mt-1 h-[8mm] w-auto" />
          <div className="text-right text-[8.5px] leading-[1.5] text-ink-muted">
            <p className="font-bold text-ink">{company.legalName}</p>
            <p>Reg. No. {company.registration} · {company.taxStatus}</p>
            <p>{company.address.oneLine}</p>
            <p>{company.email} · {company.phone} · letacom.co.za</p>
          </div>
        </div>
      </header>
      <footer className="fixed inset-x-0 bottom-0 z-10 bg-white px-[18mm] pb-[9mm]" style={{ height: FOOTER_H }}>
        <div className="flex h-full items-end justify-between gap-6 border-t border-line pt-3">
          <div className="text-[8.5px] leading-[1.5] text-ink-subtle">
            <p className="font-semibold text-ink">{policy.title}</p>
            <p>Effective {policyUpdated}. The current version is always published at:</p>
            <p className="font-semibold text-brand-deep">{url}</p>
            <p className="mt-1">{company.name} · Registration No. {company.registration}</p>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-right text-[7.5px] leading-tight text-ink-subtle">Scan to view<br />online</p>
            <div className="h-[18mm] w-[18mm]" dangerouslySetInnerHTML={{ __html: qr }} />
          </div>
        </div>
      </footer>

      {/* thead/tfoot spacers repeat per page so content never sits under the letterhead */}
      <table className="lh-doc w-full">
        <thead><tr><td style={{ height: HEADER_H }} /></tr></thead>
        <tfoot><tr><td style={{ height: FOOTER_H }} /></tr></tfoot>
        <tbody>
          <tr>
            <td className="px-[18mm] align-top">
              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-brand">Policy document</p>
              <h1 className="mt-1 text-[24px] font-extrabold tracking-tight text-ink">{policy.title}</h1>
              <p className="mt-1 text-[11px] text-ink-muted">{policy.intro}</p>
              <p className="mt-1 text-[10px] text-ink-subtle">Effective date: {policyUpdated}</p>
              <div className="prose-legal mt-3">
                <PolicyContent />
                <h2>Contact details</h2>
                <p>
                  {company.name} (Registration No. {company.registration}), {company.address.oneLine}. Email: {company.email}. Telephone: {company.phone}. Hours: {company.hours}.
                </p>
              </div>

              <section className="mt-5 border-t border-line pt-3" style={{ breakInside: "avoid" }}>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">Approved and signed on behalf of {company.name}</p>
                <div className="mt-1 flex items-end gap-10">
                  <div>
                    <div className="flex h-[15mm] w-[55mm] items-end border-b border-ink">
                      {hasSignature && <img src={SIGNATURE} alt="Signature of Comfort Vhurudzai" className="mb-0.5 h-[14mm] w-auto" />}
                    </div>
                    <p className="mt-1.5 text-[11px] font-bold text-ink">Comfort Vhurudzai</p>
                    <p className="text-[10px] text-ink-muted">Director, {company.name}</p>
                  </div>
                  <div>
                    <div className="flex h-[15mm] w-[40mm] items-end border-b border-ink pb-1 text-[11px] text-ink">{policyUpdated}</div>
                    <p className="mt-1.5 text-[10px] text-ink-muted">Date</p>
                  </div>
                </div>
              </section>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
