import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { officeInfo } from '@/data/officeInfo';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description:
    '山田・鈴木法律事務所のプライバシーポリシー。個人情報の取扱方針、利用目的、第三者提供、開示請求について。',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'プライバシーポリシー' }]} />

      <section className="py-16 lg:py-24">
        <Container className="max-w-4xl">
          <SectionTitle
            title="プライバシーポリシー"
            subtitle="個人情報の取扱いに関する方針"
          />

          <div className="space-y-10 text-sm text-gray-700 leading-relaxed">
            {/* 1. 基本方針 */}
            <div>
              <h2 className="font-serif text-h4 text-navy mb-4">
                1. 基本方針
              </h2>
              <p>
                {officeInfo.name}（以下「当事務所」といいます。）は、個人情報の重要性を認識し、
                個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の関連法令を遵守するとともに、
                以下のプライバシーポリシー（以下「本ポリシー」といいます。）に従い、
                適切に個人情報の保護に努めます。
              </p>
            </div>

            {/* 2. 取得する個人情報 */}
            <div>
              <h2 className="font-serif text-h4 text-navy mb-4">
                2. 取得する個人情報
              </h2>
              <p className="mb-3">
                当事務所は、以下の個人情報を取得することがあります。
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>氏名、フリガナ</li>
                <li>電話番号</li>
                <li>メールアドレス</li>
                <li>ご相談内容</li>
                <li>その他、ご相談・ご依頼に際して提供いただく情報</li>
              </ul>
            </div>

            {/* 3. 利用目的 */}
            <div>
              <h2 className="font-serif text-h4 text-navy mb-4">
                3. 個人情報の利用目的
              </h2>
              <p className="mb-3">
                当事務所は、取得した個人情報を以下の目的で利用いたします。
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>法律相談の対応およびご回答のため</li>
                <li>ご依頼いただいた業務の遂行のため</li>
                <li>ご連絡・ご案内のため</li>
                <li>当事務所のサービス向上のため</li>
                <li>法令に基づく対応のため</li>
              </ul>
            </div>

            {/* 4. 第三者提供 */}
            <div>
              <h2 className="font-serif text-h4 text-navy mb-4">
                4. 第三者への提供
              </h2>
              <p>
                当事務所は、以下の場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要であって、ご本人の同意を得ることが困難な場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要な場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </div>

            {/* 5. 安全管理 */}
            <div>
              <h2 className="font-serif text-h4 text-navy mb-4">
                5. 個人情報の安全管理
              </h2>
              <p>
                当事務所は、個人情報の漏えい、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
                また、個人情報を取り扱う従業者に対して、必要かつ適切な監督を行います。
              </p>
            </div>

            {/* 6. 開示・訂正・削除請求 */}
            <div>
              <h2 className="font-serif text-h4 text-navy mb-4">
                6. 開示・訂正・利用停止等の請求
              </h2>
              <p>
                ご本人から個人情報の開示、訂正、追加、削除、利用停止、消去または第三者提供の停止の請求があった場合は、
                個人情報保護法に基づき、速やかに対応いたします。
                ご請求の際は、下記のお問い合わせ先までご連絡ください。
              </p>
            </div>

            {/* 7. Cookie */}
            <div>
              <h2 className="font-serif text-h4 text-navy mb-4">
                7. Cookie（クッキー）およびアクセス解析について
              </h2>
              <p>
                当サイトでは、利便性の向上やアクセス状況の分析のために、Cookie（クッキー）および
                アクセス解析ツールを使用する場合があります。Cookieにより個人を特定する情報は取得しておりません。
                ブラウザの設定によりCookieの受け入れを拒否することも可能ですが、
                一部の機能がご利用いただけない場合があります。
              </p>
            </div>

            {/* 8. 改定 */}
            <div>
              <h2 className="font-serif text-h4 text-navy mb-4">
                8. プライバシーポリシーの改定
              </h2>
              <p>
                当事務所は、必要に応じて本ポリシーを改定することがあります。
                改定した場合は、当サイトに掲載することにより通知いたします。
              </p>
            </div>

            {/* 9. 事業者情報 */}
            <div>
              <h2 className="font-serif text-h4 text-navy mb-4">
                9. お問い合わせ先
              </h2>
              <p className="mb-3">
                個人情報の取扱いに関するお問い合わせは、以下までご連絡ください。
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <dl className="space-y-2">
                  <div className="flex gap-4">
                    <dt className="font-semibold text-navy w-24 flex-shrink-0">事務所名</dt>
                    <dd>{officeInfo.name}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="font-semibold text-navy w-24 flex-shrink-0">代表者</dt>
                    <dd>{officeInfo.representative}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="font-semibold text-navy w-24 flex-shrink-0">所在地</dt>
                    <dd>
                      〒{officeInfo.address.postalCode} {officeInfo.address.full}
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="font-semibold text-navy w-24 flex-shrink-0">電話番号</dt>
                    <dd>
                      <a
                        href={`tel:${officeInfo.phone.replace(/-/g, '')}`}
                        className="text-cta hover:text-cta-hover"
                      >
                        {officeInfo.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="font-semibold text-navy w-24 flex-shrink-0">メール</dt>
                    <dd>
                      <a
                        href={`mailto:${officeInfo.email}`}
                        className="text-cta hover:text-cta-hover"
                      >
                        {officeInfo.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* 制定日 */}
            <div className="text-right text-xs text-gray-400 pt-4 border-t border-gray-200">
              <p>制定日: 2026年3月23日</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
