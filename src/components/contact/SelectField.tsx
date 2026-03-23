type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  name: string;
  options: SelectOption[];
  required?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
};

export default function SelectField({
  label,
  name,
  options,
  required = false,
  error,
  value,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-700 mb-1.5"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 border rounded-lg font-sans text-base transition-colors focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy appearance-none bg-no-repeat bg-[right_12px_center] bg-[length:16px] ${
          error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
        }}
      >
        <option value="">選択してください</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
