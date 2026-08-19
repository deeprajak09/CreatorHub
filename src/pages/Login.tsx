import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import AuthLayout from '@/components/AuthLayout';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useAuth } from '@/context/AuthContext';

interface FormState {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
  form?: string;
}

export default function Login() {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [form, setForm] = useState<FormState>({ email: '', password: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [remember, setRemember] = useState(true);

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.email.trim()) {
      next.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!form.password) {
      next.password = 'Password is required.';
    } else if (form.password.length < 6) {
      next.password = 'Password must be at least 6 characters.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await login(form.email, form.password);
      navigate('/');
    } catch {
      setErrors({ form: 'Something went wrong. Please try again.' });
    }
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to your CreatorHub workspace to continue."
      altPrompt="Don't have an account?"
      altLinkText="Register"
      altTo="/register"
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {errors.form && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {errors.form}
          </div>
        )}

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

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          showPasswordToggle
          icon={<Lock className="h-4 w-4" />}
          value={form.password}
          onChange={(e) => update('password', e.target.value)}
          error={errors.password}
        />

        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-neutral-600">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
            />
            Remember me
          </label>
          <a
            href="#"
            className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
          >
            Forgot password?
          </a>
        </div>

        <Button type="submit" className="w-full" loading={loading}>
          {loading ? 'Signing in…' : 'Login'}
        </Button>
      </form>

      <p className="mt-6 rounded-xl bg-neutral-50 px-4 py-3 text-center text-xs text-neutral-400">
        Demo authentication — no real credentials are verified.
      </p>
    </AuthLayout>
  );
}
