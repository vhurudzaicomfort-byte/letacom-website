import Link from "next/link";
import { company } from "@/lib/site";

// Shared by the web page and the signed PDF (app/print/policies).
export const policy = {
  slug: "delivery-policy",
  title: "Delivery & Fulfilment Policy",
  intro: "How and when we deliver digital products, software access and custom projects. Letacom does not ship physical goods.",
};

export function PolicyContent() {
  return (
    <>
    <h2>1. Delivery method</h2>
    <p>All Letacom products and services are delivered electronically: by email, secure download link, access to an online platform, or deployment to a hosting environment. No physical goods are shipped, so no shipping fees apply.</p>

    <h2>2. Digital products and downloads</h2>
    <ul>
      <li>After payment is confirmed, we send a download link or access instructions to the email address provided at purchase.</li>
      <li>Delivery normally takes place within 24 hours of confirmed payment (business days), and in any event within 3 business days.</li>
      <li>For EFT payments, delivery begins once the funds reflect in our account, which can take 1 to 3 business days.</li>
      <li>Download links remain active for at least 7 days. If a link expires, contact us for a new one.</li>
    </ul>

    <h2>3. Software and platform access</h2>
    <p>For online tools, platforms and hosted software, we email login details or an account activation link to the registered user within 2 business days of confirmed payment or agreed go-live date. Access continues for the subscription or licence period stated at purchase.</p>

    <h2>4. Custom projects</h2>
    <ul>
      <li>Custom projects are delivered in the milestones stated in your written quotation, for example: specification, design, development, testing and launch.</li>
      <li>Each milestone is shared for review on a staging link, by email or in a meeting. You have 5 business days to approve or request changes within scope; if no response is received, the milestone is regarded as approved.</li>
      <li>Final delivery includes deployment to the agreed environment and, where applicable, handover of source code, credentials and documentation by secure electronic transfer.</li>
      <li>Timelines in the quotation depend on timely feedback and content from you. We inform you promptly of any change to the schedule.</li>
    </ul>

    <h2>5. Email fulfilment</h2>
    <p>Order confirmations, invoices, delivery links and project updates are sent to the email address you provide. Please check your spam folder and add {company.email} to your contacts. You are responsible for providing a correct email address.</p>

    <h2>6. Delivery problems</h2>
    <p>
      If you have not received a product, access details or a milestone delivery within the stated timeframe, email <a href={`mailto:${company.email}`}>{company.email}</a> or call <a href={company.phoneHref}>{company.phone}</a>. We will resolve the problem within 3 business days or, if we cannot deliver, refund you in accordance with our{" "}
      <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.
    </p>

    <h2>7. Service area</h2>
    <p>We serve customers throughout South Africa. International clients are served by arrangement, with all pricing in South African Rand.</p>
    </>
  );
}
