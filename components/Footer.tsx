import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="logo-mark" />
              Monetize My Content
            </Link>
            <p>The revenue team behind creators who&apos;d rather create than chase brand deals.</p>
          </div>

          <div>
            <h4>Site</h4>
            <ul>
              <li><Link href="/#how">How it works</Link></li>
              <li><Link href="/#fit">Is this you</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Follow</h4>
            <ul>
              {/* TODO: Replace # with real social profile URLs */}
              <li><a href="#">Instagram</a></li>
              <li><a href="#">TikTok</a></li>
              <li><a href="#">X / Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Monetize My Content. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
