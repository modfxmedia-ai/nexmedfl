// Content for the general site /privacy-policy/ and /terms-and-conditions/
// pages. Distinct from /hippa-privacy-policy/, which covers HIPAA-specific
// handling of protected health information, these two pages cover
// standard website data-collection/cookies and terms-of-use, respectively.

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface LegalPageContent {
  eyebrow: string;
  heading: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export const PRIVACY_POLICY: LegalPageContent = {
  eyebrow: "Legal",
  heading: "Privacy Policy",
  lastUpdated: "August 18, 2026",
  intro:
    "Ormond Spine & Nerve Center is committed to protecting the privacy and confidentiality of your personal information. This Communication Privacy Policy outlines how we collect, use, disclose, and safeguard your communication-related data. By engaging with our services, you agree to the terms outlined in this policy. It does not apply to protected health information created or received during treatment, which is governed by our HIPAA Notice of Privacy Practices.",
  sections: [
    {
      heading: "Information We Collect",
      paragraphs: [
        "Contact Information: We may collect your name, email address, phone number, and other contact details when you communicate with Ormond Spine & Nerve Center.",
        "Communication Content: We may collect information related to your communication with us, including emails, messages, and other forms of communication.",
      ],
    },
    {
      heading: "How We Use Your Information",
      paragraphs: [],
      list: [
        "Communication Processing: We use your contact information to communicate with you and respond to your inquiries, requests, or concerns.",
        "Service-related Communications: We may send you service-related announcements, updates, and administrative messages.",
        "Improving Services: Your communication data may be used to analyze trends, track user interactions, and improve our services.",
      ],
    },
    {
      heading: "Information Sharing and Disclosure",
      paragraphs: [
        "Third-Party Service Providers: We may engage third-party service providers to assist with communication services. These providers are contractually obligated to maintain the confidentiality and security of your information.",
        "Legal Requirements: We may disclose your information if required by law, regulation, or legal process.",
      ],
    },
    {
      heading: "Security Measures",
      paragraphs: [
        "We implement reasonable security measures to protect against unauthorized access, disclosure, alteration, or destruction of your information.",
      ],
    },
    {
      heading: "Your Choices",
      paragraphs: [
        "You may choose not to receive non-essential communications from Ormond Spine & Nerve Center by following the opt-out instructions included in the communication.",
      ],
    },
    {
      heading: "Information Protection",
      paragraphs: [
        "Your information will not be sold or distributed to third parties for marketing purposes.",
      ],
    },
    {
      heading: "SMS Messaging Terms & Conditions",
      paragraphs: [
        "At Ormond Spine & Nerve Center you can opt in to receive text message notifications.",
      ],
      list: [
        "Notifications may include appointment reminders, updates, and other information related to the services provided by Ormond Spine & Nerve Center.",
        "Messaging frequency varies.",
        "Standard messaging rates and data charges may apply.",
        "You can opt out of receiving these SMS messages at any time by replying \"STOP\" or by contacting Ormond Spine & Nerve Center directly.",
        "You can text \"Options\" for help information.",
      ],
    },
    {
      heading: "Consent",
      paragraphs: [
        "By engaging with our services and communicating with Ormond Spine & Nerve Center, you consent to the collection, use, and disclosure of your information as described in this Communication Privacy Policy.",
      ],
    },
    {
      heading: "Contact Us",
      paragraphs: [
        "If you have questions about this Privacy Policy, please contact us at info@ormondspinenervecenter.com, call 386-361-3391, or write to us at 141 Sagebrush Trail, Suite C, Ormond Beach, FL 32174.",
      ],
    },
  ],
};

export const TERMS_CONDITIONS: LegalPageContent = {
  eyebrow: "Legal",
  heading: "Terms & Conditions",
  lastUpdated: "August 17, 2026",
  intro:
    "These Terms & Conditions (\"Terms\") govern your use of this website, operated by Ormond Spine & Nerve Center. By using this site, you agree to these Terms. If you do not agree, please do not use this website.",
  sections: [
    {
      heading: "Use of This Website",
      paragraphs: [
        "This website is provided for general informational purposes about our practice and services. You agree to use it only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this site by anyone else.",
      ],
    },
    {
      heading: "Not Medical Advice",
      paragraphs: [
        "Content on this website, including text, images, and any blog or educational material, is for general informational purposes only and is not intended as, and should not be relied upon as, medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition, and never disregard professional medical advice or delay seeking it because of something you read on this site.",
        "Use of this website, including submitting an appointment request or contact form, does not create a doctor-patient relationship.",
      ],
    },
    {
      heading: "Appointment Requests & Forms",
      paragraphs: [
        "Submitting an appointment request or contact form through this site is a request only and does not guarantee a scheduled appointment. Our office will contact you to confirm scheduling, insurance, and other details.",
        "If you have a medical emergency, call 911 or go to the nearest emergency room immediately rather than submitting a form on this website.",
      ],
    },
    {
      heading: "Intellectual Property",
      paragraphs: [
        "All content on this website, including text, graphics, logos, and images, is the property of Ormond Spine & Nerve Center or its licensors and is protected by applicable intellectual property laws. You may view and print pages for your own personal, non-commercial use, but may not reproduce, distribute, or create derivative works from this content without our prior written permission.",
      ],
    },
    {
      heading: "Third-Party Links & Services",
      paragraphs: [
        "This site may link to, or embed forms or widgets from, third-party services (for example, appointment scheduling or financing partners). We are not responsible for the content, accuracy, or privacy practices of third-party websites or services, and your use of them is subject to their own terms and policies.",
      ],
    },
    {
      heading: "Disclaimer of Warranties",
      paragraphs: [
        "This website and its content are provided \"as is\" and \"as available\" without warranties of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.",
      ],
    },
    {
      heading: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, Ormond Spine & Nerve Center will not be liable for any indirect, incidental, or consequential damages arising out of or relating to your use of, or inability to use, this website.",
      ],
    },
    {
      heading: "Governing Law",
      paragraphs: [
        "These Terms are governed by the laws of the State of Florida, without regard to its conflict-of-law principles.",
      ],
    },
    {
      heading: "Changes to These Terms",
      paragraphs: [
        "We may revise these Terms at any time by updating this page. Continued use of the website after changes are posted constitutes your acceptance of the revised Terms.",
      ],
    },
    {
      heading: "Contact Us",
      paragraphs: [
        "Questions about these Terms can be directed to info@ormondspinenervecenter.com, 386-361-3391, or 141 Sagebrush Trail, Suite C, Ormond Beach, FL 32174.",
      ],
    },
  ],
};
