import type { ServiceBenefit, ServiceEquipment } from "@/components/ServicePageBody";

export interface ServiceContent {
  eyebrow: string;
  heading: string;
  intro: string;
  benefits: ServiceBenefit[];
  equipment: ServiceEquipment;
  conditions: string[];
}

// Content for the 8 new equipment/program-driven service pages, keyed by
// path. Kept intentionally distinct in scope/angle from existing pages
// covering related ground (e.g. Knee Decompression Therapy vs. the
// existing Knee Pain Treatment page) to avoid keyword cannibalization.
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

  "/knee-decompression-therapy/": {
    eyebrow: "Joint & Knee Care",
    heading: "Knee Decompression Therapy in Ormond Beach, FL",
    intro:
      "Targeted unloading technology reduces pressure inside the knee joint, easing pain from osteoarthritis and chronic joint compression.",
    benefits: [
      {
        title: "Unloads the Joint Surface",
        description:
          "Redistributing pressure away from worn cartilage can meaningfully reduce day-to-day knee pain.",
      },
      {
        title: "Supports Mobility",
        description:
          "Less joint pressure often means an easier time walking, climbing stairs, and staying active.",
      },
      {
        title: "Complements Other Knee Care",
        description:
          "Works well alongside regenerative and physical therapy approaches for a comprehensive knee plan.",
      },
    ],
    equipment: {
      heading: "Dynamic Joint Unloading Technology",
      description:
        "We use dynamic decompression equipment that gently offloads the knee joint during guided movement, targeting the specific compartments most affected by arthritis or overuse.",
      features: [
        "Joint-specific pressure mapping",
        "Guided movement during treatment",
        "Adjustable unloading intensity",
        "Paired with a home exercise plan",
      ],
    },
    conditions: [
      "Knee osteoarthritis",
      "Meniscus tears",
      "Patellofemoral pain",
      "Chronic knee joint compression pain",
    ],
  },

  "/shockwave-therapy/": {
    eyebrow: "Recovery & Advanced Therapies",
    heading: "Shockwave Therapy in Ormond Beach, FL",
    intro:
      "Extracorporeal shockwave therapy uses acoustic pressure waves to stimulate healing in chronic tendon and soft tissue injuries.",
    benefits: [
      {
        title: "Stimulates Natural Healing",
        description:
          "Acoustic waves trigger the body's repair response in tissue that has stalled in a chronic, low-grade injury cycle.",
      },
      {
        title: "Non-Invasive",
        description:
          "No incisions, needles, or anesthesia — most sessions take just minutes.",
      },
      {
        title: "Effective for Stubborn Injuries",
        description:
          "Particularly useful for chronic tendon pain that hasn't responded to rest or conservative care.",
      },
    ],
    equipment: {
      heading: "Extracorporeal Shockwave (ESWT) System",
      description:
        "Our ESWT system delivers focused acoustic pressure pulses directly to the affected tissue, increasing blood flow and stimulating cellular repair at the treatment site.",
      features: [
        "Adjustable energy levels per condition",
        "Short, in-office treatment sessions",
        "No downtime after treatment",
        "Typically delivered over a short course of visits",
      ],
    },
    conditions: [
      "Plantar fasciitis",
      "Tennis elbow",
      "Achilles tendinopathy",
      "Chronic tendon injuries",
      "Trigger points",
    ],
  },

  "/laser-therapy/": {
    eyebrow: "Recovery & Advanced Therapies",
    heading: "Laser Therapy in Ormond Beach, FL",
    intro:
      "Class IV laser therapy uses targeted light energy to reduce inflammation, ease pain, and accelerate tissue repair.",
    benefits: [
      {
        title: "Reduces Inflammation",
        description:
          "Photobiomodulation helps calm inflammatory activity at the cellular level in the treated area.",
      },
      {
        title: "Speeds Tissue Repair",
        description:
          "Increased cellular energy production can support faster healing of soft tissue and skin.",
      },
      {
        title: "Comfortable & Quick",
        description:
          "Sessions are painless, typically lasting just a few minutes per treatment area.",
      },
    ],
    equipment: {
      heading: "Class IV Therapeutic Laser",
      description:
        "Our Class IV laser system delivers precise wavelengths of light energy that penetrate deep into tissue, supporting circulation and cellular repair without heat damage to the skin.",
      features: [
        "Adjustable depth and dosage settings",
        "Used alongside other recovery therapies",
        "No needles, no downtime",
        "Suitable for chronic and acute conditions",
      ],
    },
    conditions: [
      "Soft tissue injuries",
      "Arthritis pain",
      "Inflammation",
      "Wound healing support",
      "Muscle strains",
    ],
  },

  "/compression-therapy/": {
    eyebrow: "Recovery & Advanced Therapies",
    heading: "Compression Therapy in Ormond Beach, FL",
    intro:
      "Pneumatic compression therapy improves circulation, reduces swelling, and supports recovery for tired, achy, or compromised limbs.",
    benefits: [
      {
        title: "Improves Circulation",
        description:
          "Sequential compression encourages healthy blood flow back toward the heart, supporting vascular health.",
      },
      {
        title: "Reduces Swelling",
        description:
          "Helps move excess fluid out of tissue, easing swelling and that heavy, tired-leg feeling.",
      },
      {
        title: "Supports Faster Recovery",
        description:
          "A relaxing add-on to any treatment plan for patients managing chronic swelling or post-activity soreness.",
      },
    ],
    equipment: {
      heading: "Sequential Pneumatic Compression System",
      description:
        "Our compression system uses inflatable sleeves that apply rhythmic, sequential pressure from the extremities upward, mimicking the body's natural muscle-pump action.",
      features: [
        "Adjustable pressure zones and intensity",
        "Comfortable, fully-seated sessions",
        "Often paired with laser or shockwave therapy",
        "Suitable for ongoing maintenance visits",
      ],
    },
    conditions: [
      "Swelling and edema",
      "Poor circulation",
      "Post-activity recovery",
      "Lymphedema support",
      "Varicose vein discomfort",
    ],
  },

  "/headache-treatment/": {
    eyebrow: "Recovery & Advanced Therapies",
    heading: "Headache & Migraine Treatment in Ormond Beach, FL",
    intro:
      "A personalized, non-surgical treatment plan to reduce the frequency and severity of migraines and chronic headaches.",
    benefits: [
      {
        title: "Identifies Root Causes",
        description:
          "We evaluate cervical, muscular, and lifestyle contributors that are often overlooked in headache care.",
      },
      {
        title: "Reduces Frequency & Severity",
        description:
          "A combination approach can meaningfully lower how often headaches occur and how intense they are.",
      },
      {
        title: "Drug-Free Options Available",
        description:
          "Many patients see improvement through hands-on and therapy-based care alone.",
      },
    ],
    equipment: {
      heading: "Multi-Modal Headache Care Program",
      description:
        "Treatment plans may combine cervical spine assessment, manual therapy, and advanced recovery therapies to address the physical contributors behind chronic headaches and migraines.",
      features: [
        "Cervical spine and posture assessment",
        "Individualized, multi-visit care plan",
        "Combined with recovery therapies as needed",
        "Ongoing tracking of frequency and severity",
      ],
    },
    conditions: [
      "Migraines",
      "Tension headaches",
      "Cervicogenic headaches",
      "Cluster headaches",
      "TMJ-related headaches",
    ],
  },

  "/treatment-programs/": {
    eyebrow: "Recovery & Advanced Therapies",
    heading: "Treatment Programs in Ormond Beach, FL",
    intro:
      "Structured, multi-visit treatment programs combine NexMed's therapies into one personalized recovery plan built around your goals.",
    benefits: [
      {
        title: "Coordinated Care Plan",
        description:
          "Rather than a single isolated visit, your therapies are sequenced together for a compounding effect.",
      },
      {
        title: "Built Around Your Goals",
        description:
          "Programs are tailored to your condition, activity level, and timeline for recovery.",
      },
      {
        title: "Ongoing Progress Tracking",
        description:
          "Your plan is reassessed at regular intervals and adjusted as you improve.",
      },
    ],
    equipment: {
      heading: "Personalized Multi-Therapy Protocols",
      description:
        "Our team designs each program by combining the appropriate mix of chiropractic care, decompression, shockwave, laser, and compression therapies based on your specific condition.",
      features: [
        "Initial evaluation and goal-setting session",
        "Sequenced, multi-visit therapy schedule",
        "Regular reassessment checkpoints",
        "Flexible plans for chronic or post-injury recovery",
      ],
    },
    conditions: [
      "Chronic pain management",
      "Post-injury recovery",
      "Sports recovery",
      "Multi-condition care plans",
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
