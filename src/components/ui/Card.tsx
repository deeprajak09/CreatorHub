import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export default function Card({
  children,
  hover = false,
  className = '',
  ...rest
}: CardProps) {
  return (
    <div
      className={[
        'rounded-2xl border border-neutral-200 bg-white shadow-sm',
        hover
          ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/5 hover:border-neutral-300'
          : '',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
}
