import {
  forwardRef,
  useId,
  useState,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  isValid?: boolean;
  icon?: ReactNode;
  showPasswordToggle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    error,
    hint,
    isValid,
    icon,
    showPasswordToggle = false,
    type = 'text',
    id,
    className,
    ...rest
  },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password' && showPasswordToggle;
  const effectiveType = isPassword
    ? showPassword
      ? 'text'
      : 'password'
    : type;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm font-medium text-neutral-700"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </span>
        )}
        <input
          ref={ref}
          id={inputId}
          type={effectiveType}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          className={[
            'h-12 w-full rounded-xl border bg-white px-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            icon ? 'pl-10' : '',
            isPassword ? 'pr-11' : '',
            error
              ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
              : isValid
              ? 'border-accent-300 focus:border-accent-400 focus:ring-accent-200'
              : 'border-neutral-200 focus:border-primary-400 focus:ring-primary-200',
            className ?? '',
          ].join(' ')}
          {...rest}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="h-4.5 w-4.5" />
            ) : (
              <Eye className="h-4.5 w-4.5" />
            )}
          </button>
        )}
        {isValid && !isPassword && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-accent-500">
            <CheckCircle2 className="h-5 w-5" />
          </span>
        )}
      </div>
      {error ? (
        <p
          id={`${inputId}-error`}
          className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600"
        >
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="mt-1.5 text-xs text-neutral-400">
          {hint}
        </p>
      ) : null}
    </div>
  );
});

export default Input;
