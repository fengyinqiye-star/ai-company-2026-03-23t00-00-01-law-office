import { FeeCategory } from '@/types';

type FeeTableProps = {
  categories: FeeCategory[];
};

export default function FeeTable({ categories }: FeeTableProps) {
  return (
    <div className="space-y-10">
      {categories.map((cat) => (
        <div key={cat.category}>
          <h3 className="font-serif text-xl font-bold text-navy mb-4">
            {cat.category}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="py-3 px-4 text-left text-sm font-semibold">
                    内容
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">
                    相談料
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">
                    着手金
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">
                    報酬金
                  </th>
                </tr>
              </thead>
              <tbody>
                {cat.items.map((item, index) => (
                  <tr
                    key={item.service}
                    className={`border-b border-gray-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="py-3 px-4 text-sm font-medium text-gray-800">
                      {item.service}
                      {item.note && (
                        <span className="block text-xs text-gray-400 mt-1">
                          {item.note}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {item.consultationFee}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {item.retainerFee}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {item.successFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
