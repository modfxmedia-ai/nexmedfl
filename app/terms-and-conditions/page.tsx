import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { LegalPageBody } from "@/components/LegalPageBody";
import { TERMS_CONDITIONS } from "@/lib/legal-content";

const PAGE = getStaticPage("/terms-and-conditions/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <LegalPageBody content={TERMS_CONDITIONS} />
    </>
  );
}
