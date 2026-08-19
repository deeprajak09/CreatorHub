import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export interface AuthUser {
  name: string;
  email: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = 'creatorhub_demo_auth';

// NOTE: This is a MOCK/demo authentication implementation. It stores a fake
// user object in localStorage and simulates a network request with a delay.
// It does NOT perform any real authentication and is clearly structured as a
// demo — no real credentials are verified and no backend is involved.
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setUser(JSON.parse(stored));
    } catch {
      // ignore malformed storage
    }
  }, []);

  const login = useCallback(async (email: string, _password: string) => {
    setLoading(true);
    try {
      await delay(800);
      const name = email.split('@')[0].replace(/[._-]/g, ' ');
      const next: AuthUser = {
        name: name.replace(/\b\w/g, (c) => c.toUpperCase()),
        email,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setUser(next);
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(
    async (name: string, email: string, _password: string) => {
      setLoading(true);
      try {
        await delay(900);
        const next: AuthUser = { name, email };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        setUser(next);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, loading, login, register, logout }),
    [user, loading, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
