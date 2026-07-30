import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { getUpcomingEvents, getPastEvents } from '@/lib/supabase/events';
import Image from 'next/image';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events | Sri Sri Ravishankar Vidya Mandir',
  description: 'Upcoming and past events at SSRVM Biratnagar.',
};

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const activeTab = tab === 'past' ? 'past' : 'upcoming';

  const events = activeTab === 'upcoming' ? await getUpcomingEvents() : await getPastEvents();

  return (
    <>
      <PageHeader
        title="Events"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 mb-8">
            <Link
              href="/events?tab=upcoming"
              className={`px-5 py-2 rounded-full text-sm font-medium ${
                activeTab === 'upcoming' ? 'bg-[#183a6e] text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              Upcoming
            </Link>
            <Link
              href="/events?tab=past"
              className={`px-5 py-2 rounded-full text-sm font-medium ${
                activeTab === 'past' ? 'bg-[#183a6e] text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              Past Events
            </Link>
          </div>

          {events.length === 0 ? (
            <p className="text-center text-gray-500 py-16">No {activeTab} events.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((ev) => (
                <div key={ev.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border">
                  <div className="relative h-44 w-full bg-gray-100">
                    {ev.cover_image ? (
                      <Image src={ev.cover_image} alt={ev.title} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#183a6e] to-[#2c7ac2] text-white text-sm">
                        SSRVM
                      </div>
                    )}
                    <span className="absolute top-3 left-3 bg-[#f0aa00] text-[#002749] text-xs font-semibold px-3 py-1 rounded-full">
                      {ev.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">{ev.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">{ev.description}</p>
                    <div className="space-y-1.5 text-xs text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {new Date(ev.event_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </div>
                      {ev.event_time && (
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} /> {ev.event_time}
                        </div>
                      )}
                      {ev.venue && (
                        <div className="flex items-center gap-1.5">
                          <MapPin size={13} /> {ev.venue}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}