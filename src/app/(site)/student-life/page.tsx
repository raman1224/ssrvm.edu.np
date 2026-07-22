// src/app/student-life/page.tsx
import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { StudentLifeContent } from '@/components/studentlife/StudentLifeContent';

export const metadata: Metadata = {
  title: 'Student Life | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Explore the vibrant student life at SSRVM including sporting activities, co-curricular activities, community services, student council, field trips, and project day sessions.',
  keywords: 'SSRVM Student Life, Sporting Activities, Co-curricular Activities, Community Services, Student Council, Field Trips, Project Day, School Activities',
  openGraph: {
    title: 'Student Life | Sri Sri Ravishankar Vidya Mandir',
    description: 'Explore the vibrant student life at SSRVM with diverse activities and opportunities for holistic development.',
    url: 'https://ssrvm.edu.np/student-life',
    images: [
      {
        url: '/images/og-student-life.jpg',
        width: 1200,
        height: 630,
        alt: 'SSRVM Student Life',
      },
    ],
  },
};

export default function StudentLifePage() {
  return (
    <>
      <PageHeader
        title="Student Life"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Student Life', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StudentLifeContent />
        </div>
      </section>
    </>
  );
}