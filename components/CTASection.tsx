'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, viewport, ease } from '@/lib/motion';
import { BOOKING_URL } from '@/lib/config';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-14, 14]);

  return (
    <section ref={ref} style={{ position: 'relative' }}>
      <motion.div
        className="cta"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={{
          hidden: { opacity: 0, y: 40, scale: 0.97 },
          show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease, staggerChildren: 0.12 },
          },
        }}
      >
        {/* Parallax gradient overlay */}
        <motion.div
          className="cta-parallax"
          style={{ y: bgY }}
          aria-hidden="true"
        />

        <motion.h2
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
        >
          Let&apos;s find your hidden revenue.
        </motion.h2>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
        >
          Book a free 30-minute audit. We&apos;ll look at your audience, your content,
          and your current income — and show you exactly where the gaps are.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97, y: 1 }}
          transition={{ type: 'spring', stiffness: 360, damping: 22 }}
          style={{ display: 'inline-flex' }}
        >
          <Link href={BOOKING_URL} className="btn-primary">
            Book my free audit →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
