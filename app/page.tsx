import { FernMark } from "@/components/FernMark";
import { RevealObserver } from "@/components/RevealObserver";

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
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#results">Results</a>
            <a href="#about">About</a>
          </nav>
          <a className="btn btn-primary nav-cta" href="#contact">
            Start a project
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow" aria-hidden="true"></div>
          <div className="container hero-inner">
            <p className="eyebrow reveal">
              Digital marketing &amp; web design studio
            </p>
            <h1 className="reveal">
              Websites that <em>glow</em>.
              <br />
              Marketing that <em>grows</em>.
            </h1>
            <p className="lede reveal">
              Fernlight builds fast, beautiful websites and runs the marketing
              behind them — so your business gets found, gets chosen, and keeps
              growing.
            </p>
            <div className="hero-actions reveal">
              <a className="btn btn-primary" href="#contact">
                Start a project
              </a>
              <a className="btn btn-ghost" href="#services">
                See what we do
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <p className="eyebrow reveal">Services</p>
            <h2 className="reveal">
              Everything your business needs to thrive online
            </h2>
            <div className="grid cards">
              <article className="card reveal">
                <div className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M4 5h16v12H4zM4 9h16M8 21h8m-4-4v4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Website design &amp; build</h3>
                <p>
                  Custom websites designed around your customers and built to
                  be fast, accessible, and easy to update. From one-page sites
                  to full e-commerce.
                </p>
              </article>
              <article className="card reveal">
                <div className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle
                      cx="11"
                      cy="11"
                      r="6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M15.5 15.5L20 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3>Search &amp; SEO</h3>
                <p>
                  Show up when customers are looking. Technical SEO, local
                  search, and content that earns rankings — not tricks that
                  fade.
                </p>
              </article>
              <article className="card reveal">
                <div className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M4 19V10m5.5 9V5m5.5 14v-7m5 7V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3>Paid advertising</h3>
                <p>
                  Google and social campaigns managed with clear reporting and
                  a relentless focus on what each lead actually costs you.
                </p>
              </article>
              <article className="card reveal">
                <div className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M12 3l2.4 5.6L20 11l-5.6 2.4L12 19l-2.4-5.6L4 11l5.6-2.4z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Brand &amp; content</h3>
                <p>
                  Logos, messaging, photography direction, and email campaigns
                  that make your business memorable everywhere it shows up.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="process">
          <div className="container">
            <p className="eyebrow reveal">Process</p>
            <h2 className="reveal">Simple, transparent, no surprises</h2>
            <ol className="steps">
              <li className="reveal">
                <span className="step-num">01</span>
                <h3>Listen</h3>
                <p>
                  We start with your goals, your customers, and what&apos;s
                  working (and not working) today.
                </p>
              </li>
              <li className="reveal">
                <span className="step-num">02</span>
                <h3>Design</h3>
                <p>
                  You see real designs early and often. Nothing gets built
                  until you love how it looks and reads.
                </p>
              </li>
              <li className="reveal">
                <span className="step-num">03</span>
                <h3>Launch</h3>
                <p>
                  We build, test on every device, and launch — then train you
                  so updating your site is never a mystery.
                </p>
              </li>
              <li className="reveal">
                <span className="step-num">04</span>
                <h3>Grow</h3>
                <p>
                  Monthly marketing, measurement, and improvements that
                  compound. You always know what you&apos;re getting.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" id="results">
          <div className="container">
            <p className="eyebrow reveal">Why Fernlight</p>
            <h2 className="reveal">
              Built for small businesses that want to be big
            </h2>
            <div className="grid stats">
              <div className="stat reveal">
                <span className="stat-value">2&nbsp;wks</span>
                <span className="stat-label">
                  typical time to a launched one-page site
                </span>
              </div>
              <div className="stat reveal">
                <span className="stat-value">100%</span>
                <span className="stat-label">
                  of sites delivered mobile-first and accessibility-checked
                </span>
              </div>
              <div className="stat reveal">
                <span className="stat-value">1</span>
                <span className="stat-label">
                  point of contact — you talk to the person doing the work
                </span>
              </div>
              <div className="stat reveal">
                <span className="stat-value">0</span>
                <span className="stat-label">
                  lock-in: you own your site, your content, and your data
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="about">
          <div className="container about">
            <div className="about-text">
              <p className="eyebrow reveal">About</p>
              <h2 className="reveal">Small studio. Senior work.</h2>
              <p className="reveal">
                Fernlight is an independent studio founded on a simple idea:
                small businesses deserve the same quality of design and
                marketing as the big ones — without agency bloat, junior
                hand-offs, or invoices you can&apos;t decode.
              </p>
              <p className="reveal">
                Every project is led end-to-end by a senior builder. That means
                fewer meetings, faster turnarounds, and a website that actually
                reflects your business.
              </p>
            </div>
            <div className="about-fern reveal" aria-hidden="true">
              <svg viewBox="0 0 200 240">
                <g
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                >
                  <path d="M100 230V20" />
                  <path d="M100 200c-30 0-52-15-60-45 30 0 52 15 60 45z" />
                  <path d="M100 200c30 0 52-15 60-45-30 0-52 15-60 45z" />
                  <path d="M100 162c-26 0-45-13-52-39 26 0 45 13 52 39z" />
                  <path d="M100 162c26 0 45-13 52-39-26 0-45 13-52 39z" />
                  <path d="M100 126c-21 0-37-11-43-32 21 0 37 11 43 32z" />
                  <path d="M100 126c21 0 37-11 43-32-21 0-37 11-43 32z" />
                  <path d="M100 94c-16 0-28-8-33-25 16 0 28 8 33 25z" />
                  <path d="M100 94c16 0 28-8 33-25-16 0-28 8-33 25z" />
                  <path d="M100 66c-11 0-19-6-23-17 11 0 19 6 23 17z" />
                  <path d="M100 66c11 0 19-6 23-17-11 0-19 6-23 17z" />
                  <path d="M100 44c-7 0-12-4-15-11 7 0 12 4 15 11z" />
                  <path d="M100 44c7 0 12-4 15-11-7 0-12 4-15 11z" />
                </g>
              </svg>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow reveal">Contact</p>
            <h2 className="reveal">Tell us about your project</h2>
            <p className="lede reveal">
              A quick note is all it takes. We&apos;ll reply within one
              business day with honest advice — even if that advice is that you
              don&apos;t need us yet.
            </p>
            <div className="hero-actions reveal">
              <a
                className="btn btn-primary btn-lg"
                href="mailto:hello@fernlight.studio?subject=Project%20inquiry"
              >
                hello@fernlight.studio
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand brand-sm" href="#top" aria-label="Back to top">
            <FernMark />
            <span className="brand-name">Fernlight</span>
          </a>
          <p className="footer-note">
            © 2026 Fernlight. Websites &amp; digital marketing.
          </p>
        </div>
      </footer>
    </>
  );
}
