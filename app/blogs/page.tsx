import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { BlogsPageBody } from "@/components/BlogsPageBody";

const PAGE = getStaticPage("/blogs/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function BlogsPage() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <BlogsPageBody />
    </>
  );
}
