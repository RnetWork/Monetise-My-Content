export default function FounderNote() {
  return (
    <section>
      <div className="wrap">
        <div className="founder-grid">
          {/*
            TODO: Replace this gradient placeholder with the founder photo.
            Use next/image:
              import Image from 'next/image';
              <Image src="/founder.jpg" alt="[Founder name]" width={480} height={480} style={{ borderRadius: '18px', objectFit: 'cover' }} />
          */}
          <div className="founder-photo">[ founder photo — replace before launch ]</div>

          <div className="founder-text">
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
          </div>
        </div>
      </div>
    </section>
  );
}
