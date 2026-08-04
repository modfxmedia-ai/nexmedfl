import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { buildGraph } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { BLOG_POSTS, getBlogPostPath } from "@/lib/posts";

const PAGE = getStaticPage("/blogs/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function BlogsPage() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <main>
        <h1>{PAGE.title}</h1>
        <p>
          TODO: page content for <code>{PAGE.path}</code> — design and copy
          coming in a later pass.
        </p>
        <ul>
          {BLOG_POSTS.map((post) => (
            <li key={getBlogPostPath(post)}>
              <Link href={getBlogPostPath(post)}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
