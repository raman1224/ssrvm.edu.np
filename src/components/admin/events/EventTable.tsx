'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllEventsAdmin, deleteEvent, Event } from '@/lib/supabase/events';
import { Pencil, Trash2 } from 'lucide-react';

export default function EventTable() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadEvents() {
    setLoading(true);
    const data = await getAllEventsAdmin();
    setEvents(data);
    setLoading(false);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm('Delete this event?')) return;
    setEvents((prev) => prev.filter((e) => e.id !== id));
    try {
      await deleteEvent(id);
    } catch {
      alert('Failed to delete. Please refresh.');
      loadEvents();
    }
  }

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (events.length === 0) return <p className="text-gray-500">No events yet.</p>;

  const isUpcoming = (date: string) => new Date(date) >= new Date(new Date().toDateString());

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left text-gray-500">
          <tr>
            <th className="px-4 py-3">Title</th>
                        <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Venue</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((ev) => (
            <tr key={ev.id} className="border-t">
              <td className="px-4 py-3 font-medium flex items-center gap-2">
                {ev.is_featured}
                {ev.title}
              </td>
                <td className="px-4 py-3 font-medium  ">
                {ev.description}
              </td>
              <td className="px-4 py-3 text-gray-500">
                {new Date(ev.event_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </td>
              <td className="px-4 py-3 text-gray-500">{ev.venue || '—'}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    isUpcoming(ev.event_date)
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {isUpcoming(ev.event_date) ? 'Upcoming' : 'Past'}
                </span>
              </td>
              <td className="px-4 py-3 text-right space-x-3">
                <Link href={`/admin/events/edit/${ev.id}`}>
                  <Pencil size={16} className="inline text-blue-600 hover:opacity-70" />
                </Link>
                <button onClick={() => handleDelete(ev.id)}>
                  <Trash2 size={16} className="inline text-red-600 hover:opacity-70" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}