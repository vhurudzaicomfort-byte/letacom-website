import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PolicyContent, policy } from "./content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Letacom (Pty) Ltd collects, uses and protects personal information in line with POPIA.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage slug={policy.slug} title={policy.title} intro={policy.intro}>
      <PolicyContent />
    </LegalPage>
  );
}
