import UserBadge from '@/components/UserBadge';
import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function HomePage() {
  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold mb-4">Welcome to AccuRack 🚀</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="text-2xl mb-2">📦</div>
          <h3 className="font-semibold">Inventory</h3>
          <p className="text-sm text-gray-600">Manage products & stock</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="text-2xl mb-2">📑</div>
          <h3 className="font-semibold">Orders</h3>
          <p className="text-sm text-gray-600">Track customer orders</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="text-2xl mb-2">👥</div>
          <h3 className="font-semibold">Users</h3>
          <p className="text-sm text-gray-600">Manage team members</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="text-2xl mb-2">📊</div>
          <h3 className="font-semibold">Reports</h3>
          <p className="text-sm text-gray-600">Analytics & insights</p>
        </div>
      </div>
      
      <UserBadge />
    </DashboardLayout>
  );
}
