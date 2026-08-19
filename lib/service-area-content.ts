// Client-safe pure data for the /service-areas/ programmatic location
// pages (city hub, per-city overview, and city x topic combination
// pages). Kept deliberately CAPPED (13 cities x 15 topics = 195 combo
// pages + 13 city-overview pages + 1 hub = 209 total) after the
// nextjs-seo-mc `programmatic_page_strategy` tool flagged an original
// 1,000+ page plan as a near-certain Google cluster-abuse / manual
// action risk for a single-location YMYL medical practice. Do not
// expand this list into a mass-produced 1,000+ page batch without
// re-running that risk assessment.
//
// Each combo page's genuine per-city uniqueness comes from: real
// drive-time/mileage/route facts, a hand-written local note, city-
// specific FAQ answers, and a geographically curated (not arbitrary)
// "nearby cities" cross-link set, layered on top of substantial topic
// content (summary, benefits, richContent, keyConditions, 4 FAQs) that
// is shared across cities for that ONE topic (not swapped word) and is
// sourced directly from the canonical service/condition page content
// below, so every combo page carries real, in-depth medical content
// rather than a thin location wrapper.

import { SERVICE_CONTENT } from "./service-content";
import { CONDITION_PAGES } from "./condition-pages-content";

export type ServiceAreaTopicKind = "service" | "condition";

export interface ServiceAreaTopic {
  slug: string;
  kind: ServiceAreaTopicKind;
  label: string;
  shortLabel: string;
  /** Link to the canonical, non-location-specific page for this topic. */
  canonicalHref: string;
  summary: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  /** Long-form supporting content blocks (What to Expect, sub-condition
   *  write-ups, etc.), pulled from the canonical service/condition page. */
  richContent: { heading: string; body: string }[];
  /** Specific named conditions this topic helps with. */
  keyConditions: string[];
}

export interface ServiceAreaCity {
  slug: string;
  name: string;
  county: string;
  zip: string;
  /** Approximate, drive time/route can vary with traffic. */
  driveMinutes: number;
  driveMiles: number;
  direction: string;
  route: string;
  localNote: string;
  /** Geographically curated nearby city slugs, used for cross-links. */
  nearby: string[];
}

const SERVICE_AREA_TOPICS_BASE: Array<Omit<ServiceAreaTopic, "richContent" | "keyConditions">> = [
  {
    slug: "chiropractic-care",
    kind: "service",
    label: "Chiropractic Care",
    shortLabel: "Chiropractic Care",
    canonicalHref: "/chiropractic-care/",
    summary:
      "Hands-on spinal adjustments and posture correction that relieve back and neck pain, restore alignment, and support long-term mobility, a conservative, drug-free starting point before considering more invasive options.",
    benefits: [
      "Relieves back & neck pain",
      "Restores proper spinal alignment",
      "Non-surgical, drug-free care",
      "Personalized adjustment plans",
    ],
    faqs: [
      {
        question: "What does chiropractic care treat?",
        answer:
          "Chiropractic care addresses back pain, neck pain, headaches, sciatica, and joint discomfort using targeted spinal adjustments and manual therapy to restore alignment and reduce nerve pressure.",
      },
      {
        question: "Is chiropractic care covered by insurance?",
        answer:
          "Many health insurance plans include chiropractic benefits, and auto accident (PIP) coverage may also apply. Our team can help verify your specific benefits before your first visit.",
      },
    ],
  },
  {
    slug: "spinal-decompression-therapy",
    kind: "service",
    label: "Spinal Decompression Therapy",
    shortLabel: "Spinal Decompression",
    canonicalHref: "/spinal-decompression-therapy/",
    summary:
      "Non-surgical, traction-based therapy that gently stretches the spine to relieve pressure on discs and nerve roots, commonly used for herniated and bulging discs, sciatica, and spinal stenosis.",
    benefits: [
      "Reduces disc and nerve pressure",
      "Non-surgical alternative for chronic back pain",
      "Targets herniated & bulging discs directly",
      "Paired with chiropractic care for lasting results",
    ],
    faqs: [
      {
        question: "How does spinal decompression therapy work?",
        answer:
          "A motorized table gently and gradually stretches the spine, creating negative pressure within the disc that can help retract herniated or bulging material and take pressure off irritated nerves.",
      },
      {
        question: "Is spinal decompression painful?",
        answer:
          "No. Most patients describe it as a mild, comfortable stretching sensation, and many feel noticeably looser immediately after a session.",
      },
    ],
  },
  {
    slug: "knee-decompression-therapy",
    kind: "service",
    label: "Knee Decompression Therapy",
    shortLabel: "Knee Decompression",
    canonicalHref: "/knee-decompression-therapy/",
    summary:
      "Gentle, motorized traction of the knee joint that unloads pressure on worn or irritated cartilage, easing arthritis and chronic joint pain without surgery or injections.",
    benefits: [
      "Unloads pressure on the knee joint",
      "Non-surgical option for knee arthritis",
      "Supports cartilage & joint healing",
      "Often paired with laser or shockwave therapy",
    ],
    faqs: [
      {
        question: "Who is a good candidate for knee decompression therapy?",
        answer:
          "Patients with chronic knee osteoarthritis, cartilage wear, or joint stiffness who want to avoid or delay surgery are often good candidates. A brief evaluation confirms it's right for your knee.",
      },
      {
        question: "How many sessions are typically needed?",
        answer:
          "Most treatment plans involve a series of sessions over several weeks. Your provider will recommend a schedule based on your evaluation and goals.",
      },
    ],
  },
  {
    slug: "shockwave-therapy",
    kind: "service",
    label: "Shockwave Therapy",
    shortLabel: "Shockwave Therapy",
    canonicalHref: "/shockwave-therapy/",
    summary:
      "Focused acoustic wave therapy that stimulates blood flow and cellular repair in stubborn tendon and soft tissue injuries, including plantar fasciitis and tennis or golfer's elbow.",
    benefits: [
      "Stimulates healing in chronic tendon injuries",
      "Non-invasive, no downtime",
      "Effective for plantar fasciitis & tennis elbow",
      "Boosts local blood flow to speed recovery",
    ],
    faqs: [
      {
        question: "What conditions respond well to shockwave therapy?",
        answer:
          "Shockwave therapy is commonly used for plantar fasciitis, tennis and golfer's elbow, and other chronic tendon injuries that haven't fully responded to rest or stretching alone.",
      },
      {
        question: "Is shockwave therapy uncomfortable?",
        answer:
          "You may feel brief pressure or mild discomfort during treatment, but sessions are quick and most patients tolerate them well.",
      },
    ],
  },
  {
    slug: "laser-therapy",
    kind: "service",
    label: "Laser Therapy",
    shortLabel: "Laser Therapy",
    canonicalHref: "/laser-therapy/",
    summary:
      "Class IV laser therapy that reduces inflammation and accelerates healing at a cellular level in muscles, tendons, and nerves, a popular drug-free option for lingering soft tissue pain.",
    benefits: [
      "Reduces inflammation without medication",
      "Supports faster soft tissue healing",
      "Helps calm nerve-related pain",
      "Quick, no-downtime sessions",
    ],
    faqs: [
      {
        question: "What does laser therapy feel like?",
        answer:
          "Most patients feel a gentle warming sensation over the treated area. Sessions are quick, painless, and require no recovery time.",
      },
      {
        question: "How many laser therapy sessions will I need?",
        answer:
          "This depends on the condition being treated and its severity. Your provider will outline an expected session count after your evaluation.",
      },
    ],
  },
  {
    slug: "compression-therapy",
    kind: "service",
    label: "Compression Therapy",
    shortLabel: "Compression Therapy",
    canonicalHref: "/compression-therapy/",
    summary:
      "Sequential pneumatic compression that encourages healthy circulation, eases leg swelling and heaviness, and speeds recovery for patients dealing with poor circulation or post-activity fatigue.",
    benefits: [
      "Improves circulation in the legs",
      "Reduces swelling & heaviness",
      "Speeds athletic recovery",
      "Relaxing, no-downtime sessions",
    ],
    faqs: [
      {
        question: "Who benefits from compression therapy?",
        answer:
          "Patients with poor circulation, leg swelling, or post-activity muscle fatigue, along with athletes looking to recover faster between training sessions, all commonly benefit.",
      },
      {
        question: "How long is a compression therapy session?",
        answer:
          "Sessions typically run 20 to 30 minutes and are a relaxing, comfortable part of a broader treatment or recovery plan.",
      },
    ],
  },
  {
    slug: "car-accidents-personal-injury",
    kind: "service",
    label: "Car Accident & Personal Injury Care",
    shortLabel: "Car Accident Care",
    canonicalHref: "/car-accidents-personal-injury/",
    summary:
      "Same-day evaluations, whiplash and soft tissue injury care, and clear injury documentation for patients recovering from a car accident, built to support both your recovery and your claim.",
    benefits: [
      "Same-day post-accident evaluations",
      "Whiplash & soft tissue injury care",
      "Documentation to support PIP/insurance claims",
      "Coordinated care plan tailored to your injury",
    ],
    faqs: [
      {
        question: "How soon after an accident should I be seen?",
        answer:
          "As soon as possible. Some injuries, like whiplash, don't cause noticeable symptoms right away, and prompt documentation also helps support any insurance claim.",
      },
      {
        question: "Do you work with PIP and auto insurance?",
        answer:
          "Yes. We routinely work with Florida PIP and auto insurance claims and can help you understand what documentation you'll need.",
      },
    ],
  },
  {
    slug: "knee-pain-treatment",
    kind: "service",
    label: "Knee Pain Treatment",
    shortLabel: "Knee Pain Treatment",
    canonicalHref: "/knee-pain-treatment/",
    summary:
      "A combined, non-surgical approach to chronic knee pain that layers decompression, shockwave, and laser therapy to reduce joint pressure, calm inflammation, and restore comfortable movement.",
    benefits: [
      "Non-surgical relief for chronic knee pain",
      "Combines decompression, shockwave & laser therapy",
      "Addresses arthritis & cartilage wear",
      "Personalized plan based on your evaluation",
    ],
    faqs: [
      {
        question: "What causes chronic knee pain?",
        answer:
          "Chronic knee pain is often related to osteoarthritis, cartilage wear, meniscus irritation, or overuse. An evaluation helps pinpoint the specific cause driving your symptoms.",
      },
      {
        question: "Can I avoid knee surgery with this treatment?",
        answer:
          "Many patients find meaningful relief through non-surgical care and are able to delay or avoid surgery altogether, though results vary by condition and severity.",
      },
    ],
  },
  {
    slug: "neuropathy-treatment",
    kind: "service",
    label: "Neuropathy Treatment",
    shortLabel: "Neuropathy Treatment",
    canonicalHref: "/neuropathy-treatment/",
    summary:
      "Nerve-focused care, often combining laser therapy with specialized evaluation, for the burning, numbness, tingling, and weakness caused by peripheral and diabetic neuropathy.",
    benefits: [
      "Targets nerve-related pain & numbness",
      "Helps with peripheral & diabetic neuropathy",
      "Non-invasive, drug-free approach",
      "Ongoing progress reassessment",
    ],
    faqs: [
      {
        question: "What are the early signs of neuropathy?",
        answer:
          "Common early signs include tingling, numbness, or a burning sensation in the hands or feet, sometimes along with balance changes or increased sensitivity to touch.",
      },
      {
        question: "Can neuropathy be treated without medication?",
        answer:
          "Many patients pursue non-drug approaches like laser therapy and targeted evaluation to help manage symptoms and support nerve health alongside their physician's care.",
      },
    ],
  },
  {
    slug: "spine",
    kind: "condition",
    label: "Spine Conditions",
    shortLabel: "Spine",
    canonicalHref: "/conditions/spine/",
    summary:
      "From herniated and bulging discs to sciatica, spinal stenosis, chronic low back pain, neck pain, and whiplash, our chiropractic and spinal decompression care is built around restoring healthy spine function without surgery.",
    benefits: [
      "Herniated & bulging disc care",
      "Sciatica & spinal stenosis relief",
      "Chronic low back & neck pain",
      "Whiplash injury recovery",
    ],
    faqs: [
      {
        question: "What spine conditions do you treat?",
        answer:
          "We regularly treat herniated and bulging discs, sciatica, spinal stenosis, chronic low back pain, neck pain, and whiplash injuries using chiropractic care and spinal decompression therapy.",
      },
      {
        question: "Do I need imaging before starting spine care?",
        answer:
          "Not always. Your provider will evaluate your symptoms and history first, and recommend imaging only if it's needed to guide your treatment plan.",
      },
      {
        question: "How long does it take to recover from a spine condition?",
        answer:
          "Recovery timelines vary widely by condition and severity, some patients feel meaningful relief within a few weeks, while more chronic issues may take a longer structured course of care.",
      },
      {
        question: "Can spinal decompression and chiropractic care be combined?",
        answer:
          "Yes. Many spine treatment plans pair spinal decompression therapy with chiropractic adjustments, since decompression relieves disc pressure while adjustments restore overall alignment.",
      },
    ],
  },
  {
    slug: "knee-joint",
    kind: "condition",
    label: "Knee & Joint Conditions",
    shortLabel: "Knee & Joint",
    canonicalHref: "/conditions/knee-joint/",
    summary:
      "Knee osteoarthritis, chronic knee pain, meniscus irritation, patellofemoral pain syndrome, and joint stiffness respond well to a combination of knee decompression, shockwave, and laser therapy.",
    benefits: [
      "Knee osteoarthritis management",
      "Chronic knee pain relief",
      "Meniscus irritation care",
      "Joint stiffness & mobility support",
    ],
    faqs: [
      {
        question: "What knee & joint conditions do you treat?",
        answer:
          "We treat knee osteoarthritis, chronic knee pain, meniscus irritation, patellofemoral pain syndrome, and general joint stiffness using non-surgical decompression, shockwave, and laser therapy.",
      },
      {
        question: "Is treatment appropriate for older adults?",
        answer:
          "Yes, non-surgical knee and joint care is commonly used for patients managing age-related arthritis and stiffness who want to stay active without surgery.",
      },
      {
        question: "Can I avoid knee replacement surgery with non-surgical care?",
        answer:
          "Many patients experience meaningful relief through knee decompression, shockwave, and laser therapy and are able to delay or avoid surgery, though outcomes vary by condition and severity.",
      },
      {
        question: "What causes joint stiffness to get worse over time?",
        answer:
          "Joint stiffness often worsens from ongoing cartilage wear, inactivity, or inflammation left unaddressed. Early, consistent non-surgical care can help slow that progression.",
      },
    ],
  },
  {
    slug: "neuropathy-nerve",
    kind: "condition",
    label: "Neuropathy & Nerve Conditions",
    shortLabel: "Neuropathy & Nerve",
    canonicalHref: "/conditions/neuropathy-nerve/",
    summary:
      "Peripheral neuropathy, diabetic neuropathy, chemotherapy-induced neuropathy, burning feet syndrome, and general numbness and tingling are addressed with nerve-focused laser therapy and evaluation.",
    benefits: [
      "Peripheral & diabetic neuropathy care",
      "Burning feet syndrome relief",
      "Numbness & tingling evaluation",
      "Non-drug, nerve-focused approach",
    ],
    faqs: [
      {
        question: "What nerve conditions do you treat?",
        answer:
          "We work with peripheral neuropathy, diabetic neuropathy, chemotherapy-induced neuropathy, burning feet syndrome, and general numbness or tingling in the hands and feet.",
      },
      {
        question: "Does neuropathy treatment replace my physician's care?",
        answer:
          "No. Our care is designed to complement, not replace, your physician's management of any underlying condition such as diabetes.",
      },
      {
        question: "Can nerve damage from neuropathy be reversed?",
        answer:
          "It depends on the underlying cause and severity. Many patients see meaningful symptom improvement with consistent care, even when full nerve reversal isn't possible.",
      },
      {
        question: "How is laser therapy used for nerve pain?",
        answer:
          "Laser therapy uses targeted light energy to support circulation and calm nerve-related inflammation, often used alongside a broader evaluation to address burning, tingling, or numbness.",
      },
    ],
  },
  {
    slug: "joint-extremity",
    kind: "condition",
    label: "Joint & Extremity Conditions",
    shortLabel: "Joint & Extremity",
    canonicalHref: "/conditions/joint-extremity/",
    summary:
      "Shoulder pain, frozen shoulder, tennis and golfer's elbow, carpal tunnel syndrome, hip pain and arthritis, and plantar fasciitis are treated with a mix of shockwave, laser, and chiropractic care.",
    benefits: [
      "Shoulder & frozen shoulder care",
      "Tennis & golfer's elbow relief",
      "Carpal tunnel syndrome support",
      "Hip pain & plantar fasciitis treatment",
    ],
    faqs: [
      {
        question: "What joint & extremity conditions do you treat?",
        answer:
          "We treat shoulder pain, frozen shoulder, tennis and golfer's elbow, carpal tunnel syndrome, hip pain and arthritis, and plantar fasciitis.",
      },
      {
        question: "How long does it take to see improvement?",
        answer:
          "Many patients notice improvement within a few sessions, though chronic or long-standing conditions may take a longer course of care for lasting relief.",
      },
      {
        question: "What causes frozen shoulder?",
        answer:
          "Frozen shoulder develops when the shoulder capsule thickens and tightens, often after an injury or period of reduced use, leading to progressive stiffness and pain that limits range of motion.",
      },
      {
        question: "Is carpal tunnel syndrome treatable without surgery?",
        answer:
          "Many patients find relief through non-surgical care such as shockwave or laser therapy paired with activity modifications, especially when addressed before symptoms become severe.",
      },
    ],
  },
  {
    slug: "muscle-soft-tissue",
    kind: "condition",
    label: "Muscle & Soft Tissue Conditions",
    shortLabel: "Muscle & Soft Tissue",
    canonicalHref: "/conditions/muscle-soft-tissue/",
    summary:
      "Muscle strains, trigger points, myofascial pain syndrome, tendinitis and tendinosis, and sports or overuse injuries are calmed with laser therapy and hands-on chiropractic care.",
    benefits: [
      "Muscle strain & trigger point relief",
      "Myofascial pain syndrome care",
      "Tendinitis & tendinosis support",
      "Sports & overuse injury recovery",
    ],
    faqs: [
      {
        question: "What muscle & soft tissue conditions do you treat?",
        answer:
          "We treat muscle strains, trigger points, myofascial pain syndrome, tendinitis and tendinosis, and sports or overuse injuries using laser therapy and manual care.",
      },
      {
        question: "Can I keep training while being treated?",
        answer:
          "In many cases, yes. Your provider will guide a safe activity level throughout treatment so you can stay as active as your recovery allows.",
      },
      {
        question: "What's the difference between a strain and tendinitis?",
        answer:
          "A strain is an acute stretch or tear of a muscle, while tendinitis is inflammation of a tendon that typically develops from repetitive overuse. Both respond well to laser therapy and manual care.",
      },
      {
        question: "How do trigger points form?",
        answer:
          "Trigger points are tight knots within a muscle that develop from overuse, poor posture, or stress, and they can refer pain to nearby areas of the body until released.",
      },
    ],
  },
  {
    slug: "headaches",
    kind: "condition",
    label: "Headache Conditions",
    shortLabel: "Headaches",
    canonicalHref: "/conditions/headaches/",
    summary:
      "Cervicogenic headaches, tension headaches, and neck-related migraines are often rooted in spinal alignment and muscle tension, both of which respond well to chiropractic care.",
    benefits: [
      "Cervicogenic headache relief",
      "Tension headache care",
      "Neck-related migraine support",
      "Root-cause spinal evaluation",
    ],
    faqs: [
      {
        question: "Can chiropractic care help with headaches?",
        answer:
          "Yes, especially headaches rooted in neck tension or spinal misalignment. Correcting alignment and releasing muscle tension can reduce both frequency and severity for many patients.",
      },
      {
        question: "How do I know if my headaches are neck-related?",
        answer:
          "Neck-related headaches often come with stiffness, reduced range of motion, or pain that starts at the base of the skull. An evaluation can help confirm the connection.",
      },
      {
        question: "How is a cervicogenic headache different from a migraine?",
        answer:
          "A cervicogenic headache originates from the neck's joints, muscles, or nerves, while a migraine is a distinct neurological condition. Correcting neck alignment can still ease overlapping tension-type symptoms.",
      },
      {
        question: "Can chiropractic care reduce how often I get headaches?",
        answer:
          "For headaches rooted in neck tension or spinal misalignment, many patients notice both fewer and less severe episodes as underlying mechanical issues are addressed over a course of care.",
      },
    ],
  },
];

// Merge in long-form content sourced directly from the canonical
// service/condition pages so every combo page carries substantial,
// already-vetted medical content rather than just the short summary
// above. Services pull their "What to Expect" / "Is this right for
// you" write-ups plus their equipment/technology description and
// full FAQ set; conditions pull each sub-condition's full 100-150
// word write-up as its own richContent block.
export const SERVICE_AREA_TOPICS: ServiceAreaTopic[] = SERVICE_AREA_TOPICS_BASE.map((topic) => {
  if (topic.kind === "service") {
    const source = SERVICE_CONTENT[topic.canonicalHref];
    return {
      ...topic,
      faqs: source?.faqs?.length ? source.faqs.slice(0, 4) : topic.faqs,
      richContent: [
        ...(source?.richContent ?? []),
        ...(source?.equipment
          ? [{ heading: source.equipment.heading, body: source.equipment.description }]
          : []),
      ],
      keyConditions: source?.conditions ?? [],
    };
  }
  const page = CONDITION_PAGES.find((p) => p.path === topic.canonicalHref);
  return {
    ...topic,
    richContent: page
      ? page.sections.slice(0, 4).map((section) => ({ heading: section.label, body: section.description }))
      : [],
    keyConditions: page ? page.sections.map((section) => section.label) : [],
  };
});

export const SERVICE_AREA_CITIES: ServiceAreaCity[] = [
  {
    slug: "ormond-beach",
    name: "Ormond Beach",
    county: "Volusia County",
    zip: "32174",
    driveMinutes: 0,
    driveMiles: 0,
    direction: "home base",
    route: "our office on Sagebrush Trail",
    localNote:
      "Ormond Beach is home to our office, located at 141 Sagebrush Trail, Suite C, just off Airport Road near I-95.",
    nearby: ["holly-hill", "daytona-beach", "daytona-beach-shores", "flagler-beach"],
  },
  {
    slug: "daytona-beach",
    name: "Daytona Beach",
    county: "Volusia County",
    zip: "32114",
    driveMinutes: 10,
    driveMiles: 6,
    direction: "south",
    route: "US-1 or A1A",
    localNote:
      "Just south of Ormond Beach and home to the Daytona International Speedway, Daytona Beach patients typically reach our office in about 10 minutes via US-1.",
    nearby: ["ormond-beach", "holly-hill", "daytona-beach-shores", "south-daytona"],
  },
  {
    slug: "daytona-beach-shores",
    name: "Daytona Beach Shores",
    county: "Volusia County",
    zip: "32118",
    driveMinutes: 15,
    driveMiles: 9,
    direction: "south",
    route: "A1A",
    localNote:
      "This barrier-island city sits along A1A south of Ormond Beach; patients usually take the coastal route up through Daytona Beach to reach our office.",
    nearby: ["daytona-beach", "south-daytona", "ormond-beach", "port-orange"],
  },
  {
    slug: "holly-hill",
    name: "Holly Hill",
    county: "Volusia County",
    zip: "32117",
    driveMinutes: 8,
    driveMiles: 4,
    direction: "south",
    route: "Ridgewood Ave (US-1)",
    localNote:
      "Holly Hill sits directly between Ormond Beach and Daytona Beach along US-1, making it one of the closest neighboring communities to our office.",
    nearby: ["ormond-beach", "daytona-beach", "daytona-beach-shores", "south-daytona"],
  },
  {
    slug: "south-daytona",
    name: "South Daytona",
    county: "Volusia County",
    zip: "32119",
    driveMinutes: 15,
    driveMiles: 8,
    direction: "south",
    route: "US-1 or I-95",
    localNote:
      "South Daytona patients typically use US-1 or I-95 to reach our Ormond Beach office in about 15 minutes.",
    nearby: ["daytona-beach", "port-orange", "daytona-beach-shores", "holly-hill"],
  },
  {
    slug: "port-orange",
    name: "Port Orange",
    county: "Volusia County",
    zip: "32127",
    driveMinutes: 20,
    driveMiles: 12,
    direction: "south",
    route: "US-1 or I-95",
    localNote:
      "Port Orange is one of our farther south service communities, roughly 20 minutes from our Ormond Beach office via I-95.",
    nearby: ["south-daytona", "daytona-beach", "new-smyrna-beach", "daytona-beach-shores"],
  },
  {
    slug: "flagler-beach",
    name: "Flagler Beach",
    county: "Flagler County",
    zip: "32136",
    driveMinutes: 20,
    driveMiles: 14,
    direction: "north",
    route: "scenic coastal A1A",
    localNote:
      "Flagler Beach patients often enjoy the scenic A1A coastal drive south into Ormond Beach, typically about 20 minutes.",
    nearby: ["ormond-beach", "palm-coast", "bunnell", "daytona-beach"],
  },
  {
    slug: "palm-coast",
    name: "Palm Coast",
    county: "Flagler County",
    zip: "32137",
    driveMinutes: 25,
    driveMiles: 18,
    direction: "north",
    route: "I-95 or US-1",
    localNote:
      "Palm Coast is one of our larger northern service communities; most patients take I-95 south to reach our Ormond Beach office in about 25 minutes.",
    nearby: ["flagler-beach", "bunnell", "ormond-beach", "daytona-beach"],
  },
  {
    slug: "bunnell",
    name: "Bunnell",
    county: "Flagler County",
    zip: "32110",
    driveMinutes: 30,
    driveMiles: 22,
    direction: "north",
    route: "SR-100 to US-1 or I-95",
    localNote:
      "As the Flagler County seat, Bunnell patients typically travel via SR-100 to US-1 or I-95, about 30 minutes to our office.",
    nearby: ["palm-coast", "flagler-beach", "ormond-beach", "daytona-beach"],
  },
  {
    slug: "deland",
    name: "DeLand",
    county: "Volusia County",
    zip: "32720",
    driveMinutes: 30,
    driveMiles: 20,
    direction: "west",
    route: "SR-40",
    localNote:
      "As the Volusia County seat, DeLand sits inland west of Ormond Beach; patients typically take SR-40 east, about 30 minutes to our office.",
    nearby: ["deltona", "daytona-beach", "ormond-beach", "port-orange"],
  },
  {
    slug: "deltona",
    name: "Deltona",
    county: "Volusia County",
    zip: "32725",
    driveMinutes: 35,
    driveMiles: 25,
    direction: "southwest",
    route: "I-4 to SR-472 and SR-40",
    localNote:
      "Deltona is one of our farther inland service communities, with most patients taking I-4 and SR-40 east, roughly 35 minutes to our office.",
    nearby: ["deland", "port-orange", "daytona-beach", "ormond-beach"],
  },
  {
    slug: "new-smyrna-beach",
    name: "New Smyrna Beach",
    county: "Volusia County",
    zip: "32168",
    driveMinutes: 30,
    driveMiles: 20,
    direction: "south",
    route: "US-1",
    localNote:
      "New Smyrna Beach patients typically travel north along US-1 through Port Orange, about 30 minutes to reach our Ormond Beach office.",
    nearby: ["port-orange", "edgewater", "south-daytona", "daytona-beach"],
  },
  {
    slug: "edgewater",
    name: "Edgewater",
    county: "Volusia County",
    zip: "32132",
    driveMinutes: 35,
    driveMiles: 24,
    direction: "south",
    route: "US-1",
    localNote:
      "Edgewater is one of our farther south service communities; patients typically take US-1 north, about 35 minutes to our office.",
    nearby: ["new-smyrna-beach", "port-orange", "south-daytona", "daytona-beach"],
  },
];

/** Small deterministic hash so combo pages get varied (not identical)
 *  sentence structure per city x topic, without any randomness that
 *  would change between builds. */
function hashSlug(a: string, b: string): number {
  const s = `${a}::${b}`;
  let hash = 0;
  for (let i = 0; i < s.length; i += 1) {
    hash = (hash * 31 + s.charCodeAt(i)) >>> 0;
  }
  return hash;
}

const INTRO_TEMPLATES: Array<(city: ServiceAreaCity, topic: ServiceAreaTopic) => string> = [
  (city, topic) =>
    `Patients from ${city.name}, FL come to Ormond Spine & Nerve Center for ${topic.label.toLowerCase()}, drive time is about ${city.driveMinutes} minutes via ${city.route}.`,
  (city, topic) =>
    `Looking for ${topic.label.toLowerCase()} near ${city.name}? Our Ormond Beach office is a short ${city.driveMinutes}-minute drive ${city.direction === "home base" ? "away" : `${city.direction} via ${city.route}`} for ${city.name} patients.`,
  (city, topic) =>
    `${city.name} residents regularly travel to our Ormond Beach clinic for ${topic.label.toLowerCase()}, typically ${city.driveMiles === 0 ? "right in town" : `about ${city.driveMiles} miles ${city.direction}`}.`,
  (city, topic) =>
    `Serving ${city.name} and the surrounding ${city.county}, our team provides ${topic.label.toLowerCase()} just ${city.driveMinutes === 0 ? "around the corner" : `${city.driveMinutes} minutes away`}.`,
  (city, topic) =>
    `If you live or work in ${city.name}, our Ormond Beach office offers ${topic.label.toLowerCase()} without a long drive, most patients arrive in around ${city.driveMinutes} minutes via ${city.route}.`,
];

export function buildCityTopicIntro(city: ServiceAreaCity, topic: ServiceAreaTopic): string {
  const idx = hashSlug(city.slug, topic.slug) % INTRO_TEMPLATES.length;
  return INTRO_TEMPLATES[idx](city, topic);
}

// A second, independently-rotated paragraph (distinct hash offset from
// buildCityTopicIntro so the same city+topic never pairs identical
// template indices) that pulls in a specific benefit and the county,
// adding genuinely varied per-combo detail beyond the drive-time intro.
const DETAIL_TEMPLATES: Array<(city: ServiceAreaCity, topic: ServiceAreaTopic) => string> = [
  (city, topic) =>
    `Patients throughout ${city.county} choose us for ${topic.label.toLowerCase()} because it ${topic.benefits[0].toLowerCase()}, and ${topic.benefits[1].toLowerCase()}, all without leaving the local area.`,
  (city, topic) =>
    `For ${city.name} residents, this means ${topic.benefits[0].toLowerCase()} close to home, with a personalized plan built around your specific evaluation, not a one-size-fits-all protocol.`,
  (city, topic) =>
    `Our approach ${topic.benefits[1].toLowerCase()}, which is why so many ${city.name} and greater ${city.county} patients continue their care with us rather than driving further afield.`,
  (city, topic) =>
    `Whether you're new to ${topic.label.toLowerCase()} or continuing an existing plan, our ${city.county} patients appreciate that it ${topic.benefits[2] ? topic.benefits[2].toLowerCase() : topic.benefits[0].toLowerCase()}.`,
];

export function buildCityTopicDetail(city: ServiceAreaCity, topic: ServiceAreaTopic): string {
  const idx = hashSlug(topic.slug, city.slug) % DETAIL_TEMPLATES.length;
  return DETAIL_TEMPLATES[idx](city, topic);
}

export function getServiceAreaCity(slug: string): ServiceAreaCity | undefined {
  return SERVICE_AREA_CITIES.find((city) => city.slug === slug);
}

export function getServiceAreaTopic(slug: string): ServiceAreaTopic | undefined {
  return SERVICE_AREA_TOPICS.find((topic) => topic.slug === slug);
}

export function getNearbyCities(citySlug: string, count = 4): ServiceAreaCity[] {
  const city = getServiceAreaCity(citySlug);
  if (!city) return [];
  const nearby = city.nearby
    .map((slug) => getServiceAreaCity(slug))
    .filter((c): c is ServiceAreaCity => Boolean(c));
  if (nearby.length >= count) return nearby.slice(0, count);
  // Fall back to filling from the full list (excluding self/already-included).
  const rest = SERVICE_AREA_CITIES.filter(
    (c) => c.slug !== citySlug && !nearby.some((n) => n.slug === c.slug),
  );
  return [...nearby, ...rest].slice(0, count);
}

export function getOtherTopics(topicSlug: string, count = 6): ServiceAreaTopic[] {
  const rest = SERVICE_AREA_TOPICS.filter((t) => t.slug !== topicSlug);
  // Deterministic rotation (not identical order on every city page) using
  // the topic slug's own hash as an offset.
  const offset = hashSlug(topicSlug, "rotate") % rest.length;
  return [...rest.slice(offset), ...rest.slice(0, offset)].slice(0, count);
}

export function getCityFaqs(city: ServiceAreaCity, topic: ServiceAreaTopic) {
  return [
    {
      question: `Do you treat patients from ${city.name}?`,
      answer:
        city.driveMinutes === 0
          ? `Yes, our office is located right in ${city.name} at 141 Sagebrush Trail, Suite C.`
          : `Yes, we regularly see patients from ${city.name} for ${topic.label.toLowerCase()}. Most ${city.name} patients reach our Ormond Beach office in about ${city.driveMinutes} minutes via ${city.route}.`,
    },
    {
      question: `How far is Ormond Spine & Nerve Center from ${city.name}?`,
      answer:
        city.driveMiles === 0
          ? `Our office is located in ${city.name} itself.`
          : `Our office is approximately ${city.driveMiles} miles ${city.direction} of ${city.name}, about a ${city.driveMinutes}-minute drive via ${city.route}. Actual drive time can vary with traffic.`,
    },
  ];
}
