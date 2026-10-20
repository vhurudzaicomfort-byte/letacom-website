import Link from "next/link";
import type { ReactNode } from "react";
import { Download, FileText } from "lucide-react";
import { Container } from "./ui";
import { Breadcrumbs } from "./Breadcrumbs";
import { company, legalNav, policyUpdated } from "@/lib/site";

export function LegalPage({ slug, title, intro, children }: { slug: string; title: string; intro: string; children: ReactNode }) {
  const current = legalNav.find((l) => l.href === `/${slug}`);
  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <Breadcrumbs items={[{ href: `/${slug}`, label: title }]} />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand">Legal</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">{intro}</p>
          <p className="mt-4 text-sm text-ink-subtle">Last updated: {policyUpdated}</p>
          {current && (
            <a
              href={current.pdf}
              download
              className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand hover:shadow-md hover:shadow-brand/30"
            >
              <Download size={16} className="transition-transform group-hover:translate-y-0.5" aria-hidden />
              Download signed PDF
            </a>
          )}
        </Container>
      </section>
      <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_280px]">
        <article className="prose-legal max-w-3xl">
          {children}
          <h2>Contact details</h2>
          <p>
            <strong>{company.name}</strong> (Registration No. {company.registration})
            <br />
            {company.address.oneLine}
            <br />
            Email: <a href={`mailto:${company.email}`}>{company.email}</a>
            <br />
            Telephone: <a href={company.phoneHref}>{company.phone}</a>
            <br />
            Hours: {company.hours}
          </p>
          <p className="text-sm">
            Approved by Comfort Vhurudzai, Director, {company.name}. A signed copy of this policy is available as a{" "}
            {current ? <a href={current.pdf} download>PDF download</a> : "PDF"}.
          </p>
        </article>
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <nav aria-label="Policies" className="rounded-2xl border border-line p-5">
            <p className="mb-3 text-sm font-semibold text-ink">Policies</p>
            <ul className="space-y-2 text-sm">
              {legalNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} aria-current={l.href === `/${slug}` ? "page" : undefined} className={l.href === `/${slug}` ? "font-semibold text-brand" : "text-ink-muted hover:text-brand"}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="rounded-2xl border border-line p-5">
            <p className="mb-3 text-sm font-semibold text-ink">Signed PDF copies</p>
            <ul className="space-y-2.5 text-sm">
              {legalNav.map((l) => (
                <li key={l.pdf}>
                  <a href={l.pdf} download className="group flex items-start gap-2 text-ink-muted hover:text-brand">
                    <FileText size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                    <span>{l.label} <span className="text-ink-subtle">(PDF)</span></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Container>
    </>
  );
}
