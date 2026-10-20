import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PolicyContent, policy } from "./content";

export const metadata: Metadata = {
  title: "Delivery & Fulfilment Policy",
  description: "How Letacom delivers digital products, software access and custom projects.",
  alternates: { canonical: "/delivery-policy" },
};

export default function DeliveryPolicy() {
  return (
    <LegalPage slug={policy.slug} title={policy.title} intro={policy.intro}>
      <PolicyContent />
    </LegalPage>
  );
}
