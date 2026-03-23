type BadgeProps = {
  children: React.ReactNode;
  variant?: 'default' | 'labor' | 'divorce' | 'inheritance' | 'corporate';
};

const variantStyles = {
  default: 'bg-gray-100 text-gray-700',
  labor: 'bg-blue-100 text-blue-800',
  divorce: 'bg-pink-100 text-pink-800',
  inheritance: 'bg-green-100 text-green-800',
  corporate: 'bg-purple-100 text-purple-800',
};

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
