type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="font-serif text-h2 text-navy mb-3">{title}</h2>
      {subtitle && (
        <p className="text-gray-500 text-base max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-16 bg-gold rounded ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
