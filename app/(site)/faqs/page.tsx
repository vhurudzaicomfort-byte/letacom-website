import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { CTABand, Container, PageHero } from "@/components/ui";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about Letacom services, quotations, payments, delivery, refunds, support and privacy.",
  alternates: { canonical: "/faqs" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FaqsPage() {
  return (
    <>
      <PageHero eyebrow="FAQs" title="Frequently asked questions" intro="Everything you need to know about working with Letacom, from quotations and payments to delivery, refunds and privacy." />
      <Container className="max-w-4xl py-16 sm:py-20">
        <FaqList items={faqs} />
      </Container>
      <CTABand title="Still have a question?" text="Contact our team and we will respond within one business day." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
