type FormFieldProps = {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  required?: boolean;
  placeholder?: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
};

export default function FormField({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  error,
  value,
  onChange,
  maxLength,
}: FormFieldProps) {
  const inputClasses = `w-full px-4 py-3 border rounded-lg font-sans text-base transition-colors focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy ${
    error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'
  }`;

  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-700 mb-1.5"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={5}
          className={inputClasses}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          className={inputClasses}
        />
      )}

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
