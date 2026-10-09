import type { MetadataRoute } from "next";

const base = "https://abnarrowfabrics.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/market-sector", "/product-customisation", "/privacy-policy"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
