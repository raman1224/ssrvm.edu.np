import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ActivitiesContent } from '@/components/activities/ActivitiesContent';

export const metadata: Metadata = {
  title: 'Activities | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Explore the wide range of activities at SSRVM including Indoor Sports, Outdoor Sports, Dance & Music, Art, Community Service, and Educational Trips.',
  keywords: 'SSRVM Activities, Indoor Sports, Outdoor Sports, Dance, Music, Art, Community Service, Educational Trips, School Activities',
  openGraph: {
    title: 'Activities | Sri Sri Ravishankar Vidya Mandir',
    description: 'Explore the wide range of activities at SSRVM for holistic development.',
    url: 'https://ssrvm.edu.np/activities',
    images: [
      {
        url: '/images/og-activities.jpg',
        width: 1200,
        height: 630,
        alt: 'SSRVM Activities',
      },
    ],
  },
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        title="Activities"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Activities', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ActivitiesContent />
        </div>
      </section>
    </>
  );
}