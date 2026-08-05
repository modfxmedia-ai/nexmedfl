import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph, buildMedicalWebPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { ConditionsHub } from "@/components/ConditionsHub";
import { CONDITIONS_INTRO, CONDITION_CATEGORIES } from "@/lib/conditions-content";

const PAGE = getStaticPage("/conditions-we-treat/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <JsonLd
        data={buildMedicalWebPageSchema({
          path: PAGE.path,
          name: PAGE.title,
          description: PAGE.description,
        })}
      />
      <ConditionsHub intro={CONDITIONS_INTRO} categories={CONDITION_CATEGORIES} />
    </>
  );
}
