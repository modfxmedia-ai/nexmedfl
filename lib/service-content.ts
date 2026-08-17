import type { ServiceBenefit, ServiceEquipment } from "@/components/ServicePageBody";

export interface ServiceRichContentBlock {
  heading: string;
  body: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceRelatedLink {
  label: string;
  href: string;
}

export interface ServiceContent {
  eyebrow: string;
  heading: string;
  intro: string;
  /** Optional hero photograph (path under /public); falls back to a
   *  gradient panel when omitted. */
  heroImage?: string;
  benefits: ServiceBenefit[];
  equipment: ServiceEquipment;
  conditions: string[];
  /** Long-form on-page SEO content blocks ("What to expect", "Is this
   *  right for you", etc.) rendered between the benefits and technology
   *  sections. Optional so pages can adopt it incrementally. */
  richContent?: ServiceRichContentBlock[];
  /** FAQ items, rendered as an accordion and emitted as FAQPage JSON-LD. */
  faqs?: ServiceFAQ[];
  /** Cross-links to complementary services, shown in a "Related Care" strip. */
  relatedServices?: ServiceRelatedLink[];
}

// Detailed content for the equipment/program-driven service pages, keyed
// by path, aligned with the Ormond Spine & Nerve Center service catalogue.
export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "/chiropractic-care/": {
    eyebrow: "Spine & Chiropractic Care",
    heading: "Chiropractic Care in Ormond Beach, FL",
    intro:
      "Hands-on spinal adjustments and posture correction for patients throughout Ormond Beach, FL, relieving back and neck pain, restoring alignment, and supporting long-term mobility.",
    heroImage: "/images/chiropractic-care.jpg",
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
      "Chronic Low Back Pain",
      "Neck Pain",
      "Sciatica",
      "Trigger Points",
      "Tension Headaches",
      "Hip Pain & Arthritis",
    ],
    richContent: [
      {
        heading: "What to Expect",
        body: "Your first visit starts with a thorough evaluation of your spine, posture, and range of motion so we can identify the root cause of your discomfort, not just the symptoms. From there, your provider builds a personalized adjustment plan built around your specific condition and goals.",
      },
      {
        heading: "Is Chiropractic Care Right for You?",
        body: "If you're dealing with back or neck pain, tension headaches, poor posture, or a pinched nerve, chiropractic care offers a conservative, drug-free starting point before considering more invasive options. It also works well alongside our other therapies for a broader recovery plan.",
      },
    ],
    faqs: [
      {
        question: "What does chiropractic care treat?",
        answer:
          "Chiropractic care addresses a wide range of conditions, including back pain, neck pain, headaches, sciatica, and joint discomfort. Using targeted spinal adjustments and manual therapy, our providers work to restore proper alignment, reduce pressure on nerves, and support your body's natural healing process.",
      },
      {
        question: "Is chiropractic care covered by insurance?",
        answer:
          "Many health insurance plans include chiropractic benefits, and auto accident or personal injury protection (PIP) coverage may also apply. Our team can help verify your specific benefits before your first visit.",
      },
      {
        question: "What happens during my first visit?",
        answer:
          "Your first visit includes a thorough evaluation of your spine, posture, and range of motion so we can identify the root cause of your discomfort before building a personalized treatment plan.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "The right frequency depends on your condition and goals. Some patients feel relief within a few visits, while others benefit from an ongoing care plan. Your provider will recommend a schedule after your initial evaluation.",
      },
    ],
    relatedServices: [
      { label: "Spinal Decompression Therapy", href: "/spinal-decompression-therapy/" },
      { label: "Shockwave Therapy", href: "/shockwave-therapy/" },
      { label: "Car Accident & Personal Injury Care", href: "/car-accidents-personal-injury/" },
    ],
  },

  "/spinal-decompression-therapy/": {
    eyebrow: "Spine & Chiropractic Care",
    heading: "Spinal Decompression Therapy in Ormond Beach, FL",
    intro:
      "Non-surgical spinal decompression for patients in Ormond Beach, FL, gently stretching the spine to relieve pressure on discs and nerves and ease chronic back and neck pain.",
    heroImage: "/images/spinal-decompression-therapy.jpg",
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
      "Herniated Disc",
      "Bulging Disc",
      "Sciatica",
      "Spinal Stenosis",
    ],
    richContent: [
      {
        heading: "What to Expect",
        body: "Treatment is delivered fully clothed on a computer-controlled decompression table that applies gentle, gradual traction calibrated to your condition and comfort level. Sessions are typically combined with complementary therapies as part of a structured, progress-tracked care plan.",
      },
      {
        heading: "Is Spinal Decompression Right for You?",
        body: "This therapy is a conservative option worth exploring if you're managing a herniated or bulging disc, sciatica, or chronic lower back pain and want to avoid or delay spinal surgery. A thorough evaluation determines whether it's a safe fit for your specific spine condition.",
      },
    ],
    faqs: [
      {
        question: "Does spinal decompression therapy work for a herniated disc?",
        answer:
          "Non-surgical spinal decompression is designed to gently stretch the spine and create negative pressure within the disc, which can help retract herniated material and encourage nutrient-rich fluid flow to support healing. Many patients experience meaningful pain relief over a structured course of treatment.",
      },
      {
        question: "How is spinal decompression different from regular traction?",
        answer:
          "Unlike constant-pull traction, our computer-controlled decompression table alternates between distraction and relaxation cycles, targeting specific spinal segments while helping the surrounding muscles stay relaxed.",
      },
      {
        question: "How many sessions are typically recommended?",
        answer:
          "Treatment plans are built around your specific diagnosis and response to care, and are reassessed regularly so your plan can be adjusted as you improve.",
      },
      {
        question: "Who might not be a candidate for spinal decompression?",
        answer:
          "Patients who are pregnant, or who have severe osteoporosis, spinal fractures, spinal fusion hardware, or certain other spinal conditions may not be candidates. A thorough evaluation determines whether this therapy is safe and appropriate for you.",
      },
    ],
    relatedServices: [
      { label: "Chiropractic Care", href: "/chiropractic-care/" },
      { label: "Knee Decompression Therapy", href: "/knee-decompression-therapy/" },
      { label: "Laser Therapy", href: "/laser-therapy/" },
    ],
  },

  "/knee-decompression-therapy/": {
    eyebrow: "Joint & Knee Care",
    heading: "Knee Decompression Therapy in Ormond Beach, FL",
    intro:
      "For patients in Ormond Beach, FL, targeted unloading technology reduces pressure inside the knee joint, easing pain from osteoarthritis and chronic joint compression.",
    heroImage: "/images/knee-decompression-therapy-v2.png",
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
          "Works well alongside shockwave, laser, and chiropractic care for a comprehensive knee plan.",
      },
    ],
    equipment: {
      heading: "Knee Decompression Machine",
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
      "Knee Osteoarthritis",
      "Meniscus Irritation",
      "Joint Stiffness",
    ],
    richContent: [
      {
        heading: "What to Expect",
        body: "Using joint-specific pressure mapping, our decompression equipment gently offloads the knee during guided movement, targeting the compartments most affected by arthritis or overuse. Sessions are paired with a home exercise plan to support your progress between visits.",
      },
      {
        heading: "Is Knee Decompression Right for You?",
        body: "If knee osteoarthritis or chronic joint compression is limiting how you walk, climb stairs, or stay active, this non-surgical option can help unload pressure from worn cartilage. It also complements shockwave, laser, and chiropractic care for a comprehensive knee plan.",
      },
    ],
    faqs: [
      {
        question: "What is knee decompression therapy?",
        answer:
          "Knee decompression therapy gently offloads pressure from the joint surfaces to ease pain and support the knee's natural healing environment, often used as a non-surgical option for osteoarthritis and chronic joint compression.",
      },
      {
        question: "Is knee decompression therapy safe?",
        answer:
          "It's a non-invasive treatment with minimal reported side effects, such as brief mild soreness after a session. It isn't appropriate for everyone, so a thorough evaluation is completed before starting care.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "Most plans involve multiple sessions per week over several weeks, with your provider reassessing progress to fine-tune the plan.",
      },
      {
        question: "Can knee decompression be combined with other treatments?",
        answer:
          "Yes, it's often paired with shockwave, laser, or chiropractic care as part of a comprehensive knee treatment plan.",
      },
    ],
    relatedServices: [
      { label: "Knee Pain Treatment", href: "/knee-pain-treatment/" },
      { label: "Shockwave Therapy", href: "/shockwave-therapy/" },
      { label: "Chiropractic Care", href: "/chiropractic-care/" },
    ],
  },

  "/shockwave-therapy/": {
    eyebrow: "Recovery & Advanced Therapies",
    heading: "Shockwave Therapy in Ormond Beach, FL",
    intro:
      "Serving Ormond Beach, FL, extracorporeal shockwave therapy uses acoustic pressure waves to stimulate healing in chronic tendon and soft tissue injuries throughout the body.",
    heroImage: "/images/shockwave-therapy.jpeg",
    benefits: [
      {
        title: "Stimulates Natural Healing",
        description:
          "Acoustic waves trigger the body's repair response in tissue that has stalled in a chronic, low-grade injury cycle.",
      },
      {
        title: "Non-Invasive",
        description:
          "No incisions, needles, or anesthesia, most sessions take just minutes.",
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
        "Common treatment areas: spine, neck, knee, shoulder, elbow, foot, and hip",
      ],
    },
    conditions: [
      "Shoulder Pain",
      "Tennis & Golfer's Elbow",
      "Plantar Fasciitis",
    ],
    richContent: [
      {
        heading: "What to Expect",
        body: "Our ESWT system delivers focused acoustic pressure pulses directly to the affected tissue in short, in-office sessions with adjustable energy levels, no incisions, needles, or downtime required.",
      },
      {
        heading: "Is Shockwave Therapy Right for You?",
        body: "Shockwave therapy is worth considering if you're dealing with chronic tendon pain, like plantar fasciitis or tennis elbow, that hasn't responded to rest or conservative care. Common treatment areas include the spine, neck, knee, shoulder, elbow, foot, and hip.",
      },
    ],
    faqs: [
      {
        question: "How does shockwave therapy work?",
        answer:
          "Shockwave therapy delivers focused acoustic pressure waves to the affected tissue, increasing blood flow and stimulating the body's natural repair response in tendons and soft tissue that have stalled in a chronic injury cycle.",
      },
      {
        question: "Is shockwave therapy painful?",
        answer:
          "Most patients feel a tapping or mild pressure sensation during treatment, and any post-treatment soreness typically resolves within a day or two.",
      },
      {
        question: "What conditions is shockwave therapy used for?",
        answer:
          "It's commonly used for plantar fasciitis, tennis elbow, golfer's elbow, Achilles tendinitis, and rotator cuff tendinopathy, especially when conservative care hasn't fully resolved symptoms.",
      },
      {
        question: "When will I notice results?",
        answer:
          "Many patients notice improvement over the weeks following treatment as the tissue continues to heal, with full benefits often building over the following months.",
      },
    ],
    relatedServices: [
      { label: "Laser Therapy", href: "/laser-therapy/" },
      { label: "Knee Decompression Therapy", href: "/knee-decompression-therapy/" },
      { label: "Chiropractic Care", href: "/chiropractic-care/" },
    ],
  },

  "/laser-therapy/": {
    eyebrow: "Recovery & Advanced Therapies",
    heading: "Laser Therapy in Ormond Beach, FL",
    intro:
      "For patients throughout Ormond Beach, FL, Class IV laser therapy uses targeted light energy to reduce inflammation, ease pain, and accelerate tissue repair in nerves, muscles, tendons, ligaments, and joints.",
    heroImage: "/images/laser-therapy.jpg",
    benefits: [
      {
        title: "Reduces Inflammation",
        description:
          "Photobiomodulation helps calm inflammatory activity at the cellular level in the treated area.",
      },
      {
        title: "Speeds Tissue Repair",
        description:
          "Increased cellular energy production can support faster healing of soft tissue and nerve fibers.",
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
      "Muscle Strains",
      "Myofascial Pain Syndrome",
      "Tendinitis & Tendinosis",
      "Sports & Overuse Injuries",
      "Frozen Shoulder",
      "Carpal Tunnel Syndrome",
    ],
    richContent: [
      {
        heading: "What to Expect",
        body: "Our Class IV laser system delivers precise wavelengths of light energy that penetrate deep into tissue in quick, comfortable sessions, typically just a few minutes per treatment area, with no needles and no downtime.",
      },
      {
        heading: "Is Laser Therapy Right for You?",
        body: "Laser therapy is a good fit if you're managing muscle strains, tendinitis, chronic inflammation, or a sports or overuse injury and want a drug-free option that supports circulation and cellular repair, often used alongside other recovery therapies.",
      },
    ],
    faqs: [
      {
        question: "What is Class IV laser therapy?",
        answer:
          "Class IV laser therapy uses targeted light energy to penetrate deep into tissue, supporting circulation and cellular repair while calming inflammation, without heat damage to the skin.",
      },
      {
        question: "Is laser therapy safe?",
        answer:
          "It's a well-tolerated, non-invasive treatment. Protective eyewear is worn during sessions, and it isn't used over certain areas or conditions, your provider will confirm it's appropriate for you.",
      },
      {
        question: "What can laser therapy help with?",
        answer:
          "It's commonly used for muscle strains, tendinitis, chronic inflammation, and sports or overuse injuries, often alongside other recovery therapies.",
      },
      {
        question: "How long does a session take?",
        answer:
          "Sessions are quick and comfortable, typically lasting just a few minutes per treatment area.",
      },
    ],
    relatedServices: [
      { label: "Shockwave Therapy", href: "/shockwave-therapy/" },
      { label: "Spinal Decompression Therapy", href: "/spinal-decompression-therapy/" },
      { label: "Compression Therapy", href: "/compression-therapy/" },
    ],
  },

  "/compression-therapy/": {
    eyebrow: "Recovery & Advanced Therapies",
    heading: "Compression Therapy in Ormond Beach, FL",
    intro:
      "For patients in Ormond Beach, FL, Normatec dynamic compression therapy improves circulation, lymphatic drainage, and recovery for tired, achy, or compromised limbs.",
    heroImage: "/images/compression-therapy.jpg",
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
      heading: "Normatec Dynamic Compression Boots",
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
      "Poor Circulation",
      "Leg Swelling",
      "Athletic Recovery",
      "Muscle Fatigue",
    ],
    richContent: [
      {
        heading: "What to Expect",
        body: "You'll relax in a comfortable, fully-seated session while inflatable sleeves apply rhythmic, sequential pressure from your extremities upward, with adjustable pressure zones and intensity tailored to your comfort.",
      },
      {
        heading: "Is Compression Therapy Right for You?",
        body: "If you're managing leg swelling, muscle fatigue, or general poor circulation, or simply want a relaxing recovery add-on after activity, compression therapy is a low-effort way to support your body between visits, and it pairs well with laser or shockwave therapy.",
      },
    ],
    faqs: [
      {
        question: "How does Normatec compression therapy work?",
        answer:
          "Inflatable sleeves apply sequential, rhythmic pressure to the limbs, mimicking the body's natural muscle-pump action to support circulation and help move fluid out of the tissue.",
      },
      {
        question: "Who can benefit from compression therapy?",
        answer:
          "It's a popular recovery option for anyone managing swelling, tired or achy limbs, or general circulation support, and pairs well with other treatments like laser or shockwave therapy.",
      },
      {
        question: "How long does a session last?",
        answer:
          "Sessions are typically 20–30 minutes and are a relaxing add-on to your broader treatment plan.",
      },
      {
        question: "Are there any risks?",
        answer:
          "Compression therapy is generally well tolerated. It isn't appropriate for certain circulation-related conditions, so let your provider know your full health history before your first session.",
      },
    ],
    relatedServices: [
      { label: "Laser Therapy", href: "/laser-therapy/" },
      { label: "Knee Decompression Therapy", href: "/knee-decompression-therapy/" },
      { label: "Chiropractic Care", href: "/chiropractic-care/" },
    ],
  },

  "/car-accidents-personal-injury/": {
    eyebrow: "Car Accidents / Personal Injury",
    heading: "Car Accident & Personal Injury Care in Ormond Beach, FL",
    intro:
      "Same-day evaluations and personalized treatment plans for whiplash, back and neck pain, and soft tissue injuries from car accidents or other personal injury incidents.",
    heroImage: "/images/car-accident-personal-injury-care.jpeg",
    benefits: [
      {
        title: "Same-Day Injury Evaluations",
        description:
          "Fast access to a thorough exam so pain and hidden injuries from an accident are caught and treated early.",
      },
      {
        title: "Documentation for Your Claim",
        description:
          "Detailed clinical records that support PIP and personal injury claims alongside your attorney or insurer.",
      },
      {
        title: "Whole-Body Recovery Plan",
        description:
          "Chiropractic care, spinal decompression, and other therapies combined into one plan built around your injuries.",
      },
    ],
    equipment: {
      heading: "Comprehensive Injury Evaluation & Treatment",
      description:
        "We assess spine, joint, and soft tissue injuries from car accidents and other trauma, then combine chiropractic adjustments with our decompression, shockwave, laser, and compression technology as needed.",
      features: [
        "Full spinal & postural injury assessment",
        "Chiropractic adjustments for whiplash and misalignment",
        "Spinal decompression for disc and nerve injuries",
        "Coordination with attorneys and insurance for PIP claims",
      ],
    },
    conditions: [
      "Whiplash",
      "Herniated or bulging disc from trauma",
      "Neck & back pain after an accident",
      "Soft tissue injuries",
      "Headaches after an accident",
      "Chronic pain from an old injury",
    ],
    richContent: [
      {
        heading: "What to Expect",
        body: "We start with a full spinal and postural injury assessment, then combine chiropractic adjustments with our decompression, shockwave, laser, and compression technology as needed, with documentation that supports coordination with attorneys and insurers for PIP claims.",
      },
      {
        heading: "Why Getting Checked Out Matters",
        body: "Injuries like whiplash and soft tissue damage can take days to become noticeable after a collision. A same-day evaluation helps catch hidden injuries early and creates a clear medical record tied to the accident, which matters for both your recovery and your claim.",
      },
    ],
    faqs: [
      {
        question: "Should I get checked out even if I feel fine after an accident?",
        answer:
          "Yes, injuries like whiplash and soft tissue damage can take days to become noticeable. An early evaluation helps catch hidden injuries and creates a clear medical record tied to your accident.",
      },
      {
        question: "How does this care support my personal injury claim?",
        answer:
          "Our documentation of your diagnosis, treatment plan, and progress helps establish a clear link between your injuries and the accident, supporting your case with your attorney or insurer.",
      },
      {
        question: "What injuries do you treat after an accident?",
        answer:
          "We commonly treat whiplash, herniated or bulging discs, neck and back pain, soft tissue injuries, and post-accident headaches using a combination of chiropractic care and our other therapies.",
      },
      {
        question: "Will insurance or PIP cover my treatment?",
        answer:
          "Coverage depends on your policy and state requirements. Our team can help you understand your options, including auto insurance PIP coverage, as part of your care.",
      },
    ],
    relatedServices: [
      { label: "Chiropractic Care", href: "/chiropractic-care/" },
      { label: "Spinal Decompression Therapy", href: "/spinal-decompression-therapy/" },
      { label: "Laser Therapy", href: "/laser-therapy/" },
    ],
  },

  "/knee-pain-treatment/": {
    eyebrow: "Joint & Knee Care",
    heading: "Knee Pain Treatment in Ormond Beach, FL",
    intro:
      "Non-surgical knee pain evaluation and treatment plans for patients in Ormond Beach, FL, combining chiropractic care, decompression, shockwave, and laser therapy to reduce pain and restore movement.",
    heroImage: "/images/knee-pain-treatment.jpg",
    benefits: [
      {
        title: "Non-Surgical First Approach",
        description:
          "A conservative, non-surgical plan built around your specific knee pain before considering more invasive options.",
      },
      {
        title: "Targets the Root Cause",
        description:
          "A thorough evaluation identifies whether pain is coming from the joint, surrounding soft tissue, or alignment issues above and below the knee.",
      },
      {
        title: "Combines Multiple Therapies",
        description:
          "Knee decompression, shockwave, laser, and compression therapy are combined as needed for a comprehensive recovery plan.",
      },
    ],
    equipment: {
      heading: "Comprehensive Knee Pain Program",
      description:
        "We evaluate the knee joint, surrounding soft tissue, and posture/gait to build a plan that may combine decompression, shockwave, laser, and compression technology with hands-on care.",
      features: [
        "Full knee & lower-limb alignment assessment",
        "Joint-unloading decompression therapy",
        "Shockwave & laser therapy for soft tissue and tendon pain",
        "Compression therapy to support recovery between visits",
      ],
    },
    conditions: [
      "Chronic Knee Pain",
      "Patellofemoral Pain Syndrome",
      "Patellar tendinitis",
      "Ligament strain",
      "Post-activity knee soreness",
    ],
    richContent: [
      {
        heading: "What to Expect",
        body: "Your visit starts with a full evaluation of the knee joint, surrounding soft tissue, and lower-limb alignment to identify what's really driving your pain. From there, we build a plan that may combine joint-unloading decompression, shockwave or laser therapy for soft tissue and tendon pain, and compression therapy to support your recovery between visits.",
      },
      {
        heading: "Is Knee Pain Treatment Right for You?",
        body: "If knee osteoarthritis, tendinitis, or chronic soreness is making it harder to walk, climb stairs, or stay active, a non-surgical, multi-therapy approach can often relieve pain and improve mobility before more invasive options are considered.",
      },
    ],
    faqs: [
      {
        question: "What causes knee pain that doesn't go away?",
        answer:
          "Persistent knee pain often comes from joint changes like osteoarthritis, irritated tendons or soft tissue, or alignment issues in the hip, knee, or ankle. A full evaluation helps pinpoint the actual source before starting treatment.",
      },
      {
        question: "Do I need surgery for knee pain?",
        answer:
          "Not necessarily. Many patients find meaningful relief through a non-surgical plan combining decompression, shockwave, laser, or compression therapy with chiropractic care, surgery is typically considered only when conservative care hasn't helped.",
      },
      {
        question: "What treatments are combined for knee pain?",
        answer:
          "Depending on your evaluation, your plan may combine knee decompression therapy, shockwave or laser therapy for soft tissue and tendon pain, and compression therapy to support recovery between visits.",
      },
      {
        question: "How soon will I feel better?",
        answer:
          "Many patients notice improvement over several weeks of consistent treatment, with your provider reassessing progress along the way to adjust the plan as needed.",
      },
    ],
    relatedServices: [
      { label: "Knee Decompression Therapy", href: "/knee-decompression-therapy/" },
      { label: "Shockwave Therapy", href: "/shockwave-therapy/" },
      { label: "Compression Therapy", href: "/compression-therapy/" },
    ],
  },

  "/neuropathy-treatment/": {
    eyebrow: "Nerve & Neuropathy Care",
    heading: "Neuropathy Treatment in Ormond Beach, FL",
    intro:
      "For patients in Ormond Beach, FL, targeted therapies ease the numbness, tingling, and burning nerve pain of peripheral neuropathy and help restore comfortable, confident movement.",
    heroImage: "/images/neuropathy-treatment.jpg",
    benefits: [
      {
        title: "Eases Nerve Pain & Numbness",
        description:
          "Targeted treatment aims to calm burning, tingling, and numbness rather than just masking the discomfort.",
      },
      {
        title: "Supports Nerve Healing",
        description:
          "Therapies are chosen to support circulation and the nerve's healing environment, not just symptom relief.",
      },
      {
        title: "Non-Surgical, Drug-Free Options",
        description:
          "A conservative approach for patients looking for alternatives or additions to medication management.",
      },
    ],
    equipment: {
      heading: "Targeted Nerve-Focused Therapy",
      description:
        "We combine a thorough nerve and circulation assessment with therapies like Class IV laser and compression therapy, chosen based on where and how your neuropathy symptoms show up.",
      features: [
        "Nerve & circulation-focused evaluation",
        "Class IV laser therapy for nerve-related pain",
        "Compression therapy to support circulation",
        "Care coordinated alongside your existing medical management",
      ],
    },
    conditions: [
      "Peripheral Neuropathy",
      "Diabetic Neuropathy",
      "Numbness & Tingling",
      "Burning Feet Syndrome",
      "Chemotherapy-Induced Neuropathy",
    ],
    richContent: [
      {
        heading: "What to Expect",
        body: "We begin with a nerve and circulation-focused evaluation to understand where and how your symptoms show up, then build a plan that may include Class IV laser therapy for nerve-related pain and compression therapy to support circulation, coordinated alongside your existing medical management.",
      },
      {
        heading: "Is Neuropathy Treatment Right for You?",
        body: "If numbness, tingling, or burning nerve pain in your hands or feet is affecting your daily life, a targeted, non-surgical approach can offer an added layer of relief alongside your current medical care.",
      },
    ],
    faqs: [
      {
        question: "What is peripheral neuropathy?",
        answer:
          "Peripheral neuropathy refers to nerve damage that typically causes numbness, tingling, burning, or weakness, most often in the hands and feet. It can have many underlying causes, including diabetes and nerve compression.",
      },
      {
        question: "How is neuropathy treatment different from medication?",
        answer:
          "Rather than only masking symptoms, our approach focuses on supporting circulation and the nerve's healing environment with therapies like Class IV laser, often used alongside, not instead of, your existing medical management.",
      },
      {
        question: "Will laser therapy help my nerve pain?",
        answer:
          "Many patients use Class IV laser therapy as part of a broader neuropathy plan to help ease nerve-related pain, though individual results vary and a full evaluation helps determine the right approach for you.",
      },
      {
        question: "Do I need a referral to be evaluated?",
        answer:
          "No referral is required to schedule an evaluation. We'll review your symptoms and history and coordinate with your existing providers as needed.",
      },
    ],
    relatedServices: [
      { label: "Laser Therapy", href: "/laser-therapy/" },
      { label: "Chiropractic Care", href: "/chiropractic-care/" },
      { label: "Compression Therapy", href: "/compression-therapy/" },
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
