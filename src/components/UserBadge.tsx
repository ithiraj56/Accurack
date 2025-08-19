'use client';
import { useAuth } from '../contexts/AuthContext';

export default function UserBadge() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div style={{ marginTop: '1rem' }}>
      <p>👤 {user.name} — {user.role}</p>
    </div>
  );
}
