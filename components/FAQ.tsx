'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, viewport, ease } from '@/lib/motion';

type FaqItem = { q: string; a: string };

const faqs: FaqItem[] = [
  {
    q: 'What exactly do you do for me, day to day?',
    a: "We design and run your monetization behind the scenes — building offers, handling brand outreach and pricing, and setting up the systems that bring in revenue. You're not posting any differently. We're just operating the business layer underneath your content.",
  },
  {
    q: 'Do I need a certain number of followers to qualify?',
    a: "We work best with creators in the 5K–100K range who have real engagement. Follower count matters less than whether your audience actually trusts and responds to you — that's what we look for on the audit call.",
  },
  {
    q: 'How do you actually get paid?',
    a: "We take a share of the revenue we generate for you — nothing upfront, no monthly fee. If we don't bring in income, we don't get paid. That keeps us focused entirely on results, not retainers.",
  },
  {
    q: 'Will I have to change my content or niche?',
    a: "No. We build monetization around what's already working for you, not the other way around. If a generic \"start a course\" strategy doesn't fit your audience, we won't push it on you.",
  },
  {
    q: 'What happens on the free audit call?',
    a: "30 minutes. We look at your audience, your content, and your current income, and walk you through exactly where the gaps are and what's realistic to close them. No pitch, no pressure — if it's not a fit, we'll tell you.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
        >
          <span className="section-eyebrow">Questions</span>
          <h2>Before you reach out</h2>
        </motion.div>

        <motion.div
          className="faq-list"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {faqs.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={i}
                className={`faq-item${isOpen ? ' open' : ''}`}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
                }}
              >
                <motion.button
                  className="faq-q"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  whileHover={{ color: '#2D5C4D' }}
                  transition={{ duration: 0.18, ease }}
                >
                  {item.q}
                  <span className="faq-icon" aria-hidden="true" />
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="faq-body">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
