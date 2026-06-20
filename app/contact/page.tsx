import type { Metadata } from 'next';
import Link from 'next/link';
import { BOOKING_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a free 30-minute creator audit, or get in touch with the Monetize My Content team.',
};

export default function ContactPage() {
  return (
    <main>
      <div className="contact-hero">
        <div className="wrap">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Get in touch
          </span>
          <h1>Let&apos;s talk about your audience.</h1>
          <p>
            The fastest way to find out if we&apos;re a fit is the free audit call.
            No pitch, no pressure — we&apos;ll just look at the numbers together.
          </p>
        </div>
      </div>

      <div className="contact-body">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>What to expect</h3>
              <p>
                On the free 30-minute audit we&apos;ll dig into your audience data, your
                current income, and your content — then walk you through exactly where
                the revenue gaps are and whether we can close them.
              </p>
              <p>
                No decks, no proposals, no sales pressure. If it&apos;s not the right
                fit, we&apos;ll tell you.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">📅</div>
                  <div>
                    <strong>Free 30-min audit</strong>
                    <span>Pick a slot and we&apos;ll come prepared</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">✉️</div>
                  <div>
                    {/* TODO: Replace with real email address */}
                    <strong>hello@monetizemycontent.com</strong>
                    <span>For anything that&apos;s not a booking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <h3>Book your free audit</h3>
              <p>
                Pick a time that works for you and we&apos;ll come prepared with your
                numbers.
              </p>
              {/*
                TODO: Replace this button with a Calendly embed or booking widget.
                Set BOOKING_URL in lib/config.ts to your Calendly / Cal.com / booking URL.
              */}
              <Link href={BOOKING_URL} className="btn-primary">
                Book a free call →
              </Link>
              <p className="booking-note">
                Booking placeholder — set <code>BOOKING_URL</code> in{' '}
                <code>lib/config.ts</code> before going live. You can also embed a
                Calendly widget directly in this card.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
