import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/effects";
import { company } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

const description =
  "Letacom (Pty) Ltd is a South African technology company offering custom software development, professional websites, digital tools, APIs and e-learning solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Letacom (Pty) Ltd | Software Development & Digital Solutions South Africa",
    template: "%s | Letacom (Pty) Ltd",
  },
  description,
  applicationName: "Letacom",
  keywords: ["Letacom", "Letacom South Africa", "Letacom Pty Ltd", "letacom.co.za", "software development company South Africa", "website development South Africa", "learning management systems South Africa", "API marketplace South Africa", "digital products South Africa"],
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined } }
    : {}),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: company.url,
    siteName: "Letacom (Pty) Ltd",
    title: "Letacom (Pty) Ltd | Software Development & Digital Solutions South Africa",
    description,
    images: [{ url: "/media/hero-team-coding-poster.jpg", width: 1920, height: 1080, alt: "Letacom (Pty) Ltd software development" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0a1628" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${company.url}/#organization`,
  name: company.name,
  alternateName: ["Letacom", "Letacom South Africa", "LETACOM (PTY) LTD"],
  description,
  identifier: { "@type": "PropertyValue", propertyID: "CIPC company registration number", value: company.registration },
  foundingDate: "2023-11-01",
  areaServed: { "@type": "Country", name: "South Africa" },
  knowsAbout: ["Custom software development", "Website development", "E-commerce", "Learning management systems", "Business automation", "API development", "UI/UX design"],
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: company.email, telephone: company.phone, areaServed: "ZA", availableLanguage: ["English"] },
  legalName: company.legalName,
  url: company.url,
  logo: `${company.url}/brand/letacom-logo.png`,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "21 Featherbrook Estate, 47 Meadow Avenue, Equestria",
    addressLocality: "Pretoria",
    addressRegion: "Gauteng",
    postalCode: "0184",
    addressCountry: "ZA",
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${company.url}/#website`,
  name: "Letacom (Pty) Ltd",
  url: company.url,
  inLanguage: "en-ZA",
  publisher: { "@id": `${company.url}/#organization` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA" className={manrope.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <RevealObserver />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([orgJsonLd, siteJsonLd]) }} />
      </body>
    </html>
  );
}
