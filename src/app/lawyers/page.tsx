import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Breadcrumb from '@/components/layout/Breadcrumb';
import LawyerProfile from '@/components/lawyers/LawyerProfile';
import JsonLd from '@/components/seo/JsonLd';
import { lawyers } from '@/data/lawyers';
import { siteMetadata } from '@/data/siteMetadata';

export const metadata: Metadata = {
  title: '弁護士紹介',
  description:
    '山田・鈴木法律事務所の弁護士紹介。代表弁護士 山田誠一、パートナー弁護士 鈴木美咲の経歴・得意分野をご紹介します。',
};

export default function LawyersPage() {
  const jsonLdItems = lawyers.map((lawyer) => ({
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: lawyer.name,
    jobTitle: lawyer.title,
    worksFor: {
      '@type': 'LegalService',
      name: siteMetadata.siteName,
    },
    description: lawyer.message,
    knowsAbout: lawyer.specialties,
  }));

  return (
    <>
      {jsonLdItems.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
      <Breadcrumb items={[{ label: '弁護士紹介' }]} />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionTitle
            title="弁護士紹介"
            subtitle="経験豊富な2名の弁護士が、あなたの問題解決をサポートします"
          />

          <div className="space-y-8 max-w-4xl mx-auto">
            {lawyers.map((lawyer) => (
              <LawyerProfile key={lawyer.id} {...lawyer} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
