import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/seo/JsonLd';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { faqItems } from '@/data/faqItems';

export const metadata: Metadata = {
  title: 'よくある質問',
  description:
    '山田・鈴木法律事務所に寄せられるよくある質問。費用、手続き、相談の流れなどについてお答えします。初回相談無料。',
};

export default function FaqPage() {
  // FAQPage structured data
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Breadcrumb items={[{ label: 'よくある質問' }]} />

      <section className="py-16 lg:py-24">
        <Container className="max-w-4xl">
          <SectionTitle
            title="よくある質問"
            subtitle="お問い合わせの前に、こちらもご確認ください"
          />

          <FaqAccordion items={faqItems} />

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              上記以外のご質問も、お気軽にお問い合わせください。
            </p>
            <Button href="/contact" variant="cta" size="lg">
              無料相談を申し込む
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
