import { SITE_URL } from "@/lib/site-config";
import { STATIC_PAGES } from "@/lib/pages";

// Mirrors the live site's Rank Math "page-sitemap.xml" (all static/service
// pages, excluding blog posts, which live in post-sitemap.xml).
export async function GET() {
  const urls = STATIC_PAGES.map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${page.dateModified}</lastmod>
  </url>`
  ).join("\n");

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
