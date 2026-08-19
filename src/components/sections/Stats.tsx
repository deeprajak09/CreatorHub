import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Zap, GitBranch } from 'lucide-react';
import Reveal from '../ui/Reveal';

// Note: these are illustrative product metrics shown as part of a demo
// dashboard mockup, not claims of real customer usage.
const stats = [
  { value: 40, suffix: '%', label: 'Less context switching', icon: TrendingUp },
  { value: 3, suffix: 'x', label: 'Faster sprint planning', icon: Zap },
  { value: 12, suffix: '+', label: 'Integrations built-in', icon: GitBranch },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120}>
              <div className="flex flex-col items-center text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <stat.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-display text-4xl font-extrabold text-neutral-900">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
