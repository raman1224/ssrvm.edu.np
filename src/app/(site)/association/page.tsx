import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Association | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'SSRVM Association - Parent-Teacher Association and other school associations. Get involved in school activities and events.',
  keywords: 'SSRVM Association, PTA, Parent Teacher Association, School Associations, Sri Sri Ravishankar Vidya Mandir',
  openGraph: {
    title: 'Association | Sri Sri Ravishankar Vidya Mandir',
    description: 'SSRVM Association - Get involved in school activities and events.',
    url: 'https://ssrvm.edu.np/association',
    images: [
      {
        url: '/images/og-association.jpg',
        width: 1200,
        height: 630,
        alt: 'Association - Sri Sri Ravishankar Vidya Mandir',
      },
    ],
  },
};

export default function AssociationPage() {
  return (
    <>
      {/* Page Header with Breadcrumbs */}
      <PageHeader
        title="Association"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Association', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      {/* About Content */}
      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        Under Construction
        </div>
      </section>
    </>
  );
}