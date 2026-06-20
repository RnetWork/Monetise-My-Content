import Link from 'next/link';
import { BOOKING_URL } from '@/lib/config';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              For creators with 5K–100K real followers
            </span>
            <h1>
              You built an audience that{' '}
              <span className="underline">trusts you.</span>
              <br />
              Now let&apos;s get you paid like it.
            </h1>
            <p className="lede">
              We work behind the scenes as your revenue partner — building the offers,
              deals, and systems that turn your engaged audience into real income. You
              keep creating. We keep building the business side.
            </p>
            <div className="hero-ctas">
              <Link href={BOOKING_URL} className="btn-primary">
                Get your free audit →
              </Link>
              <Link href="/#how" className="btn-secondary">
                See how it works
              </Link>
            </div>
            <div className="trust-line">No upfront fees · We only earn when you earn</div>
          </div>

          <div className="gap-card">
            <span className="gap-card-label">A typical creator we meet</span>
            <div className="gap-chart">
              <div className="bar-col">
                <div className="bar-fig">38K</div>
                <div className="bar audience" />
                <div className="bar-tag">Engaged followers</div>
              </div>
              <div className="bar-col">
                <div className="bar-fig">$420</div>
                <div className="bar income" />
                <div className="bar-tag">Monthly income</div>
              </div>
            </div>
            <div className="gap-annotation">
              <svg viewBox="0 0 48 30" fill="none" aria-hidden="true">
                <path
                  d="M2 28C15 5 35 2 46 4"
                  stroke="#FF6B35"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M40 1L46 4L41 9"
                  stroke="#FF6B35"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              that gap is the job
            </div>
            <div className="gap-card-foot">
              Most of the creators we talk to are sitting on{' '}
              <strong>5–10x</strong> their current income, already, in the audience they
              have today.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
