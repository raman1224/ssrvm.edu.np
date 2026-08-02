import { getDocumentById } from '@/lib/supabase/documents';
import { notFound } from 'next/navigation';
import EditDocumentClient from '@/components/admin/documents/EditDocumentClient';

export default async function EditDocumentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let doc;
  try {
    doc = await getDocumentById(id);
  } catch {
    notFound();
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Edit Document</h2>
      <EditDocumentClient initialData={doc} />
    </div>
  );
}