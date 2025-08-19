'use client';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);

  if (!user) return null;

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Dashboard</h2>
      <p>Welcome, {user.name} ({user.role})</p>
    </main>
  );
} 