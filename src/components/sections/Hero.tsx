import { ArrowRight, Sparkles, Check } from 'lucide-react';
import Button from '../ui/Button';
import DashboardMockup from '../DashboardMockup';

const badges = ['No credit card', 'Free 14-day trial', 'Cancel anytime'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary-600/20 blur-[120px]" />
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-accent-500/10 blur-[100px]" />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex animate-fade-down items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-neutral-200 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent-400" />
            New: Smart sprint planning with AI assist
          </div>

          <h1 className="mt-6 animate-fade-up font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Ship products faster,
            <br className="hidden sm:block" />{' '}
            <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent">
              together
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-neutral-300 sm:text-lg"
            style={{ animationDelay: '100ms' }}
          >
            CreatorHub is the workspace for product teams. Plan sprints, track
            progress, and release with confidence — all in one place, without
            the busywork.
          </p>

          <div
            className="mt-8 flex animate-fade-up flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: '200ms' }}
          >
            <Button size="lg" to="/register" className="w-full sm:w-auto">
              Create Account
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              to="/login"
              variant="secondary"
              className="w-full bg-white/10 text-white ring-white/20 hover:bg-white/20 hover:ring-white/30 sm:w-auto"
            >
              Login
            </Button>
          </div>

          <div
            className="mt-6 flex animate-fade-up flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-neutral-400"
            style={{ animationDelay: '300ms' }}
          >
            {badges.map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-accent-400" />
                {b}
              </span>
            ))}
          </div>
        </div>

        <div
          className="mx-auto mt-16 max-w-5xl animate-scale-in"
          style={{ animationDelay: '350ms' }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-2xl" />
            <div className="relative">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
