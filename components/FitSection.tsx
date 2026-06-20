'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, viewport } from '@/lib/motion';

const yesItems = [
  'You have 5K–100K followers with genuine engagement, not bought numbers',
  'You post consistently and have a clear niche people trust you on',
  "You're earning little or nothing from an audience that clearly likes you",
  "You'd rather create than spend hours on pricing, pitching, and admin",
];

const noItems = [
  "You're under 5K followers and still finding your niche",
  "You already have a full monetization system that's working well",
  'You want someone else to write your content or post on your behalf',
  "You're looking for a quick one-time payout, not an ongoing partner",
];

export default function FitSection() {
  return (
    <section className="fit" id="fit">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
        >
          <span className="section-eyebrow">Is this you?</span>
          <h2>Built for a very specific kind of creator</h2>
        </motion.div>

        <div className="fit-grid">
          <motion.div
            className="fit-card yes"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={slideLeft}
            whileHover={{
              y: -5,
              boxShadow: '0 16px 40px -12px rgba(26,20,16,0.14)',
              transition: { type: 'spring', stiffness: 280, damping: 22 },
            }}
          >
            <h3><span className="fit-dot" />This is a fit if</h3>
            <ul>
              {yesItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </motion.div>

          <motion.div
            className="fit-card no"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={slideRight}
            whileHover={{
              y: -5,
              boxShadow: '0 16px 40px -12px rgba(26,20,16,0.14)',
              transition: { type: 'spring', stiffness: 280, damping: 22 },
            }}
          >
            <h3><span className="fit-dot" />Probably not yet if</h3>
            <ul>
              {noItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
