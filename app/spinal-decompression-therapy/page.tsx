import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph, buildMedicalProcedureSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { getServiceContent } from "@/lib/service-content";
import { ServicePageBody } from "@/components/ServicePageBody";

const PAGE = getStaticPage("/spinal-decompression-therapy/");
const CONTENT = getServiceContent("/spinal-decompression-therapy/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <JsonLd
        data={buildMedicalProcedureSchema({
          path: PAGE.path,
          name: CONTENT.heading,
          description: PAGE.description,
          bodyLocation: "Spine",
        })}
      />
      <ServicePageBody {...CONTENT} />
    </>
  );
}
