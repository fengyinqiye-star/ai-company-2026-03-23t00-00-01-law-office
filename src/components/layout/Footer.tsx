import Link from 'next/link';
import { mainNavigation } from '@/data/navigation';
import { officeInfo } from '@/data/officeInfo';
import Container from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Office Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">
              {officeInfo.name}
            </h3>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>
                〒{officeInfo.address.postalCode}
                <br />
                {officeInfo.address.full}
              </p>
              <p>
                TEL:{' '}
                <a
                  href={`tel:${officeInfo.phone.replace(/-/g, '')}`}
                  className="hover:text-gold transition-colors"
                >
                  {officeInfo.phone}
                </a>
              </p>
              <p>FAX: {officeInfo.fax}</p>
            </address>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">営業時間</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>{officeInfo.businessHours.weekdays}</p>
              <p>{officeInfo.businessHours.saturday}</p>
              <p>定休日: {officeInfo.businessHours.closed}</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">サイトマップ</h3>
            <nav aria-label="フッターナビゲーション">
              <ul className="text-sm text-gray-300 space-y-2">
                {mainNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright & Privacy Policy */}
        <div className="mt-10 pt-6 border-t border-white/20 text-center text-xs text-gray-400">
          <p className="mb-2">
            <Link
              href="/privacy-policy"
              className="hover:text-gold transition-colors"
            >
              プライバシーポリシー
            </Link>
          </p>
          <p>&copy; {new Date().getFullYear()} {officeInfo.name} All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
