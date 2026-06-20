'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BOOKING_URL } from '@/lib/config';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark" />
          Monetize My Content
        </Link>

        <div className={`nav-links${open ? ' nav-links--open' : ''}`}>
          <Link href="/#how" onClick={() => setOpen(false)}>How it works</Link>
          <Link href="/#fit" onClick={() => setOpen(false)}>Is this you</Link>
          <Link href="/#pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/#faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
        </div>

        <Link href={BOOKING_URL} className="nav-cta">Get your free audit</Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  );
}
