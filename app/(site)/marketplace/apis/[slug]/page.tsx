import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { Button, Container, PageHero } from "@/components/ui";
import { CodeBlock } from "@/components/CodeBlock";
import { StatusBadge } from "@/components/marketplace";
import { apiListings, getListing } from "@/lib/catalogue";

export const dynamicParams = false;
export function generateStaticParams() {
  return apiListings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const l = getListing((await params).slug);
  if (!l?.api) return {};
  return { title: `${l.name} Documentation | Letacom APIs`, description: `Developer documentation for the ${l.name}: authentication, endpoints, parameters and example responses.`, alternates: { canonical: `/marketplace/apis/${l.slug}` } };
}

export default async function ApiDocsPage({ params }: { params: Promise<{ slug: string }> }) {
  const l = getListing((await params).slug);
  if (!l?.api) notFound();
  const a = l.api;
  return (
    <>
      <PageHero
        eyebrow="API documentation"
        title={l.name}
        intro={l.description}
        crumbs={[{ href: "/marketplace", label: "Marketplace" }, { href: "/marketplace/apis", label: "APIs" }, { href: `/marketplace/apis/${l.slug}`, label: l.name }]}
      >
        <Button href={`/contact?product=${l.slug}`}>Request API Access</Button>
        <Button href={`/marketplace/${l.slug}`} variant="light">Product details</Button>
      </PageHero>

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Documentation" className="lg:sticky lg:top-24 lg:self-start">
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-ink-muted hover:text-brand">Overview</a></li>
            <li><a href="#authentication" className="text-ink-muted hover:text-brand">Authentication</a></li>
            {a.endpoints.map((e) => (
              <li key={e.path}><a href={`#${e.path.replace(/\W+/g, "-")}`} className="font-mono text-xs text-ink-muted hover:text-brand">{e.method} {e.path}</a></li>
            ))}
            <li><a href="#usage" className="text-ink-muted hover:text-brand">Usage requirements</a></li>
          </ul>
        </nav>

        <div className="min-w-0 space-y-12">
          <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <AlertTriangle size={18} className="mt-0.5 shrink-0" aria-hidden />
            <p><strong>In development.</strong> This API is not yet live. The documentation below is an illustrative example of the planned interface and may change before release.</p>
          </div>

          <section id="overview" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-ink">Overview</h2>
            <dl className="mt-5 grid gap-4 rounded-2xl border border-line p-5 text-sm sm:grid-cols-3">
              <div><dt className="text-ink-subtle">Status</dt><dd className="mt-1"><StatusBadge status={l.status} /></dd></div>
              <div><dt className="text-ink-subtle">Version</dt><dd className="mt-1 font-semibold text-ink">{a.version}</dd></div>
              <div><dt className="text-ink-subtle">Base URL</dt><dd className="mt-1 break-all font-mono text-xs text-ink">{a.baseUrl}</dd></div>
            </dl>
          </section>

          <section id="authentication" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-ink">Authentication</h2>
            <p className="mt-3 text-ink-muted">{a.auth}. Keys are issued after an access request is approved. Store keys on your server and never expose them in client-side code.</p>
            <div className="mt-4"><CodeBlock label="Header" code={`Authorization: Bearer YOUR_API_KEY`} /></div>
          </section>

          {a.endpoints.map((e) => (
            <section key={e.path} id={e.path.replace(/\W+/g, "-")} className="scroll-mt-24 border-t border-line pt-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-md px-2 py-1 font-mono text-xs font-bold ${e.method === "GET" ? "bg-emerald-50 text-emerald-700" : "bg-brand-soft text-brand-deep"}`}>{e.method}</span>
                <h2 className="font-mono text-lg font-bold text-ink">{e.path}</h2>
              </div>
              <p className="mt-3 text-ink-muted">{e.summary}</p>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-ink">Parameters</h3>
              <div className="mt-3 overflow-x-auto rounded-xl border border-line">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="bg-surface text-xs uppercase tracking-wider text-ink-subtle">
                    <tr><th className="px-4 py-3">Name</th><th className="px-4 py-3">In</th><th className="px-4 py-3">Type</th><th className="px-4 py-3">Description</th></tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {e.params.map((p) => (
                      <tr key={p.name}>
                        <td className="px-4 py-3 font-mono text-xs text-ink">{p.name}{p.required && <span className="ml-1 text-red-600">*</span>}</td>
                        <td className="px-4 py-3 text-ink-muted">{p.in}</td>
                        <td className="px-4 py-3 font-mono text-xs text-ink-muted">{p.type}</td>
                        <td className="px-4 py-3 text-ink-muted">{p.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 grid gap-4 xl:grid-cols-2">
                <CodeBlock
                  label="Example request"
                  code={
                    e.method === "GET"
                      ? `curl "${a.baseUrl.split(" ")[0]}${e.path}?${e.params.map((p) => `${p.name}=${p.name === "year" ? "2027" : p.name === "from" ? "2026-12-14" : "2026-12-18"}`).join("&")}" \\\n  -H "Authorization: Bearer YOUR_API_KEY"`
                      : `curl -X POST ${a.baseUrl.split(" ")[0]}${e.path} \\\n  -H "Authorization: Bearer YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d '${(e.request ?? "{}").replace(/\n\s*/g, " ")}'`
                  }
                />
                <CodeBlock label="Example response (200)" code={e.response} />
              </div>
            </section>
          ))}

          <section id="usage" className="scroll-mt-24 border-t border-line pt-10">
            <h2 className="text-2xl font-bold text-ink">Usage requirements</h2>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-ink-muted">
              {a.usage.map((u) => <li key={u}>{u}</li>)}
            </ul>
            <div className="mt-6"><CodeBlock label="Error response (example)" code={`{\n  "error": {\n    "code": "invalid_request",\n    "message": "amount must be a positive number"\n  }\n}`} /></div>
          </section>
        </div>
      </Container>
    </>
  );
}
