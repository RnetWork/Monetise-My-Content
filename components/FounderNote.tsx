'use client';

import { motion } from 'framer-motion';
import { slideLeft, slideRight, viewport } from '@/lib/motion';

export default function FounderNote() {
  return (
    <section>
      <div className="wrap">
        <motion.div
          className="founder-grid"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={{
            hidden: { opacity: 0, y: 32 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.15 },
            },
          }}
          whileHover={{
            boxShadow: '0 20px 52px -16px rgba(26,20,16,0.13)',
            transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {/*
            TODO: Replace this gradient placeholder with the founder photo.
            Use next/image:
              import Image from 'next/image';
              <Image src="/founder.jpg" alt="[Founder name]" width={480} height={480} style={{ borderRadius: '18px', objectFit: 'cover' }} />
          */}
          <motion.div className="founder-photo" variants={slideLeft}>
            [ founder photo — replace before launch ]
          </motion.div>

          <motion.div className="founder-text" variants={slideRight}>
            {/* TODO: Replace with the real founder quote */}
            <p className="quote">
              &ldquo;I started this because I kept watching talented creators with real,
              loyal audiences make almost nothing — while creators with a fraction of
              their reach were getting paid. The gap was never talent. It was that
              nobody was running the business side for them.&rdquo;
            </p>
            {/* TODO: Replace with real founder name */}
            <div className="founder-name">Add your name here</div>
            <div className="founder-role">Founder, Monetize My Content</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
