import type { Variants } from 'framer-motion';

export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 60, damping: 14, duration: 0.7 },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 60, damping: 14, duration: 0.7 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const cardItem: Variants = {
  hidden: { opacity: 0, y: 24, rotate: 0.4 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.55, ease },
  },
};

export const rowItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
};

export const viewport = { once: true, margin: '-48px' } as const;
