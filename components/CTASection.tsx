import Link from 'next/link';
import { BOOKING_URL } from '@/lib/config';

export default function CTASection() {
  return (
    <section>
      <div className="cta">
        <h2>Let&apos;s find your hidden revenue.</h2>
        <p>
          Book a free 30-minute audit. We&apos;ll look at your audience, your content,
          and your current income — and show you exactly where the gaps are.
        </p>
        <Link href={BOOKING_URL} className="btn-primary">
          Book my free audit →
        </Link>
      </div>
    </section>
  );
}
