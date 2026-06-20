export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  category: string;
};

// TODO: Replace placeholder posts with real content before launch.
export const blogPosts: BlogPost[] = [
  {
    slug: 'why-engagement-beats-follower-count',
    title: 'Why Engagement Rate Beats Follower Count Every Time',
    date: '2026-06-10',
    excerpt:
      "Brands and revenue partners care less about how many followers you have than how many of them actually respond. Here's what to focus on instead.",
    readTime: '5 min read',
    category: 'Strategy',
  },
  {
    slug: 'five-revenue-streams-mid-tier-creators',
    title: '5 Revenue Streams Mid-Tier Creators Are Sleeping On',
    date: '2026-05-28',
    excerpt:
      "You don't need a million followers to earn real income. These five streams are underused by creators with 5K–100K audiences — and they work.",
    readTime: '7 min read',
    category: 'Revenue',
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
