import { getGalleryById } from '@/lib/supabase/gallery';
import { notFound } from 'next/navigation';
import EditGalleryClient from '@/components/admin/gallery/EditGalleryClient';

export default async function EditGalleryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let image;
  try {
    image = await getGalleryById(id);
  } catch {
    notFound();
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Edit Gallery Image</h2>
      <EditGalleryClient initialData={image} />
    </div>
  );
}