import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PolicyContent, policy } from "./content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for purchasing services and digital products from Letacom (Pty) Ltd.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function Terms() {
  return (
    <LegalPage slug={policy.slug} title={policy.title} intro={policy.intro}>
      <PolicyContent />
    </LegalPage>
  );
}
