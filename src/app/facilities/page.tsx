// import { Metadata } from 'next';
// import { PageHeader } from '@/components/ui/PageHeader';
// import { FacilitiesContent } from '@/components/facilities/FacilitiesContent';

// export const metadata: Metadata = {
//   title: 'Facilities | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
//   description: 'Explore the world-class facilities at SSRVM including infrastructure, library, laboratories, sports facilities, and more.',
//   keywords: 'SSRVM Facilities, School Infrastructure, Library, Laboratories, Smart Class, Sports Facilities, Computer Lab, Medical Facility',
//   openGraph: {
//     title: 'Facilities | Sri Sri Ravishankar Vidya Mandir',
//     description: 'World-class facilities for holistic education and development at SSRVM.',
//     url: 'https://ssrvm.edu.np/facilities',
//     images: [
//       {
//         url: '/images/og-facilities.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'SSRVM Facilities',
//       },
//     ],
//   },
// };

// export default function FacilitiesPage() {
//   return (
//     <>
//       <PageHeader
//         title="Facilities"
//         breadcrumbs={[
//           { label: 'Home', href: '/' },
//           { label: 'Facilities', active: true },
//         ]}
//         backgroundImage="/images/bg3.webp"
//       />

//       <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <FacilitiesContent />
//         </div>
//       </section>
//     </>
//   );
// }
// src/app/facilities/page.tsx
import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { FacilitiesSidebar } from '@/components/facilities/FacilitiesSidebar';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { getFacilityBySlug } from '@/lib/facilities-data';

export const metadata: Metadata = {
  title: 'Facilities | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description:
    'Explore the facilities at SSRVM including infrastructure, library, laboratories, sports facilities, and more.',
  keywords:
    'SSRVM Facilities, School Infrastructure, Library, Laboratories, Smart Class, Sports Facilities, Computer Lab, Medical Facility',
  openGraph: {
    title: 'Facilities | Sri Sri Ravishankar Vidya Mandir',
    description: 'Facilities for holistic education and development at SSRVM.',
    url: 'https://ssrvm.edu.np/facilities',
    images: [
      {
        url: '/images/og-facilities.jpg',
        width: 1200,
        height: 630,
        alt: 'SSRVM Facilities',
      },
    ],
  },
};

export default function FacilitiesPage() {
  const facility = getFacilityBySlug('infrastructure')!;

  return (
    <>
      <PageHeader
        title="Facilities"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Facilities', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
            <FacilitiesSidebar />

            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-900 sm:text-3xl">
                {facility.title}
              </h2>
              <div className="mt-2 mb-6 h-1 w-14 bg-[#0561ab]" />

              <p className="max-w-3xl text-[15px] leading-relaxed text-gray-600">
                {facility.description}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {facility.images?.map((image, idx) => (
                  <div
                    key={`${facility.slug}-${idx}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:scale-[1.02] hover:shadow-md"
                  >
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}