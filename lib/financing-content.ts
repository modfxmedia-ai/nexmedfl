// Client-safe pure data for the /financing-options/ page, plain-language
// FAQ content about THIRD-PARTY financing (a credit-based lender, e.g.
// Cherry, separate from our office), distinct from the in-office payment
// plan content on /payment-plans/.

export const FINANCING_INTRO = {
  eyebrow: "Financing Options",
  heading: "Third-Party Financing for Your Treatment",
  intro:
    "Prefer a financing partner instead of an in-office plan? Ormond Spine & Nerve Center works with third-party financing partners so you can cover the cost of care with predictable monthly payments, decided in minutes, outside of our billing office.",
};

export interface FinancingFaq {
  question: string;
  answer: string;
}

export const FINANCING_FAQS: FinancingFaq[] = [
  {
    question: "What's the difference between financing and a payment plan?",
    answer:
      "A payment plan is an agreement directly with our office. Financing is a loan or credit line through an outside lender (a financing partner such as Cherry), they cover the cost up front, and you repay them directly on their schedule.",
  },
  {
    question: "How does third-party financing work?",
    answer:
      "You apply online or in our office through our financing partner. Most applications only take a few minutes and give you an approval amount and monthly payment estimate right away.",
  },
  {
    question: "Will applying affect my credit score?",
    answer:
      "Many financing partners, including Cherry, use a soft credit check to pre-qualify you, which doesn't impact your credit score. A full application later in the process may involve a hard inquiry, ask your financing partner for their specific policy.",
  },
  {
    question: "What treatments can financing be used for?",
    answer:
      "Financing can generally be applied toward any recommended treatment plan at our office, from chiropractic care and spinal decompression to neuropathy treatment and other therapies.",
  },
  {
    question: "How do I apply for financing?",
    answer:
      "Ask our front desk team during your visit, or let us know when you schedule your appointment. We'll walk you through the financing partner's application and help you understand your approval options.",
  },
];
