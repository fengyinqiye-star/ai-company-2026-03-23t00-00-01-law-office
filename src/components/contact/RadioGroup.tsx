type RadioOption = {
  value: string;
  label: string;
};

type RadioGroupProps = {
  label: string;
  name: string;
  options: RadioOption[];
  required?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
};

export default function RadioGroup({
  label,
  name,
  options,
  required = false,
  error,
  value,
  onChange,
}: RadioGroupProps) {
  return (
    <div className="mb-5">
      <fieldset>
        <legend className="block text-sm font-semibold text-gray-700 mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </legend>

        <div className="flex flex-wrap gap-4 mt-1">
          {options.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={(e) => onChange(e.target.value)}
                className="w-4 h-4 text-navy focus:ring-navy"
              />
              <span className="text-sm text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
