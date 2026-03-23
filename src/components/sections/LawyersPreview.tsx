import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { lawyers } from '@/data/lawyers';

export default function LawyersPreview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <SectionTitle
          title="弁護士紹介"
          subtitle="経験豊富な2名の弁護士がサポートします"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {lawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              className="text-center p-8 rounded-xl border border-gray-200"
            >
              {/* Photo placeholder */}
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-4 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <p className="text-xs text-gold font-semibold mb-1">
                {lawyer.title}
              </p>
              <h3 className="font-serif text-xl font-bold text-navy mb-1">
                {lawyer.name}
              </h3>
              <p className="text-xs text-gray-400 mb-4">{lawyer.nameEn}</p>
              <p className="text-sm text-gray-500 mb-2">
                得意分野: {lawyer.specialties.join('・')}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button href="/lawyers" variant="outline">
            弁護士紹介を詳しく見る
          </Button>
        </div>
      </Container>
    </section>
  );
}
