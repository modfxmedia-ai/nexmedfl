import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { ConditionsHub, type ConditionCategory } from "@/components/ConditionsHub";

const PAGE = getStaticPage("/conditions-we-treat/");

export const metadata: Metadata = buildMetadata(PAGE);

const CATEGORIES: ConditionCategory[] = [
  {
    label: "Spine Conditions",
    items: [
      { label: "Back pain", href: "/chiropractic-care/" },
      { label: "Neck pain", href: "/chiropractic-care/" },
      { label: "Pinched nerve", href: "/chiropractic-care/" },
      { label: "Herniated disc", href: "/spinal-decompression-therapy/" },
      { label: "Sciatica", href: "/spinal-decompression-therapy/" },
      { label: "Spinal stenosis", href: "/spinal-decompression-therapy/" },
      {
        label: "Degenerative disc disease",
        href: "/spinal-decompression-therapy/",
      },
    ],
  },
  {
    label: "Knee Conditions",
    items: [
      { label: "Knee osteoarthritis", href: "/knee-pain-treatment/" },
      { label: "Meniscus tears", href: "/knee-pain-treatment/" },
      { label: "Patellofemoral pain", href: "/knee-pain-treatment/" },
      {
        label: "Chronic knee joint compression pain",
        href: "/knee-pain-treatment/",
      },
      { label: "General knee pain", href: "/knee-pain-treatment/" },
    ],
  },
  {
    label: "Neuropathy Conditions",
    items: [
      { label: "Peripheral neuropathy", href: "/neuropathy-treatment/" },
      { label: "Diabetic neuropathy", href: "/neuropathy-treatment/" },
      {
        label: "Chemotherapy-induced neuropathy",
        href: "/neuropathy-treatment/",
      },
      {
        label: "Numbness & tingling in hands and feet",
        href: "/neuropathy-treatment/",
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <ConditionsHub categories={CATEGORIES} />
    </>
  );
}
