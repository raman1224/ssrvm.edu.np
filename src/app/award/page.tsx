import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { AdmissionForm } from '@/components/admission/AdmissionForm';

export const metadata: Metadata = {
  title: 'Admission | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Admission of SSRVM ',
  keywords: 'Admission SSRVM, Sri Sri Ravishankar Vidya Mandir, School in Biratnagar, Education Nepal',
  openGraph: {
    title: 'Admission | Sri Sri Ravishankar Vidya Mandir',
    description: 'A revered temple of knowledge where every child\'s potential is nurtured.',
    url: 'https://ssrvm.edu.np/gallery',
    images: [
      {
        url: '/images/img1.webp',
        width: 1200,
        height: 630,
        alt: 'Admission Sri Sri Ravishankar Vidya Mandir',
      },
    ],
  },
};

export default function AdmissionPage() {
  return (
    <>
      {/* Page Header with Breadcrumbs */}
      <PageHeader
        title="Admission"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admission', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      {/* About Content */}
      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdmissionForm />
                <AdmissionForm />

        </div>
      </section>
    </>
  );
}