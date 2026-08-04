import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import {
  WellnessServicesBody,
  type WellnessGroup,
} from "@/components/WellnessServicesBody";

const PAGE = getStaticPage("/wellness-services/");

export const metadata: Metadata = buildMetadata(PAGE);

// NOTE: the internal "source list" of additional wellness offerings this
// page was meant to cover wasn't included with this request — rather than
// fabricate unlisted medical services, this page aggregates NexMed's
// existing verified hormone-health/weight-loss services with the newer
// recovery therapies into one wellness-focused overview. Flag this with
// the user if a more specific offerings list exists.
const GROUPS: WellnessGroup[] = [
  {
    label: "Hormone Health & Weight Management",
    offerings: [
      {
        title: "Medical Weight Loss",
        description:
          "Doctor-led, personalized weight loss programs designed for lasting results.",
        href: "/medical-weight-loss/",
      },
      {
        title: "Hormone Replacement Therapy",
        description:
          "Restore energy, focus, and vitality with personalized HRT programs.",
        href: "/hormone-replacement-therapy/",
      },
      {
        title: "Peptide Therapy",
        description:
          "Customized peptide protocols to support recovery, aging, and overall wellness.",
        href: "/peptide-therapy/",
      },
    ],
  },
  {
    label: "Recovery & Advanced Therapies",
    offerings: [
      {
        title: "Laser Therapy",
        description:
          "Class IV laser treatment to reduce inflammation and speed tissue repair.",
        href: "/laser-therapy/",
      },
      {
        title: "Compression Therapy",
        description:
          "Pneumatic compression to improve circulation and reduce swelling.",
        href: "/compression-therapy/",
      },
      {
        title: "Treatment Programs",
        description:
          "Structured, multi-visit programs combining therapies into one wellness plan.",
        href: "/treatment-programs/",
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <WellnessServicesBody groups={GROUPS} />
    </>
  );
}
