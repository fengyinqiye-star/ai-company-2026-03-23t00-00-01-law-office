'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { mainNavigation } from '@/data/navigation';
import { officeInfo } from '@/data/officeInfo';
import Button from '@/components/ui/Button';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl overflow-y-auto">
        <div className="p-6">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={onClose}
              aria-label="メニューを閉じる"
              className="p-2 text-gray-500 hover:text-navy"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-1" aria-label="モバイルナビゲーション">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block py-3 px-4 text-base text-gray-700 hover:bg-gray-50 hover:text-navy rounded-lg transition-colors font-sans"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <a
              href={`tel:${officeInfo.phone.replace(/-/g, '')}`}
              className="flex items-center gap-3 py-3 px-4 text-navy font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {officeInfo.phone}
            </a>
            <p className="text-xs text-gray-500 px-4">
              {officeInfo.businessHours.weekdays}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Button href="/contact" variant="cta" fullWidth onClick={onClose}>
              無料相談はこちら
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
