import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { BlogsPageBody } from "@/components/BlogsPageBody";
import { getPublishedBlogEntries } from "@/lib/ranked/entries";

export const revalidate = 3600;

const PAGE = getStaticPage("/blogs/");

export const metadata: Metadata = buildMetadata(PAGE);

export default async function BlogsPage() {
  const posts = await getPublishedBlogEntries();

  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <BlogsPageBody posts={posts} />
    </>
  );
}
