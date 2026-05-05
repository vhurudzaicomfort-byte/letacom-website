import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    <html lang="en" className={`${inter.variable} ${ubuntu.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
