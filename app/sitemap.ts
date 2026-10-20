import type { MetadataRoute } from "next";
import { company } from "@/lib/site";
import { apiListings, categories, listings } from "@/lib/catalogue";
import { insights } from "@/lib/insights";

const core = ["", "/services", "/solutions", "/software-development", "/website-development", "/learning-platforms", "/marketplace", "/marketplace/apis", "/marketplace/templates", "/products", "/about", "/faqs", "/insights", "/contact"];
const legal = ["/privacy-policy", "/refund-policy", "/terms-and-conditions", "/delivery-policy", "/payment-security"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-20");
  const entry = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({ url: `${company.url}${path}`, lastModified, changeFrequency: "monthly", priority });
  return [
    ...core.map((p) => entry(p, p === "" ? 1 : 0.8)),
    ...categories.map((c) => entry(`/marketplace/category/${c.slug}`, 0.6)),
    ...listings.map((l) => entry(`/marketplace/${l.slug}`, l.planned ? 0.4 : 0.7)),
    ...apiListings.map((l) => entry(`/marketplace/apis/${l.slug}`, 0.4)),
    ...insights.map((i) => entry(`/insights/${i.slug}`, 0.6)),
    ...legal.map((p) => entry(p, 0.5)),
  ];
}
