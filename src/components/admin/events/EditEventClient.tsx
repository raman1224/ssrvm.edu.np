'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';
import { Event } from '@/lib/supabase/events';

const EventForm = dynamic(() => import('./EventForm'), {
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-sm">
      <Loader2 className="animate-spin text-[#183a6e]" size={32} />
    </div>
  ),
  ssr: false,
});

export default function EditEventClient({ initialData }: { initialData: Event }) {
  return <EventForm initialData={initialData} />;
}