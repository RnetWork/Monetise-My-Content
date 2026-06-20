import Link from 'next/link';
import { BOOKING_URL } from '@/lib/config';

function CheckIcon() {
  return (
    <span className="check">
      <svg viewBox="0 0 12 9" fill="none" aria-hidden="true">
        <path
          d="M1 4.5L4.2 7.7L11 1"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const items = [
  'Full audience & income audit, free',
  'Custom revenue plan built around your niche',
  'We handle deals, pricing, and outreach for you',
  'We take a share only of the revenue we generate together',
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="pricing-head">
          <span className="section-eyebrow">How we get paid</span>
          <h2>We only win when you do</h2>
        </div>
        <div className="price-card">
          <span className="price-badge">Revenue partnership</span>
          <h3>Free to start</h3>
          <p className="price-sub">No upfront fees, no monthly retainer, no lock-in contract.</p>
          <ul className="price-list">
            {items.map((item) => (
              <li key={item}>
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
          <div className="price-foot">
            If we don&apos;t generate revenue for you, it costs you nothing.
          </div>
        </div>
      </div>
    </section>
  );
}
