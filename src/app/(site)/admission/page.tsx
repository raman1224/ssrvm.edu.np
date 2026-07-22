import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { AdmissionForm } from '@/components/admission/AdmissionForm';

export const metadata: Metadata = {
  title: 'Admission | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Admissions are now open for the 2081(2024-25) session at Sri Sri Ravishankar Vidya Mandir. Limited seats available for Class I to IX.',
  keywords: 'SSRVM Admission, School Admission, Admission Form, Sri Sri Ravishankar Vidya Mandir, Biratnagar School Admission',
  openGraph: {
    title: 'Admission | Sri Sri Ravishankar Vidya Mandir',
    description: 'Admissions are now open for the 2081(2024-25) session. Limited seats available.',
    url: 'https://ssrvm.edu.np/admission',
    images: [
      {
        url: '/images/og-admission.jpg',
        width: 1200,
        height: 630,
        alt: 'Admission - Sri Sri Ravishankar Vidya Mandir',
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
        </div>
      </section>
    </>
  );
}