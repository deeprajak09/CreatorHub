import {
  Layers,
  GitMerge,
  BarChart3,
  Bell,
  Users,
  ShieldCheck,
} from 'lucide-react';
import Reveal from '../ui/Reveal';
import Card from '../ui/Card';

const features = [
  {
    icon: Layers,
    title: 'Sprint boards that stay in sync',
    description:
      'Drag, drop, and re-prioritize issues in real time. Every change is reflected instantly across your whole team — no refresh, no stale boards.',
  },
  {
    icon: GitMerge,
    title: 'Ship from commit to release',
    description:
      'Connect your repository and link pull requests to issues. CreatorHub tracks status from "in progress" all the way to production deploy.',
  },
  {
    icon: BarChart3,
    title: 'Velocity you can actually trust',
    description:
      'Burndown charts, cycle time, and throughput reports update automatically so retros are grounded in real data, not gut feelings.',
  },
  {
    icon: Bell,
    title: 'Smart notifications',
    description:
      'Get notified about what matters — mentions, blockers, and assignments — and mute the noise that pulls you out of flow.',
  },
  {
    icon: Users,
    title: 'Built for cross-functional teams',
    description:
      'Engineering, design, and product share one source of truth. Granular roles keep the right people in the loop without oversharing.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    description:
      'SOC 2 Type II, SSO/SAML, audit logs, and granular permissions. Your data is encrypted in transit and at rest, always.',
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            Features
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Everything your team needs to ship
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500">
            CreatorHub brings planning, tracking, and release management into a
            single workspace — so your team spends less time juggling tools and
            more time building.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 100}>
              <Card hover className="h-full p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                  <feature.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {feature.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
