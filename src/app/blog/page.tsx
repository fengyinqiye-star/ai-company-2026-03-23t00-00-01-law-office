import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Breadcrumb from '@/components/layout/Breadcrumb';
import BlogCard from '@/components/blog/BlogCard';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'ブログ・コラム',
  description:
    '山田・鈴木法律事務所のブログ・コラム。労働問題、離婚、相続、企業法務に関するお役立ち情報をお届けします。',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Breadcrumb items={[{ label: 'ブログ・コラム' }]} />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionTitle
            title="ブログ・コラム"
            subtitle="法律に関するお役立ち情報をお届けします"
          />

          {posts.length === 0 ? (
            <p className="text-center text-gray-500">
              記事はまだありません。
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
