import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PolicyContent, policy } from "./content";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Refund and cancellation terms for Letacom custom projects, services and digital products.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicy() {
  return (
    <LegalPage slug={policy.slug} title={policy.title} intro={policy.intro}>
      <PolicyContent />
    </LegalPage>
  );
}
