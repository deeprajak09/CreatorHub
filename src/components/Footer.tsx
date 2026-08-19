import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from './Logo';

const footerLinks = {
  Product: [
    { label: 'Features', to: '/#features' },
    { label: 'How it works', to: '/#how-it-works' },
    { label: 'Pricing', to: '/#pricing' },
    { label: 'Changelog', to: '/#changelog' },
  ],
  Company: [
    { label: 'About', to: '/#about' },
    { label: 'Blog', to: '/#blog' },
    { label: 'Careers', to: '/#careers' },
    { label: 'Contact', to: '/#contact' },
  ],
  Resources: [
    { label: 'Documentation', to: '/#docs' },
    { label: 'API Reference', to: '/#api' },
    { label: 'Community', to: '/#community' },
    { label: 'Support', to: '/#support' },
  ],
  Legal: [
    { label: 'Privacy', to: '/#privacy' },
    { label: 'Terms', to: '/#terms' },
    { label: 'Security', to: '/#security' },
    { label: 'Cookies', to: '/#cookies' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              The workspace for product teams who want to ship faster — plan,
              track, and release without the busywork.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Github, label: 'GitHub' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-all hover:-translate-y-0.5 hover:text-primary-600 hover:shadow-sm"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-neutral-900">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-neutral-500 transition-colors hover:text-primary-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} CreatorHub Technologies. All rights reserved.
          </p>
          <p className="text-sm text-neutral-400">
            Built for the CreatorHub Frontend Challenge.
          </p>
        </div>
      </div>
    </footer>
  );
}
