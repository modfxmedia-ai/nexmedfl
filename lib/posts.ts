// Client-safe pure data describing every blog post on the site.
// Used to generate post-sitemap.xml, the /blogs/ listing page, and the
// dynamic /[year]/[month]/[day]/[slug]/ route's generateStaticParams.

export interface BlogBodyBlock {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPostEntry {
  year: string;
  month: string;
  day: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageCaption?: string;
  datePublished: string;
  dateModified: string;
  section: string;
  /** Full article body, only present on posts written with real content. */
  body?: BlogBodyBlock[];
  /** Optional CTA linking the post to its related service page. */
  relatedServiceHref?: string;
  relatedServiceLabel?: string;
}

export const BLOG_POSTS: BlogPostEntry[] = [
  {
    year: "2026",
    month: "08",
    day: "15",
    slug: "compression-therapy-for-circulation-and-recovery",
    title: "Compression Therapy: Supporting Circulation and Recovery Between Visits",
    description:
      "Learn how Normatec dynamic compression therapy improves circulation, reduces swelling, and speeds recovery when paired with your broader treatment plan.",
    image: "/images/compression-therapy.jpg",
    imageWidth: "960",
    imageHeight: "1280",
    imageCaption: "compression therapy",
    datePublished: "2026-08-15T14:00:00+00:00",
    dateModified: "2026-08-15T14:00:00+00:00",
    section: "Medical Care",
    relatedServiceHref: "/compression-therapy/",
    relatedServiceLabel: "Compression Therapy",
    body: [
      {
        paragraphs: [
          "Not every recovery tool needs to be a stand-alone treatment. Sometimes the biggest gains come from supporting the body's own circulation and drainage systems between sessions, and that's exactly where compression therapy fits in. For patients managing swelling, tired or achy limbs, or general poor circulation, it's a simple, relaxing way to keep the body's healing processes moving.",
        ],
      },
      {
        heading: "How Compression Therapy Works",
        paragraphs: [
          "Our Normatec dynamic compression system uses inflatable sleeves that apply rhythmic, sequential pressure to the legs or arms, starting at the extremities and moving upward. This mimics the body's natural muscle-pump action, encouraging blood flow back toward the heart and helping move excess fluid out of swollen or fatigued tissue.",
          "Because the pressure builds in sequence rather than all at once, it feels more like a firm, wave-like squeeze than a static wrap, comfortable enough that many patients use the time to simply relax while the sleeves do the work.",
        ],
      },
      {
        heading: "Who Tends to Benefit",
        paragraphs: [
          "Compression therapy is a popular add-on for patients dealing with leg swelling, chronic muscle fatigue, or circulation concerns that make the legs feel heavy by the end of the day. It also pairs well with more active treatments like laser or shockwave therapy, giving the tissue extra support as it recovers between visits.",
        ],
      },
      {
        heading: "What a Session Looks Like",
        paragraphs: [
          "Sessions are typically 20 to 30 minutes, fully seated, with adjustable pressure zones and intensity tailored to your comfort. There's no downtime afterward, and most patients describe the feeling as similar to a deep, rhythmic massage focused on circulation rather than muscle tension.",
        ],
      },
      {
        heading: "Ask If Compression Therapy Fits Your Plan",
        paragraphs: [
          "If you've noticed persistent swelling, heaviness, or fatigue in your legs, compression therapy may be a helpful piece of your overall care. Our Ormond Beach team can evaluate whether it makes sense alongside your existing treatment plan.",
        ],
      },
    ],
  },
  {
    year: "2026",
    month: "08",
    day: "08",
    slug: "car-accident-early-chiropractic-care",
    title: "What to Do After a Car Accident: Why Early Chiropractic Care Matters",
    description:
      "Learn the key steps to take after a car accident and why early chiropractic evaluation can catch hidden whiplash and soft-tissue injuries before they linger.",
    image: "/images/blog/car-accident-blog.jpg",
    imageWidth: "1600",
    imageHeight: "1000",
    imageCaption: "car accident care",
    datePublished: "2026-08-08T14:00:00+00:00",
    dateModified: "2026-08-08T14:00:00+00:00",
    section: "Medical Care",
    relatedServiceHref: "/car-accidents-personal-injury/",
    relatedServiceLabel: "Car Accident & Personal Injury Care",
    body: [
      {
        paragraphs: [
          "Car accidents happen fast, and the adrenaline that follows can mask pain for hours or even days. Many people walk away from a fender-bender feeling fine, only to wake up the next morning with a stiff neck, throbbing headache, or aching lower back. Knowing what to do in the first 24–72 hours after a crash, and why an early chiropractic evaluation matters, can make a real difference in how quickly and completely you recover.",
        ],
      },
      {
        heading: "First Steps After a Collision",
        paragraphs: [
          "Safety comes first: move to a secure location if possible, check for injuries, and exchange information with the other driver. Even in a low-speed collision, it's worth being examined by a medical professional soon after, not just for documentation, but because some injuries genuinely don't hurt right away.",
          "Whiplash is the classic example. The sudden forward-and-back motion of a collision can strain the neck's muscles, ligaments, and discs without producing immediate symptoms. Swelling and inflammation often build gradually, which is why pain frequently peaks a day or two after the accident rather than at the scene.",
        ],
      },
      {
        heading: "Why Timing Matters",
        paragraphs: [
          "Waiting weeks to get evaluated can allow inflamed tissue and misaligned joints to settle into compensatory movement patterns, the body's way of avoiding pain that can quietly create new problems in the neck, shoulders, or lower back. An early evaluation lets a provider assess your spine's alignment and range of motion while the injury is still fresh, often making treatment more effective and recovery faster.",
          "It also creates a clear medical record connecting your symptoms to the accident, which matters if you're working with insurance or documenting a personal injury claim.",
        ],
      },
      {
        heading: "How Chiropractic Care Helps",
        paragraphs: [
          "A chiropractic evaluation after an accident typically includes a review of how the injury occurred, a hands-on assessment of your spine and joints, and a discussion of any imaging that may be needed. From there, a treatment plan, which may include gentle spinal adjustments, soft-tissue work, and guided rehabilitation exercises, is built around restoring normal movement and reducing inflammation.",
          "The goal isn't just symptom relief; it's helping your body heal correctly the first time, so pain doesn't become a recurring issue months down the road.",
        ],
      },
      {
        heading: "Don't Wait to Get Checked",
        paragraphs: [
          "If you've been in a car accident recently, even one that felt minor, it's worth getting evaluated before symptoms have a chance to set in. Our team at Ormond Spine & Nerve Center works with car accident and personal injury patients throughout Ormond Beach to assess injuries early and build a recovery plan suited to what actually happened in your crash.",
        ],
      },
    ],
  },
  {
    year: "2026",
    month: "08",
    day: "01",
    slug: "how-laser-therapy-speeds-healing",
    title: "How Laser Therapy Speeds Healing and Reduces Inflammation",
    description:
      "Discover how low-level laser therapy reduces inflammation, eases pain, and speeds tissue healing as part of a personalized recovery plan.",
    image: "/images/blog/laser-therapy-blog.jpg",
    imageWidth: "1600",
    imageHeight: "1000",
    imageCaption: "laser therapy",
    datePublished: "2026-08-01T14:00:00+00:00",
    dateModified: "2026-08-01T14:00:00+00:00",
    section: "Medical Care",
    relatedServiceHref: "/laser-therapy/",
    relatedServiceLabel: "Laser Therapy",
    body: [
      {
        paragraphs: [
          "When an injury just won't quiet down, whether it's a nagging joint ache, a stubborn strain, or lingering inflammation from an old injury, many patients are looking for something between rest and surgery. Low-level laser therapy has become a popular option precisely because it's non-invasive, painless, and designed to work with the body's own healing processes rather than override them.",
        ],
      },
      {
        heading: "What Laser Therapy Actually Does",
        paragraphs: [
          "Laser therapy uses specific wavelengths of light delivered directly to injured tissue. That light energy is absorbed by cells and is believed to stimulate cellular activity, encouraging tissue repair, improving local circulation, and helping reduce the inflammatory response that keeps an injury feeling irritated and swollen.",
          "Unlike heat or ice, which mainly manage symptoms, laser therapy targets the healing process itself, which is why it's often used alongside other treatments like chiropractic care or spinal decompression rather than as a stand-alone fix.",
        ],
      },
      {
        heading: "What a Session Feels Like",
        paragraphs: [
          "Sessions are quick and comfortable. Most patients feel little more than mild warmth over the treated area, and there's no downtime afterward, you can return to normal activity right away. Because it's non-invasive, laser therapy is a good fit for patients who want to avoid injections or who haven't found lasting relief from medication alone.",
        ],
      },
      {
        heading: "Conditions That Often Respond Well",
        paragraphs: [
          "Laser therapy is commonly used for soft-tissue strains and sprains, tendinitis, joint inflammation, and as a supportive therapy during recovery from car accidents or sports injuries. It's frequently paired with other treatments in a broader recovery plan rather than used in isolation, since reducing inflammation makes other therapies, like adjustments or decompression, more effective.",
        ],
      },
      {
        heading: "Is Laser Therapy Right for You?",
        paragraphs: [
          "Every injury is different, which is why we start with an evaluation before recommending laser therapy as part of your plan. If you're dealing with pain or inflammation that hasn't improved on its own, our Ormond Beach team can help determine whether laser therapy, alone or combined with other treatments, is the right next step for your recovery.",
        ],
      },
    ],
  },
  {
    year: "2026",
    month: "07",
    day: "09",
    slug: "shockwave-therapy-accelerating-recovery",
    title: "Shockwave Therapy: Accelerating Recovery for Stubborn Pain",
    description:
      "Learn how shockwave therapy stimulates healing in stubborn soft-tissue injuries and chronic pain, helping patients recover faster without surgery.",
    image: "/images/blog/shockwave-therapy-blog.jpg",
    imageWidth: "1600",
    imageHeight: "1000",
    imageCaption: "shockwave therapy",
    datePublished: "2026-07-09T14:00:00+00:00",
    dateModified: "2026-07-09T14:00:00+00:00",
    section: "Medical Care",
    relatedServiceHref: "/shockwave-therapy/",
    relatedServiceLabel: "Shockwave Therapy",
    body: [
      {
        paragraphs: [
          "Some injuries respond quickly to rest and basic treatment. Others, like plantar fasciitis, chronic tendinitis, or deep muscle knots that just won't release, seem to stick around no matter what you try. For pain that's settled in and become chronic, shockwave therapy offers a non-surgical option designed to jump-start the body's healing response in tissue that's stalled out.",
        ],
      },
      {
        heading: "How Shockwave Therapy Works",
        paragraphs: [
          "Shockwave therapy delivers focused acoustic pulses to the affected area. These pulses are thought to stimulate blood flow and cellular repair processes in tissue that has become chronically inflamed or has developed scar-tissue-like density from repeated strain, essentially giving the body's own healing mechanisms a fresh signal to get back to work.",
          "It's most often used for conditions where tissue healing has plateaued: things like chronic tendon pain, plantar fasciitis, and certain types of muscle and joint pain that haven't responded to more conservative approaches.",
        ],
      },
      {
        heading: "What to Expect During Treatment",
        paragraphs: [
          "A shockwave session is relatively brief, and most patients describe the sensation as a pulsing pressure rather than sharp pain. There's no incision, no anesthesia, and typically no downtime, you can resume normal activities the same day. Results usually build gradually over a series of sessions rather than after a single visit, since the goal is to encourage a genuine healing response in the tissue.",
        ],
      },
      {
        heading: "Who Tends to Benefit Most",
        paragraphs: [
          "Patients who've tried rest, stretching, and basic physical therapy without lasting relief are often good candidates for shockwave therapy. It's frequently used as part of a broader recovery plan alongside chiropractic care or other modalities, especially for chronic, stubborn pain rather than a fresh acute injury.",
        ],
      },
      {
        heading: "Ready to Break the Cycle of Chronic Pain?",
        paragraphs: [
          "If you've been dealing with the same nagging pain for months with no real progress, it may be time to try a different approach. Our Ormond Beach team can evaluate your condition and let you know whether shockwave therapy is a good fit for your recovery plan.",
        ],
      },
    ],
  },
  {
    year: "2026",
    month: "07",
    day: "02",
    slug: "knee-decompression-therapy-chronic-knee-pain",
    title: "Understanding Knee Decompression Therapy for Chronic Knee Pain",
    description:
      "See how knee decompression therapy at Ormond Spine & Nerve Center eases chronic knee pain and supports joint healing without surgery or injections.",
    image: "/images/blog/knee-pain-blog.jpg",
    imageWidth: "1600",
    imageHeight: "1000",
    imageCaption: "knee decompression therapy",
    datePublished: "2026-07-02T14:00:00+00:00",
    dateModified: "2026-07-02T14:00:00+00:00",
    section: "Medical Care",
    relatedServiceHref: "/knee-decompression-therapy/",
    relatedServiceLabel: "Knee Decompression Therapy",
    body: [
      {
        paragraphs: [
          "Chronic knee pain has a way of changing how you move through your day, stairs become a chore, standing up from a chair takes a second thought, and activities you used to enjoy start to feel like risks. For many patients facing knee osteoarthritis or long-standing joint pain, knee decompression therapy offers a non-surgical way to relieve pressure on the joint and support the body's own repair process.",
        ],
      },
      {
        heading: "What Causes Chronic Knee Pain",
        paragraphs: [
          "Over years of use, the cartilage that cushions the knee joint can wear down, joint space can narrow, and surrounding tissue can become chronically inflamed. This is common in osteoarthritis but can also stem from old injuries, repetitive strain, or simply the cumulative effect of weight-bearing activity over time. The result is often a joint that feels stiff, achy, or swollen, especially after activity.",
        ],
      },
      {
        heading: "How Decompression Therapy Helps",
        paragraphs: [
          "Knee decompression therapy uses a controlled, gentle traction to create space within the joint, temporarily reducing pressure on worn cartilage and surrounding structures. This can help relieve pain, improve circulation to the joint, and create a more favorable environment for the tissue to recover, all without surgery, injections, or a lengthy recovery period.",
          "Sessions are comfortable and non-invasive, and most patients can return to their normal routine immediately afterward.",
        ],
      },
      {
        heading: "What Results to Expect",
        paragraphs: [
          "Like most non-surgical joint therapies, knee decompression tends to work best as part of a series of sessions rather than a single visit, with many patients noticing gradual improvement in pain and mobility over the course of their treatment plan. Your provider will typically combine decompression with other supportive care, such as targeted exercises, to help maintain results.",
        ],
      },
      {
        heading: "Take the Next Step Toward Pain-Free Movement",
        paragraphs: [
          "If chronic knee pain has been holding you back, it's worth exploring options before considering surgery. Our Ormond Beach team offers knee decompression therapy alongside a full evaluation to determine what's really driving your symptoms and how to best relieve them.",
        ],
      },
    ],
  },
  {
    year: "2026",
    month: "06",
    day: "11",
    slug: "spinal-decompression-therapy-non-surgical-disc-relief",
    title: "Spinal Decompression Therapy: A Non-Surgical Path to Disc Relief",
    description:
      "Learn how spinal decompression therapy gently relieves pressure on herniated and bulging discs, easing sciatica and back pain without surgery.",
    image: "/images/blog/spinal-decompression-blog.jpg",
    imageWidth: "1600",
    imageHeight: "1000",
    imageCaption: "spinal decompression therapy",
    datePublished: "2026-06-11T14:00:00+00:00",
    dateModified: "2026-06-11T14:00:00+00:00",
    section: "Medical Care",
    relatedServiceHref: "/spinal-decompression-therapy/",
    relatedServiceLabel: "Spinal Decompression Therapy",
    body: [
      {
        paragraphs: [
          "A herniated or bulging disc can turn everyday movement, bending, sitting, even sneezing, into a source of sharp pain or radiating sciatica down the leg. For patients looking to avoid surgery, spinal decompression therapy has become one of the most sought-after non-surgical treatments for disc-related back pain.",
        ],
      },
      {
        heading: "What Happens to a Disc Under Pressure",
        paragraphs: [
          "The discs between your vertebrae act as cushions, but years of poor posture, repetitive strain, or a single injury can cause a disc to bulge or herniate, pressing on nearby nerves and causing pain, numbness, or tingling that can radiate into the hips or legs. Left untreated, this pressure tends to keep tissue inflamed and can make simple movements painful.",
        ],
      },
      {
        heading: "How Spinal Decompression Works",
        paragraphs: [
          "Spinal decompression therapy uses a controlled, gentle stretching force applied to the spine, creating negative pressure within the affected disc. This can help retract bulging or herniated disc material away from the nerve, easing the pressure that's causing pain, while also encouraging nutrient-rich fluid to flow into the disc to support healing.",
          "Sessions are comfortable, most patients simply lie on a treatment table while the machine does the work, and there's no cutting, no anesthesia, and no lengthy recovery required.",
        ],
      },
      {
        heading: "Who It Tends to Help",
        paragraphs: [
          "Spinal decompression is commonly used for herniated or bulging discs, sciatica, degenerative disc disease, and chronic low back pain that hasn't responded to rest or basic treatment. As with most non-surgical spine therapies, it typically works best as a series of sessions combined with chiropractic care, giving your spine time to heal in a supported, gradual way.",
        ],
      },
      {
        heading: "Explore Your Options Before Considering Surgery",
        paragraphs: [
          "If you've been told surgery is your only option for a herniated disc, it's worth getting a second opinion first. Our Ormond Beach team offers spinal decompression therapy as part of a comprehensive evaluation to see whether a non-surgical path to relief is right for you.",
        ],
      },
    ],
  },
  {
    year: "2026",
    month: "06",
    day: "04",
    slug: "how-chiropractic-care-relieves-back-pain",
    title: "How Chiropractic Care Relieves Back Pain Without Surgery",
    description:
      "Discover how chiropractic care at Ormond Spine & Nerve Center relieves back pain, improves mobility, and supports long-term spine health in Ormond Beach.",
    image: "/images/blog/chiropractic-care-blog.jpg",
    imageWidth: "1600",
    imageHeight: "1000",
    imageCaption: "chiropractic care",
    datePublished: "2026-06-04T14:00:00+00:00",
    dateModified: "2026-06-04T14:00:00+00:00",
    section: "Medical Care",
    relatedServiceHref: "/chiropractic-care/",
    relatedServiceLabel: "Chiropractic Care",
    body: [
      {
        paragraphs: [
          "Back pain is one of the most common reasons people seek medical care, yet many patients aren't sure what their options are beyond pain medication or, in severe cases, surgery. Chiropractic care sits in between, a hands-on, non-surgical approach focused on restoring normal movement to the spine and relieving the pressure that's often the real source of the pain.",
        ],
      },
      {
        heading: "What Causes Most Back Pain",
        paragraphs: [
          "Back pain frequently stems from joints in the spine that aren't moving the way they should, whether from poor posture, a sudden strain, or the slow accumulation of daily wear and tear. When a spinal joint becomes restricted, surrounding muscles tend to tighten and compensate, which can lead to the stiffness, aching, or even nerve-related pain many patients describe.",
        ],
      },
      {
        heading: "How a Chiropractic Adjustment Helps",
        paragraphs: [
          "A chiropractic adjustment applies a precise, controlled force to a restricted spinal joint, helping restore its normal range of motion. This can relieve pressure on surrounding nerves and soft tissue, reduce muscle tension, and, over a series of visits, help correct the movement patterns that led to pain in the first place.",
          "Chiropractic care is often paired with soft-tissue work and guided exercises so the spine doesn't just feel better temporarily, but moves better long-term.",
        ],
      },
      {
        heading: "What a First Visit Looks Like",
        paragraphs: [
          "Your first chiropractic visit typically starts with a conversation about your symptoms and history, followed by a hands-on evaluation of your spine's movement and alignment. From there, your provider builds a treatment plan suited to your specific condition, whether that's occasional low back tightness or a more involved issue like sciatica.",
        ],
      },
      {
        heading: "Start Your Path to a Healthier Spine",
        paragraphs: [
          "Whether you're dealing with an occasional ache or chronic back pain that's limiting your daily life, chiropractic care offers a non-surgical starting point worth exploring. Our Ormond Beach team is ready to evaluate your spine and build a plan focused on lasting relief.",
        ],
      },
    ],
  },
  {
    year: "2026",
    month: "04",
    day: "06",
    slug: "when-neuropathy-needs-a-specialist",
    title: "Recognizing When Neuropathy Needs a Specialist in Ormond Beach",
    description:
      "Read the Ormond Spine & Nerve Center blog for expert tips on neuropathy, hormone therapy, and regenerative health. Check our Recognizing When Neuropathy Needs a Specialist in",
    image:
      "https://nexmedfl.com/wp-content/uploads/2026/04/getty-images-iZ554CtC-lQ-unsplash.jpg",
    imageWidth: "1920",
    imageHeight: "1280",
    imageCaption: "leg pain",
    datePublished: "2026-04-06T06:42:18+00:00",
    dateModified: "2026-04-08T06:47:32+00:00",
    section: "Medical Care",
  },
  {
    year: "2025",
    month: "08",
    day: "17",
    slug: "differentiating-numbness-tingling-burning-diagnoses",
    title: "Differentiating Numbness/Tingling/Burning Diagnoses",
    description:
      "Read the Ormond Spine & Nerve Center blog for expert tips on neuropathy, hormone therapy, and regenerative health. Check our Differentiating Numbness/Tingling/Burning Diagnoses",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/a_leg_with_a_burning_sensation.webp",
    imageWidth: "926",
    imageHeight: "601",
    datePublished: "2025-08-17T19:13:09+00:00",
    dateModified: "2025-08-17T19:47:16+00:00",
    section: "Uncategorized",
  },
  {
    year: "2025",
    month: "08",
    day: "17",
    slug: "can-neuropathy-be-reversed",
    title: "Can Neuropathy Be Reversed?",
    description:
      "Read the Ormond Spine & Nerve Center blog for expert tips on neuropathy, hormone therapy, and regenerative health. Check our Can Neuropathy Be Reversed? post for the latest news.",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/images-2025-08-18T002248.373.jpeg",
    imageWidth: "300",
    imageHeight: "168",
    datePublished: "2025-08-17T19:10:36+00:00",
    dateModified: "2025-08-17T19:23:04+00:00",
    section: "Uncategorized",
  },
  {
    year: "2025",
    month: "08",
    day: "17",
    slug: "which-medications-can-cause-neuropathy",
    title: "Which Medications Can Cause Neuropathy?",
    description:
      "Read the Ormond Spine & Nerve Center blog for expert tips on neuropathy, hormone therapy, and regenerative health. Check our Which Medications Can Cause Neuropathy? post for the",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/11062b_22d41eefeced42a8a22262bdf9e6eb1dmv2-1.avif",
    imageWidth: "740",
    imageHeight: "489",
    datePublished: "2025-08-17T19:12:14+00:00",
    dateModified: "2025-08-17T19:12:14+00:00",
    section: "Uncategorized",
  },
  {
    year: "2025",
    month: "08",
    day: "17",
    slug: "which-neuropathy-supplement-is-the-best",
    title: "Which Neuropathy Supplement Is The Best?",
    description:
      "Read the Ormond Spine & Nerve Center blog for expert tips on neuropathy, hormone therapy, and regenerative health. Check our Which Neuropathy Supplement Is The Best? post for the",
    image:
      "https://nexmedfl.com/wp-content/uploads/2025/08/9b098e_c88df951b71f42e4babeec7adbdba022mv2.avif",
    imageWidth: "740",
    imageHeight: "389",
    datePublished: "2025-08-17T19:07:31+00:00",
    dateModified: "2025-08-17T19:07:32+00:00",
    section: "Uncategorized",
  },
];

export function getBlogPostPath(post: BlogPostEntry): string {
  return `/${post.year}/${post.month}/${post.day}/${post.slug}/`;
}

export function findBlogPost(
  year: string,
  month: string,
  day: string,
  slug: string
): BlogPostEntry | undefined {
  return BLOG_POSTS.find(
    (post) =>
      post.year === year &&
      post.month === month &&
      post.day === day &&
      post.slug === slug
  );
}

/** Estimated reading time (whole minutes, minimum 1) from the post body word count. */
export function getReadTimeMinutes(post: BlogPostEntry): number {
  const wordCount =
    post.body?.reduce(
      (total, block) =>
        total + block.paragraphs.reduce((sum, p) => sum + p.split(/\s+/).length, 0),
      0
    ) ?? 0;
  return Math.max(1, Math.round(wordCount / 200));
}

// Topic groupings reused by the blog listing page's filter pills, the
// same service-based grouping used elsewhere in the site (matches
// BLOG_TOPICS in lib/contact-content.ts) so only content about the
// services we actually offer is categorized (no legacy weight-loss/
// hormone/peptide topics).
const BLOG_TOPIC_BY_SLUG: Record<string, string> = {
  "how-chiropractic-care-relieves-back-pain": "Spine & Chiropractic",
  "spinal-decompression-therapy-non-surgical-disc-relief": "Spine & Chiropractic",
  "car-accident-early-chiropractic-care": "Spine & Chiropractic",
  "knee-decompression-therapy-chronic-knee-pain": "Knee & Joint",
  "when-neuropathy-needs-a-specialist": "Neuropathy & Nerve Health",
  "differentiating-numbness-tingling-burning-diagnoses": "Neuropathy & Nerve Health",
  "can-neuropathy-be-reversed": "Neuropathy & Nerve Health",
  "which-medications-can-cause-neuropathy": "Neuropathy & Nerve Health",
  "which-neuropathy-supplement-is-the-best": "Neuropathy & Nerve Health",
  "how-laser-therapy-speeds-healing": "Recovery & Advanced Therapies",
  "shockwave-therapy-accelerating-recovery": "Recovery & Advanced Therapies",
  "compression-therapy-for-circulation-and-recovery": "Recovery & Advanced Therapies",
};

export function getBlogTopic(post: BlogPostEntry): string {
  return BLOG_TOPIC_BY_SLUG[post.slug] ?? "Uncategorized";
}
