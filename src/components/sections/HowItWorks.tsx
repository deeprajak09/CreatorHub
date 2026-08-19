import { UserPlus, LayoutGrid, Rocket } from 'lucide-react';
import Reveal from '../ui/Reveal';

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Create your workspace',
    description:
      'Sign up in seconds and invite your team. Set up projects, cycles, and roles to match how your team actually works.',
  },
  {
    icon: LayoutGrid,
    step: '02',
    title: 'Plan and track work',
    description:
      'Add issues, drag them across your sprint board, and link pull requests. CreatorHub keeps status, priorities, and owners in sync.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Ship and learn',
    description:
      'Track releases, review velocity reports, and run retros. Close the loop between what you planned and what you shipped.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-t border-neutral-200 bg-neutral-50 py-20 md:py-28"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Up and running in three steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500">
            No lengthy onboarding or consultants required. CreatorHub is designed
            to feel familiar from the first click.
          </p>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent md:block" />

          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 150} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 inline-flex h-18 w-18 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  <s.icon className="h-7 w-7 text-primary-600" />
                  <span className="absolute -right-2 -top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white shadow-md">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-neutral-900">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-500">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
