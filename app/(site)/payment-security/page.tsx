import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payment & Security",
  description: "Accepted payment methods, the payment process and how payments to Letacom (Pty) Ltd are secured.",
  alternates: { canonical: "/payment-security" },
};

export default function PaymentSecurity() {
  return (
    <LegalPage title="Payment & Security" intro="How you can pay Letacom, how the payment process works and how we keep transactions secure.">
      <h2>1. Who you are paying</h2>
      <p>
        All payments are made to <strong>{company.legalName}</strong> (Registration No. {company.registration}), a South African company. Letacom collects payment only for its own products and services. We do not operate a marketplace, collect funds on behalf of other businesses, or act as a payment intermediary for third parties.
      </p>

      <h2>2. Currency</h2>
      <p>All prices and invoices are in South African Rand (ZAR).</p>

      <h2>3. Accepted payment methods</h2>
      <ul>
        <li>
          <strong>Electronic Funds Transfer (EFT):</strong> currently our primary payment method. Payment is made to Letacom&apos;s South African business bank account, using the banking details printed on your official Letacom invoice and your invoice number as the payment reference.
        </li>
        <li>
          <strong>Online card and instant EFT payments:</strong> we are in the process of setting up a South African payment gateway. Online checkout is <strong>not yet active</strong> on this website and will only be enabled once merchant verification and integration are complete.
        </li>
      </ul>
      <p>
        <strong>Fraud warning:</strong> Letacom will never ask you to pay into a personal bank account or change our banking details by email. If you receive such a request, do not pay; call us on <a href={company.phoneHref}>{company.phone}</a> to verify.
      </p>

      <h2>4. Payment process</h2>
      <h3>Services</h3>
      <ol>
        <li>You request a quote through our <Link href="/contact">Contact page</Link>.</li>
        <li>We send a written quotation with scope, timeline and price.</li>
        <li>You accept the quotation and our <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>.</li>
        <li>We issue an invoice for the deposit or first milestone.</li>
        <li>You pay by EFT; we confirm receipt by email and start or continue work.</li>
        <li>Remaining milestone invoices are issued as set out in the quotation.</li>
      </ol>
      <h3>Digital products (once available)</h3>
      <ol>
        <li>You view the product, price and licence terms.</li>
        <li>You check out and pay using the payment methods shown at checkout.</li>
        <li>On confirmed payment, the product is delivered electronically as described in our <Link href="/delivery-policy">Delivery &amp; Fulfilment Policy</Link>.</li>
      </ol>

      <h2>5. Security</h2>
      <ul>
        <li>This website is protected by HTTPS (TLS encryption) across all pages.</li>
        <li>We do not collect, store or process card numbers on this website. When online payments are introduced, card details will be entered only on the secure, PCI DSS compliant pages of our payment gateway.</li>
        <li>Personal information is handled in line with our <Link href="/privacy-policy">Privacy Policy</Link> and POPIA.</li>
      </ul>

      <h2>6. Refunds</h2>
      <p>Refunds are made to the original payer, as described in our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.</p>
    </LegalPage>
  );
}
