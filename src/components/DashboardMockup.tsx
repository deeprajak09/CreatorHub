import { CheckCircle2, Clock, Circle, MoreHorizontal } from 'lucide-react';

const tasks = [
  { title: 'Design system tokens', status: 'done', assignee: 'AK', due: 'Mon' },
  { title: 'Onboarding flow v2', status: 'progress', assignee: 'JD', due: 'Tue' },
  { title: 'API rate limiting', status: 'progress', assignee: 'ML', due: 'Wed' },
  { title: 'Billing webhook sync', status: 'todo', assignee: 'SR', due: 'Thu' },
  { title: 'Analytics dashboard', status: 'todo', assignee: 'PT', due: 'Fri' },
];

const statusMeta = {
  done: { label: 'Done', icon: CheckCircle2, color: 'text-accent-500', bg: 'bg-accent-50' },
  progress: { label: 'In progress', icon: Clock, color: 'text-primary-600', bg: 'bg-primary-50' },
  todo: { label: 'To do', icon: Circle, color: 'text-neutral-400', bg: 'bg-neutral-100' },
} as const;

const avatars = [
  { initials: 'AK', color: 'bg-primary-100 text-primary-700' },
  { initials: 'JD', color: 'bg-accent-100 text-accent-700' },
  { initials: 'ML', color: 'bg-amber-100 text-amber-700' },
  { initials: 'SR', color: 'bg-rose-100 text-rose-700' },
];

export default function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-900/10">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <div className="ml-3 hidden h-7 flex-1 items-center rounded-md bg-white px-3 text-xs text-neutral-400 ring-1 ring-neutral-200 sm:flex">
          app.creatorhub.io/projects/sprint-24
        </div>
      </div>

      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-3 hidden flex-col gap-1 border-r border-neutral-100 bg-neutral-50/50 p-3 sm:flex">
          {['Sprint board', 'Backlog', 'Roadmap', 'Reports', 'Team'].map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium ${
                i === 0
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-neutral-500 hover:bg-neutral-100'
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-primary-500' : 'bg-neutral-300'}`} />
              {item}
            </div>
          ))}
          <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-400">
              Sprint progress
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
              <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
            </div>
            <p className="mt-1.5 text-[10px] text-neutral-500">12 of 20 issues closed</p>
          </div>
        </aside>

        {/* Main */}
        <div className="col-span-12 p-4 sm:col-span-9 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-base font-bold text-neutral-900">
                Sprint 24 — Launch week
              </h3>
              <p className="text-xs text-neutral-400">5 days remaining · 5 issues</p>
            </div>
            <div className="flex -space-x-2">
              {avatars.map((a) => (
                <span
                  key={a.initials}
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ring-2 ring-white ${a.color}`}
                >
                  {a.initials}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {tasks.map((task) => {
              const meta = statusMeta[task.status as keyof typeof statusMeta];
              const Icon = meta.icon;
              return (
                <div
                  key={task.title}
                  className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-white px-3 py-2.5 transition-all hover:border-neutral-200 hover:shadow-sm"
                >
                  <Icon className={`h-4 w-4 shrink-0 ${meta.color}`} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-neutral-800">
                      {task.title}
                    </p>
                    <p className="text-[11px] text-neutral-400">Due {task.due}</p>
                  </div>
                  <span className={`hidden rounded-full px-2 py-0.5 text-[10px] font-medium sm:inline ${meta.bg} ${meta.color}`}>
                    {meta.label}
                  </span>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-semibold text-neutral-500">
                    {task.assignee}
                  </span>
                  <MoreHorizontal className="h-4 w-4 text-neutral-300" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
