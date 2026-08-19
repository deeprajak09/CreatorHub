import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  dark?: boolean;
  to?: string;
}

export default function Logo({ className = '', dark = false, to = '/' }: LogoProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="CreatorHub home"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 shadow-lg shadow-primary-600/30 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 7v10M7.5 9.5l9 5M16.5 9.5l-9 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
        <span className="absolute inset-0 rounded-xl bg-primary-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" />
      </span>
      <span
        className={`font-display text-lg font-bold tracking-tight ${
          dark ? 'text-white' : 'text-neutral-900'
        }`}
      >
        CreatorHub
      </span>
    </Link>
  );
}
