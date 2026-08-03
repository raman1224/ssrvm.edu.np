// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { LayoutDashboard, FileText, Image, Bell, Calendar, Newspaper, Download } from 'lucide-react';

// const menuItems = [
//   { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
//   { label: 'Blog', href: '/admin/blog', icon: FileText },
//   { label: 'Gallery', href: '/admin/gallery', icon: Image },
//   { label: 'Events', href: '/admin/events', icon: Calendar },
//   { label: 'Notices', href: '/admin/notices', icon: Bell },
//     { label: 'News', href: '/admin/news', icon: Newspaper },
//   { label: 'Downloads', href: '/admin/documents', icon: Download },

// ];

// export default function AdminSidebar() {
//   const pathname = usePathname();

//   return (
//     <aside className="w-60 bg-[#183a6e] min-h-screen flex-shrink-0">
//       <div className="px-5 py-5 border-b border-white/10">
//         <h2 className="text-white font-bold text-sm">SSRVM CMS</h2>
//       </div>
//       <nav className="p-3 space-y-1">
//         {menuItems.map((item) => {
//           const isActive = pathname.startsWith(item.href);
//           const Icon = item.icon;
//           return (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
//                 isActive
//                   ? 'bg-white text-[#183a6e] font-medium'
//                   : 'text-white/80 hover:bg-white/10'
//               }`}
//             >
//               <Icon size={18} />
//               {item.label}
//             </Link>
//           );
//         })}
//       </nav>
//     </aside>
//   );
// }


'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Image, Bell, Calendar, Newspaper, Download, Menu, X } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';

const menuItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Blog', href: '/admin/blog', icon: FileText },
  { label: 'Gallery', href: '/admin/gallery', icon: Image },
  { label: 'Events', href: '/admin/events', icon: Calendar },
  { label: 'Notices', href: '/admin/notices', icon: Bell },
  { label: 'News', href: '/admin/news', icon: Newspaper },
  { label: 'Downloads', href: '/admin/documents', icon: Download },
];

// Mobile bottom nav items (first 4)
const mobileNavItems = menuItems.slice(0, 4);
const moreItems = menuItems.slice(4);

export default function AdminSidebar() {
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSidebar = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Desktop Sidebar
  if (!isMobile) {
    return (
      <aside className="w-60 bg-[#183a6e] min-h-screen flex-shrink-0 sticky top-0">
        <div className="px-5 py-5 border-b border-white/10">
          <h2 className="text-white font-bold text-sm">SSRVM CMS</h2>
        </div>
        <nav className="p-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
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

  // Mobile: Bottom Navigation + Slide-out Sidebar
  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
        <div className="flex items-center justify-around py-1">
          {mobileNavItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg transition-colors min-w-[56px] ${
                  isActive
                    ? 'text-[#183a6e]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
          {/* More Button */}
          <button
            onClick={toggleSidebar}
            className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg transition-colors min-w-[56px] ${
              isOpen ? 'text-[#183a6e]' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="text-[10px] font-medium">More</span>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Slide-out Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#183a6e] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
          <h2 className="text-white font-bold text-sm">SSRVM CMS</h2>
          <button
            onClick={closeSidebar}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
          {moreItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeSidebar}
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
          {/* Divider */}
          <div className="border-t border-white/10 my-2"></div>
          {/* Show all items in sidebar for quick access */}
          {menuItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const Icon = item.icon;
            return (
              <Link
                key={`all-${item.href}`}
                href={item.href}
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-white text-[#183a6e] font-medium'
                    : 'text-white/60 hover:bg-white/10 hover:text-white/80'
                }`}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Padding for bottom nav */}
      <div className="pb-16 md:pb-0" />
    </>
  );
}