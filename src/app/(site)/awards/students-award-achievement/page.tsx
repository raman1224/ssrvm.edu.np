import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const metadata: Metadata = {
  title: "Student's Awards Achievements | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal",
  description: "Student's awards and achievements of Sri Sri Ravishankar Vidya Mandir.",
  keywords: "SSRVM Student Awards, Student Achievements, Recognitions",
};

const studentAwards = [
  {
    id: 1,
    image: '/images/award/student1.jpg',
    title: 'Student Achievement Award 2023',
  },
  {
    id: 2,
    image: '/images/award/student2.jpg',
    title: 'Academic Excellence Award',
  },
  {
    id: 3,
    image: '/images/award/student3.jpg',
    title: 'Sports Achievement Certificate',
  },
];

export default function StudentsAwardsPage() {
  return (
    <>
      <PageHeader
        title="Awards Achievements Details"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Awards', href: '/awards' },
          { label: "Student's Awards", active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentAwards.map((award) => (
              <div
                key={award.id}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                  <OptimizedImage
                    src={award.image}
                    alt={award.title}
                    fill
                    className="w-full h-full"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 bg-[#012653] min-h-[60px] flex items-center">
                  <h3 className="text-white text-sm font-medium leading-relaxed text-center w-full">
                    {award.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}