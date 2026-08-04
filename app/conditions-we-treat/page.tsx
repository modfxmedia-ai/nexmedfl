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
      { label: "Knee osteoarthritis", href: "/knee-decompression-therapy/" },
      { label: "Meniscus tears", href: "/knee-decompression-therapy/" },
      { label: "Patellofemoral pain", href: "/knee-decompression-therapy/" },
      {
        label: "Chronic knee joint compression pain",
        href: "/knee-decompression-therapy/",
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
  {
    label: "Joint & Extremity Conditions",
    items: [
      { label: "Shoulder pain", href: "/regenerative-medicine/" },
      { label: "Hip pain", href: "/regenerative-medicine/" },
      { label: "Tennis elbow", href: "/shockwave-therapy/" },
      { label: "Golfer's elbow", href: "/shockwave-therapy/" },
      { label: "Plantar fasciitis", href: "/shockwave-therapy/" },
      { label: "Joint stiffness", href: "/prp-trigger-point-injections/" },
    ],
  },
  {
    label: "Muscle & Soft Tissue Conditions",
    items: [
      { label: "Muscle strains", href: "/laser-therapy/" },
      { label: "Tendinopathy", href: "/shockwave-therapy/" },
      { label: "Chronic inflammation", href: "/laser-therapy/" },
      { label: "Poor circulation & swelling", href: "/compression-therapy/" },
      {
        label: "Post-surgical / post-injury recovery",
        href: "/treatment-programs/",
      },
    ],
  },
  {
    label: "Headaches",
    items: [
      { label: "Migraines", href: "/headache-treatment/" },
      { label: "Tension headaches", href: "/headache-treatment/" },
      { label: "Cervicogenic headaches", href: "/headache-treatment/" },
      { label: "Cluster headaches", href: "/headache-treatment/" },
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
