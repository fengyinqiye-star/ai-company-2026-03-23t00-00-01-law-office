import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Button from '@/components/ui/Button';
import { weeklySchedule, scheduleNotes } from '@/data/schedule';
import { officeInfo } from '@/data/officeInfo';

export const metadata: Metadata = {
  title: '相談スケジュール',
  description:
    '山田・鈴木法律事務所の週間相談スケジュール。弁護士ごとの対応曜日・時間帯、初回無料相談の受付可能時間をご確認いただけます。',
};

export default function SchedulePage() {
  return (
    <>
      <Breadcrumb items={[{ label: '相談スケジュール' }]} />

      <section className="py-16 lg:py-24">
        <Container className="max-w-5xl">
          <SectionTitle
            title="相談スケジュール"
            subtitle="各弁護士の対応曜日・時間帯をご確認いただけます"
          />

          {/* Business hours summary */}
          <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-navy/5 rounded-xl text-center">
              <div className="text-sm text-gray-500 mb-1">平日</div>
              <div className="font-serif text-h4 text-navy">9:00 - 18:00</div>
            </div>
            <div className="p-5 bg-navy/5 rounded-xl text-center">
              <div className="text-sm text-gray-500 mb-1">土曜（要予約）</div>
              <div className="font-serif text-h4 text-navy">10:00 - 15:00</div>
            </div>
            <div className="p-5 bg-navy/5 rounded-xl text-center">
              <div className="text-sm text-gray-500 mb-1">日曜・祝日</div>
              <div className="font-serif text-h4 text-navy text-cta">休業</div>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block mb-12">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="py-4 px-4 text-left text-sm font-semibold font-sans">
                      曜日
                    </th>
                    <th className="py-4 px-4 text-left text-sm font-semibold font-sans">
                      営業時間
                    </th>
                    <th className="py-4 px-4 text-left text-sm font-semibold font-sans">
                      初回無料相談
                    </th>
                    <th className="py-4 px-4 text-left text-sm font-semibold font-sans">
                      山田 誠一
                    </th>
                    <th className="py-4 px-4 text-left text-sm font-semibold font-sans">
                      鈴木 美咲
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {weeklySchedule.map((day, index) => (
                    <tr
                      key={day.day}
                      className={`border-t border-gray-100 ${
                        !day.isOpen ? 'bg-gray-50' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="py-4 px-4">
                        <span
                          className={`font-serif font-semibold ${
                            day.dayShort === '日'
                              ? 'text-cta'
                              : day.dayShort === '土'
                                ? 'text-blue-600'
                                : 'text-navy'
                          }`}
                        >
                          {day.day}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700">
                        {day.isOpen ? day.businessHours?.label : (
                          <span className="text-gray-400">休業</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-sm">
                        {day.isOpen && day.freeConsultation ? (
                          <span className="inline-flex items-center gap-1.5 text-navy font-medium">
                            <span className="w-2 h-2 bg-gold rounded-full" />
                            {day.freeConsultation.label}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      {day.lawyers.map((lawyer) => (
                        <td key={lawyer.name} className="py-4 px-4 text-sm">
                          {lawyer.available ? (
                            <div>
                              <span className="inline-flex items-center gap-1.5 text-green-700 font-medium">
                                <svg
                                  className="w-4 h-4"
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
                                対応可
                              </span>
                              {lawyer.note && (
                                <span className="block text-xs text-gray-400 mt-0.5">
                                  {lawyer.note}
                                </span>
                              )}
                            </div>
                          ) : (
                            <div>
                              <span className="text-gray-400">-</span>
                              {lawyer.note && (
                                <span className="block text-xs text-gray-400 mt-0.5">
                                  {lawyer.note}
                                </span>
                              )}
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden mb-12 space-y-3">
            {weeklySchedule.map((day) => (
              <div
                key={day.day}
                className={`rounded-xl border ${
                  day.isOpen
                    ? 'border-gray-200 bg-white'
                    : 'border-gray-100 bg-gray-50'
                } p-4`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-serif text-lg font-semibold ${
                      day.dayShort === '日'
                        ? 'text-cta'
                        : day.dayShort === '土'
                          ? 'text-blue-600'
                          : 'text-navy'
                    }`}
                  >
                    {day.day}
                  </span>
                  {day.isOpen ? (
                    <span className="text-sm text-gray-600 bg-navy/5 px-3 py-1 rounded-full">
                      {day.businessHours?.label}
                    </span>
                  ) : (
                    <span className="text-sm text-cta bg-cta/10 px-3 py-1 rounded-full font-medium">
                      休業
                    </span>
                  )}
                </div>

                {day.isOpen && (
                  <>
                    {day.freeConsultation && (
                      <div className="mb-3 flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
                        <span className="text-gray-500">初回無料相談:</span>
                        <span className="text-navy font-medium">
                          {day.freeConsultation.label}
                        </span>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-2">
                      {day.lawyers.map((lawyer) => (
                        <div
                          key={lawyer.name}
                          className={`text-sm p-2.5 rounded-lg ${
                            lawyer.available
                              ? 'bg-green-50 text-green-800'
                              : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          <div className="font-medium text-xs mb-0.5">
                            {lawyer.name.split(' ')[0]}弁護士
                          </div>
                          <div>
                            {lawyer.available ? '対応可' : '不在'}
                          </div>
                          {lawyer.note && (
                            <div className="text-xs mt-0.5 opacity-75">
                              {lawyer.note}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Legend & notes */}
          <div className="mb-12 p-6 bg-navy/5 rounded-xl">
            <h2 className="font-serif text-h3 text-navy mb-4">ご予約について</h2>
            <ul className="space-y-2">
              {scheduleNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-gold mt-0.5 shrink-0">*</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phone & CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              ご予約・スケジュールのご確認はお電話でも承ります。
            </p>
            <a
              href={`tel:${officeInfo.phone.replace(/-/g, '')}`}
              className="inline-block font-serif text-h3 text-navy font-bold mb-1 hover:text-navy-light transition-colors"
            >
              {officeInfo.phone}
            </a>
            <p className="text-xs text-gray-400 mb-6">
              {officeInfo.businessHours.weekdays} / {officeInfo.businessHours.saturday}
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
