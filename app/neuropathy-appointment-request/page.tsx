import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { NeuropathyAppointmentRequestPageBody } from "@/components/NeuropathyAppointmentRequestPageBody";

const PAGE = getStaticPage("/neuropathy-appointment-request/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <NeuropathyAppointmentRequestPageBody />
    </>
  );
}
