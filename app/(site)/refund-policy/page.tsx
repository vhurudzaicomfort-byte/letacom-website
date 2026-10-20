import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Refund and cancellation terms for Letacom custom projects, services and digital products.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicy() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      intro="How cancellations, deposits, milestone payments and refunds work for Letacom services and digital products."
    >
      <h2>1. Scope</h2>
      <p>
        This policy applies to all services and digital products sold by {company.name} (Registration No. {company.registration}) (&quot;Letacom&quot;, &quot;we&quot;, &quot;us&quot;). It should be read with our{" "}
        <Link href="/terms-and-conditions">Terms &amp; Conditions</Link> and <Link href="/delivery-policy">Delivery &amp; Fulfilment Policy</Link>. Nothing in this policy limits your rights under the Consumer Protection Act 68 of 2008 (CPA) or the Electronic Communications and Transactions Act 25 of 2002 (ECTA), where those Acts apply.
      </p>
      <p>Letacom sells only its own services and products. All refunds are paid by Letacom directly to the customer who made the payment.</p>

      <h2>2. Custom software, website and design projects</h2>
      <h3>2.1 Quotations and deposits</h3>
      <p>
        Custom projects begin only after you accept a written quotation and pay the deposit stated in it (usually 50% of the project value unless otherwise agreed). The deposit secures scheduled time and covers discovery, planning and initial design work.
      </p>
      <ul>
        <li>If you cancel in writing <strong>before any work has started</strong>, the deposit is refunded in full, less any third-party costs already incurred on your behalf with your approval (for example domain registration or licences).</li>
        <li>If you cancel <strong>after work has started</strong>, we retain the portion of the deposit that corresponds to work completed up to the cancellation date, calculated against the quotation, and refund the balance.</li>
      </ul>
      <h3>2.2 Milestone payments</h3>
      <p>
        Larger projects are invoiced per milestone as set out in the quotation. Payments for milestones that have been delivered and approved are non-refundable, because the corresponding work has been performed and handed over. Payments made in advance for milestones not yet started are refunded in full on cancellation.
      </p>
      <h3>2.3 Cancellation by Letacom</h3>
      <p>If we are unable to complete a project, we will refund all amounts paid for work not delivered and hand over all completed work.</p>

      <h2>3. Ongoing services (maintenance, support and hosting)</h2>
      <ul>
        <li>Monthly services may be cancelled at any time with 30 days&apos; written notice. Fees already invoiced for the notice period remain payable.</li>
        <li>Fees for annual services paid in advance are refunded pro rata for full unused months, less any non-refundable third-party costs (such as domain renewals).</li>
      </ul>

      <h2>4. Digital products</h2>
      <p>Digital products (such as templates, online tools and learning resources) are delivered electronically and can be copied once delivered. For this reason:</p>
      <ul>
        <li>Once a digital product has been delivered and downloaded or accessed, it is not refundable for change of mind, except where the law requires otherwise.</li>
        <li>You are entitled to a full refund if a product is <strong>not delivered</strong> within the timeframe in our Delivery Policy and we cannot resolve the problem within 3 business days of you notifying us.</li>
        <li>You are entitled to a replacement or full refund, at your choice, if a product is <strong>defective</strong> (for example corrupted files or a tool that does not work as described) and we cannot correct the defect within 5 business days.</li>
        <li>You are entitled to a full refund if the product is <strong>materially different</strong> from its description.</li>
        <li>Duplicate payments for the same order are refunded in full.</li>
      </ul>

      <h2>5. Cooling-off period</h2>
      <p>
        Where section 44 of ECTA applies to an online purchase, you may cancel without reason within 7 days of receiving the goods or concluding the agreement for services. As provided in section 42 of ECTA, this right does not apply to services that began, with your consent, before the end of the 7-day period, to goods made to your specifications, or to software and digital content that has been unsealed, downloaded or accessed.
      </p>

      <h2>6. Non-delivery</h2>
      <p>
        If a paid service or product is not delivered as agreed, contact us. If we cannot deliver within a reasonable period agreed with you, we will refund the amount paid for the undelivered service or product in full.
      </p>

      <h2>7. How to request a cancellation or refund</h2>
      <ol>
        <li>Email <a href={`mailto:${company.email}`}>{company.email}</a> with your name, invoice or order number, and the reason for your request.</li>
        <li>We acknowledge your request within 2 business days and may ask for information needed to assess it.</li>
        <li>We give you a written decision within 7 business days of acknowledgement.</li>
        <li>Approved refunds are paid within 14 business days of approval, using the original payment method where possible, or by EFT to a bank account in the name of the person who paid.</li>
      </ol>

      <h2>8. Complaints</h2>
      <p>
        If you are not satisfied with a product, service or refund decision, email <a href={`mailto:${company.email}`}>{company.email}</a> with the subject &quot;Complaint&quot;. We acknowledge complaints within 2 business days and aim to resolve them within 14 business days. If the matter is not resolved, you may approach the National Consumer Commission or another applicable dispute resolution body.
      </p>
    </LegalPage>
  );
}
