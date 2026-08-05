// Content for the /conditions-we-treat/ hub page. Categories and item
// labels intentionally match CONDITION_CATEGORIES in site-config.ts
// (the nav mega-menu source of truth) exactly — do not add, remove, or
// rename any category or item here without also confirming the nav
// still matches. Each item includes a short SEO description here on the
// hub card itself; the card's actual link target is the matching
// /conditions/[category]/#anchor page (built from the category's `path`
// + the item's slug in ConditionsHub), which has the full write-up plus
// a "Book a Consultation" CTA and a link to `serviceHref` below.
// `serviceHref`/`serviceLabel` are kept for reference/other consumers.

export interface ConditionItem {
  label: string;
  description: string;
  /** Most relevant service page — informational reference, not the card's link target. */
  href: string;
}

export interface ConditionCategory {
  label: string;
  /** The dedicated /conditions/[category]/ page this category's cards deep-link into. */
  path: string;
  items: ConditionItem[];
}

/** Deterministic slug used for #anchor deep-links from service pages'
 *  "Conditions Treated" badges into this hub's per-item cards. */
export function slugifyCondition(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const CONDITIONS_INTRO = {
  eyebrow: "Conditions We Treat",
  heading: "Find the Right Treatment for Your Condition",
  intro:
    "Ormond Spine & Nerve Center treats a wide range of spine, joint, nerve, and soft tissue conditions for patients throughout Ormond Beach, FL and Volusia County. Browse conditions by category below to learn more about each one and find the service best suited to help you feel better, move better, and live better.",
};

export const CONDITION_CATEGORIES: ConditionCategory[] = [
  {
    label: "Spine",
    path: "/conditions/spine/",
    items: [
      {
        label: "Herniated Disc",
        description:
          "A herniated disc occurs when the soft inner material of a spinal disc pushes through its outer wall, often irritating nearby nerves. This can cause localized back pain or pain that radiates into the arms or legs. Non-surgical spinal decompression gently relieves pressure on the affected disc to support healing.",
        href: "/spinal-decompression-therapy/",
      },
      {
        label: "Bulging Disc",
        description:
          "A bulging disc happens when a spinal disc extends beyond its normal boundary without rupturing, which can still compress nearby nerves and joints. Symptoms range from stiffness to sharp, radiating pain depending on location. Spinal decompression therapy helps take pressure off the disc so it has room to heal.",
        href: "/spinal-decompression-therapy/",
      },
      {
        label: "Sciatica",
        description:
          "Sciatica describes pain that radiates along the sciatic nerve, from the lower back down through the hip and leg. It's often linked to a herniated disc, bulging disc, or spinal stenosis putting pressure on the nerve root. Spinal decompression therapy targets that pressure at its source to help ease sciatic pain.",
        href: "/spinal-decompression-therapy/",
      },
      {
        label: "Spinal Stenosis",
        description:
          "Spinal stenosis is a narrowing of the spinal canal that can compress the spinal cord or nerve roots, leading to pain, numbness, or weakness. It tends to develop gradually and often worsens with prolonged standing or walking. Spinal decompression therapy can create additional space within the spine to relieve that pressure.",
        href: "/spinal-decompression-therapy/",
      },
      {
        label: "Chronic Low Back Pain",
        description:
          "Chronic low back pain is persistent discomfort in the lumbar spine that can stem from joint dysfunction, muscle strain, disc issues, or poor posture. It often limits daily activity and quality of life when left unaddressed. Chiropractic adjustments help restore proper alignment and reduce the mechanical strain driving the pain.",
        href: "/chiropractic-care/",
      },
      {
        label: "Neck Pain",
        description:
          "Neck pain can result from poor posture, muscle tension, joint dysfunction, or an old injury, and often comes with stiffness or reduced range of motion. Left untreated, it can also contribute to headaches. Chiropractic care realigns the cervical spine and eases surrounding muscle tension to relieve discomfort.",
        href: "/chiropractic-care/",
      },
      {
        label: "Whiplash Injuries",
        description:
          "Whiplash is a neck injury caused by the rapid back-and-forth motion common in car accidents, straining the muscles and ligaments in the cervical spine. Symptoms like neck pain and stiffness can take a day or more to appear after the incident. Our car accident and personal injury care provides a same-day evaluation and treatment plan built around your specific injury.",
        href: "/car-accidents-personal-injury/",
      },
    ],
  },
  {
    label: "Knee & Joint",
    path: "/conditions/knee-joint/",
    items: [
      {
        label: "Knee Osteoarthritis",
        description:
          "Knee osteoarthritis is the gradual breakdown of cartilage that cushions the knee joint, leading to pain, stiffness, and swelling that typically worsens with activity. It's one of the most common causes of chronic knee pain in adults. Knee decompression therapy unloads pressure from the joint surface to help ease discomfort and support mobility.",
        href: "/knee-decompression-therapy/",
      },
      {
        label: "Chronic Knee Pain",
        description:
          "Chronic knee pain is ongoing discomfort that persists for weeks or months, often from a combination of joint wear, soft tissue irritation, or alignment issues. It can make everyday movement like walking or climbing stairs difficult. Our knee pain treatment program evaluates the true source of your pain to build a targeted, non-surgical plan.",
        href: "/knee-pain-treatment/",
      },
      {
        label: "Meniscus Irritation",
        description:
          "The meniscus is cartilage that cushions and stabilizes the knee joint, and irritation here can cause pain, swelling, or a catching sensation with movement. It's commonly linked to overuse or age-related wear. Knee decompression therapy helps reduce joint pressure and supports a more comfortable range of motion.",
        href: "/knee-decompression-therapy/",
      },
      {
        label: "Patellofemoral Pain Syndrome",
        description:
          "Patellofemoral pain syndrome causes discomfort around or behind the kneecap, often triggered by activities like squatting, climbing stairs, or prolonged sitting. It's frequently related to tracking or alignment issues in the knee. Our knee pain treatment program addresses the underlying mechanics to relieve pressure on the joint.",
        href: "/knee-pain-treatment/",
      },
      {
        label: "Joint Stiffness",
        description:
          "Joint stiffness in the knee can make it harder to fully bend or straighten the leg, often following inactivity, injury, or early-stage arthritis. It commonly appears alongside swelling or a dull ache. Knee decompression therapy gently creates space within the joint to help restore comfortable movement.",
        href: "/knee-decompression-therapy/",
      },
    ],
  },
  {
    label: "Neuropathy & Nerve",
    path: "/conditions/neuropathy-nerve/",
    items: [
      {
        label: "Peripheral Neuropathy",
        description:
          "Peripheral neuropathy is nerve damage that typically causes numbness, tingling, or burning pain, most often in the hands and feet. It can stem from a variety of causes and tends to progress if left unaddressed. Our neuropathy treatment program combines targeted therapies to support nerve health and ease symptoms.",
        href: "/neuropathy-treatment/",
      },
      {
        label: "Diabetic Neuropathy",
        description:
          "Diabetic neuropathy is nerve damage related to prolonged high blood sugar, commonly affecting sensation in the feet and legs. Reduced sensation can also increase the risk of unnoticed injury. Our neuropathy treatment program is designed to support circulation and nerve function alongside your diabetes management.",
        href: "/neuropathy-treatment/",
      },
      {
        label: "Chemotherapy-Induced Neuropathy",
        description:
          "Chemotherapy-induced neuropathy is nerve damage that can develop as a side effect of certain cancer treatments, often causing numbness, tingling, or pain in the hands and feet. It can linger well after treatment ends. Our neuropathy treatment program offers supportive, non-surgical care to help manage these lingering symptoms.",
        href: "/neuropathy-treatment/",
      },
      {
        label: "Burning Feet Syndrome",
        description:
          "Burning feet syndrome describes a persistent burning or hot sensation in the feet, often related to underlying nerve irritation or peripheral neuropathy. It can worsen at night and disrupt sleep. Our neuropathy treatment program targets the nerve-related source of the discomfort rather than just masking the sensation.",
        href: "/neuropathy-treatment/",
      },
      {
        label: "Numbness & Tingling",
        description:
          "Numbness and tingling in the hands or feet are often early signs of nerve irritation or compression, and can point to underlying neuropathy if they persist. Left unaddressed, symptoms can gradually worsen over time. Our neuropathy treatment program evaluates the nerve pathways involved to build a targeted care plan.",
        href: "/neuropathy-treatment/",
      },
    ],
  },
  {
    label: "Joint & Extremity",
    path: "/conditions/joint-extremity/",
    items: [
      {
        label: "Shoulder Pain",
        description:
          "Shoulder pain can arise from tendon irritation, overuse, or joint dysfunction, and often limits reaching, lifting, or sleeping comfortably on that side. It can range from a dull ache to sharp pain with movement. Shockwave therapy stimulates healing in irritated shoulder tendons that haven't responded to rest alone.",
        href: "/shockwave-therapy/",
      },
      {
        label: "Frozen Shoulder",
        description:
          "Frozen shoulder is a progressive stiffening of the shoulder joint that severely limits range of motion, often developing slowly over months. It can make basic tasks like dressing or reaching overhead difficult. Laser therapy helps calm inflammation and support tissue healing as part of a broader mobility-focused plan.",
        href: "/laser-therapy/",
      },
      {
        label: "Tennis & Golfer's Elbow",
        description:
          "Tennis elbow and golfer's elbow are overuse injuries that irritate the tendons on the outside or inside of the elbow, causing pain that worsens with gripping or repetitive motion. They're common in both athletes and everyday activities. Shockwave therapy is a well-established option for stimulating healing in these stubborn tendon injuries.",
        href: "/shockwave-therapy/",
      },
      {
        label: "Carpal Tunnel Syndrome",
        description:
          "Carpal tunnel syndrome occurs when the median nerve is compressed at the wrist, causing numbness, tingling, or weakness in the hand and fingers. Symptoms often worsen with repetitive wrist movement or at night. Laser therapy supports nerve-related pain relief as part of a conservative, non-surgical approach.",
        href: "/laser-therapy/",
      },
      {
        label: "Hip Pain & Arthritis",
        description:
          "Hip pain and arthritis can limit walking, standing, and everyday mobility, often stemming from joint wear, muscle imbalance, or alignment issues elsewhere in the body. Chiropractic care addresses posture and joint mechanics throughout the pelvis and spine to help ease hip-related discomfort.",
        href: "/chiropractic-care/",
      },
      {
        label: "Plantar Fasciitis",
        description:
          "Plantar fasciitis is inflammation of the tissue connecting the heel to the toes, causing sharp heel pain that's often worst with the first steps in the morning. It's one of the most common causes of heel pain. Shockwave therapy is a well-studied, non-invasive option for stimulating healing in chronic plantar fasciitis.",
        href: "/shockwave-therapy/",
      },
    ],
  },
  {
    label: "Muscle & Soft Tissue",
    path: "/conditions/muscle-soft-tissue/",
    items: [
      {
        label: "Muscle Strains",
        description:
          "A muscle strain is an overstretching or tearing of muscle fibers, often from sudden movement, overexertion, or improper form during activity. It typically causes pain, tightness, and reduced strength in the affected area. Laser therapy helps calm inflammation and support faster, more comfortable tissue repair.",
        href: "/laser-therapy/",
      },
      {
        label: "Trigger Points",
        description:
          "Trigger points are tight, sensitive knots within a muscle that can cause localized pain or refer discomfort to other areas of the body. They often develop from repetitive strain, stress, or poor posture. Chiropractic care and manual therapy help release these knots and restore more comfortable muscle function.",
        href: "/chiropractic-care/",
      },
      {
        label: "Myofascial Pain Syndrome",
        description:
          "Myofascial pain syndrome involves chronic pain in the muscles and the connective tissue (fascia) surrounding them, often centered around trigger points. It can cause persistent, hard-to-pinpoint discomfort. Laser therapy helps reduce inflammation and support healing in the affected soft tissue.",
        href: "/laser-therapy/",
      },
      {
        label: "Tendinitis & Tendinosis",
        description:
          "Tendinitis is acute inflammation of a tendon, while tendinosis refers to more chronic, degenerative tendon changes — both cause pain and stiffness with movement. They're common in overused joints like the shoulder, elbow, or knee. Laser therapy supports the tendon's natural repair process without needles or downtime.",
        href: "/laser-therapy/",
      },
      {
        label: "Sports & Overuse Injuries",
        description:
          "Sports and overuse injuries develop when repetitive stress on muscles, tendons, or joints outpaces the body's ability to recover, leading to pain and reduced performance. They're common among both athletes and active adults. Laser therapy is often used to calm inflammation and speed recovery so you can safely return to activity.",
        href: "/laser-therapy/",
      },
    ],
  },
  {
    label: "Circulatory & Recovery",
    path: "/conditions/circulatory-recovery/",
    items: [
      {
        label: "Poor Circulation",
        description:
          "Poor circulation can leave the legs and feet feeling cold, heavy, or achy, and may contribute to swelling over time. It's often related to prolonged sitting, standing, or reduced activity. Compression therapy uses rhythmic, sequential pressure to help encourage healthy blood flow back toward the heart.",
        href: "/compression-therapy/",
      },
      {
        label: "Leg Swelling",
        description:
          "Leg swelling can develop from fluid buildup in the tissue, often related to prolonged standing, sitting, or reduced circulation. It can leave the legs feeling tight, heavy, or uncomfortable by the end of the day. Compression therapy helps move excess fluid out of the tissue to ease that heavy, swollen feeling.",
        href: "/compression-therapy/",
      },
      {
        label: "Athletic Recovery",
        description:
          "Athletic recovery is the process of helping muscles and tissue repair and rebuild after training or competition, and it plays a major role in performance and injury prevention. Compression therapy is a popular recovery add-on that supports circulation and helps reduce that post-activity heaviness.",
        href: "/compression-therapy/",
      },
      {
        label: "Muscle Fatigue",
        description:
          "Muscle fatigue is the tired, heavy, or achy feeling that follows physical exertion, and it can linger longer than expected without proper recovery support. Compression therapy encourages circulation and helps the body clear the buildup that contributes to that fatigued feeling.",
        href: "/compression-therapy/",
      },
    ],
  },
  {
    label: "Headaches",
    path: "/conditions/headaches/",
    items: [
      {
        label: "Cervicogenic Headaches",
        description:
          "Cervicogenic headaches originate from dysfunction in the neck — often joint irritation or muscle tension — rather than the head itself, though the pain is felt there. They frequently worsen with certain neck positions or movements. Chiropractic care targets the underlying neck dysfunction rather than just the resulting headache.",
        href: "/chiropractic-care/",
      },
      {
        label: "Tension Headaches",
        description:
          "Tension headaches are among the most common headache types, often caused by muscle tightness in the neck, shoulders, and scalp from stress or poor posture. They typically feel like a dull, band-like pressure around the head. Chiropractic adjustments help ease the muscular tension that frequently drives these headaches.",
        href: "/chiropractic-care/",
      },
      {
        label: "Neck-Related Migraines",
        description:
          "Some migraines are closely tied to neck dysfunction, with tension or misalignment in the cervical spine contributing to headache frequency or intensity. Addressing that neck component can be a helpful piece of an overall migraine management plan. Chiropractic care focuses on correcting the underlying cervical dysfunction.",
        href: "/chiropractic-care/",
      },
    ],
  },
  {
    label: "Wellness",
    path: "/conditions/wellness/",
    items: [
      {
        label: "Preventative Chiropractic Care",
        description:
          "Preventative chiropractic care focuses on maintaining healthy spinal alignment and joint function before pain develops, rather than only treating it after the fact. Regular checkups can help catch small issues early. It's a proactive way to support long-term mobility and overall wellness.",
        href: "/chiropractic-care/",
      },
      {
        label: "Mobility & Flexibility",
        description:
          "Limited mobility and flexibility can make everyday movement — bending, reaching, twisting — feel stiff or restricted, often worsening with age or inactivity. Chiropractic care and targeted therapies help improve joint range of motion and reduce the stiffness holding you back.",
        href: "/chiropractic-care/",
      },
      {
        label: "Healthy Aging Support",
        description:
          "Healthy aging support focuses on maintaining strength, mobility, and comfort as the body naturally changes over time, helping patients stay active in daily life. Chiropractic care is a non-surgical way to manage age-related joint and spine changes and support long-term function.",
        href: "/chiropractic-care/",
      },
      {
        label: "Fall Prevention",
        description:
          "Fall prevention centers on improving balance, strength, and joint stability to help reduce the risk of falls, which is especially important for older adults. Chiropractic care can help address the joint stiffness and alignment issues that often contribute to unsteady movement.",
        href: "/chiropractic-care/",
      },
    ],
  },
];

// Lowercased-label -> #anchor slug lookup, used by ServicePageBody to turn
// a service page's "Conditions Treated" badges into deep links straight to
// the matching card on /conditions-we-treat/ when an exact label match
// exists (falls back to a plain, non-linked badge otherwise).
export const CONDITION_SLUG_BY_LABEL: Record<string, string> = Object.fromEntries(
  CONDITION_CATEGORIES.flatMap((category) =>
    category.items.map((item) => [item.label.toLowerCase(), slugifyCondition(item.label)]),
  ),
);
