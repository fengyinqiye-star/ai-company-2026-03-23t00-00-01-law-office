'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { mainNavigation } from '@/data/navigation';
import { officeInfo } from '@/data/officeInfo';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
        }`}
      >
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-serif text-navy text-lg lg:text-xl font-bold whitespace-nowrap"
            >
              山田・鈴木法律事務所
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="メインナビゲーション">
              {mainNavigation
                .filter((item) => item.href !== '/contact')
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-gray-700 hover:text-navy transition-colors font-sans"
                  >
                    {item.label}
                  </Link>
                ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${officeInfo.phone.replace(/-/g, '')}`}
                className="text-sm text-navy font-semibold font-sans"
              >
                <span className="text-xs text-gray-500 block">お電話でのご相談</span>
                {officeInfo.phone}
                <span className="text-xs text-gray-400 block">{officeInfo.businessHours.weekdays}</span>
              </a>
              <Button href="/contact" variant="cta" size="sm">
                無料相談はこちら
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="メニューを開く"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
