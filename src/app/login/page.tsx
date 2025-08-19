'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login();
    router.push('/dashboard');
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Login to AccuRack</h2>
      <button onClick={handleLogin} style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>
        Mock Login
      </button>
    </main>
  );
} 