import { MDXRemote } from 'next-mdx-remote/rsc';

type BlogContentProps = {
  content: string;
};

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-lg prose-navy max-w-none font-sans">
      <MDXRemote source={content} />
    </div>
  );
}
