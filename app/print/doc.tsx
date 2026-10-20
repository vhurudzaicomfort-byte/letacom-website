import type { ReactNode } from "react";
import { company } from "@/lib/site";

export function Page({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <section className={`relative mx-auto flex h-[297mm] w-[210mm] flex-col overflow-hidden break-after-page px-[16mm] py-[14mm] ${dark ? "bg-navy-950 text-white" : "bg-white text-ink"}`}>
      {children}
    </section>
  );
}

export function PageFooter({ n, dark = false }: { n: number; dark?: boolean }) {
  return (
    <div className={`mt-auto flex justify-between border-t pt-3 text-[9px] ${dark ? "border-white/15 text-white/50" : "border-line text-ink-subtle"}`}>
      <span>{company.legalName} · Reg. No. {company.registration} · letacom.co.za</span>
      <span>{n}</span>
    </div>
  );
}

export function H({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand">{eyebrow}</p>
      <h2 className="mt-1 text-[26px] font-extrabold leading-tight tracking-tight">{title}</h2>
    </div>
  );
}

export function ContactPanel({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mt-auto rounded-2xl bg-navy-950 p-7 text-white">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7fa8ff]">Contact</p>
      <p className="mt-2 text-[21px] font-extrabold">{title}</p>
      {text && <p className="mt-2 text-[11px] text-white/70">{text}</p>}
      <div className="mt-5 grid grid-cols-2 gap-4 text-[11px] text-white/80">
        <p><span className="block text-white/45">Email</span>{company.email}</p>
        <p><span className="block text-white/45">Telephone</span>{company.phone}</p>
        <p><span className="block text-white/45">Website</span>{company.url}</p>
        <p><span className="block text-white/45">Registered office</span>{company.address.oneLine}</p>
      </div>
    </div>
  );
}
