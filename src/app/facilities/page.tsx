import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { FacilitiesContent } from '@/components/facilities/FacilitiesContent';

export const metadata: Metadata = {
  title: 'Facilities | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Explore the world-class facilities at SSRVM including infrastructure, library, laboratories, sports facilities, and more.',
  keywords: 'SSRVM Facilities, School Infrastructure, Library, Laboratories, Smart Class, Sports Facilities, Computer Lab, Medical Facility',
  openGraph: {
    title: 'Facilities | Sri Sri Ravishankar Vidya Mandir',
    description: 'World-class facilities for holistic education and development at SSRVM.',
    url: 'https://ssrvm.edu.np/facilities',
    images: [
      {
        url: '/images/og-facilities.jpg',
        width: 1200,
        height: 630,
        alt: 'SSRVM Facilities',
      },
    ],
  },
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        title="Facilities"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Facilities', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FacilitiesContent />
        </div>
      </section>
    </>
  );
}