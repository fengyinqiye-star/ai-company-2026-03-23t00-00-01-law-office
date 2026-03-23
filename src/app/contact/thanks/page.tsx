import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Button from '@/components/ui/Button';
import { officeInfo } from '@/data/officeInfo';

export const metadata: Metadata = {
  title: '送信完了',
  description: '無料相談のお申し込みを受け付けました。',
};

export default function ThanksPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: '無料相談のお申し込み', href: '/contact' },
          { label: '送信完了' },
        ]}
      />

      <section className="py-20 lg:py-32">
        <Container className="max-w-lg text-center">
          {/* Check icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="font-serif text-h2 text-navy mb-4">
            お問い合わせを受け付けました
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            無料相談のお申し込みありがとうございます。
            <br />
            内容を確認の上、<span className="font-semibold text-navy">3営業日以内</span>にご連絡させていただきます。
          </p>

          <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-600 mb-8">
            <p>
              お急ぎの場合はお電話でもお問い合わせいただけます。
            </p>
            <a
              href={`tel:${officeInfo.phone.replace(/-/g, '')}`}
              className="text-navy font-bold text-lg mt-2 inline-block hover:text-cta transition-colors"
            >
              {officeInfo.phone}
            </a>
            <p className="text-xs text-gray-400 mt-1">
              {officeInfo.businessHours.weekdays}
            </p>
          </div>

          <Button href="/" variant="outline">
            トップページへ戻る
          </Button>
        </Container>
      </section>
    </>
  );
}
