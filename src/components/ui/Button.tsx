import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'cta' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
};

const variantStyles = {
  primary:
    'bg-navy text-white hover:bg-navy-dark focus:ring-navy',
  secondary:
    'bg-gold text-white hover:bg-gold-dark focus:ring-gold',
  cta: 'bg-cta text-white hover:bg-cta-hover focus:ring-cta',
  outline:
    'border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
