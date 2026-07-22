import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const metadata: Metadata = {
  title: "Principal's Awards Achievements | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal",
  description: "Principal's awards and achievements of Sri Sri Ravishankar Vidya Mandir.",
  keywords: "SSRVM Principal Awards, Academic Enrichment Meet, Principal Achievements",
};

const principalAwards = [
  {
    id: 1,
    image: '/images/award/25.jpg',
    title: 'Academic Enrichment Meet',
  },
];

export default function PrincipalAwardsPage() {
  return (
    <>
      <PageHeader
        title="Awards Achievements Details"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Awards', href: '/awards' },
          { label: "Principal's Awards", active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {principalAwards.map((award) => (
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