import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BlogContent from '@/components/blog/BlogContent';
import ShareButtons from '@/components/blog/ShareButtons';
import BlogCard from '@/components/blog/BlogCard';
import Badge from '@/components/ui/Badge';
import JsonLd from '@/components/seo/JsonLd';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import { siteMetadata } from '@/data/siteMetadata';
import { lawyers } from '@/data/lawyers';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

const categoryLabels: Record<string, string> = {
  labor: '労働問題',
  divorce: '離婚問題',
  inheritance: '相続問題',
  corporate: '企業法務',
};

const categoryColors: Record<string, 'labor' | 'divorce' | 'inheritance' | 'corporate'> = {
  labor: 'labor',
  divorce: 'divorce',
  inheritance: 'inheritance',
  corporate: 'corporate',
};

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(params.slug, 3);
  const author = lawyers.find((l) => l.id === post.author);
  const pageUrl = `${siteMetadata.siteUrl}/blog/${post.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: author?.name || siteMetadata.siteName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.siteName,
    },
    description: post.excerpt,
    url: pageUrl,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumb
        items={[
          { label: 'ブログ・コラム', href: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="py-16 lg:py-24">
        <Container className="max-w-3xl">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant={categoryColors[post.category] || 'default'}>
                {categoryLabels[post.category] || post.category}
              </Badge>
              <time className="text-sm text-gray-400">{post.date}</time>
            </div>
            <h1 className="font-serif text-2xl lg:text-3xl font-bold text-navy mb-4">
              {post.title}
            </h1>
            {author && (
              <p className="text-sm text-gray-500">
                執筆: {author.name}（{author.title}）
              </p>
            )}
          </div>

          {/* Content */}
          <BlogContent content={post.content} />

          {/* Share & author */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <ShareButtons url={pageUrl} title={post.title} />
            {author && (
              <p className="text-xs text-gray-400">
                {author.name} / {author.title}
              </p>
            )}
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="font-serif text-h3 text-navy mb-6">関連記事</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((p) => (
                  <BlogCard key={p.slug} {...p} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </article>
    </>
  );
}
