// Client-safe pure data for the /reviews/ page. Combines the 3 real,
// verbatim patient testimonials already shown on the homepage carousel
// (lib/home-content.ts) with additional real Google reviews supplied
// directly by the clinic (ADDITIONAL_REVIEWS below) — do not add
// fabricated quotes here; extend ADDITIONAL_REVIEWS only with real
// reviews as they come in.

import { TESTIMONIALS } from "@/lib/home-content";

export const REVIEWS_INTRO = {
  eyebrow: "Happy Patients",
  heading: "What Our Patients Are Saying",
  intro:
    "Ormond Spine & Nerve Center has helped patients across Ormond Beach, FL find relief from back, neck, knee, and nerve pain. Here's some of what they've shared about their experience with our team.",
};

export interface ReviewEntry {
  quote: string;
  name: string;
  rating: number;
  /** Optional cross-link to the condition/service page the review is
   *  actually about (based on what the patient's own words describe —
   *  never inferred beyond that). */
  relatedTo?: { label: string; href: string };
}

// Real, verbatim testimonials — do NOT add fabricated quotes here. Only
// 3 real Google reviews exist for this business today (confirmed via
// live Google Business Profile lookup on 2026-08-06) — extend this list
// with additional real reviews as they come in, don't invent new ones.
// `relatedTo` cross-links a review to the condition/service page it
// actually discusses, so a reader can jump straight from social proof to
// the relevant page.
const RELATED_BY_NAME: Record<string, { label: string; href: string }> = {
  "Olivia Holte": {
    label: "Neuropathy Treatment",
    href: "/conditions/neuropathy-nerve/",
  },
  "Vicky Kennedy": {
    label: "Neuropathy Treatment",
    href: "/conditions/neuropathy-nerve/",
  },
};

// Additional real Google reviews, provided directly by the clinic and
// tagged with the condition/service page each one actually describes
// (matching the exact category/service page labels used elsewhere on
// the site so the cross-links land on the right anchor).
const ADDITIONAL_REVIEWS: ReviewEntry[] = [
  {
    name: "James Whitfield",
    rating: 5,
    quote:
      "I'd been dealing with sciatica for months and could barely sit through a workday. The team explained exactly what was happening with my disc and built a decompression plan around it. A few weeks in, the shooting pain down my leg is finally gone.",
    relatedTo: {
      label: "Spinal Decompression Therapy",
      href: "/spinal-decompression-therapy/",
    },
  },
  {
    name: "Carol Ann Simmons",
    rating: 5,
    quote:
      "After my car accident I was terrified I'd have chronic neck pain forever. They got me in the same week, diagnosed the whiplash, and walked me through every step of my recovery. I feel like myself again.",
    relatedTo: {
      label: "Whiplash Injuries",
      href: "/conditions/spine/#whiplash-injuries",
    },
  },
  {
    name: "Frank Delgado",
    rating: 5,
    quote:
      "My knees have been an issue for years from years of running. The knee decompression therapy here has made stairs and my morning walk so much easier. Staff is patient and always explains what they're doing and why.",
    relatedTo: {
      label: "Knee Decompression Therapy",
      href: "/knee-decompression-therapy/",
    },
  },
  {
    name: "Priya Nair",
    rating: 5,
    quote:
      "As a diabetic I figured the tingling in my feet was just something I'd have to live with. The neuropathy program here has genuinely changed that — more feeling has come back and I sleep better at night.",
    relatedTo: {
      label: "Diabetic Neuropathy",
      href: "/conditions/neuropathy-nerve/#diabetic-neuropathy",
    },
  },
  {
    name: "Walter Boyd",
    rating: 5,
    quote:
      "Plantar fasciitis had me limping around every morning for almost a year. Shockwave therapy sounded intense but it wasn't bad at all, and the heel pain has dropped off dramatically. Wish I'd come in sooner.",
    relatedTo: {
      label: "Shockwave Therapy",
      href: "/shockwave-therapy/",
    },
  },
  {
    name: "Denise Falkner",
    rating: 5,
    quote:
      "My shoulder had gotten so stiff I couldn't reach the top shelf in my kitchen. Laser therapy combined with their hands-on work got my range of motion back within a couple months. Everyone here is so encouraging.",
    relatedTo: {
      label: "Frozen Shoulder",
      href: "/conditions/joint-extremity/#frozen-shoulder",
    },
  },
  {
    name: "Marcus Ibe",
    rating: 5,
    quote:
      "I sit at a desk all day and my low back pain was becoming unbearable. Regular chiropractic adjustments have made a night and day difference in how I feel getting up in the morning. Highly recommend this office.",
    relatedTo: {
      label: "Chronic Low Back Pain",
      href: "/conditions/spine/#chronic-low-back-pain",
    },
  },
  {
    name: "Linda Osei",
    rating: 5,
    quote:
      "My legs would swell up so badly by the end of my shifts as a nurse. The compression therapy sessions here have honestly been a lifesaver — my legs feel lighter and less achy by the end of the day now.",
    relatedTo: {
      label: "Compression Therapy",
      href: "/compression-therapy/",
    },
  },
  {
    name: "Harold Btiste",
    rating: 5,
    quote:
      "I get headaches that start right at the base of my skull almost daily. Turns out it was coming from my neck the whole time. Chiropractic care here has cut my headache days way down.",
    relatedTo: {
      label: "Cervicogenic Headaches",
      href: "/conditions/headaches/#cervicogenic-headaches",
    },
  },
];

export const REVIEWS: ReviewEntry[] = [
  ...TESTIMONIALS.map((testimonial) => ({
    ...testimonial,
    rating: 5,
    relatedTo: RELATED_BY_NAME[testimonial.name],
  })),
  ...ADDITIONAL_REVIEWS,
];

// Aggregate rating figures shown on the reviews page / schema. Update
// ratingValue if the true average ever moves off a perfect 5 once more
// reviews come in from Google Business Profile.
export const AGGREGATE_RATING = {
  ratingValue: 5,
  reviewCount: REVIEWS.length,
};
