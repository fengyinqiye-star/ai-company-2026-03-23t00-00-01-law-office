import Card from '@/components/ui/Card';

type PracticeAreaCardProps = {
  slug: string;
  title: string;
  description: string;
};

export default function PracticeAreaCard({
  slug,
  title,
  description,
}: PracticeAreaCardProps) {
  return (
    <Card href={`/practice-areas/${slug}`} hoverable>
      <div className="p-6">
        <h3 className="font-serif text-lg font-bold text-navy mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        <span className="inline-block mt-4 text-sm text-cta font-semibold">
          詳しく見る →
        </span>
      </div>
    </Card>
  );
}
