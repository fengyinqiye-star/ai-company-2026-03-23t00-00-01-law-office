import { Lawyer } from '@/types';

type LawyerProfileProps = Lawyer;

export default function LawyerProfile({
  name,
  nameEn,
  title,
  barAssociation,
  registrationNumber,
  specialties,
  career,
  message,
  publications,
}: LawyerProfileProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-8 lg:p-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Photo placeholder */}
          <div className="flex-shrink-0">
            <div className="w-40 h-48 mx-auto md:mx-0 rounded-lg bg-gray-200 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-gray-400"
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
          </div>

          {/* Profile */}
          <div className="flex-1">
            <p className="text-sm text-gold font-semibold mb-1">{title}</p>
            <h3 className="font-serif text-2xl font-bold text-navy mb-1">
              {name}
            </h3>
            <p className="text-sm text-gray-400 mb-2">{nameEn}</p>
            <p className="text-sm text-gray-500 mb-1">
              {barAssociation} 所属
            </p>
            <p className="text-sm text-gray-500 mb-4">
              弁護士登録番号: {registrationNumber}
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-navy mb-1">得意分野</h4>
              <div className="flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <span
                    key={s}
                    className="inline-block px-3 py-1 text-xs bg-navy/5 text-navy rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-navy mb-2">経歴</h4>
              <dl className="space-y-1">
                {career.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-sm">
                    <dt className="text-gray-400 whitespace-nowrap w-16">
                      {item.year}
                    </dt>
                    <dd className="text-gray-700">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-navy mb-2">
                メッセージ
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">{message}</p>
            </div>

            {publications && publications.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-navy mb-2">
                  著書・論文・メディア掲載
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {publications.map((pub, idx) => (
                    <li key={idx}>{pub}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
