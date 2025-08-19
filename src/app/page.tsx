import UserBadge from '@/components/UserBadge';
import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function HomePage() {
  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold mb-4">Welcome to AccuRack 🚀</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-6 rounded-lg shadow">📦 Inventory</div>
        <div className="bg-white p-6 rounded-lg shadow">📑 Orders</div>
        <div className="bg-white p-6 rounded-lg shadow">📈 Reports</div>
      </div>
      
      <UserBadge />
    </DashboardLayout>
  );
}
