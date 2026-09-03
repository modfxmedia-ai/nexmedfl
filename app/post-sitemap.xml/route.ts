import { SITE_URL } from "@/lib/site-config";
import { getBlogPostPath } from "@/lib/posts";
import { getPublishedBlogEntries } from "@/lib/ranked/entries";

export const revalidate = 3600;

// Mirrors the live site's Rank Math "post-sitemap.xml" (blog posts only).
export async function GET() {
  const posts = await getPublishedBlogEntries();
  const urls = posts.map(
    (post) => `  <url>
    <loc>${SITE_URL}${getBlogPostPath(post)}</loc>
    <lastmod>${post.dateModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
