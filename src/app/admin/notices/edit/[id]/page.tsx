import { getNoticeById } from '@/lib/supabase/notices';
import { notFound } from 'next/navigation';
import EditNoticeClient from '@/components/admin/notices/EditNoticeClient';

export default async function EditNoticePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let notice;
  try {
    notice = await getNoticeById(id);
  } catch {
    notFound();
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Edit Notice</h2>
      <EditNoticeClient initialData={notice} />
    </div>
  );
}