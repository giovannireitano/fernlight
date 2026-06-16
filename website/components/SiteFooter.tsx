import Link from "next/link";

import { FernMark } from "@/components/FernMark";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link className="brand brand-sm" href="/" aria-label="Fernlight home">
          <FernMark />
          <span className="brand-name">Fernlight</span>
        </Link>

        <div className="footer-contact">
          <p className="footer-note">Fernlight Digital — 1928 Clearbrook Drive</p>
          <p className="footer-note">
            <a href="tel:+16198486569">+1 (619) 848-6569</a>
            {" · "}
            <a href="mailto:hello@fernlightdigital.com">
              hello@fernlightdigital.com
            </a>
          </p>
        </div>

        <nav className="footer-links" aria-label="Legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </nav>

        <p className="footer-note footer-copy">
          © 2026 Fernlight Digital. Websites &amp; digital marketing.
        </p>
      </div>
    </footer>
  );
}
