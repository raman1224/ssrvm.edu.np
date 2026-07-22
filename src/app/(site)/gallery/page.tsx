import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Gallery | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Explore the photo gallery of Sri Sri Ravishankar Vidya Mandir showcasing school events, activities, and memorable moments.',
  keywords: 'SSRVM Gallery, School Photos, School Events, Sri Sri Ravishankar Vidya Mandir, School Gallery',
  openGraph: {
    title: 'Gallery | Sri Sri Ravishankar Vidya Mandir',
    description: 'Explore the photo gallery of SSRVM showcasing school events and activities.',
    url: 'https://ssrvm.edu.np/gallery',
    images: [
      {
        url: '/images/og-gallery.jpg',
        width: 1200,
        height: 630,
        alt: 'SSRVM Gallery',
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