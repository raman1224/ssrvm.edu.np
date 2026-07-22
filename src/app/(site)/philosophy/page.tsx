import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { PhilosophyContent } from '@/components/philosophy/PhilosophyContent';

export const metadata: Metadata = {
  title: 'SSRVM Philosophy | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'SSRVM Philosophy - We never compromise on our values. Our core values and the goal of education is to increase awareness not information.',
  keywords: 'SSRVM Philosophy, Core Values, Education Philosophy, Sri Sri Ravishankar Vidya Mandir, Values Education',
  openGraph: {
    title: 'SSRVM Philosophy | Sri Sri Ravishankar Vidya Mandir',
    description: 'We never compromise on our values. The goal of education is to increase awareness not information.',
    url: 'https://ssrvm.edu.np/philosophy',
    images: [
      {
        url: '/images/og-philosophy.jpg',
        width: 1200,
        height: 630,
        alt: 'SSRVM Philosophy - Core Values',
      },
    ],
  },
};
export default function PhilosophyPage() {
  return (
    <>
      <PageHeader
        title="SSRVM Philosophy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'SSRVM Philosophy', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhilosophyContent />
        </div>
      </section>
    </>
  );
}