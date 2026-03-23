import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { officeInfo } from '@/data/officeInfo';

type CtaSectionProps = {
  variant?: 'default' | 'compact';
};

export default function CtaSection({ variant = 'default' }: CtaSectionProps) {
  if (variant === 'compact') {
    return (
      <section className="py-10 bg-navy text-white">
        <Container className="text-center">
          <p className="font-serif text-lg mb-4">
            まずは無料相談から
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="cta" size="md">
              無料相談を申し込む
            </Button>
            <a
              href={`tel:${officeInfo.phone.replace(/-/g, '')}`}
              className="text-white hover:text-gold transition-colors font-semibold"
            >
              {officeInfo.phone}
            </a>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-navy-dark to-navy text-white">
      <Container className="text-center">
        <h2 className="font-serif text-h2 mb-4">
          まずはお気軽にご相談ください
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          初回相談は無料です。お電話またはフォームから、
          まずはお悩みをお聞かせください。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
          <Button href="/contact" variant="cta" size="lg">
            無料相談を申し込む
          </Button>
          <div>
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
              <span className="text-xl font-bold">{officeInfo.phone}</span>
            </a>
            <p className="text-xs text-gray-400 mt-1">
              {officeInfo.businessHours.weekdays}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
