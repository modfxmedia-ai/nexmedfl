import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph, buildFAQSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { FinancingOptionsPageBody } from "@/components/FinancingOptionsPageBody";
import { FINANCING_FAQS } from "@/lib/financing-content";

const PAGE = getStaticPage("/financing-options/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <JsonLd data={buildFAQSchema(FINANCING_FAQS)} />
      <FinancingOptionsPageBody />
    </>
  );
}
