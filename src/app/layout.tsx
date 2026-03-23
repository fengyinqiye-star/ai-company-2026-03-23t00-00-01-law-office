import type { Metadata } from 'next';
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileFixedBar from '@/components/layout/MobileFixedBar';
import CtaSection from '@/components/sections/CtaSection';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { siteMetadata } from '@/data/siteMetadata';
import './globals.css';

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${siteMetadata.siteName} | 東京の弁護士事務所`,
    template: `%s | ${siteMetadata.siteName}`,
  },
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.siteUrl),
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale,
    siteName: siteMetadata.siteName,
    title: siteMetadata.siteName,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <CtaSection />
        <Footer />
        <MobileFixedBar />
        <ScrollToTop />
        {/* Bottom padding for mobile fixed bar */}
        <div className="h-14 lg:hidden" />
      </body>
    </html>
  );
}
