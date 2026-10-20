import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PolicyContent, policy } from "./content";

export const metadata: Metadata = {
  title: "Payment & Security",
  description: "Accepted payment methods, the payment process and how payments to Letacom (Pty) Ltd are secured.",
  alternates: { canonical: "/payment-security" },
};

export default function PaymentSecurity() {
  return (
    <LegalPage slug={policy.slug} title={policy.title} intro={policy.intro}>
      <PolicyContent />
    </LegalPage>
  );
}
