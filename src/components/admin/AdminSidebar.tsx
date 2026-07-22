'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Image, GraduationCap, Bell } from 'lucide-react';

const menuItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Blog', href: '/admin/blog', icon: FileText },
  { label: 'Gallery', href: '/admin/gallery', icon: Image },
  { label: 'Admissions', href: '/admin/admissions', icon: GraduationCap },
  { label: 'Notices', href: '/admin/notices', icon: Bell },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-[#183a6e] min-h-screen flex-shrink-0">
      <div className="px-5 py-5 border-b border-white/10">
        <h2 className="text-white font-bold text-sm">SSRVM CMS</h2>
      </div>
      <nav className="p-3 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-white text-[#183a6e] font-medium'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}