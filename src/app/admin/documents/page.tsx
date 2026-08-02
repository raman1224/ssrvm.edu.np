'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const DocumentTable = dynamic(() => import('@/components/admin/documents/DocumentTable'), {
  loading: () => <p className="text-gray-500 py-8 text-center">Loading documents...</p>,
});

export default function AdminDocumentsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Downloads / Documents</h2>
        <Link
          href="/admin/documents/create"
          className="flex items-center gap-2 bg-[#183a6e] text-white px-4 py-2 rounded-lg text-sm hover:opacity-90"
        >
          <Plus size={16} /> Add Document
        </Link>
      </div>
      <DocumentTable />
    </div>
  );
}