import { PrincipalMessage } from '@/components/home/PrincipalMessage';
import { HeroSlider } from '../components/home/HeroSlider';
import { WelcomeSection } from '../components/home/WelcomeSection';
import { GuruSection } from '@/components/home/GuruSection';
import { PhotoGallery } from '@/components/home/PhotoGallery';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSlider />
      <WelcomeSection />
      <GuruSection />
      <PrincipalMessage />
<PhotoGallery />

    </div>
  );
}
