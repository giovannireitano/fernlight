import Link from "next/link";
import type { Metadata } from "next";

import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — Fernlight Digital",
  description:
    "How Fernlight Digital collects, uses, and protects your information, including text messaging (SMS) consent and data practices.",
};

type Section = { h: string; p: string[]; list?: string[] };

const sections: Section[] = [
  {
    h: "Overview",
    p: [
      `This Privacy Policy explains how Fernlight Digital ("Fernlight," "we," "us," or "our") collects, uses, and protects information when you visit our website or contact us. By using our website or services, you agree to the practices described in this policy.`,
    ],
  },
  {
    h: "Information we collect",
    p: [`We collect information you choose to provide and a limited amount of technical information:`],
    list: [
      `Information you give us — such as your name, email address, phone number, business details, and the contents of your message — when you use our website chat, submit a request, email us, or otherwise contact us.`,
      `Automatically collected information — basic technical data such as your browser type, device, and pages viewed, used to operate and improve the website.`,
    ],
  },
  {
    h: "How we use information",
    p: [
      `We use the information we collect to respond to your inquiries, provide and improve our services, communicate with you about projects and requests, and meet our legal and security obligations.`,
    ],
  },
  {
    h: "Text messaging (SMS) and consent",
    p: [
      `If you provide your mobile phone number and opt in — for example, through our website chat or by request — you consent to receive text messages from Fernlight Digital related to your inquiry, such as replies to your questions, scheduling, and service or account updates.`,
      `Message frequency varies. Message and data rates may apply. You can opt out at any time by replying STOP, and you can reply HELP for assistance or contact us at hello@fernlightdigital.com.`,
      `No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing with subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.`,
    ],
  },
  {
    h: "How we share information",
    p: [
      `We do not sell your personal information. We may share information with trusted service providers who help us operate our business (such as hosting or customer support), when required by law, or to protect our rights — subject to the text messaging limitations described above.`,
    ],
  },
  {
    h: "Cookies and analytics",
    p: [
      `Our website may use minimal cookies or similar technologies to function properly and to understand general usage. You can control cookies through your browser settings.`,
    ],
  },
  {
    h: "Data retention and security",
    p: [
      `We keep personal information only as long as needed for the purposes described in this policy or as required by law, and we use reasonable measures to protect it. No method of transmission or storage is completely secure.`,
    ],
  },
  {
    h: "Your choices and rights",
    p: [
      `You may request access to, correction of, or deletion of your personal information, and you may opt out of text messages (reply STOP) or emails at any time. To make a request, contact us using the details below.`,
    ],
  },
  {
    h: "Children's privacy",
    p: [
      `Our website and services are not directed to children under 13, and we do not knowingly collect personal information from them.`,
    ],
  },
  {
    h: "Changes to this policy",
    p: [
      `We may update this Privacy Policy from time to time. The "Last updated" date above reflects the most recent changes.`,
    ],
  },
  {
    h: "Contact us",
    p: [
      `Fernlight Digital`,
      `1928 Clearbrook Drive`,
      `Phone: +1 (619) 848-6569`,
      `Email: hello@fernlightdigital.com`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main className="legal">
        <div className="container">
          <Link className="back" href="/">
            ← Back to Fernlight
          </Link>
          <h1>Privacy Policy</h1>
          <p className="updated">Last updated: June 15, 2026</p>

          {sections.map((s, i) => (
            <section key={i}>
              <h2>{s.h}</h2>
              {s.p.map((para, j) => (
                <p key={j}>{para}</p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((li, k) => (
                    <li key={k}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
