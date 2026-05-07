import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Ubuntu } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MobileStickyCTABar } from "@/components/layout/MobileStickyCTABar";
import { RevealProvider } from "@/components/effects/RevealProvider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Letacom South Africa — Industrial Supply & Procurement",
    template: "%s | Letacom South Africa",
  },
  description:
    "Africa-focused, globally sourced industrial supply and procurement solutions. Serving breweries, manufacturing, transport & logistics, and distribution across Southern Africa.",
  keywords: [
    "industrial supply South Africa",
    "procurement Africa",
    "brewery equipment",
    "draught systems",
    "China to Africa sourcing",
    "industrial distribution",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Letacom South Africa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${ubuntu.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <RevealProvider />
        <Header />
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyCTABar />
      </body>
    </html>
  );
}
