import { getEventById } from '@/lib/supabase/events';
import { notFound } from 'next/navigation';
import EditEventClient from '@/components/admin/events/EditEventClient';

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let event;
  try {
    event = await getEventById(id);
  } catch {
    notFound();
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Edit Event</h2>
      <EditEventClient initialData={event} />
    </div>
  );
}