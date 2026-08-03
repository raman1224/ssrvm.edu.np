'use client';

import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { LogOut } from 'lucide-react';
import { useState } from 'react';

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
    setLoading(false);
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 hover:text-red-600 transition-colors disabled:opacity-50"
    >
      <LogOut size={16} className="sm:size-18" />
      <span className="hidden sm:inline">Logout</span>
    </button>
  );
}