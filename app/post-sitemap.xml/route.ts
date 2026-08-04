import { SITE_URL } from "@/lib/site-config";
import { BLOG_POSTS, getBlogPostPath } from "@/lib/posts";

// Mirrors the live site's Rank Math "post-sitemap.xml" (blog posts only).
export async function GET() {
  const urls = BLOG_POSTS.map(
    (post) => `  <url>
    <loc>${SITE_URL}${getBlogPostPath(post)}</loc>
    <lastmod>${post.dateModified}</lastmod>
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
