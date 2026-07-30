'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';
import { Notice } from '@/lib/supabase/notices';

const NoticeForm = dynamic(() => import('./NoticeForm'), {
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-sm">
      <Loader2 className="animate-spin text-[#183a6e]" size={32} />
    </div>
  ),
  ssr: false,
});

export default function EditNoticeClient({ initialData }: { initialData: Notice }) {
  return <NoticeForm initialData={initialData} />;
}