'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const NewsForm = dynamic(() => import('@/components/admin/news/NewsForm'), {
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-sm">
      <Loader2 className="animate-spin text-[#183a6e]" size={32} />
    </div>
  ),
  ssr: false,
});

export default function CreateNewsPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Create News</h2>
      <NewsForm />
    </div>
  );
}