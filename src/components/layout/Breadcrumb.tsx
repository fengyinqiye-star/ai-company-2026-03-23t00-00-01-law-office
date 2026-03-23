import Link from 'next/link';
import { BreadcrumbItem } from '@/types';
import JsonLd from '@/components/seo/JsonLd';

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [{ label: 'ホーム', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: item.href } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="パンくずリスト" className="bg-gray-50 py-3">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            {allItems.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">/</span>}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-navy transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-800 font-medium" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
