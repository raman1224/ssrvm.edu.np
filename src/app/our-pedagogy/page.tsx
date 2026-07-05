import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { PedagogyTabs } from '@/components/pedagogy/PedagogyTabs';

export const metadata: Metadata = {
  title: 'Our Pedagogy | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'SSRVM Strategy & Our Pedagogy - Learn about our unique 5 Aspects of Education: Concept, Information, Attitude, Imagination & Freedom.',
  keywords: 'SSRVM Pedagogy, Teaching Strategy, 5 Aspects of Education, Sri Sri Ravishankar Vidya Mandir, Education Methodology',
  openGraph: {
    title: 'Our Pedagogy | Sri Sri Ravishankar Vidya Mandir',
    description: 'SSRVM Strategy & Our Pedagogy - The 5 Aspects of Education for holistic development.',
    url: 'https://ssrvm.edu.np/our-pedagogy',
    images: [
      {
        url: '/images/pedagogy/og-pedagogy.jpg',
        width: 1200,
        height: 630,
        alt: 'SSRVM Strategy & Our Pedagogy',
      },
    ],
  },
};

export default function PedagogyPage() {
  return (
    <>
      <PageHeader
        title="Our Pedagogy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'Our Pedagogy', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-[#ebf2f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PedagogyTabs />
        </div>
      </section>

      {/* Bottom Strategy Image */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/pedagogy/teaching.webp" 
              alt="SSRVM Teaching Strategy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}