import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ProcessSteps from '@/components/practice-areas/ProcessSteps';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/seo/JsonLd';
import { practiceAreas } from '@/data/practiceAreas';
import { siteMetadata } from '@/data/siteMetadata';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const area = practiceAreas.find((a) => a.slug === params.slug);
  if (!area) return {};

  return {
    title: `${area.title} | 取扱業務`,
    description: area.fullDescription.slice(0, 120),
    alternates: {
      canonical: `/practice-areas/${area.slug}`,
    },
  };
}

export default function PracticeAreaDetailPage({ params }: Props) {
  const area = practiceAreas.find((a) => a.slug === params.slug);
  if (!area) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `${area.title} - ${siteMetadata.siteName}`,
    description: area.fullDescription,
    url: `${siteMetadata.siteUrl}/practice-areas/${area.slug}`,
    provider: {
      '@type': 'LegalService',
      name: siteMetadata.siteName,
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumb
        items={[
          { label: '取扱業務', href: '/practice-areas' },
          { label: area.title },
        ]}
      />

      <section className="py-16 lg:py-24">
        <Container className="max-w-3xl">
          <h1 className="font-serif text-h1 text-navy mb-6">{area.title}</h1>
          <p className="text-gray-600 leading-relaxed mb-10">
            {area.fullDescription}
          </p>

          {/* Common cases */}
          <div className="mb-12">
            <h2 className="font-serif text-h3 text-navy mb-4">
              よくあるご相談
            </h2>
            <ul className="space-y-3">
              {area.commonCases.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy/10 text-navy text-xs flex items-center justify-center font-semibold mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h2 className="font-serif text-h3 text-navy mb-6">
              解決までの流れ
            </h2>
            <ProcessSteps steps={area.process} />
          </div>

          {/* Fee guide */}
          <div className="mb-12 p-6 bg-gray-50 rounded-xl">
            <h2 className="font-serif text-h3 text-navy mb-3">費用の目安</h2>
            <p className="text-gray-600 mb-3">{area.feeGuide}</p>
            <Button href="/fees" variant="outline" size="sm">
              料金案内を詳しく見る
            </Button>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button href="/contact" variant="cta" size="lg">
              無料相談を申し込む
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
