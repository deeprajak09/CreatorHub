import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import AuthLayout from '@/components/AuthLayout';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useAuth } from '@/context/AuthContext';

interface FormState {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
  form?: string;
}

function passwordStrength(pw: string): { score: number; label: string } {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const labels = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong'];
  return { score, label: labels[score] };
}

export default function Register() {
  const navigate = useNavigate();
  const { register, loading } = useAuth();
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [errors, setErrors] = useState<Errors>({});

  const strength = passwordStrength(form.password);

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) {
      next.name = 'Full name is required.';
    } else if (form.name.trim().length < 2) {
      next.name = 'Name must be at least 2 characters.';
    }
    if (!form.email.trim()) {
      next.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!form.password) {
      next.password = 'Password is required.';
    } else if (form.password.length < 8) {
      next.password = 'Password must be at least 8 characters.';
    }
    if (!form.confirm) {
      next.confirm = 'Please confirm your password.';
    } else if (form.confirm !== form.password) {
      next.confirm = 'Passwords do not match.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await register(form.name, form.email, form.password);
      navigate('/');
    } catch {
      setErrors({ form: 'Something went wrong. Please try again.' });
    }
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const strengthColors = ['bg-neutral-200', 'bg-red-400', 'bg-amber-400', 'bg-primary-400', 'bg-accent-500'];

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your free 14-day trial. No credit card required."
      altPrompt="Already have an account?"
      altLinkText="Login"
      altTo="/login"
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {errors.form && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {errors.form}
          </div>
        )}

        <Input
          label="Full name"
          type="text"
          placeholder="Jane Doe"
          autoComplete="name"
          icon={<User className="h-4 w-4" />}
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          error={errors.name}
        />

        <Input
          label="Email address"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          icon={<Mail className="h-4 w-4" />}
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          error={errors.email}
        />

        <div>
          <Input
            label="Password"
            type="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            showPasswordToggle
            icon={<Lock className="h-4 w-4" />}
            value={form.password}
            onChange={(e) => update('password', e.target.value)}
            error={errors.password}
          />
          {form.password && !errors.password && (
            <div className="mt-2">
              <div className="flex gap-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                      i < strength.score ? strengthColors[strength.score] : 'bg-neutral-200'
                    }`}
                  />
                ))}
              </div>
              <p className="mt-1 text-xs text-neutral-400">
                Password strength: <span className="font-medium text-neutral-600">{strength.label}</span>
              </p>
            </div>
          )}
        </div>

        <Input
          label="Confirm password"
          type="password"
          placeholder="Re-enter your password"
          autoComplete="new-password"
          showPasswordToggle
          icon={<Lock className="h-4 w-4" />}
          value={form.confirm}
          onChange={(e) => update('confirm', e.target.value)}
          error={errors.confirm}
        />

        <p className="text-xs leading-relaxed text-neutral-400">
          By creating an account, you agree to our{' '}
          <a href="#" className="font-medium text-primary-600 hover:underline">
            Terms
          </a>{' '}
          and{' '}
          <a href="#" className="font-medium text-primary-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        <Button type="submit" className="w-full" loading={loading}>
          {loading ? 'Creating account…' : 'Create Account'}
        </Button>
      </form>

      <p className="mt-6 rounded-xl bg-neutral-50 px-4 py-3 text-center text-xs text-neutral-400">
        Demo authentication — accounts are stored locally in your browser only.
      </p>
    </AuthLayout>
  );
}
