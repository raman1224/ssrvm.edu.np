'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const NewsTable = dynamic(() => import('@/components/admin/news/NewsTable'), {
  loading: () => <p className="text-gray-500 py-8 text-center">Loading news...</p>,
});

export default function AdminNewsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">News</h2>
        <Link
          href="/admin/news/create"
          className="flex items-center gap-2 bg-[#183a6e] text-white px-4 py-2 rounded-lg text-sm hover:opacity-90"
        >
          <Plus size={16} /> New Article
        </Link>
      </div>
      <NewsTable />
    </div>
  );
}