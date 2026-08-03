// import { createServerSupabase } from '@/lib/supabase/server';
// import dynamic from "next/dynamic";

// const LogoutButton = dynamic(
//   () => import("@/components/admin/LogoutButton")
// );

// const AdminSidebar = dynamic(
//   () => import("@/components/admin/AdminSidebar")
// );

// export default async function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const supabase = await createServerSupabase();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     // Login page (child route) लाई bare render हुन दिने
//     return <div className="min-h-screen bg-gray-100">{children}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       <AdminSidebar />
//       <div className="flex-1 flex flex-col">
//         <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
//           <h1 className="font-semibold text-lg">SSRVM Admin Panel</h1>
//           <div className="flex items-center gap-4">
//             <span className="text-sm text-gray-500">{user.email}</span>
//             <LogoutButton />
//           </div>
//         </header>
//         <main className="p-6 flex-1">{children}</main>
//       </div>
//     </div>
//   );
// }

import { createServerSupabase } from '@/lib/supabase/server';
import dynamic from "next/dynamic";

const LogoutButton = dynamic(
  () => import("@/components/admin/LogoutButton"),
);

const AdminSidebar = dynamic(
  () => import("@/components/admin/AdminSidebar"),
);

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
    return <div className="min-h-screen bg-gray-100">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-2 sticky top-0 z-30">
          <h1 className="font-semibold text-base sm:text-lg text-[#183a6e]">SSRVM Admin Panel</h1>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-xs sm:text-sm text-gray-500 hidden xs:block">
              {user.email}
            </span>
            <LogoutButton />
          </div>
        </header>
        <main className="p-3 sm:p-4 md:p-6 flex-1 pb-20 md:pb-6">
          {children}
        </main>
      </div>
    </div>
  );
}