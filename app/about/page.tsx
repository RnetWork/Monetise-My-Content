import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story behind Monetize My Content — built by a creator, for creators who are done leaving money on the table.',
};

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <div className="about-hero">
        <div className="wrap">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Our story
          </span>
          <h1>
            Built by someone who watched creators get short-changed for too long.
          </h1>
          <p className="about-hero lede">
            Monetize My Content started from a simple, frustrating observation: the gap
            between an engaged audience and real income isn&apos;t a talent problem —
            it&apos;s an infrastructure problem.
          </p>
        </div>
      </div>

      {/* STORY */}
      <section className="story-section">
        <div className="wrap">
          <div className="story-grid">
            {/*
              TODO: Replace with a real photo (founder, team, or office).
              Use next/image:
                import Image from 'next/image';
                <Image src="/about-photo.jpg" alt="[description]" width={560} height={700}
                  style={{ borderRadius: '20px', objectFit: 'cover', width: '100%', height: 'auto' }} />
            */}
            <div className="story-photo">[ photo — replace before launch ]</div>
            <div className="story-body">
              <h2>The problem we kept seeing</h2>
              <p>
                There are tens of thousands of creators out there — in every niche, on
                every platform — with 10K, 30K, 50K real followers who trust them
                completely. And most of them are making almost nothing from those
                audiences.
              </p>
              <p>
                It&apos;s not because they&apos;re bad at content. It&apos;s because
                nobody ever built the revenue infrastructure for them. The agents and
                agencies only call when you&apos;ve already crossed a million followers.
                Everyone else gets handed a course template and a &ldquo;good luck.&rdquo;
              </p>
              <p>
                We decided to be the team that fills that gap. We work as your revenue
                partner — not a consultant, not a coach — actually operating the business
                side of your creator career so you don&apos;t have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">How we work</span>
            <h2>Three things we believe in</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-num">01</span>
              <h3>Creator-first, always</h3>
              <p>
                Your audience trusts you, not us. We stay invisible. We never push
                strategies that compromise how your community sees you — we build around
                what&apos;s already working.
              </p>
            </div>
            <div className="value-card">
              <span className="value-num">02</span>
              <h3>Skin in the game</h3>
              <p>
                We only get paid when you earn. That means our incentives are perfectly
                aligned — we&apos;re not selling you a retainer, we&apos;re building a
                business with you.
              </p>
            </div>
            <div className="value-card">
              <span className="value-num">03</span>
              <h3>No generic playbooks</h3>
              <p>
                Every creator&apos;s audience is different. What works for a fitness
                creator in the US won&apos;t work for a finance creator in the UK. We
                build custom plans, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER NOTE — expanded */}
      <section className="about-founder">
        <div className="wrap">
          <div className="founder-grid">
            {/*
              TODO: Replace with real founder photo using next/image.
              import Image from 'next/image';
              <Image src="/founder.jpg" alt="[Founder name]" width={480} height={480}
                style={{ borderRadius: '18px', objectFit: 'cover', width: '100%', height: 'auto', aspectRatio: '1' }} />
            */}
            <div className="founder-photo">[ founder photo — replace before launch ]</div>
            <div className="founder-text">
              {/* TODO: Replace with real founder quote */}
              <p className="quote">
                &ldquo;I started this because I kept watching talented creators with
                real, loyal audiences make almost nothing — while creators with a
                fraction of their reach were getting paid. The gap was never talent. It
                was that nobody was running the business side for them.&rdquo;
              </p>
              {/* TODO: Replace name, role, and bio */}
              <div className="founder-name">Add your name here</div>
              <div className="founder-role">Founder, Monetize My Content</div>
              <p className="about-bio">
                [TODO: 2–3 sentences about your background — where you came from, what
                you built before this, why creators specifically. Keep it personal and
                specific; this is where readers decide if they trust you.]
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
