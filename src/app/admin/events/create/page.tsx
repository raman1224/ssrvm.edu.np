'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const EventForm = dynamic(() => import('@/components/admin/events/EventForm'), {
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-sm">
      <Loader2 className="animate-spin text-[#183a6e]" size={32} />
    </div>
  ),
  ssr: false,
});

export default function CreateEventPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Create Event</h2>
      <EventForm />
    </div>
  );
}