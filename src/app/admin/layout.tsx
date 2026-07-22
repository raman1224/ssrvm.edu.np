import { createServerSupabase } from '@/lib/supabase/server';
import LogoutButton from '@/components/admin/LogoutButton';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // Login page (child route) लाई bare render हुन दिने
    return <div className="min-h-screen bg-gray-100">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">SSRVM Admin Panel</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{user.email}</span>
            <LogoutButton />
          </div>
        </header>
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}