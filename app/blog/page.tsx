import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical thinking on creator monetization, audience trust, and building real income as a mid-tier creator.',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <main>
      <div className="blog-hero">
        <div className="wrap">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            From the team
          </span>
          <h1>The creator revenue blog</h1>
          <p>
            Practical thinking on monetization, audience trust, and building real income
            as a mid-tier creator.
          </p>
        </div>
      </div>

      <div className="wrap">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-meta">
                <span className="blog-card-cat">{post.category}</span>
                <span className="blog-card-date">{formatDate(post.date)}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="blog-card-footer">
                <span className="blog-card-read">{post.readTime}</span>
                <span className="blog-card-link">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
