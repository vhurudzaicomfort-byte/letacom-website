import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://letacom.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const industries = ["breweries", "manufacturing", "transport-logistics", "sales-distribution"];
  const products = [
    "equipment",
    "accessories",
    "spare-parts",
    "tools",
    "systems",
    "it-hardware-software",
    "branded-consumables",
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...industries.map((slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${baseUrl}/solutions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...products.map((slug) => ({
      url: `${baseUrl}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${baseUrl}/request-quote`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
}
