import Link from "next/link";
import type { Metadata } from "next";

import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service — Fernlight Digital",
  description:
    "The terms that govern your use of the Fernlight Digital website and services.",
};

type Section = { h: string; p: string[] };

const sections: Section[] = [
  {
    h: "Agreement to terms",
    p: [
      `These Terms of Service ("Terms") govern your access to and use of the Fernlight Digital website and services. By using our website or engaging our services, you agree to these Terms. If you do not agree, please do not use the website.`,
    ],
  },
  {
    h: "Our services",
    p: [
      `Fernlight Digital is a digital marketing and website-building studio. We provide website design and development, search and SEO, paid advertising management, and related branding and content services. The specific scope, deliverables, and fees for any engagement are defined in a separate written agreement or proposal.`,
    ],
  },
  {
    h: "Use of the website",
    p: [
      `You agree to use the website lawfully and not to misuse it, interfere with its operation, attempt unauthorized access, or use it to infringe the rights of others.`,
    ],
  },
  {
    h: "Intellectual property",
    p: [
      `The content, design, logos, and materials on this website are owned by Fernlight Digital or its licensors and are protected by applicable laws. You may not copy, reproduce, or distribute them without permission, except as allowed by law.`,
    ],
  },
  {
    h: "Third-party links and services",
    p: [
      `Our website may reference or link to third-party websites or services. We are not responsible for the content, policies, or practices of any third party.`,
    ],
  },
  {
    h: "Disclaimers",
    p: [
      `The website and its content are provided "as is" and "as available" without warranties of any kind, whether express or implied, including fitness for a particular purpose. We do not warrant that the website will be uninterrupted or error-free.`,
    ],
  },
  {
    h: "Limitation of liability",
    p: [
      `To the fullest extent permitted by law, Fernlight Digital will not be liable for any indirect, incidental, or consequential damages arising from your use of the website. Our total liability for any claim relating to the website is limited to the amount you paid us, if any, for the related service.`,
    ],
  },
  {
    h: "Changes to these terms",
    p: [
      `We may update these Terms from time to time. Continued use of the website after changes take effect constitutes acceptance of the updated Terms.`,
    ],
  },
  {
    h: "Governing law",
    p: [
      `These Terms are governed by the laws of the State of California, United States, without regard to its conflict-of-laws principles.`,
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

export default function TermsPage() {
  return (
    <>
      <main className="legal">
        <div className="container">
          <Link className="back" href="/">
            ← Back to Fernlight
          </Link>
          <h1>Terms of Service</h1>
          <p className="updated">Last updated: June 15, 2026</p>

          {sections.map((s, i) => (
            <section key={i}>
              <h2>{s.h}</h2>
              {s.p.map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
