import type { MetadataRoute } from "next";
import { journalPosts, projects, services } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://infinitycrafts.in";
  const now = new Date();
  const staticRoutes = ["", "/work", "/services", "/styles", "/approach", "/about", "/journal", "/contact"].map((r) => ({
    url: `${base}${r || "/"}`,
    lastModified: now,
  }));
  const dynamic = [
    ...projects.map((p) => `/work/${p.slug}`),
    ...services.map((s) => `/services/${s.slug}`),
    ...journalPosts.map((j) => `/journal/${j.slug}`),
  ].map((r) => ({ url: `${base}${r}`, lastModified: now }));
  return [...staticRoutes, ...dynamic];
}
