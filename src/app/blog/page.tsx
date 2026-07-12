import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Blog | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Read the latest blogs and articles from Sri Sri Ravishankar Vidya Mandir about education, activities, and school events.',
  keywords: 'SSRVM Blog, School Blog, Education Articles, Sri Sri Ravishankar Vidya Mandir',
  openGraph: {
    title: 'Blog | Sri Sri Ravishankar Vidya Mandir',
    description: 'Read the latest blogs and articles from SSRVM.',
    url: 'https://ssrvm.edu.np/blog',
    images: [
      {
        url: '/images/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog - Sri Sri Ravishankar Vidya Mandir',
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Page Header with Breadcrumbs */}
      <PageHeader
        title="Blog"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', active: true },
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