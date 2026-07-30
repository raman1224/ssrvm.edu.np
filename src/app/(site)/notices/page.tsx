import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { getActiveNotices } from '@/lib/supabase/notices';
import Image from 'next/image';
import Link from 'next/link';
import { Pin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Notices | Sri Sri Ravishankar Vidya Mandir',
  description: 'Latest notices and announcements from SSRVM Biratnagar.',
};

export default async function NoticesPage() {
  const notices = await getActiveNotices(50);

  return (
    <>
      <PageHeader
        title="Notices"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Notices', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {notices.length === 0 ? (
            <p className="text-center text-gray-500 py-16">No notices at the moment.</p>
          ) : (
            notices.map((n) => (
              <div key={n.id} className="border rounded-xl p-5 flex gap-4 hover:shadow-md transition-shadow">
                {n.image_url && (
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image src={n.image_url} alt={n.title} fill className="object-cover" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {n.is_pinned && <Pin size={14} className="text-[#f0aa00]" />}
                    <h3 className="font-semibold text-gray-800">{n.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{n.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-gray-400">
                      {new Date(n.created_at).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'short', year: 'numeric',
                      })}
                    </span>
                    {n.link_url && (
                      <Link href={n.link_url} target="_blank" className="text-xs text-[#183a6e] font-medium hover:underline">
                        View Details →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}