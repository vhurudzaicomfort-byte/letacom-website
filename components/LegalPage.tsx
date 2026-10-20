import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./ui";
import { company, legalNav, policyUpdated } from "@/lib/site";

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand">Legal</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">{intro}</p>
          <p className="mt-4 text-sm text-ink-subtle">Last updated: {policyUpdated}</p>
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
        </article>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <nav aria-label="Policies" className="rounded-2xl border border-line p-5">
            <p className="mb-3 text-sm font-semibold text-ink">Policies</p>
            <ul className="space-y-2 text-sm">
              {legalNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink-muted hover:text-brand">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </Container>
    </>
  );
}
