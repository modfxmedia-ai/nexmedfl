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
  lastUpdated: "August 17, 2026",
  intro:
    "Ormond Spine & Nerve Center (\"we,\" \"us,\" or \"our\") respects your privacy. This Privacy Policy explains what information we collect through this website, how we use it, and the choices you have. It does not apply to protected health information created or received during treatment, which is governed by our HIPAA Notice of Privacy Practices.",
  sections: [
    {
      heading: "Information We Collect",
      paragraphs: [
        "We collect information you voluntarily provide through forms on this website, such as appointment requests and contact forms, which may include your name, phone number, email address, and the reason for your inquiry.",
        "We also automatically collect limited technical information when you browse the site, such as your IP address, browser type, device type, and pages visited, typically through cookies and similar analytics technologies.",
      ],
    },
    {
      heading: "How We Use Your Information",
      paragraphs: ["We use the information collected to:"],
      list: [
        "Respond to appointment requests and other inquiries",
        "Communicate with you about scheduling, services, and billing",
        "Improve the content, usability, and performance of this website",
        "Comply with legal obligations and protect against fraud or misuse",
      ],
    },
    {
      heading: "Cookies & Analytics",
      paragraphs: [
        "This site may use cookies and third-party analytics tools to understand how visitors use the site and to improve our marketing. You can control or disable cookies through your browser settings; doing so may limit some site functionality.",
      ],
    },
    {
      heading: "Sharing of Information",
      paragraphs: [
        "We do not sell your personal information. We may share information with trusted service providers who help us operate this website, our scheduling systems, or our marketing (for example, hosting providers or appointment-request platforms), who are required to protect it and use it only to provide those services.",
        "We may also disclose information when required by law or to protect the rights, property, or safety of our patients, staff, or the public.",
      ],
    },
    {
      heading: "Data Security",
      paragraphs: [
        "We use reasonable administrative, technical, and physical safeguards designed to protect the information collected through this website. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      heading: "Your Choices",
      paragraphs: [
        "You may contact us at any time to ask what information we hold about you, request corrections, or ask that we no longer contact you for marketing purposes, using the details below.",
      ],
    },
    {
      heading: "Children's Privacy",
      paragraphs: [
        "This website is not directed to children under 13, and we do not knowingly collect personal information from children through this site.",
      ],
    },
    {
      heading: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated \"last updated\" date.",
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
