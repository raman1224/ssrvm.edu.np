import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Soft Copies | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Download soft copies and documents from Sri Sri Ravishankar Vidya Mandir including school calendars, syllabi, and academic resources.',
  keywords: 'SSRVM Soft Copies, School Documents, Download Forms, Sri Sri Ravishankar Vidya Mandir',
  openGraph: {
    title: 'Soft Copies | Sri Sri Ravishankar Vidya Mandir',
    description: 'Download soft copies and documents from SSRVM.',
    url: 'https://ssrvm.edu.np/soft-copies',
    images: [
      {
        url: '/images/og-soft-copies.jpg',
        width: 1200,
        height: 630,
        alt: 'Soft Copies - Sri Sri Ravishankar Vidya Mandir',
      },
    ],
  },
};

export default function SoftCopiesPage() {
  return (
    <>
      {/* Page Header with Breadcrumbs */}
      <PageHeader
        title="SoftCopies"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'SoftCopies', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      {/* SoftCopies Content */}
      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        Under Construction
        </div>
      </section>
    </>
  );
}