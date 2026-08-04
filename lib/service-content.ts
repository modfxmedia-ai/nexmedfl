import type { ServiceBenefit, ServiceEquipment } from "@/components/ServicePageBody";

export interface ServiceContent {
  eyebrow: string;
  heading: string;
  intro: string;
  benefits: ServiceBenefit[];
  equipment: ServiceEquipment;
  conditions: string[];
}

// Detailed content for the equipment/program-driven service pages
// (Chiropractic Care and Spinal Decompression Therapy), keyed by path.
export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "/chiropractic-care/": {
    eyebrow: "Spine & Chiropractic Care",
    heading: "Chiropractic Care in Ormond Beach, FL",
    intro:
      "Hands-on spinal adjustments and posture correction to relieve back and neck pain, restore alignment, and support long-term mobility.",
    benefits: [
      {
        title: "Relieves Back & Neck Pain",
        description:
          "Targeted spinal adjustments reduce pressure on joints and nerves that cause chronic back and neck discomfort.",
      },
      {
        title: "Restores Proper Alignment",
        description:
          "Correcting spinal misalignment helps the body move more efficiently and reduces compensatory strain.",
      },
      {
        title: "Non-Surgical, Drug-Free",
        description:
          "A conservative first-line approach for musculoskeletal pain before considering more invasive options.",
      },
    ],
    equipment: {
      heading: "Manual Adjustment & Posture Analysis",
      description:
        "Our providers use precise manual adjustment techniques paired with posture and gait assessment to identify the root cause of spinal dysfunction, not just the symptoms.",
      features: [
        "Comprehensive spinal & posture evaluation",
        "Manual and instrument-assisted adjustments",
        "Personalized home-care and stretching guidance",
        "Progress reassessment at every visit",
      ],
    },
    conditions: [
      "Back pain",
      "Neck pain",
      "Sciatica",
      "Herniated disc",
      "Poor posture",
      "Pinched nerve",
    ],
  },

  "/spinal-decompression-therapy/": {
    eyebrow: "Spine & Chiropractic Care",
    heading: "Spinal Decompression Therapy in Ormond Beach, FL",
    intro:
      "Non-surgical spinal decompression gently stretches the spine to relieve pressure on discs and nerves, easing chronic back and neck pain.",
    benefits: [
      {
        title: "Reduces Disc Pressure",
        description:
          "Gentle, controlled traction creates negative pressure within the disc, encouraging retraction of bulging or herniated material.",
      },
      {
        title: "Non-Surgical Alternative",
        description:
          "A conservative option for patients hoping to avoid or delay spinal surgery.",
      },
      {
        title: "Improves Circulation to Discs",
        description:
          "Decompression can promote the flow of oxygen, fluids, and nutrients into the disc space to support healing.",
      },
    ],
    equipment: {
      heading: "Computer-Controlled Decompression Table",
      description:
        "Treatment is delivered on a computer-controlled decompression table that applies precise, gradual traction forces calibrated to each patient's condition and comfort level.",
      features: [
        "Customized traction force and angle per session",
        "Comfortable, fully-clothed treatment",
        "Typically combined with complementary therapies",
        "Progress tracked across a structured care plan",
      ],
    },
    conditions: [
      "Herniated disc",
      "Bulging disc",
      "Sciatica",
      "Degenerative disc disease",
      "Spinal stenosis",
      "Chronic lower back pain",
    ],
  },

};

export function getServiceContent(path: string): ServiceContent {
  const content = SERVICE_CONTENT[path];
  if (!content) {
    throw new Error(`Unknown service content path: ${path}`);
  }
  return content;
}
