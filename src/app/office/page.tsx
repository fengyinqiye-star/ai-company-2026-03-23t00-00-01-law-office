import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Breadcrumb from '@/components/layout/Breadcrumb';
import OfficeInfoTable from '@/components/office/OfficeInfoTable';
import AccessMap from '@/components/office/AccessMap';
import JsonLd from '@/components/seo/JsonLd';
import { officeInfo } from '@/data/officeInfo';
import { siteMetadata } from '@/data/siteMetadata';

export const metadata: Metadata = {
  title: '事務所概要・アクセス',
  description:
    '山田・鈴木法律事務所の事務所概要とアクセス情報。東京駅丸の内南口から徒歩3分。',
};

export default function OfficePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteMetadata.siteUrl,
    name: officeInfo.name,
    telephone: officeInfo.phone,
    faxNumber: officeInfo.fax,
    email: officeInfo.email,
    address: {
      '@type': 'PostalAddress',
      postalCode: officeInfo.address.postalCode,
      addressLocality: '東京都千代田区',
      addressRegion: '東京都',
      addressCountry: 'JP',
      streetAddress: officeInfo.address.full,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00',
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumb items={[{ label: '事務所概要・アクセス' }]} />

      <section className="py-16 lg:py-24">
        <Container className="max-w-4xl">
          <SectionTitle title="事務所概要・アクセス" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office info */}
            <div>
              <h2 className="font-serif text-h3 text-navy mb-6">事務所情報</h2>
              <OfficeInfoTable />
            </div>

            {/* Map & Access */}
            <div>
              <h2 className="font-serif text-h3 text-navy mb-6">
                アクセスマップ
              </h2>
              <AccessMap />
            </div>
          </div>

          {/* Office photos placeholder */}
          <div className="mt-12">
            <h2 className="font-serif text-h3 text-navy mb-6">事務所の様子</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">事務所外観</span>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">相談室</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
