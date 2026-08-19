import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none active:scale-[0.98]';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-white shadow-lg shadow-primary-600/20 hover:bg-primary-700 hover:shadow-primary-700/25',
  secondary:
    'bg-white text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300 shadow-sm',
  ghost: 'text-neutral-700 hover:bg-neutral-100',
  outline:
    'bg-transparent text-primary-700 ring-1 ring-primary-200 hover:bg-primary-50 hover:ring-primary-300',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-base py-3.5',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  loading?: boolean;
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined };

type LinkButtonProps = CommonProps & {
  to: string;
  href?: undefined;
  type?: never;
  disabled?: boolean;
};

type Props = ButtonProps | LinkButtonProps;

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'primary', size = 'md', className, children, loading, ...rest }, ref) => {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className ?? ''}`;

    if ('to' in rest && rest.to) {
      const { to, ...linkRest } = rest as LinkButtonProps;
      void linkRest;
      return (
        <Link to={to} className={classes}>
          {loading && <Spinner />}
          {children}
        </Link>
      );
    }

    const { type, ...buttonRest } = rest as ButtonProps;
    return (
      <button
        ref={ref}
        type={type ?? 'button'}
        className={classes}
        disabled={loading || buttonRest.disabled}
        {...buttonRest}
      >
        {loading && <Spinner />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
