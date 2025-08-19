'use client';
import { useAuth } from '../contexts/AuthContext';

export default function UserBadge() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div style={{ marginTop: '1rem' }}>
      <p>👤 {user.name} — {user.role}</p>
      <button onClick={logout} style={{ marginTop: '0.5rem' }}>Logout</button>
    </div>
  );
}
