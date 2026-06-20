import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <div className="not-found">
        <span className="section-eyebrow">404</span>
        <h1>Page not found</h1>
        <p>This page doesn&apos;t exist — or it moved somewhere else.</p>
        <Link href="/" className="btn-primary" style={{ marginTop: '8px' }}>
          Back home →
        </Link>
      </div>
    </main>
  );
}
