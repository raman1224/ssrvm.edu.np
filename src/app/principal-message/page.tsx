import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { PrincipalMessage } from '@/components/home/PrincipalMessage';

export const metadata: Metadata = {
  title: 'SSRVM Principal Message | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'SSRVM Principal Message - We never compromise on our values. Our core values and the goal of education is to increase awareness not information.',
  keywords: 'SSRVM Principal Message, Core Values, Education Philosophy, Sri Sri Ravishankar Vidya Mandir, Values Education',
  openGraph: {
    title: 'SSRVM Principal Message | Sri Sri Ravishankar Vidya Mandir',
    description: 'We never compromise on our values. The goal of education is to increase awareness not information.',
    url: 'https://ssrvm.edu.np/principal-message',
    images: [
      {
        url: '/images/og-principalmessage.jpg',
        width: 1200,
        height: 630,
        alt: 'SSRVM Principal Message - Core Values',
      },
    ],
  },
};

export default function PrincipalMessagePage() {
  return (
    <>
      <PageHeader
        title="Principal Message"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'Principal Message', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PrincipalMessage />
        </div>
      </section>
    </>
  );
}