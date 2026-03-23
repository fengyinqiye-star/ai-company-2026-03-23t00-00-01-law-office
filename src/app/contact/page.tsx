import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ContactForm from '@/components/contact/ContactForm';
import { officeInfo } from '@/data/officeInfo';

export const metadata: Metadata = {
  title: '無料相談のお申し込み',
  description:
    '山田・鈴木法律事務所への無料相談のお申し込みフォーム。労働問題、離婚、相続、企業法務のご相談を受け付けています。',
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '無料相談のお申し込み' }]} />

      <section className="py-16 lg:py-24">
        <Container className="max-w-2xl">
          <SectionTitle
            title="無料相談のお申し込み"
            subtitle="以下のフォームにご記入の上、送信してください"
          />

          <div className="mb-8 p-4 bg-navy/5 rounded-lg text-sm text-gray-700">
            <p className="mb-2">
              <span className="font-semibold text-navy">お電話でのご相談:</span>{' '}
              <a
                href={`tel:${officeInfo.phone.replace(/-/g, '')}`}
                className="text-cta font-bold hover:underline"
              >
                {officeInfo.phone}
              </a>
            </p>
            <p className="text-xs text-gray-500">
              {officeInfo.businessHours.weekdays} /{' '}
              {officeInfo.businessHours.saturday}
            </p>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
