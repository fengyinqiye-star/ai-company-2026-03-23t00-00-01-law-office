import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Breadcrumb from '@/components/layout/Breadcrumb';
import FeeTable from '@/components/fees/FeeTable';
import Button from '@/components/ui/Button';
import { feeCategories, paymentInfo } from '@/data/fees';

export const metadata: Metadata = {
  title: '料金案内',
  description:
    '山田・鈴木法律事務所の料金案内。初回相談無料。労働問題、離婚、相続、企業法務の費用目安をご確認いただけます。',
};

export default function FeesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '料金案内' }]} />

      <section className="py-16 lg:py-24">
        <Container className="max-w-4xl">
          <SectionTitle
            title="料金案内"
            subtitle="明確な料金体系で、安心してご相談いただけます"
          />

          {/* Fee structure explanation */}
          <div className="mb-12 p-6 bg-navy/5 rounded-xl">
            <h2 className="font-serif text-h3 text-navy mb-4">
              料金体系について
            </h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-semibold text-navy">相談料:</span>{' '}
                初回のご相談は<span className="text-cta font-bold">無料</span>です。
                2回目以降は30分あたり5,000円（税別）となります。
              </p>
              <p>
                <span className="font-semibold text-navy">着手金:</span>{' '}
                ご依頼時にお支払いいただく費用です。事件の複雑さや請求金額により異なります。
              </p>
              <p>
                <span className="font-semibold text-navy">報酬金:</span>{' '}
                事件が成功した場合にお支払いいただく費用です。獲得した経済的利益に応じて算定します。
              </p>
            </div>
          </div>

          {/* Fee tables */}
          <FeeTable categories={feeCategories} />

          {/* Notes */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500">
              ※ 上記金額はすべて税別の目安です。具体的な費用はご相談内容により異なりますので、
              まずは無料相談にてお見積りをお出しいたします。
            </p>
            <p className="text-xs text-gray-500 mt-2">
              ※ 実費（裁判所に納める印紙代、郵便切手代、交通費等）は別途ご負担いただきます。
            </p>
          </div>

          {/* Payment info */}
          <div className="mt-8">
            <h2 className="font-serif text-h3 text-navy mb-4">
              お支払い方法
            </h2>
            <p className="text-sm text-gray-700 mb-2">
              お支払い方法: {paymentInfo.methods.join('、')}
            </p>
            <p className="text-sm text-gray-700">{paymentInfo.installment}</p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              料金についてご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <Button href="/contact" variant="cta" size="lg">
              無料相談を申し込む
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
