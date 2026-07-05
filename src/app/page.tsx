// src/app/page.tsx
import { HeroSlider } from '@/components/home/HeroSlider';
import { WelcomeSection } from '@/components/home/WelcomeSection';
import { VisionAchievements } from '@/components/home/VisionAchievements';
import { GuruSection } from '@/components/home/GuruSection';
import { PrincipalMessage } from '@/components/home/PrincipalMessage';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { PhotoGallery } from '@/components/home/PhotoGallery';
import { LocationSection } from '@/components/home/LocationSection';

export const dynamic = 'force-static';
export const revalidate = 3600;

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