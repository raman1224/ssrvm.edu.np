import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Gallery | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Album of SSRVM ',
  keywords: 'Gallery SSRVM, Sri Sri Ravishankar Vidya Mandir, School in Biratnagar, Education Nepal',
  openGraph: {
    title: 'Gallery | Sri Sri Ravishankar Vidya Mandir',
    description: 'A revered temple of knowledge where every child\'s potential is nurtured.',
    url: 'https://ssrvm.edu.np/gallery',
    images: [
      {
        url: '/images/gallery/img1.webp',
        width: 1200,
        height: 630,
        alt: 'Gallery Sri Sri Ravishankar Vidya Mandir',
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Page Header with Breadcrumbs */}
      <PageHeader
        title="Album"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Album', active: true },
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