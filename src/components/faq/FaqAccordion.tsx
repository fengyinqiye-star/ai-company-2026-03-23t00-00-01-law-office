'use client';

import { useState } from 'react';
import type { FaqItem } from '@/types';

type FaqAccordionProps = {
  items: FaqItem[];
};

function AccordionItem({ item }: { item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="flex items-start gap-3 pr-4">
          <span className="text-navy font-bold text-lg leading-none mt-0.5">Q</span>
          <span className="text-sm font-semibold text-gray-800">{item.question}</span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-navy flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 bg-gray-50">
          <div className="flex items-start gap-3 pt-3 border-t border-gray-200">
            <span className="text-cta font-bold text-lg leading-none mt-0.5">A</span>
            <p className="text-sm text-gray-700 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  // Group items by category
  const groupedItems = items.reduce<Record<string, FaqItem[]>>((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <div key={category}>
          <h2 className="font-serif text-h4 text-navy mb-4">
            {category}に関するご質問
          </h2>
          <div className="space-y-3">
            {categoryItems.map((item, idx) => (
              <AccordionItem key={idx} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
