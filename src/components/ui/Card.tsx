import Link from 'next/link';

type CardProps = {
  children: React.ReactNode;
  href?: string;
  hoverable?: boolean;
  className?: string;
};

export default function Card({
  children,
  href,
  hoverable = false,
  className = '',
}: CardProps) {
  const baseStyles = 'bg-white rounded-xl border border-gray-200 overflow-hidden';
  const hoverStyles = hoverable
    ? 'transition-shadow duration-300 hover:shadow-lg'
    : '';

  const classes = `${baseStyles} ${hoverStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${classes}`}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
