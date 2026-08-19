import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { LegalPageBody } from "@/components/LegalPageBody";
import { HIPAA_PRIVACY_POLICY } from "@/lib/legal-content";
import { getStaticPage } from "@/lib/pages";

const PAGE = getStaticPage("/hippa-privacy-policy/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <LegalPageBody content={HIPAA_PRIVACY_POLICY} />
    </>
  );
}
