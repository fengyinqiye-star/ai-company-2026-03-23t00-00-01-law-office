'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Button from '@/components/ui/Button';
import { caseResults } from '@/data/caseResults';
import type { CaseResult } from '@/types';

const categories = [
  { value: 'all', label: 'すべて' },
  { value: 'labor', label: '労働問題' },
  { value: 'divorce', label: '離婚問題' },
  { value: 'inheritance', label: '相続問題' },
  { value: 'corporate', label: '企業法務' },
];

function CaseCard({ caseItem }: { caseItem: CaseResult }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 lg:p-8">
      <span className="inline-block px-3 py-1 text-xs font-semibold bg-navy/5 text-navy rounded-full mb-3">
        {caseItem.categoryLabel}
      </span>
      <h3 className="font-serif text-lg font-bold text-navy mb-4">
        {caseItem.title}
      </h3>

      <div className="space-y-4 text-sm text-gray-700">
        <div>
          <h4 className="font-semibold text-navy mb-1">相談内容</h4>
          <p>{caseItem.summary}</p>
        </div>
        <div>
          <h4 className="font-semibold text-navy mb-1">解決結果</h4>
          <p>{caseItem.result}</p>
        </div>
        <div>
          <h4 className="font-semibold text-navy mb-1">ポイント</h4>
          <p>{caseItem.point}</p>
        </div>
      </div>
    </div>
  );
}

export default function ResultsContent() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredResults =
    activeCategory === 'all'
      ? caseResults
      : caseResults.filter((item) => item.category === activeCategory);

  return (
    <>
      <Breadcrumb items={[{ label: '解決事例' }]} />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionTitle
            title="解決事例"
            subtitle="当事務所がこれまでに解決した事例をご紹介します"
          />

          {/* Disclaimer */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg text-xs text-gray-500 text-center">
            ※ 個人が特定されないよう、内容を一部変更して掲載しています。
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.value
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Case cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResults.map((caseItem) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              同じようなお悩みをお持ちの方は、まずはお気軽にご相談ください。
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
