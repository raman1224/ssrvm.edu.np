import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const metadata: Metadata = {
  title: 'About Us | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Sri Sri Ravishankar Vidya Mandir, a revered temple of knowledge where every child\'s potential is nurtured. Established in 2064 B.S.',
  keywords: 'About SSRVM, Sri Sri Ravishankar Vidya Mandir, School in Biratnagar, Education Nepal',
  openGraph: {
    title: 'About Us | Sri Sri Ravishankar Vidya Mandir',
    description: 'A revered temple of knowledge where every child\'s potential is nurtured.',
    url: 'https://ssrvm.edu.np/about',
    images: [
      {
        url: '/images/about/img1.webp',
        width: 1200,
        height: 630,
        alt: 'About Sri Sri Ravishankar Vidya Mandir',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header with Breadcrumbs */}
      <PageHeader
        title="About School"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      {/* About Content */}
      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Feature Image */}
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-lg overflow-hidden shadow-lg mb-8 md:mb-12">
            <OptimizedImage
              src="/images/about/img1.webp"
              alt="Sri Sri Ravishankar Vidya Mandir Campus"
              fill
              priority
              className="w-full h-full"
              objectFit="cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              Sri Sri Ravishankar Vidya Mandir, a revered temple of knowledge where every child&apos;s potential is nurtured. 
              At our institution, we embrace the profound principle of &apos;Vidya Dadati Poornatvam&apos; (Education Brings Completeness), 
              guiding our dedication to holistic development.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Established in 2064 B.S., our co-educational school is dedicated to offering quality education with co-scholastic 
              development like music, sports, art and listening and speaking skills. Aligned with the National Curriculum (SEE), 
              we uphold rigorous standards while integrating global educational best practices.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Our methodology goes beyond academics, fostering a conducive environment where each child blossoms intellectually, 
              emotionally and spiritually. We prioritize the cultivation of academic excellence alongside the inculcation of 
              essential human values, ensuring a well-rounded educational experience.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              At Sri Sri Ravishankar Vidya Mandir, we recognize that education extends beyond the classroom. Through comprehensive 
              life skill development and the practice of yoga, we empower the students to navigate life&apos;s challenges with 
              confidence and resilience. Our focus on ethics and holistic development prepares them to tackle tomorrow&apos;s 
              challenges with grace and determination.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              We believe that every child is a star and a manifestation of the divine. Through personalized attention and a 
              healthy teacher-student ratio of 1:9, we strive to unleash their potential, nurturing confident, decisive 
              individuals capable of embracing and overcoming life&apos;s hurdles.
            </p>

            {/* Highlighted Quote */}
            <div className="bg-[#f8f9fa] border-l-4 border-[#bb2124] p-4 md:p-6 rounded-r-lg mt-6 md:mt-8">
              <p className="text-base md:text-lg font-medium text-gray-800 italic">
                &quot;Join us in shaping tomorrow&apos;s leaders—resilient, empathetic and equipped to make a positive impact 
                on the world with our motto &apos;Broaden your vision, deepen your roots&apos;.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}