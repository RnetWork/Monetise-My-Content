'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp, scaleIn, staggerContainer, viewport } from '@/lib/motion';
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

const listItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 },
};

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <motion.div
          className="pricing-head"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
        >
          <span className="section-eyebrow">How we get paid</span>
          <h2>We only win when you do</h2>
        </motion.div>

        <motion.div
          className="price-card"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={scaleIn}
          whileHover={{
            y: -5,
            boxShadow: '0 20px 48px -16px rgba(26,20,16,0.16)',
            borderColor: 'rgba(45,92,77,0.35)',
            transition: { type: 'spring', stiffness: 280, damping: 22 },
          }}
        >
          <span className="price-badge">Revenue partnership</span>
          <h3>Free to start</h3>
          <p className="price-sub">No upfront fees, no monthly retainer, no lock-in contract.</p>

          <motion.ul
            className="price-list"
            variants={staggerContainer}
          >
            {items.map((item) => (
              <motion.li key={item} variants={listItem}>
                <CheckIcon />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <div className="price-foot">
            If we don&apos;t generate revenue for you, it costs you nothing.
          </div>

          <motion.div
            style={{ marginTop: 28 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Link href={BOOKING_URL} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Book my free audit →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
