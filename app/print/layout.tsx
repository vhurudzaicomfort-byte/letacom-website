import type { Metadata } from "next";

// Source pages for the downloadable PDFs in /public/downloads. Not for search engines.
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function PrintLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{"@page { size: A4; margin: 0; } body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: #fff; }"}</style>
      {children}
    </>
  );
}
