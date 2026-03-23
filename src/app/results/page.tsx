import type { Metadata } from 'next';
import ResultsContent from '@/components/results/ResultsContent';

export const metadata: Metadata = {
  title: '解決事例',
  description:
    '山田・鈴木法律事務所の解決事例。労働問題、離婚、相続、企業法務の実績をご紹介します。',
};

export default function ResultsPage() {
  return <ResultsContent />;
}
