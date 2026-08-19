import { SITE_URL } from "@/lib/site-config";
import { STATIC_PAGES } from "@/lib/pages";
import { SERVICE_AREA_CITIES, SERVICE_AREA_TOPICS } from "@/lib/service-area-content";

const SERVICE_AREA_LASTMOD = "2026-08-20T00:00:00+00:00";

// The /service-areas/ programmatic pages (1 hub + 1 per city + 1 per
// city x topic combo) are generated from lib/service-area-content.ts
// rather than hand-listed in STATIC_PAGES, so they're appended here
// instead of bloating that array with 200+ entries.
function serviceAreaUrls(): string[] {
  const paths = ["/service-areas/"];
  for (const city of SERVICE_AREA_CITIES) {
    paths.push(`/service-areas/${city.slug}/`);
    for (const topic of SERVICE_AREA_TOPICS) {
      paths.push(`/service-areas/${city.slug}/${topic.slug}/`);
    }
  }
  return paths;
}

// Mirrors the live site's Rank Math "page-sitemap.xml" (all static/service
// pages, excluding blog posts, which live in post-sitemap.xml).
export async function GET() {
  const staticUrls = STATIC_PAGES.map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${page.dateModified}</lastmod>
  </url>`
  );

  const serviceAreaXmlUrls = serviceAreaUrls().map(
    (path) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${SERVICE_AREA_LASTMOD}</lastmod>
  </url>`
  );

  const urls = [...staticUrls, ...serviceAreaXmlUrls].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
