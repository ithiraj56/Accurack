'use client';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminDashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/dashboard');
    }
  }, [user]);

  if (!user || user.role !== 'admin') return null;

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Admin Panel</h2>
      <p>Only visible to Admins</p>
    </main>
  );
} 