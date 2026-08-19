import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './ui/Button';
import { useAuth } from '@/context/AuthContext';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/#features' },
  { label: 'About', to: '/#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleHashLink = (to: string) => {
    if (to.includes('#') && location.pathname === '/') {
      const id = to.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(to);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-neutral-200/70 bg-white/80 backdrop-blur-lg shadow-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-18">
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleHashLink(link.to)}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {user ? (
            <>
              <span className="text-sm font-medium text-neutral-600">
                Hi, {user.name.split(' ')[0]}
              </span>
              <Button variant="secondary" size="sm" onClick={logout}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" to="/login">
                Login
              </Button>
              <Button variant="primary" size="sm" to="/register">
                Create Account
              </Button>
            </>
          )}
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-700 hover:bg-neutral-100 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-neutral-200/70 bg-white/95 backdrop-blur-lg transition-all duration-300 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleHashLink(link.to)}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-neutral-700 hover:bg-neutral-100"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-neutral-100 pt-4">
            {user ? (
              <Button variant="secondary" onClick={logout}>
                Sign out
              </Button>
            ) : (
              <>
                <Button variant="secondary" to="/login">
                  Login
                </Button>
                <Button variant="primary" to="/register">
                  Create Account
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
