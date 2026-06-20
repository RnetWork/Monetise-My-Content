'use client';

import { useEffect } from 'react';

const SELECTORS = [
  '.section-head',
  '.problem-card',
  '.how-row',
  '.fit-card',
  '.price-card',
  '.founder-grid',
  '.blog-card',
  '.value-card',
  '.contact-card',
  '.contact-info',
  '.post-hero h1',
  '.about-hero h1',
  '.blog-hero h1',
  '.contact-hero h1',
].join(', ');

export default function ScrollAnimations() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS));
    els.forEach((el) => el.classList.add('will-animate'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
