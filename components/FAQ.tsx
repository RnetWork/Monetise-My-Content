'use client';

import { useState } from 'react';

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
        <div className="section-head">
          <span className="section-eyebrow">Questions</span>
          <h2>Before you reach out</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className={`faq-item${isOpen ? ' open' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div
                  className="faq-a"
                  style={isOpen ? { maxHeight: '500px' } : undefined}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
