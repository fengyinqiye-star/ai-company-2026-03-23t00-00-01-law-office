import Link from 'next/link';
import Badge from '@/components/ui/Badge';

type BlogCardProps = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  thumbnail?: string;
};

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

export default function BlogCard({
  slug,
  title,
  date,
  category,
  excerpt,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Thumbnail placeholder */}
      <div className="h-40 bg-gradient-to-br from-navy/10 to-navy/5 flex items-center justify-center">
        <span className="text-navy/30 font-serif text-4xl">
          {categoryLabels[category]?.[0] || '?'}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant={categoryColors[category] || 'default'}>
            {categoryLabels[category] || category}
          </Badge>
          <time className="text-xs text-gray-400">{date}</time>
        </div>
        <h3 className="font-serif text-base font-bold text-navy mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  );
}
