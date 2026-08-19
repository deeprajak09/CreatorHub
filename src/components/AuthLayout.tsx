import { Link, useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import Logo from '@/components/Logo';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  altPrompt: string;
  altLinkText: string;
  altTo: string;
}

const highlights = [
  'Free 14-day trial — no credit card required',
  'Set up your workspace in under a minute',
  'Invite your team and start shipping today',
];

export default function AuthLayout({
  children,
  title,
  subtitle,
  altPrompt,
  altLinkText,
  altTo,
}: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left: form */}
      <div className="relative flex flex-col px-5 py-8 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          <Logo />
          <Link
            to="/"
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
          >
            Back to home
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-sm animate-fade-up">
            <h1 className="font-display text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-neutral-500">{subtitle}</p>
            <div className="mt-8">{children}</div>
            <p className="mt-6 text-center text-sm text-neutral-500">
              {altPrompt}{' '}
              <Link
                to={altTo}
                className="font-semibold text-primary-600 transition-colors hover:text-primary-700"
              >
                {altLinkText}
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} CreatorHub Technologies
        </p>
      </div>

      {/* Right: showcase panel */}
      <div className="relative hidden overflow-hidden bg-neutral-950 lg:block">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-600/25 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-accent-500/15 blur-[100px]" />

        <div className="relative flex h-full flex-col justify-center px-12 xl:px-20">
          <h2 className="font-display text-3xl font-bold leading-tight text-white xl:text-4xl">
            The workspace where teams
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              ship faster, together.
            </span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-300">
            Plan sprints, track progress, and release with confidence — all in
            one place, without the busywork.
          </p>

          <ul className="mt-10 space-y-4">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-neutral-200">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-500/20 text-accent-400">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400" />
              <div>
                <p className="text-sm font-semibold text-white">Sprint 24</p>
                <p className="text-xs text-neutral-400">Launch week · 5 days left</p>
              </div>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-primary-400 to-accent-400" />
            </div>
            <p className="mt-2 text-xs text-neutral-400">12 of 20 issues closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
