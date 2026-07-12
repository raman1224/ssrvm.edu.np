import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { PrincipalMessage } from '@/components/home/PrincipalMessage';

export const metadata: Metadata = {
  title: "Principal's Message | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal",
  description: "Principal's message from Sri Sri Ravishankar Vidya Mandir. Our Principal shares her vision and commitment to holistic education.",
  keywords: 'Principal Message, SSRVM Principal, Seema Agrawal, School Principal, Sri Sri Ravishankar Vidya Mandir',
  openGraph: {
    title: "Principal's Message | Sri Sri Ravishankar Vidya Mandir",
    description: "Principal's vision and commitment to holistic education at SSRVM.",
    url: 'https://ssrvm.edu.np/principal-message',
    images: [
      {
        url: '/images/og-principal.jpg',
        width: 1200,
        height: 630,
        alt: "Principal's Message - Sri Sri Ravishankar Vidya Mandir",
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