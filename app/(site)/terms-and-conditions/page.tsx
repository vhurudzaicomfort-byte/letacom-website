import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for purchasing services and digital products from Letacom (Pty) Ltd.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function Terms() {
  return (
    <LegalPage title="Terms & Conditions" intro="The terms that apply when you use this website, request a quotation, or purchase services or digital products from Letacom.">
      <h2>1. About us and these terms</h2>
      <p>
        This website is operated by {company.name}, a private company registered in South Africa under registration number {company.registration}, with its registered office at {company.address.oneLine}. By using this website or purchasing from us, you agree to these terms, our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>, <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link> and{" "}
        <Link href="/delivery-policy">Delivery &amp; Fulfilment Policy</Link>.
      </p>

      <h2>2. What we sell</h2>
      <p>
        Letacom sells its own technology services (custom software development, website design and development, e-commerce platforms, learning management systems, business automation, UI/UX design, software integration, maintenance and support) and its own digital products (templates, online tools and learning resources). We do not sell physical goods, operate a marketplace or accept payment on behalf of any third party.
      </p>

      <h2>3. Quotations</h2>
      <ul>
        <li>Custom services are priced by written quotation, in South African Rand (ZAR).</li>
        <li>Quotations are valid for 30 days unless stated otherwise and describe the scope, deliverables, milestones, timeline and payment schedule.</li>
        <li>An agreement is formed when you accept the quotation in writing (including by email) and pay the deposit stated in it.</li>
        <li>Work outside the agreed scope is quoted separately before it is performed.</li>
      </ul>

      <h2>4. Prices and payment</h2>
      <ul>
        <li>All prices are in ZAR. Where Letacom is registered for VAT, prices include or exclude VAT as clearly indicated on the quotation or product page.</li>
        <li>Payments are made against a formal invoice. Accepted payment methods are described on our <Link href="/payment-security">Payment &amp; Security</Link> page.</li>
        <li>Invoices are payable within 7 days of issue unless otherwise stated. We may pause work on overdue accounts after written notice.</li>
        <li>Digital products are payable in full before delivery.</li>
      </ul>

      <h2>5. Delivery</h2>
      <p>Services are delivered according to the milestones in your quotation; digital products are delivered electronically. Full details are in our <Link href="/delivery-policy">Delivery &amp; Fulfilment Policy</Link>.</p>

      <h2>6. Customer responsibilities</h2>
      <ul>
        <li>Provide accurate information, content, feedback and approvals within agreed timeframes. Delays in providing these may extend the project schedule.</li>
        <li>Ensure you own or are licensed to use any content, images, logos and data you supply.</li>
        <li>Keep login credentials for delivered systems secure.</li>
        <li>Use delivered software and products lawfully.</li>
      </ul>

      <h2>7. Intellectual property</h2>
      <ul>
        <li><strong>Custom work:</strong> on full payment, ownership of the custom deliverables created specifically for you (design and custom source code) transfers to you, unless the quotation states otherwise.</li>
        <li><strong>Pre-existing materials:</strong> Letacom retains ownership of its pre-existing tools, libraries, frameworks and know-how, and grants you a perpetual, non-exclusive licence to use them as part of your deliverables.</li>
        <li><strong>Third-party components:</strong> open-source and third-party software remains subject to its own licence terms.</li>
        <li>Until full payment, all deliverables remain the property of Letacom.</li>
        <li>We may reference the project in our portfolio unless you ask us not to in writing.</li>
      </ul>

      <h2>8. Software and digital product licences</h2>
      <p>
        Unless a product page states otherwise, digital products are licensed, not sold: you receive a non-exclusive, non-transferable licence to use the product for your own business or personal purposes. You may not resell, redistribute, sublicense or share the product files, or offer them as part of a competing template or product library.
      </p>

      <h2>9. Warranty and support</h2>
      <p>
        Custom projects include a warranty period (30 days from final delivery unless otherwise stated in the quotation) during which we correct defects in our work at no charge. The warranty does not cover changes made by others, new features, or failures of third-party services. Ongoing support is available under a separate maintenance agreement.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the extent permitted by law, Letacom is not liable for indirect or consequential loss, loss of profit or loss of data, and our total liability arising from any agreement is limited to the amount you paid for the specific service or product concerned. Nothing in these terms limits any rights you have under the Consumer Protection Act or other law that cannot be excluded.
      </p>

      <h2>11. Confidentiality</h2>
      <p>Each party keeps the other&apos;s confidential information confidential and uses it only to perform the agreement.</p>

      <h2>12. Cancellation and refunds</h2>
      <p>Cancellations and refunds are governed by our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.</p>

      <h2>13. Disputes</h2>
      <p>
        If a dispute arises, please contact us first at <a href={`mailto:${company.email}`}>{company.email}</a>; we will try to resolve it in good faith within 14 business days. If it cannot be resolved, either party may refer the matter to mediation or to a competent South African court. These terms are governed by the laws of the Republic of South Africa.
      </p>

      <h2>14. Website use</h2>
      <p>Website content is provided for general information. You may not misuse the website, attempt to gain unauthorised access, or submit spam or unlawful content through our forms.</p>

      <h2>15. Changes</h2>
      <p>We may update these terms. The version published at the time you accept a quotation or place an order applies to that transaction.</p>
    </LegalPage>
  );
}
