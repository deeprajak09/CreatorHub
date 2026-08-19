import { Check } from 'lucide-react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

const points = [
  'Auto-organized sprint boards with drag-and-drop prioritization',
  'Real-time sync across desktop, mobile, and your code repository',
  'Velocity, cycle-time, and throughput reports out of the box',
  'Roles and permissions that scale from startup to enterprise',
];

export default function Showcase() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              The workspace
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              One place to plan, track, and release
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              CreatorHub replaces the patchwork of docs, spreadsheets, and chat
              threads that product teams rely on today. Everything your team
              needs — from the first idea to the final deploy — lives in a
              single, fast workspace.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-neutral-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button to="/register">
                Start your free trial
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-primary-100 to-accent-100 blur-xl" />
              <div className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-900/5">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                  <h3 className="font-display text-base font-semibold text-neutral-900">
                    This week at a glance
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-2.5 py-1 text-xs font-medium text-accent-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                    On track
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Open', value: '18' },
                    { label: 'In progress', value: '7' },
                    { label: 'Closed', value: '12' },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-neutral-100 bg-neutral-50 p-3 text-center"
                    >
                      <p className="font-display text-2xl font-bold text-neutral-900">
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-xs text-neutral-400">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Mini chart */}
                <div className="mt-5">
                  <div className="flex items-end justify-between gap-2">
                    {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                      <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                        <div className="flex h-24 w-full items-end">
                          <div
                            className="w-full rounded-md bg-gradient-to-t from-primary-500 to-primary-300 transition-all duration-700 ease-out"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-neutral-400">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-xl bg-primary-50 p-3">
                  <p className="text-xs font-medium text-primary-800">
                    Sprint goal: 80% completion
                  </p>
                  <p className="font-display text-sm font-bold text-primary-700">
                    60%
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
