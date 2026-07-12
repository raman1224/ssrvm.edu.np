import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { JobApplication } from '@/components/career/JobApplication';

export const metadata: Metadata = {
  title: 'Career | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Career opportunities at Sri Sri Ravishankar Vidya Mandir. Join our team of dedicated educators and staff.',
  keywords: 'SSRVM Career, School Jobs, Teaching Jobs, Career Opportunities, Sri Sri Ravishankar Vidya Mandir',
  openGraph: {
    title: 'Career | Sri Sri Ravishankar Vidya Mandir',
    description: 'Career opportunities at SSRVM - Join our team of dedicated educators.',
    url: 'https://ssrvm.edu.np/career',
    images: [
      {
        url: '/images/og-career.jpg',
        width: 1200,
        height: 630,
        alt: 'Career - Sri Sri Ravishankar Vidya Mandir',
      },
    ],
  },
};
export default function CareerPage() {
  return (
    <>
      {/* Page Header with Breadcrumbs */}
      <PageHeader
        title="Career"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Career', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      {/* About Content */}
      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <JobApplication />
        </div>
      </section>
    </>
  );
}