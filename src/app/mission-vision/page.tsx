import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { MissionVisionContent } from '@/components/mission-vision/MissionVisionContent';

export const metadata: Metadata = {
  title: 'Vision & Mission | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Our vision is to broaden the vision and deepen the roots. Our mission is to discover the true potential within every child through joy of learning.',
  keywords: 'SSRVM Vision, SSRVM Mission, School Vision, School Mission, Sri Sri Ravishankar Vidya Mandir',
  openGraph: {
    title: 'Vision & Mission | Sri Sri Ravishankar Vidya Mandir',
    description: 'Broaden the vision and deepen the roots - Discover the true potential within every child.',
    url: 'https://ssrvm.edu.np/mission-vision',
    images: [
      {
        url: '/images/og-mission-vision.jpg',
        width: 1200,
        height: 630,
        alt: 'Vision & Mission - Sri Sri Ravishankar Vidya Mandir',
      },
    ],
  },
};

export default function MissionVisionPage() {
  return (
    <>
      <PageHeader
        title="Mission and Vision"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mission and Vision', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MissionVisionContent />
        </div>
      </section>
    </>
  );
}