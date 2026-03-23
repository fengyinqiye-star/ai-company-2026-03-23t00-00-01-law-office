import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import BlogCard from '@/components/blog/BlogCard';
import Button from '@/components/ui/Button';
import { getLatestPosts } from '@/lib/blog';

export default function LatestBlogSection() {
  const posts = getLatestPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <Container>
        <SectionTitle
          title="ブログ・コラム"
          subtitle="法律に関するお役立ち情報をお届けします"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button href="/blog" variant="outline">
            記事一覧を見る
          </Button>
        </div>
      </Container>
    </section>
  );
}
