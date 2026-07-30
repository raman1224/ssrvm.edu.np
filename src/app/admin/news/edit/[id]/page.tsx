import { getNewsById } from '@/lib/supabase/news';
import { notFound } from 'next/navigation';
import EditNewsClient from '@/components/admin/news/EditNewsClient';

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