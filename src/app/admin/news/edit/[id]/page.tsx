import { getNewsById } from '@/lib/supabase/news';
import { notFound } from 'next/navigation';
// import EditNewsClient from '@/components/admin/news/EditNewsClient';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';
const EditNewsClient = dynamic(() => import('@/components/admin/news/EditNewsClient'), {
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-sm">
      <Loader2 className="animate-spin text-[#183a6e]" size={32} />
    </div>
  ),
  ssr: false,
});

export default async function EditNewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let newsItem;
  try {
    newsItem = await getNewsById(id);
  } catch {
    notFound();
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Edit News</h2>
      <EditNewsClient initialData={newsItem} />
    </div>
  );
}