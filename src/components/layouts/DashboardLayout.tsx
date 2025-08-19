import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-xl font-bold mb-6">AccuRack</h2>
        <nav className="space-y-2">
          <Link href="/" className="block py-2 px-3 rounded hover:bg-blue-100">Dashboard</Link>
          <Link href="/inventory" className="block py-2 px-3 rounded hover:bg-blue-100">Inventory</Link>
          <Link href="/orders" className="block py-2 px-3 rounded hover:bg-blue-100">Orders</Link>
          <Link href="/settings" className="block py-2 px-3 rounded hover:bg-blue-100">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="text-gray-600 text-sm">John Doe (Manager)</div>
        </header>

        {/* Page Content */}
        <section className="p-6 flex-1 overflow-y-auto">
          {children}
        </section>
      </main>
    </div>
  );
} 