import Button from '@/components/ui/Button';
import { officeInfo } from '@/data/officeInfo';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white py-20 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold font-serif text-sm lg:text-base tracking-widest mb-4">
          山田・鈴木法律事務所
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          あなたの権利を、
          <br className="sm:hidden" />
          誠実に守る。
        </h1>
        <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto mb-8">
          労働問題・離婚・相続・企業法務に強い弁護士が、
          <br className="hidden sm:block" />
          初回無料相談であなたの悩みに寄り添います。
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10">
          <div>
            <p className="font-serif text-2xl lg:text-3xl font-bold text-gold">
              1,000
              <span className="text-base">件+</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">相談実績</p>
          </div>
          <div>
            <p className="font-serif text-2xl lg:text-3xl font-bold text-gold">
              18<span className="text-base">年</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">弁護士歴</p>
          </div>
          <div>
            <p className="font-serif text-2xl lg:text-3xl font-bold text-gold">
              初回
            </p>
            <p className="text-xs text-gray-400 mt-1">相談無料</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="cta" size="lg">
            無料相談を申し込む
          </Button>
          <a
            href={`tel:${officeInfo.phone.replace(/-/g, '')}`}
            className="flex items-center gap-2 text-white hover:text-gold transition-colors"
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
            <span className="font-semibold">{officeInfo.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
