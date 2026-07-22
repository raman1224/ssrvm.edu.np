import { HeroSlider } from '@/components/home/HeroSlider';
import { WelcomeSection } from '@/components/home/WelcomeSection';
import { VisionAchievements } from '@/components/home/VisionAchievements';
import { GuruSection } from '@/components/home/GuruSection';
import { PrincipalMessage } from '@/components/home/PrincipalMessage';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { PhotoGallery } from '@/components/home/PhotoGallery';
import { LocationSection } from '@/components/home/LocationSection';
import { Metadata } from 'next';

export const dynamic = 'force-static';
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Home | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Sri Sri Ravishankar Vidya Mandir, a revered temple of knowledge where every child\'s potential is nurtured. Established in 2064 B.S.',
  keywords: 'SSRVM, Sri Sri Ravishankar Vidya Mandir, School in Biratnagar, Education Nepal, Best School in Nepal',
  openGraph: {
    title: 'Home | Sri Sri Ravishankar Vidya Mandir',
    description: 'A revered temple of knowledge where every child\'s potential is nurtured.',
    url: 'https://ssrvm.edu.np',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Sri Sri Ravishankar Vidya Mandir',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      
      {/* Welcome Section */}
      <section className="bg-[#feb505] py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WelcomeSection />
        </div>
      </section>

      {/* Vision, Achievements & Important Notice */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisionAchievements />
        </div>
      </section>

      {/* Guru Section */}
      <section className="bg-[#feaa02] py-8 md:py-12 lg:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GuruSection />
        </div>
      </section>

      {/* Principal Message */}
      <section className="bg-[#ededec] py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PrincipalMessage />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-12 lg:py-16 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: 'url(/images/bg.webp)' }}>
        <div className="absolute inset-0 bg-[#1a1a2e]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <WhyChooseUs />
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGallery />
        </div>
      </section>

     

      {/* Location / Map Section */}
      <LocationSection />
    </>
  );
}