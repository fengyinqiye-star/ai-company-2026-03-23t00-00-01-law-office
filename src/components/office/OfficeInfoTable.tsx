import { officeInfo } from '@/data/officeInfo';

export default function OfficeInfoTable() {
  const rows = [
    { label: '事務所名', value: officeInfo.name },
    { label: '代表弁護士', value: officeInfo.representative },
    {
      label: '所在地',
      value: `〒${officeInfo.address.postalCode} ${officeInfo.address.full}`,
    },
    {
      label: '電話番号',
      value: (
        <a
          href={`tel:${officeInfo.phone.replace(/-/g, '')}`}
          className="text-navy hover:text-cta transition-colors"
        >
          {officeInfo.phone}
        </a>
      ),
    },
    { label: 'FAX', value: officeInfo.fax },
    {
      label: 'メールアドレス',
      value: (
        <a
          href={`mailto:${officeInfo.email}`}
          className="text-navy hover:text-cta transition-colors"
        >
          {officeInfo.email}
        </a>
      ),
    },
    {
      label: '営業時間',
      value: (
        <>
          {officeInfo.businessHours.weekdays}
          <br />
          {officeInfo.businessHours.saturday}
        </>
      ),
    },
    { label: '定休日', value: officeInfo.businessHours.closed },
  ];

  return (
    <table className="w-full border-collapse">
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="border-b border-gray-200">
            <th className="py-4 pr-4 text-left text-sm font-semibold text-navy w-32 sm:w-40 align-top">
              {row.label}
            </th>
            <td className="py-4 text-sm text-gray-700">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
