// Content for the 8 dedicated /conditions/[category]/ pages. These are
// deeper, keyword-focused pages (100-150 word write-ups per sub-condition)
// that complement the /conditions-we-treat/ hub (which stays as a fast
// overview linking straight to service pages). Category labels here
// intentionally match CONDITION_CATEGORIES in site-config.ts (the nav
// mega-menu source of truth) so nav items can deep-link straight to a
// section on the matching page.
//
// Keyword research (via the nextjs-seo MCP `dfs_bulk_keyword_volume` tool,
// 44 terms, US database) informed which phrasing to lean on in copy:
// diabetic neuropathy (~90.5K/mo), golfer's elbow (~40.5K/mo), muscle
// strain (~40.5K/mo), tendinitis (~40.5K/mo), trigger points (~14.8K/mo),
// leg swelling (~8.1K/mo), athletic recovery (~2.4K/mo), and burning feet
// syndrome (~1.3K/mo) all returned usable volume and are used verbatim
// in the relevant H2s/body copy below. Most other long-tail condition
// terms returned no volume data from the API for this account/quota, so
// those sections lean on the existing hub copy's proven phrasing instead.

export interface ConditionSection {
  /** #anchor slug, also used for the MedicalCondition schema entry. */
  slug: string;
  label: string;
  /** ~100-150 word description: what it is, symptoms, how we help. */
  description: string;
  serviceHref: string;
  serviceLabel: string;
  /** Optional cross-link to a related sub-condition on another category page. */
  crossLink?: { label: string; href: string };
}

export interface ConditionPageContent {
  slug: string;
  path: string;
  navLabel: string;
  /** Icon lookup key, matches CONDITION_CATEGORIES labels in site-config.ts. */
  iconKey: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroIntro: string;
  sections: ConditionSection[];
}

export const CONDITION_PAGES: ConditionPageContent[] = [
  {
    slug: "spine",
    path: "/conditions/spine/",
    navLabel: "Spine",
    iconKey: "Spine",
    metaTitle: "Spine Conditions We Treat | Ormond Beach, FL",
    metaDescription:
      "Chiropractic & spinal decompression care in Ormond Beach, FL for herniated discs, sciatica, spinal stenosis, and chronic back pain. Book today!",
    heroHeading: "Spine Conditions We Treat in Ormond Beach, FL",
    heroIntro:
      "From herniated discs to chronic low back pain and whiplash, our chiropractic and spinal decompression care is built around restoring healthy spine function without surgery.",
    sections: [
      {
        slug: "herniated-disc",
        label: "Herniated Disc",
        description:
          "A herniated disc occurs when the soft, gel-like center of a spinal disc pushes through a tear in its tougher outer layer, often irritating nearby nerve roots. Common symptoms include localized back pain, muscle weakness, and sharp pain that radiates into the arms or legs depending on where the herniation occurs. Many patients also notice symptoms worsen with sitting, bending, or coughing. At Ormond Spine & Nerve Center, we use non-surgical spinal decompression therapy to gently stretch the spine, reducing pressure on the affected disc and creating space for it to retract and heal naturally. Combined with targeted chiropractic adjustments, this approach helps relieve nerve irritation without medication or surgery, so you can move through your day with less pain and more confidence in your recovery.",
        serviceHref: "/spinal-decompression-therapy/",
        serviceLabel: "Spinal Decompression Therapy",
      },
      {
        slug: "bulging-disc",
        label: "Bulging Disc",
        description:
          "A bulging disc happens when a spinal disc extends beyond its normal boundary without rupturing, unlike a full herniation. It can still press against nearby nerves and joints, causing stiffness, aching, or sharp pain that ranges from mild to severe depending on location and severity. Many people live with a bulging disc for years without symptoms until added stress or poor posture triggers a flare-up. Our team evaluates your spine to determine exactly which disc is involved and how it's affecting surrounding nerves. Spinal decompression therapy is our primary tool for bulging discs, gently taking pressure off the disc so it has room to heal, while chiropractic adjustments help correct the alignment issues that often contribute to the problem in the first place.",
        serviceHref: "/spinal-decompression-therapy/",
        serviceLabel: "Spinal Decompression Therapy",
      },
      {
        slug: "sciatica",
        label: "Sciatica",
        description:
          "Sciatica describes pain that radiates along the sciatic nerve, traveling from the lower back through the hip and buttock and down the leg, sometimes all the way to the foot. It's usually a symptom of an underlying issue like a herniated disc, bulging disc, or spinal stenosis compressing the nerve root, and it can come with numbness, tingling, or weakness similar to other nerve-related conditions. Sciatica pain can range from a mild ache to a sharp, burning sensation that makes sitting or standing genuinely uncomfortable. Spinal decompression therapy targets the source of the nerve compression directly, gently relieving the pressure that's driving your sciatic pain, while chiropractic care restores proper spinal alignment to reduce the chance of it returning.",
        serviceHref: "/spinal-decompression-therapy/",
        serviceLabel: "Spinal Decompression Therapy",
        crossLink: {
          label: "See our Neuropathy & Nerve care",
          href: "/conditions/neuropathy-nerve/",
        },
      },
      {
        slug: "spinal-stenosis",
        label: "Spinal Stenosis",
        description:
          "Spinal stenosis is a narrowing of the spinal canal that puts pressure on the spinal cord or nearby nerve roots, leading to pain, numbness, weakness, or a heavy, tired feeling in the legs. It develops gradually, often over years, and typically worsens with prolonged standing or walking while improving when you sit or lean forward. Because it tends to affect older adults, spinal stenosis is often linked to general disc and joint wear throughout the spine. Spinal decompression therapy creates additional space within the spinal canal, easing pressure on compressed nerves without surgery or injections. We pair this with chiropractic care to support healthy spinal mechanics and a personalized exercise plan to help you stay mobile and active.",
        serviceHref: "/spinal-decompression-therapy/",
        serviceLabel: "Spinal Decompression Therapy",
      },
      {
        slug: "chronic-low-back-pain",
        label: "Chronic Low Back Pain",
        description:
          "Chronic low back pain is persistent discomfort in the lumbar spine lasting longer than three months, and it's one of the most common reasons patients seek chiropractic care. It can stem from joint dysfunction, muscle strain, disc issues, or simply poor posture built up over years of sitting or repetitive movement. Left unaddressed, chronic back pain often limits daily activities like bending, lifting, or even sleeping comfortably. Our chiropractic adjustments restore proper alignment and joint mobility throughout the lumbar spine, directly addressing the mechanical strain that's driving your pain. We also build a customized plan that may include spinal decompression or soft tissue therapy, so your treatment targets the actual root cause rather than just masking the symptoms.",
        serviceHref: "/chiropractic-care/",
        serviceLabel: "Chiropractic Care",
      },
      {
        slug: "neck-pain",
        label: "Neck Pain",
        description:
          "Neck pain can develop from poor posture, muscle tension, joint dysfunction, or an old injury, and it often comes with stiffness, reduced range of motion, or a dull ache that worsens throughout the day. Many patients also notice their neck pain contributes to tension headaches or discomfort that radiates into the shoulders. Because the cervical spine supports the full weight of your head, even small misalignments can cause outsized discomfort over time. Chiropractic care realigns the cervical spine through gentle, precise adjustments while easing the surrounding muscle tension that's often the root cause. For patients whose neck pain follows a car accident or other trauma, we also offer specialized car accident and personal injury care built around same-day evaluation.",
        serviceHref: "/chiropractic-care/",
        serviceLabel: "Chiropractic Care",
        crossLink: {
          label: "Explore our Headaches care",
          href: "/conditions/headaches/",
        },
      },
      {
        slug: "whiplash-injuries",
        label: "Whiplash Injuries",
        description:
          "Whiplash is a neck injury caused by the rapid back-and-forth motion common in rear-end car accidents, straining the muscles, ligaments, and joints of the cervical spine. Symptoms like neck pain, stiffness, headaches, or even dizziness can take a day or more to appear after the incident, which is why so many whiplash injuries go untreated in the critical early window. Left unaddressed, whiplash can develop into chronic neck pain or recurring headaches. Our car accident and personal injury program provides a same-day evaluation and a treatment plan built specifically around your injury, combining chiropractic adjustments with therapies like laser or decompression as needed. Getting evaluated early is one of the best ways to prevent whiplash from becoming a long-term problem.",
        serviceHref: "/car-accidents-personal-injury/",
        serviceLabel: "Car Accident & Personal Injury Care",
      },
    ],
  },
  {
    slug: "knee-joint",
    path: "/conditions/knee-joint/",
    navLabel: "Knee & Joint",
    iconKey: "Knee & Joint",
    metaTitle: "Knee & Joint Conditions | Ormond Beach, FL",
    metaDescription:
      "Knee decompression and joint pain treatment in Ormond Beach, FL for osteoarthritis, meniscus issues, and chronic knee pain. Schedule your visit!",
    heroHeading: "Knee & Joint Conditions We Treat",
    heroIntro:
      "Non-surgical knee decompression and joint pain treatment for osteoarthritis, meniscus irritation, and the chronic knee pain that's slowing you down.",
    sections: [
      {
        slug: "knee-osteoarthritis",
        label: "Knee Osteoarthritis",
        description:
          "Knee osteoarthritis is the gradual breakdown of the cartilage that cushions your knee joint, leading to pain, stiffness, swelling, and a grinding sensation that typically worsens with activity and improves with rest. It's one of the most common causes of chronic knee pain in adults over 50, and it tends to progress slowly if the underlying joint stress isn't addressed. Many patients delay treatment until the pain starts limiting walking, stairs, or exercise. Knee decompression therapy gently unloads pressure from the joint surface, giving irritated cartilage and surrounding tissue room to calm down and function more comfortably. We combine this with targeted strengthening guidance to support the joint long-term, offering a non-surgical path to staying active.",
        serviceHref: "/knee-decompression-therapy/",
        serviceLabel: "Knee Decompression Therapy",
      },
      {
        slug: "chronic-knee-pain",
        label: "Chronic Knee Pain",
        description:
          "Chronic knee pain is ongoing discomfort that persists for weeks or months, often from a combination of joint wear, soft tissue irritation, tendon strain, or alignment issues higher up the leg. It can make everyday movement like walking, climbing stairs, or standing from a seated position noticeably more difficult. Because chronic knee pain has so many possible causes, an accurate evaluation is the key first step to real relief. Our knee pain treatment program starts by pinpointing the true source of your pain, whether it's the joint itself, surrounding tendons, or referred pain from the hip, and builds a targeted, non-surgical plan around it, often combining decompression, laser, or shockwave therapy depending on what your knee actually needs.",
        serviceHref: "/knee-pain-treatment/",
        serviceLabel: "Knee Pain Treatment",
      },
      {
        slug: "meniscus-irritation",
        label: "Meniscus Irritation",
        description:
          "The meniscus is a wedge of cartilage that cushions and stabilizes the knee joint, and irritation or minor tearing here can cause pain, swelling, stiffness, or a catching or locking sensation with certain movements. It's commonly linked to overuse, sudden twisting motions, or age-related wear that makes the tissue more susceptible to injury. Many patients notice meniscus symptoms flare up specifically with squatting, pivoting, or deep knee bends. Knee decompression therapy helps reduce the compressive pressure on the joint that aggravates an irritated meniscus, supporting a more comfortable range of motion while the tissue heals. For patients with more significant tears, we'll help coordinate the right next steps as part of your broader care plan.",
        serviceHref: "/knee-decompression-therapy/",
        serviceLabel: "Knee Decompression Therapy",
      },
      {
        slug: "patellofemoral-pain-syndrome",
        label: "Patellofemoral Pain Syndrome",
        description:
          "Patellofemoral pain syndrome causes an aching or sharp discomfort around or behind the kneecap, often triggered by activities like squatting, climbing stairs, kneeling, or sitting with a bent knee for long periods (sometimes called runner's knee). It's frequently related to how the kneecap tracks within its groove, which can be affected by muscle imbalances, alignment, or overuse. Left unaddressed, it can make regular exercise or even a flight of stairs feel discouraging. Our knee pain treatment program evaluates the underlying mechanics driving your kneecap pain rather than just treating the symptom, often combining manual therapy with guided strengthening to correct tracking issues and take pressure off the joint for lasting relief.",
        serviceHref: "/knee-pain-treatment/",
        serviceLabel: "Knee Pain Treatment",
      },
      {
        slug: "joint-stiffness",
        label: "Joint Stiffness",
        description:
          "Joint stiffness in the knee can make it harder to fully bend or straighten the leg, often following a period of inactivity, a past injury, or early-stage arthritis. It commonly shows up alongside mild swelling, a dull ache, or a feeling that the knee needs to be warmed up before it moves normally. Stiffness that isn't addressed tends to get worse as the body compensates with altered movement patterns elsewhere. Knee decompression therapy gently creates space within the joint, helping restore a more comfortable, fuller range of motion. We'll also walk you through simple mobility work you can do between visits so progress continues outside the treatment room, not just during it.",
        serviceHref: "/knee-decompression-therapy/",
        serviceLabel: "Knee Decompression Therapy",
      },
    ],
  },
  {
    slug: "neuropathy-nerve",
    path: "/conditions/neuropathy-nerve/",
    navLabel: "Neuropathy & Nerve",
    iconKey: "Neuropathy & Nerve",
    metaTitle: "Neuropathy & Nerve Conditions | Ormond Beach",
    metaDescription:
      "Nerve pain treatment in Ormond Beach, FL for peripheral and diabetic neuropathy, burning feet, and numbness & tingling. Book your consultation!",
    heroHeading: "Neuropathy & Nerve Conditions We Treat",
    heroIntro:
      "Targeted, non-surgical care for peripheral and diabetic neuropathy, burning feet, and the numbness or tingling that comes with nerve irritation.",
    sections: [
      {
        slug: "peripheral-neuropathy",
        label: "Peripheral Neuropathy",
        description:
          "Peripheral neuropathy is damage to the nerves outside the brain and spinal cord, typically causing numbness, tingling, weakness, or a burning pain that most often starts in the hands and feet. It can stem from a variety of causes, including diabetes, chemotherapy, poor circulation, or nerve compression, and symptoms tend to progress gradually if the underlying issue is left unaddressed. Many patients describe it as feeling like they're wearing an invisible glove or sock that dulls sensation. Our neuropathy treatment program combines targeted therapies designed to support nerve health, improve circulation to the affected areas, and calm the nerve irritation driving your symptoms, all without relying on medication alone to mask the discomfort.",
        serviceHref: "/neuropathy-treatment/",
        serviceLabel: "Neuropathy Treatment",
      },
      {
        slug: "diabetic-neuropathy",
        label: "Diabetic Neuropathy",
        description:
          "Diabetic neuropathy is nerve damage related to prolonged high blood sugar, most commonly affecting sensation in the feet and legs with symptoms like tingling, burning, or numbness that often start at the toes and move upward. Reduced sensation can also raise the risk of unnoticed cuts, blisters, or infections, making foot care especially important for patients managing diabetes. Because diabetic neuropathy tends to worsen gradually, earlier intervention generally leads to better outcomes. Our neuropathy treatment program is designed to support circulation and nerve function alongside your existing diabetes management plan, using non-invasive therapies to help calm symptoms and protect your remaining nerve health over the long term.",
        serviceHref: "/neuropathy-treatment/",
        serviceLabel: "Neuropathy Treatment",
      },
      {
        slug: "chemotherapy-induced-neuropathy",
        label: "Chemotherapy-Induced Neuropathy",
        description:
          "Chemotherapy-induced neuropathy is nerve damage that can develop as a side effect of certain cancer treatments, often causing numbness, tingling, or burning pain in the hands and feet that can make simple tasks like buttoning a shirt or walking on uneven ground more difficult. Unlike some side effects that fade quickly, this type of neuropathy can linger for months or years after treatment ends. Because every patient's chemotherapy history and symptoms are different, we start with a thorough evaluation of your specific nerve involvement. Our neuropathy treatment program then offers supportive, non-surgical care designed to help manage these lingering symptoms and support your quality of life well beyond active cancer treatment.",
        serviceHref: "/neuropathy-treatment/",
        serviceLabel: "Neuropathy Treatment",
      },
      {
        slug: "burning-feet-syndrome",
        label: "Burning Feet Syndrome",
        description:
          "Burning feet syndrome describes a persistent burning, hot, or tingling sensation in the feet that's often related to underlying nerve irritation or peripheral neuropathy, though it can also stem from circulation issues or prolonged nerve compression. Symptoms frequently worsen at night, disrupting sleep and making it hard to find a comfortable position. Because burning feet can have several underlying causes, an accurate evaluation is essential to building the right treatment plan. Our neuropathy treatment program targets the nerve-related source of the discomfort directly rather than simply masking the sensation, combining therapies aimed at improving nerve function and circulation so you can get back to sleeping, and walking, comfortably.",
        serviceHref: "/neuropathy-treatment/",
        serviceLabel: "Neuropathy Treatment",
      },
      {
        slug: "numbness-and-tingling",
        label: "Numbness & Tingling",
        description:
          "Numbness and tingling in the hands or feet are often early warning signs of nerve irritation or compression, and when they persist, they can point to an underlying condition like peripheral neuropathy or a pinched nerve further up the spine. Left unaddressed, these sensations can gradually worsen into more constant numbness or weakness. Our neuropathy treatment program starts by evaluating the nerve pathways involved, whether the irritation originates in the extremities or further up the nervous system, to build a targeted care plan. Catching numbness and tingling early gives us the best opportunity to protect long-term nerve function and prevent symptoms from progressing.",
        serviceHref: "/neuropathy-treatment/",
        serviceLabel: "Neuropathy Treatment",
        crossLink: {
          label: "See nerve-related Spine conditions",
          href: "/conditions/spine/",
        },
      },
    ],
  },
  {
    slug: "joint-extremity",
    path: "/conditions/joint-extremity/",
    navLabel: "Joint & Extremity",
    iconKey: "Joint & Extremity",
    metaTitle: "Joint & Extremity Pain Relief | Ormond Beach",
    metaDescription:
      "Treatment for shoulder pain, frozen shoulder, tennis elbow, carpal tunnel, hip pain & plantar fasciitis in Ormond Beach, FL. Schedule today!",
    heroHeading: "Joint & Extremity Conditions We Treat",
    heroIntro:
      "From frozen shoulder and golfer's elbow to carpal tunnel and plantar fasciitis, we combine shockwave, laser, and chiropractic care to get joints moving again.",
    sections: [
      {
        slug: "shoulder-pain",
        label: "Shoulder Pain",
        description:
          "Shoulder pain can arise from tendon irritation, overuse, joint dysfunction, or referred tension from the neck, and it often limits reaching overhead, lifting, or sleeping comfortably on the affected side. It can range from a dull, nagging ache to sharp pain triggered by specific movements. Because the shoulder is such a mobile joint, pinpointing the exact structure involved is key to effective treatment. Shockwave therapy is one of our primary tools for shoulder pain, stimulating the body's natural healing response in irritated tendons that haven't responded to rest or stretching alone. We often pair it with chiropractic care to address any postural or neck-related contributors, giving your shoulder the best chance at lasting relief.",
        serviceHref: "/shockwave-therapy/",
        serviceLabel: "Shockwave Therapy",
      },
      {
        slug: "frozen-shoulder",
        label: "Frozen Shoulder",
        description:
          "Frozen shoulder (adhesive capsulitis) is a progressive stiffening and thickening of the shoulder joint capsule that severely limits range of motion, often developing slowly over months in overlapping stages. It can make basic tasks like getting dressed, reaching for a seatbelt, or sleeping on that side genuinely difficult. Frozen shoulder often improves faster with proactive, targeted care rather than waiting it out. Laser therapy helps calm the inflammation within the joint capsule and supports the tissue's natural healing process, which we combine with gentle mobility work to gradually restore range of motion as part of a broader, personalized recovery plan.",
        serviceHref: "/laser-therapy/",
        serviceLabel: "Laser Therapy",
      },
      {
        slug: "tennis-golfers-elbow",
        label: "Tennis & Golfer's Elbow",
        description:
          "Tennis elbow (lateral epicondylitis) and golfer's elbow (medial epicondylitis) are overuse injuries that irritate the tendons on the outside or inside of the elbow, causing pain that worsens with gripping, lifting, or repetitive wrist motion. They're common not just in athletes but in anyone whose daily work or hobbies involve repetitive arm movements, from typing to gardening. Both conditions can become stubborn and slow to heal without the right intervention. Shockwave therapy is a well-established, non-invasive option for stimulating healing in these chronic tendon injuries, delivering targeted energy pulses that kickstart the body's repair process in tendons that haven't responded to rest, bracing, or stretching alone.",
        serviceHref: "/shockwave-therapy/",
        serviceLabel: "Shockwave Therapy",
      },
      {
        slug: "carpal-tunnel-syndrome",
        label: "Carpal Tunnel Syndrome",
        description:
          "Carpal tunnel syndrome occurs when the median nerve is compressed as it passes through the wrist, causing numbness, tingling, weakness, or a pins-and-needles sensation in the thumb and first few fingers. Symptoms often worsen with repetitive wrist movement, gripping, or at night, and can eventually affect grip strength if left untreated. Because carpal tunnel is fundamentally a nerve issue, addressing the compression early matters. Laser therapy supports nerve-related pain relief and helps reduce local inflammation around the compressed nerve as part of a conservative, non-surgical approach, often combined with wrist positioning guidance to reduce ongoing irritation.",
        serviceHref: "/laser-therapy/",
        serviceLabel: "Laser Therapy",
        crossLink: {
          label: "Learn more about nerve-related conditions",
          href: "/conditions/neuropathy-nerve/",
        },
      },
      {
        slug: "hip-pain-and-arthritis",
        label: "Hip Pain & Arthritis",
        description:
          "Hip pain and arthritis can limit walking, standing, and everyday mobility, often stemming from joint wear, muscle imbalance, or alignment issues elsewhere in the pelvis and spine. Pain may be felt directly in the hip or refer down into the thigh or groin, and it frequently worsens with prolonged sitting or after periods of activity. Because the hip doesn't work in isolation from the spine and pelvis, a whole-body evaluation often reveals contributing factors patients don't expect. Chiropractic care addresses posture and joint mechanics throughout the pelvis and lower spine to help ease hip-related discomfort, supporting more comfortable movement without relying on injections or surgery as a first step.",
        serviceHref: "/chiropractic-care/",
        serviceLabel: "Chiropractic Care",
      },
      {
        slug: "plantar-fasciitis",
        label: "Plantar Fasciitis",
        description:
          "Plantar fasciitis is inflammation of the thick band of tissue connecting the heel to the toes, causing sharp, stabbing heel pain that's typically worst with the first steps in the morning or after periods of rest. It's one of the most common causes of heel pain and tends to develop from repetitive strain, tight calf muscles, or unsupportive footwear. Without treatment, plantar fasciitis can linger for months and change the way you walk to compensate. Shockwave therapy is a well-studied, non-invasive option for stimulating healing in chronic plantar fasciitis, targeting the irritated tissue directly to kickstart repair in cases that haven't responded to stretching, rest, or orthotics alone.",
        serviceHref: "/shockwave-therapy/",
        serviceLabel: "Shockwave Therapy",
      },
    ],
  },
  {
    slug: "muscle-soft-tissue",
    path: "/conditions/muscle-soft-tissue/",
    navLabel: "Muscle & Soft Tissue",
    iconKey: "Muscle & Soft Tissue",
    metaTitle: "Muscle & Soft Tissue Pain | Ormond Beach, FL",
    metaDescription:
      "Care for muscle strains, trigger points, tendinitis, and sports injuries in Ormond Beach, FL using laser & chiropractic therapy. Book now!",
    heroHeading: "Muscle & Soft Tissue Conditions We Treat",
    heroIntro:
      "Laser therapy and chiropractic care to calm muscle strains, release trigger points, and speed recovery from tendinitis and sports injuries.",
    sections: [
      {
        slug: "muscle-strains",
        label: "Muscle Strains",
        description:
          "A muscle strain is an overstretching or partial tearing of muscle fibers, often caused by sudden movement, overexertion, or improper form during exercise or everyday activity. It typically causes pain, tightness, swelling, and noticeably reduced strength in the affected area, with severity ranging from a mild pull to a more significant tear. Most muscle strains respond well to care, but healing slows considerably without the right support. Laser therapy helps calm inflammation at the site of injury and supports faster, more comfortable tissue repair by stimulating cellular activity in the damaged muscle fibers. We'll also guide you through a safe return-to-activity timeline so you don't re-injure the area before it's fully healed.",
        serviceHref: "/laser-therapy/",
        serviceLabel: "Laser Therapy",
      },
      {
        slug: "trigger-points",
        label: "Trigger Points",
        description:
          "Trigger points are tight, hyper-irritable knots that form within a muscle, causing localized pain or, in many cases, pain that refers to a completely different area of the body, a tight trigger point in the shoulder, for example, can contribute to a tension headache. They often develop from repetitive strain, stress, poor posture, or an old injury the body never fully released. Because trigger points can hide behind symptoms that seem unrelated, a hands-on evaluation is important. Chiropractic care and manual soft tissue therapy work directly on these knots to release built-up tension and restore more comfortable, fluid muscle function, often bringing noticeable relief in just a few visits.",
        serviceHref: "/chiropractic-care/",
        serviceLabel: "Chiropractic Care",
        crossLink: {
          label: "Read about Tension Headaches",
          href: "/conditions/headaches/",
        },
      },
      {
        slug: "myofascial-pain-syndrome",
        label: "Myofascial Pain Syndrome",
        description:
          "Myofascial pain syndrome involves chronic pain in the muscles and the fascia (connective tissue) surrounding them, usually centered around one or more trigger points that refer pain outward in a predictable pattern. It tends to cause persistent, hard-to-pinpoint discomfort that doesn't always improve with typical rest or stretching. Because myofascial pain is rooted in the soft tissue rather than the joint itself, treatment needs to address the muscle and fascia directly. Laser therapy helps reduce inflammation and supports healing in the affected soft tissue, which we often combine with manual trigger point work to release tension at its source rather than just temporarily easing the discomfort.",
        serviceHref: "/laser-therapy/",
        serviceLabel: "Laser Therapy",
      },
      {
        slug: "tendinitis-and-tendinosis",
        label: "Tendinitis & Tendinosis",
        description:
          "Tendinitis is acute inflammation of a tendon, while tendinosis refers to more chronic, degenerative changes within the tendon over time, both cause pain, stiffness, and reduced strength with movement, especially in commonly overused joints like the shoulder, elbow, and knee. Tendon issues are notoriously slow to heal on their own because tendons have limited blood flow compared to muscle. Laser therapy supports the tendon's natural repair process at a cellular level without needles, injections, or downtime, making it a popular option for patients who want to keep moving through recovery. For more stubborn, long-standing cases, we may also recommend shockwave therapy to further stimulate the healing response.",
        serviceHref: "/laser-therapy/",
        serviceLabel: "Laser Therapy",
      },
      {
        slug: "sports-and-overuse-injuries",
        label: "Sports & Overuse Injuries",
        description:
          "Sports and overuse injuries develop when repetitive stress on muscles, tendons, or joints outpaces the body's natural ability to recover, leading to pain, reduced performance, and, if ignored, a higher risk of more serious injury. They're common among both competitive athletes and everyday active adults who ramp up activity faster than their body can adapt. The good news is most overuse injuries respond well to early, targeted care. Laser therapy is often used to calm inflammation and speed tissue recovery so you can safely return to the activities you enjoy, and we'll help build a plan that addresses any underlying form or training factors contributing to the injury in the first place.",
        serviceHref: "/laser-therapy/",
        serviceLabel: "Laser Therapy",
      },
    ],
  },
  {
    slug: "circulatory-recovery",
    path: "/conditions/circulatory-recovery/",
    navLabel: "Circulatory & Recovery",
    iconKey: "Circulatory & Recovery",
    metaTitle: "Circulatory & Recovery Care | Ormond Beach, FL",
    metaDescription:
      "Compression therapy in Ormond Beach, FL for poor circulation, leg swelling, and athletic recovery to help you feel lighter, faster. Book today!",
    heroHeading: "Circulatory & Recovery Conditions We Treat",
    heroIntro:
      "Compression therapy that supports healthy circulation, eases leg swelling, and speeds athletic recovery so your legs feel lighter, faster.",
    sections: [
      {
        slug: "poor-circulation",
        label: "Poor Circulation",
        description:
          "Poor circulation can leave the legs and feet feeling cold, heavy, achy, or fatigued, and it may contribute to swelling, slower healing, or a general lack of energy in the lower body over time. It's often related to prolonged sitting or standing, reduced activity, or underlying vascular changes that develop gradually. Many patients don't realize how much circulation is affecting their comfort until they notice their legs feel lighter after treatment. Compression therapy uses rhythmic, sequential pressure applied to the legs to help encourage healthy blood flow back toward the heart, reducing that heavy, sluggish feeling and supporting overall lower-body comfort as part of a regular wellness routine.",
        serviceHref: "/compression-therapy/",
        serviceLabel: "Compression Therapy",
      },
      {
        slug: "leg-swelling",
        label: "Leg Swelling",
        description:
          "Leg swelling develops when fluid builds up in the tissue of the lower legs, ankles, or feet, often related to prolonged standing, sitting, reduced circulation, or simply being on your feet all day. It can leave the legs feeling tight, heavy, or uncomfortable by the end of the day, and shoes or socks may start to feel snugger than usual. While occasional swelling is common, ongoing swelling is worth addressing before it becomes your new normal. Compression therapy helps move excess fluid out of the tissue and back into circulation, easing that heavy, swollen feeling and supporting healthier fluid balance in the legs, especially when combined with movement and elevation.",
        serviceHref: "/compression-therapy/",
        serviceLabel: "Compression Therapy",
      },
      {
        slug: "athletic-recovery",
        label: "Athletic Recovery",
        description:
          "Athletic recovery is the process of helping muscles and connective tissue repair and rebuild after training or competition, and it plays a major role in both performance and injury prevention for athletes at every level. Without adequate recovery, minor fatigue can compound into nagging soreness or a higher risk of overuse injury. Compression therapy has become a popular recovery tool because it supports circulation and helps reduce that post-activity heaviness that can linger for days after an intense session. We often recommend pairing compression sessions with laser or soft tissue therapy for athletes managing a specific nagging area, building a recovery routine around your training schedule rather than working against it.",
        serviceHref: "/compression-therapy/",
        serviceLabel: "Compression Therapy",
      },
      {
        slug: "muscle-fatigue",
        label: "Muscle Fatigue",
        description:
          "Muscle fatigue is the tired, heavy, or achy feeling that follows physical exertion, and for some patients it lingers far longer than expected, making everyday activities feel more draining than they should. It can result from intense activity, poor circulation, or simply asking tired muscles to keep working without adequate recovery in between. Left unaddressed, chronic muscle fatigue can start to affect sleep, mood, and overall activity levels. Compression therapy encourages healthy circulation and helps the body clear the metabolic buildup that contributes to that fatigued, heavy feeling, giving tired muscles a meaningful boost in recovery between workouts, workdays, or simply busy weeks on your feet.",
        serviceHref: "/compression-therapy/",
        serviceLabel: "Compression Therapy",
      },
    ],
  },
  {
    slug: "headaches",
    path: "/conditions/headaches/",
    navLabel: "Headaches",
    iconKey: "Headaches",
    metaTitle: "Headache & Migraine Relief | Ormond Beach, FL",
    metaDescription:
      "Chiropractic care in Ormond Beach, FL for cervicogenic headaches, tension headaches, and neck-related migraines. Schedule your visit today!",
    heroHeading: "Headache Conditions We Treat",
    heroIntro:
      "Chiropractic care that targets the neck-related root causes behind cervicogenic headaches, tension headaches, and neck-related migraines.",
    sections: [
      {
        slug: "cervicogenic-headaches",
        label: "Cervicogenic Headaches",
        description:
          "Cervicogenic headaches originate from dysfunction in the neck, typically joint irritation, muscle tension, or restricted mobility in the cervical spine, even though the pain itself is felt in the head. They frequently worsen with certain neck positions, prolonged sitting, or looking down at a screen, and often come with neck stiffness alongside the headache itself. Because the true source is in the neck, treatments aimed only at the head rarely bring lasting relief. Chiropractic care targets the underlying neck dysfunction directly through gentle adjustments and soft tissue work, addressing the joint and muscle issues actually driving the headache rather than just the pain that results from them.",
        serviceHref: "/chiropractic-care/",
        serviceLabel: "Chiropractic Care",
      },
      {
        slug: "tension-headaches",
        label: "Tension Headaches",
        description:
          "Tension headaches are among the most common headache types, typically caused by muscle tightness in the neck, shoulders, and scalp that builds up from stress, poor posture, or long hours at a desk. They usually feel like a dull, band-like pressure wrapped around the head rather than the throbbing pain of a migraine, and can range from mild to genuinely disruptive. Because muscle tension is often the driving factor, chiropractic adjustments and soft tissue work help ease the tightness in the neck and shoulders that frequently triggers these headaches. Many patients also benefit from posture-focused guidance to help reduce how often tension headaches show up in the first place.",
        serviceHref: "/chiropractic-care/",
        serviceLabel: "Chiropractic Care",
        crossLink: {
          label: "See our Muscle & Soft Tissue care",
          href: "/conditions/muscle-soft-tissue/",
        },
      },
      {
        slug: "neck-related-migraines",
        label: "Neck-Related Migraines",
        description:
          "Some migraines are closely tied to dysfunction in the neck, with tension, restricted joint mobility, or misalignment in the cervical spine contributing to how often migraines occur or how intense they feel. While migraines can have several triggers, addressing the neck component is often an overlooked piece of an overall management plan. Patients with neck-related migraines frequently notice neck stiffness or tightness before or during an episode. Chiropractic care focuses on correcting the underlying cervical dysfunction through targeted adjustments and soft tissue therapy, aiming to reduce one of the contributing factors behind your migraines rather than only addressing the pain once it starts.",
        serviceHref: "/chiropractic-care/",
        serviceLabel: "Chiropractic Care",
      },
    ],
  },
  {
    slug: "wellness",
    path: "/conditions/wellness/",
    navLabel: "Wellness",
    iconKey: "Wellness",
    metaTitle: "Wellness & Preventative Care | Ormond Beach",
    metaDescription:
      "Preventative chiropractic care in Ormond Beach, FL supporting mobility, healthy aging, and fall prevention for long-term wellness. Book now!",
    heroHeading: "Wellness Conditions We Support",
    heroIntro:
      "Preventative chiropractic care built around mobility, healthy aging, and fall prevention, so you stay ahead of pain, not behind it.",
    sections: [
      {
        slug: "preventative-chiropractic-care",
        label: "Preventative Chiropractic Care",
        description:
          "Preventative chiropractic care focuses on maintaining healthy spinal alignment and joint function before pain has a chance to develop, rather than only stepping in after an issue becomes noticeable. Regular checkups allow small misalignments or restrictions to be caught and corrected early, before they turn into the kind of chronic pain that's harder to resolve. Many patients think of chiropractic care as something you seek out only after an injury, but it works just as well as an ongoing wellness habit. Routine adjustments help maintain proper joint mechanics and nervous system function, making preventative care a proactive, low-effort way to support long-term mobility, posture, and overall wellness.",
        serviceHref: "/chiropractic-care/",
        serviceLabel: "Chiropractic Care",
      },
      {
        slug: "mobility-and-flexibility",
        label: "Mobility & Flexibility",
        description:
          "Limited mobility and flexibility can make everyday movement, bending down, reaching overhead, twisting to check a blind spot, feel stiff, restricted, or even a little intimidating, and it often worsens gradually with age or long stretches of inactivity. Reduced mobility can also increase strain on nearby joints as the body compensates for the restriction elsewhere. Chiropractic care and targeted mobility therapies work together to improve joint range of motion, addressing the restrictions themselves rather than just the discomfort they cause. We'll also share simple stretches and movement habits you can build into your routine, so the flexibility gains from your visits carry over into daily life.",
        serviceHref: "/chiropractic-care/",
        serviceLabel: "Chiropractic Care",
      },
      {
        slug: "healthy-aging-support",
        label: "Healthy Aging Support",
        description:
          "Healthy aging support focuses on maintaining strength, mobility, and comfort as the body naturally changes over the years, helping patients stay active, independent, and engaged in daily life rather than gradually scaling back. Joint stiffness, reduced balance, and slower recovery are common as we age, but they're not something you simply have to accept. Chiropractic care offers a non-surgical way to manage age-related joint and spine changes, supporting the function you rely on for everyday tasks and the activities you enjoy. We build every plan around your current activity level and goals, so care evolves alongside you rather than following a one-size-fits-all approach.",
        serviceHref: "/chiropractic-care/",
        serviceLabel: "Chiropractic Care",
      },
      {
        slug: "fall-prevention",
        label: "Fall Prevention",
        description:
          "Fall prevention centers on improving balance, strength, and joint stability to help reduce the risk of falls, which is especially important for older adults since falls are a leading cause of serious injury later in life. Joint stiffness, muscle weakness, and poor alignment can all quietly undermine balance long before a fall actually happens. Chiropractic care helps address the joint stiffness and alignment issues throughout the spine, hips, and lower body that often contribute to unsteady movement, while supporting the mobility patients need to move confidently. We'll also talk through simple, practical strategies to make your home and daily routine safer alongside your care plan.",
        serviceHref: "/chiropractic-care/",
        serviceLabel: "Chiropractic Care",
      },
    ],
  },
];

export function getConditionPage(slug: string): ConditionPageContent | undefined {
  return CONDITION_PAGES.find((page) => page.slug === slug);
}

export function getOtherConditionPages(slug: string): ConditionPageContent[] {
  return CONDITION_PAGES.filter((page) => page.slug !== slug);
}

// Label -> canonical #anchor slug lookup, sourced from each page's real
// section slugs. Used by ConditionsHub to link hub cards straight to the
// matching section instead of recomputing a slug from the label (which
// can drift from the hand-picked slug for labels with punctuation, e.g.
// "Tennis & Golfer's Elbow" -> "tennis-golfers-elbow").
export const SECTION_SLUG_BY_LABEL: Record<string, string> = Object.fromEntries(
  CONDITION_PAGES.flatMap((page) => page.sections.map((section) => [section.label, section.slug])),
);
