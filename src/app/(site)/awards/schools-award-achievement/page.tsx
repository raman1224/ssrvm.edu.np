import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const metadata: Metadata = {
  title: 'School Awards Achievements | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'School awards and achievements of Sri Sri Ravishankar Vidya Mandir including International School Award, certificates, and recognitions.',
  keywords: 'SSRVM Awards, School Achievements, International School Award, Certificates, Recognitions',
};

const awardsData = [
  {
    id: 1,
    image: '/images/award/17.jpg',
    title: 'International School Award 2020-2023',
  },
  {
    id: 2,
    image: '/images/award/18.jpg',
    title: 'Certificate of Authorisation',
  },
  {
    id: 3,
    image: '/images/award/19.jpg',
    title: 'Certificate of Appreciation by Embassy of India Camp Office',
  },
  {
    id: 4,
    image: '/images/award/20.jpg',
    title: 'Certificate of Appreciation By Biratnagar School Theatre Festival 2019',
  },
  {
    id: 5,
    image: '/images/award/21.jpg',
    title: 'Kadar Patra by Nepal Red Cross Society',
  },
  {
    id: 6,
    image: '/images/award/23.jpg',
    title: '13th Pabson Sports Meet 2080, Certificate of Excellence',
  },
  {
    id: 7,
    image: '/images/award/24.jpg',
    title: 'Certificate of Merit by Biratnagar Table Tennis Club',
  },
];

export default function SchoolAwardsPage() {
  return (
    <>
      <PageHeader
        title="Awards Achievements Details"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Awards', href: '/awards' },
          { label: 'School Awards', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsData.map((award) => (
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