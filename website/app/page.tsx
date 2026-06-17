/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

import { FernMark } from "@/components/FernMark";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Fernlight — More Jobs for San Diego Home-Service Pros",
  description:
    "Fernlight sends San Diego landscapers and home-service businesses ready-to-go customer leads — and you only pay for the ones that turn into real work. No retainers, no contracts.",
};

function Check() {
  return (
    <svg className="compare-ic ic-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function X() {
  return (
    <svg className="compare-ic ic-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function Leaf() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <RevealObserver />

      <header className="nav" id="top">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="Fernlight home">
            <FernMark />
            <span className="brand-name">Fernlight</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#how">How it works</a>
            <a href="#why">Why us</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="btn btn-primary nav-cta" href="#contact">
            Book a call
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-inner">
            <p className="eyebrow reveal">San Diego lead generation for home-service pros</p>
            <h1 className="reveal">
              More jobs.
              <br />
              <span className="accent">Only pay when they're real.</span>
            </h1>
            <p className="lede reveal">
              Fernlight sends San Diego landscapers and home-service businesses
              ready-to-go customer leads — and you only pay for the ones that turn
              into actual work. No retainers. No contracts.
            </p>
            <div className="hero-actions reveal">
              <a className="btn btn-primary btn-lg" href="#contact">
                Book a 10-min call
              </a>
              <a className="btn btn-ghost btn-lg" href="#how">
                See how it works
              </a>
            </div>
            <div className="trust-row reveal">
              <span className="chip"><span className="chip-dot" /> Local in San Diego</span>
              <span className="chip"><b>Pay per result</b> — only for real jobs</span>
              <span className="chip"><b>No contracts</b> — cancel anytime</span>
            </div>
          </div>
        </section>

        {/* Assurance band */}
        <section className="band">
          <div className="container band-inner">
            <div className="band-item reveal">
              <span className="band-num">$0</span>
              <span className="band-label">What you pay if we don't send you leads</span>
            </div>
            <div className="band-item reveal">
              <span className="band-num">10 min</span>
              <span className="band-label">A quick call to see if it's a fit — no pressure</span>
            </div>
            <div className="band-item reveal">
              <span className="band-num">1-to-1</span>
              <span className="band-label">You work directly with the owner, not an account rep</span>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">The problem</p>
              <h2>You're great at the work. Getting found is the other job.</h2>
              <p className="sub">
                Most local pros are too busy doing great work to chase marketing —
                and it quietly costs them jobs every week.
              </p>
            </div>
            <div className="pain-grid">
              <div className="pain reveal">
                <div className="pain-mark">📞</div>
                <h3>Calls slip away</h3>
                <p>You're on a job site all day. The calls and quote requests that come in while your hands are full? Gone to whoever picks up first.</p>
              </div>
              <div className="pain reveal">
                <div className="pain-mark">🔎</div>
                <h3>Invisible online</h3>
                <p>A weak or missing website means when homeowners search for your service, they find your competitors — not you.</p>
              </div>
              <div className="pain reveal">
                <div className="pain-mark">💸</div>
                <h3>Agencies bill no matter what</h3>
                <p>Most marketers charge a fat monthly retainer whether you booked ten jobs or zero. The risk is all yours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section section-alt" id="how">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">How it works</p>
              <h2>We do the marketing. You do the jobs.</h2>
              <p className="sub">Three steps. You never touch an ad account or a dashboard.</p>
            </div>
            <div className="steps">
              <div className="step reveal">
                <span className="step-num">1</span>
                <h3>We build the engine</h3>
                <p>A clean site plus targeted Google &amp; Meta ads that put you in front of homeowners actively looking for your service, in your area.</p>
              </div>
              <div className="step reveal">
                <span className="step-num">2</span>
                <h3>Leads come straight to you</h3>
                <p>The second someone wants a quote, it hits your phone — a call or text, in real time. Nothing to log into, nothing to check.</p>
              </div>
              <div className="step reveal">
                <span className="step-num">3</span>
                <h3>You close. You only pay for real ones.</h3>
                <p>Book the job and get paid. You only pay us for leads that turn into actual work — not clicks, not maybes, not wrong numbers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Why Fernlight</p>
              <h2>Not your typical agency.</h2>
            </div>
            <div className="compare">
              <div className="compare-col bad reveal">
                <h3>Typical agency</h3>
                <div className="compare-row"><X /> Monthly retainer whether you get jobs or not</div>
                <div className="compare-row"><X /> Locked into 6–12 month contracts</div>
                <div className="compare-row"><X /> You get "deliverables" and dashboards</div>
                <div className="compare-row"><X /> Buzzwords you need a translator for</div>
                <div className="compare-row"><X /> You're one of a hundred accounts</div>
              </div>
              <div className="compare-col good reveal">
                <h3>Fernlight</h3>
                <div className="compare-row"><Check /> You only pay for leads that become real jobs</div>
                <div className="compare-row"><Check /> No contracts — cancel anytime</div>
                <div className="compare-row"><Check /> You get actual customers, not reports</div>
                <div className="compare-row"><Check /> Plain English, one person who answers</div>
                <div className="compare-row"><Check /> A handful of clients, so you get real attention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Who it's for</p>
              <h2>Built for San Diego home-service pros.</h2>
              <p className="sub">Owner-operated local businesses that want a fuller calendar — starting with the green trades.</p>
            </div>
            <div className="niches reveal">
              <span className="niche-chip lead"><Leaf /> Landscaping</span>
              <span className="niche-chip">Lawn care</span>
              <span className="niche-chip">Tree service</span>
              <span className="niche-chip">Pool service</span>
              <span className="niche-chip">Hardscaping</span>
              <span className="niche-chip">Irrigation</span>
              <span className="niche-chip">&amp; other local home services</span>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="section">
          <div className="container">
            <div className="guarantee reveal">
              <div className="guarantee-glow" aria-hidden="true" />
              <h2>If we don't send you leads, you don't pay. Simple.</h2>
              <p>
                No retainer to lose, no contract to escape. Our money is made when
                yours is — that's the whole deal, and it's why we work hard to keep
                your phone ringing.
              </p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="section section-alt">
          <div className="container founder">
            <div className="founder-card reveal">
              <div className="founder-avatar">G</div>
              <p className="name">Gio</p>
              <p className="role">Founder, Fernlight — San Diego</p>
            </div>
            <div className="reveal">
              <blockquote>
                <p>
                  "I started Fernlight because I watched local guys get burned by
                  agencies that charged them every month and delivered nothing. So I
                  flipped it: you only pay me when I actually put a job in your hands.
                </p>
                <p>
                  I'm local, you'll always talk to me directly, and I take on just a
                  few clients at a time so each one gets real attention. If I can't get
                  your phone ringing, I haven't earned a dime — and I'm good with that."
                </p>
              </blockquote>
              <p className="sig">— Gio, Fernlight</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Questions</p>
              <h2>Straight answers.</h2>
            </div>
            <div className="faq reveal">
              <details>
                <summary>What does it cost?</summary>
                <p>Nothing upfront, and nothing if we don't deliver. You pay per qualified lead that turns into real work. We set the exact number together on a quick call so it always makes sense for your margins.</p>
              </details>
              <details>
                <summary>How do the leads reach me?</summary>
                <p>Straight to your phone — a call or text the moment a homeowner wants a quote. There's nothing to log into and no portal to babysit.</p>
              </details>
              <details>
                <summary>What counts as a lead I actually pay for?</summary>
                <p>A real homeowner in your area, with a real job, who asked to be contacted. Wrong numbers, spam, and tire-kickers are on us — not you. We define exactly what counts before we ever start.</p>
              </details>
              <details>
                <summary>Do I have to sign a contract?</summary>
                <p>No. It's month-to-month. If it's not working for you, you walk — no penalties, no hassle.</p>
              </details>
              <details>
                <summary>What areas and trades do you cover?</summary>
                <p>San Diego County, focused on landscaping and related home services first. Not sure if you're a fit? Ask on the call — I'll tell you straight.</p>
              </details>
              <details>
                <summary>How fast can we start?</summary>
                <p>Usually within a few days. Once we've talked and I've built your setup, leads can start coming in shortly after.</p>
              </details>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="section contact" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow reveal">Get started</p>
            <h2 className="reveal">Ready for more jobs?</h2>
            <p className="lede reveal">
              Quick 10-minute call — I'll show you exactly how it would work for your
              business. No pressure, no jargon.
            </p>
            {/* Tip: swap these hrefs for your booking link (e.g. Calendly) when ready. */}
            <div className="contact-actions reveal">
              <a className="btn btn-primary btn-lg" href="tel:+16198486569">
                Call (619) 848-6569
              </a>
              <a className="btn btn-ghost btn-lg" href="mailto:hello@fernlightdigital.com?subject=More%20leads%20for%20my%20business">
                Email me
              </a>
            </div>
            <p className="contact-meta reveal">
              Fernlight Digital · San Diego, CA · Prefer to type? Use the chat bubble in the corner.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
