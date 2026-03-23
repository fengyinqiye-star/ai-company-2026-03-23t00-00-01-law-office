import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

const strengths = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '豊富な実績',
    description:
      '開業以来1,000件以上の相談実績。労働問題・家事事件・企業法務で確かな解決力をお約束します。',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '専門チーム体制',
    description:
      '2名の弁護士がそれぞれの専門分野を持ち、幅広い法律問題に対して最適な体制でサポートします。',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '初回相談無料',
    description:
      '初回のご相談は無料です。まずはお気軽にお悩みをお聞かせください。最適な解決方法をご提案します。',
  },
];

export default function StrengthsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <SectionTitle
          title="当事務所の強み"
          subtitle="依頼者様に選ばれる3つの理由"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy/5 text-navy mb-6">
                {strength.icon}
              </div>
              <h3 className="font-serif text-h4 text-navy mb-3">
                {strength.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
