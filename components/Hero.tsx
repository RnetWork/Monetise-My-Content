'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BOOKING_URL } from '@/lib/config';
import { ease } from '@/lib/motion';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">

          {/* Left: copy */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
          >
            <motion.span
              className="eyebrow"
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
            >
              <span className="eyebrow-dot" />
              For creators with 5K–100K real followers
            </motion.span>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
            >
              You built an audience that{' '}
              <span className="underline">trusts you.</span>
              <br />
              Now let&apos;s get you paid like it.
            </motion.h1>

            <motion.p
              className="lede"
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}
            >
              We work behind the scenes as your revenue partner — building the offers,
              deals, and systems that turn your engaged audience into real income. You
              keep creating. We keep building the business side.
            </motion.p>

            <motion.div
              className="hero-ctas"
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98, y: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{ display: 'inline-flex' }}
              >
                <Link href={BOOKING_URL} className="btn-primary">
                  Get your free audit →
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                style={{ display: 'inline-flex' }}
              >
                <Link href="/#how" className="btn-secondary">
                  See how it works
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="trust-line"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6, delay: 0.1 } } }}
            >
              No upfront fees · We only earn when you earn
            </motion.div>
          </motion.div>

          {/* Right: gap chart */}
          <motion.div
            className="gap-card"
            initial={{ opacity: 0, y: 28, rotate: 1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 14, delay: 0.25 }}
            whileHover={{ y: -4, rotate: -0.3, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
          >
            <span className="gap-card-label">A typical creator we meet</span>
            <div className="gap-chart">

              <div className="bar-col">
                <motion.div
                  className="bar-fig"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.15, duration: 0.4, ease }}
                >
                  38K
                </motion.div>
                <motion.div
                  className="bar audience"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.6, duration: 0.85, type: 'spring', stiffness: 65, damping: 13 }}
                  style={{ transformOrigin: 'bottom' }}
                />
                <div className="bar-tag">Engaged followers</div>
              </div>

              <div className="bar-col">
                <motion.div
                  className="bar-fig"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.48, duration: 0.4, ease }}
                >
                  $420
                </motion.div>
                <motion.div
                  className="bar income"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.92, duration: 0.8, type: 'spring', stiffness: 65, damping: 13 }}
                  style={{ transformOrigin: 'bottom' }}
                />
                <div className="bar-tag">Monthly income</div>
              </div>
            </div>

            <motion.div
              className="gap-annotation"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.45, ease }}
            >
              <svg viewBox="0 0 48 30" fill="none" aria-hidden="true">
                <motion.path
                  d="M2 28C15 5 35 2 46 4"
                  stroke="#FF6B35"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.55, duration: 0.65, ease: 'easeOut' }}
                />
                <motion.path
                  d="M40 1L46 4L41 9"
                  stroke="#FF6B35"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.1, duration: 0.3, ease }}
                />
              </svg>
              that gap is the job
            </motion.div>

            <div className="gap-card-foot">
              Most of the creators we talk to are sitting on{' '}
              <strong>5–10x</strong> their current income, already, in the audience they
              have today.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
