import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

export default function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-6 py-16 text-center sm:px-12 md:py-20">
            <div className="absolute inset-0 bg-grid-pattern opacity-50" />
            <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary-600/30 blur-[100px]" />
            <div className="absolute right-10 bottom-0 h-[200px] w-[200px] rounded-full bg-accent-500/20 blur-[80px]" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to ship your next big thing?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-300">
                Join your team on CreatorHub and turn roadmap ideas into shipped
                features — without the busywork. Free for 14 days, no credit
                card required.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" to="/register" className="w-full sm:w-auto">
                  Create your account
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  to="/login"
                  variant="secondary"
                  className="w-full bg-white/10 text-white ring-white/20 hover:bg-white/20 sm:w-auto"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
