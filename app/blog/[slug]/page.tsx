import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPost } from '@/lib/blog-posts';
import CTASection from '@/components/CTASection';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main>
      <div className="wrap">
        <div className="post-hero">
          <Link href="/blog" className="back-link">← Back to blog</Link>
          <div className="blog-card-meta" style={{ marginBottom: '20px' }}>
            <span className="blog-card-cat">{post.category}</span>
            <span className="blog-card-date">{formatDate(post.date)}</span>
            <span className="blog-card-read">{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
        </div>

        <div className="post-body">
          {/* TODO: Replace this placeholder with the full article body before going live */}
          <div className="post-placeholder">
            <p style={{ marginBottom: '12px', fontStyle: 'normal', fontWeight: 600 }}>
              [ Post placeholder — add real content before launch ]
            </p>
            <p>{post.excerpt}</p>
          </div>
        </div>
      </div>

      <CTASection />
    </main>
  );
}
