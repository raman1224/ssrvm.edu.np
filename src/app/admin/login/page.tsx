'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { Lock, Mail, Loader2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      setError('Invalid email or password.');
      return;
    }

    router.push('/admin/dashboard');
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#183a6e] via-[#2c7ac2] to-[#01519c] px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Top brand strip */}
          <div className="bg-[#183a6e] px-8 py-6 text-center">
            <div className="w-14 h-14 bg-white rounded-full mx-auto flex items-center justify-center mb-3">
              <Lock className="text-[#183a6e]" size={26} />
            </div>
            <h1 className="text-white font-bold text-lg">SSRVM Admin Panel</h1>
            <p className="text-white/70 text-xs mt-1">Sri Sri Ravishankar Vidya Mandir</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2c7ac2] focus:border-transparent"
                  placeholder="admin@ssrvm.edu.np"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2c7ac2] focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-600 text-sm bg-red-50 border border-red-100 px-3 py-2 rounded-lg">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#8d27d6] via-[#2c7ac2] to-[#01519c] text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
        <p className="text-center text-white/60 text-xs mt-4">
          Authorized personnel only.
        </p>
      </div>
    </div>
  );
}