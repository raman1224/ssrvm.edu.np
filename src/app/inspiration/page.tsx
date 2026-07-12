import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { InspirationTabs } from '@/components/inspiration/InspirationTabs';

export const metadata: Metadata = {
  title: 'Our Inspiration | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Founded by Gurudev Sri Sri Ravi Shankar, a globally revered spiritual and humanitarian leader. Our inspiration comes from the Art of Living Foundation.',
  keywords: 'Gurudev Sri Sri Ravi Shankar, Art of Living, SSRVM Trust, Inspiration, Sri Sri Ravishankar Vidya Mandir',
  openGraph: {
    title: 'Our Inspiration | Sri Sri Ravishankar Vidya Mandir',
    description: 'Founded by Gurudev Sri Sri Ravi Shankar, a globally revered spiritual and humanitarian leader.',
    url: 'https://ssrvm.edu.np/inspiration',
    images: [
      {
        url: '/images/og-inspiration.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Inspiration - Gurudev Sri Sri Ravi Shankar',
      },
    ],
  },
};
export default function InspirationPage() {
  return (
    <>
      <PageHeader
        title="Our Inspiration"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Inspiration', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InspirationTabs />
        </div>
      </section>
    </>
  );
}