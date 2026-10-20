import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

const description =
  "Letacom (Pty) Ltd is a registered South African technology company delivering custom software, professional websites, e-commerce, learning platforms and digital business tools.";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Letacom (Pty) Ltd | Software, Websites & Learning Platforms",
    template: "%s | Letacom (Pty) Ltd",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: company.url,
    siteName: "Letacom (Pty) Ltd",
    title: "Letacom (Pty) Ltd | Building Smarter Digital Solutions",
    description,
    images: [{ url: "/media/hero-developers.jpg", width: 1920, height: 1280, alt: "Letacom software development" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0a1628" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
