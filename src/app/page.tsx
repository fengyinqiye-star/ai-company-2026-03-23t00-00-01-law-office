import HeroSection from '@/components/sections/HeroSection';
import StrengthsSection from '@/components/sections/StrengthsSection';
import PracticeAreasSection from '@/components/sections/PracticeAreasSection';
import LawyersPreview from '@/components/sections/LawyersPreview';
import LatestBlogSection from '@/components/sections/LatestBlogSection';
import JsonLd from '@/components/seo/JsonLd';
import { siteMetadata } from '@/data/siteMetadata';
import { officeInfo } from '@/data/officeInfo';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: officeInfo.name,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    telephone: officeInfo.phone,
    address: {
      '@type': 'PostalAddress',
      postalCode: officeInfo.address.postalCode,
      addressLocality: '東京都千代田区',
      addressRegion: '東京都',
      addressCountry: 'JP',
      streetAddress: officeInfo.address.full,
    },
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa 10:00-15:00'],
    priceRange: '$$',
    image: `${siteMetadata.siteUrl}${siteMetadata.ogImage}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <HeroSection />
      <StrengthsSection />
      <PracticeAreasSection />
      <LawyersPreview />
      <LatestBlogSection />
    </>
  );
}
