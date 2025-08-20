import DashboardLayout from "@/components/layouts/DashboardLayout";
import UserTable from "@/components/users/UserTable";

export default function UsersPage() {
  return (
    <DashboardLayout>
      <UserTable />
    </DashboardLayout>
  );
} 