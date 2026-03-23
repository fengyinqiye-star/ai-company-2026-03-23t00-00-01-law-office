import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Breadcrumb from '@/components/layout/Breadcrumb';
import PracticeAreaCard from '@/components/practice-areas/PracticeAreaCard';
import { practiceAreas } from '@/data/practiceAreas';

export const metadata: Metadata = {
  title: '取扱業務',
  description:
    '山田・鈴木法律事務所の取扱業務一覧。労働問題、離婚問題、相続問題、企業法務など幅広い法律分野でサポートいたします。',
};

export default function PracticeAreasPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '取扱業務' }]} />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionTitle
            title="取扱業務"
            subtitle="幅広い法律分野で、依頼者様の権利を守ります"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {practiceAreas.map((area) => (
              <PracticeAreaCard
                key={area.slug}
                slug={area.slug}
                title={area.title}
                description={area.shortDescription}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
