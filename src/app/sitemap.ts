import type { MetadataRoute } from "next";

const BASE_URL = "https://www.darkmatterstudio.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/#work`,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#contact`,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
