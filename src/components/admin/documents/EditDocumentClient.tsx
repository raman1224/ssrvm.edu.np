'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';
import { DocumentItem } from '@/lib/supabase/documents';

const DocumentForm = dynamic(() => import('./DocumentForm'), {
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-sm">
      <Loader2 className="animate-spin text-[#183a6e]" size={32} />
    </div>
  ),
  ssr: false,
});

export default function EditDocumentClient({ initialData }: { initialData: DocumentItem }) {
  return <DocumentForm initialData={initialData} />;
}