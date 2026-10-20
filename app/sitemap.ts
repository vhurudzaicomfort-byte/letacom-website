import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

const routes = ["", "/about", "/services", "/products", "/software-development", "/learning-platforms", "/faqs", "/contact", "/privacy-policy", "/refund-policy", "/terms-and-conditions", "/delivery-policy", "/payment-security"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${company.url}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r.startsWith("/privacy") || r.includes("policy") || r.includes("terms") || r.includes("payment") ? 0.5 : 0.8,
  }));
}
