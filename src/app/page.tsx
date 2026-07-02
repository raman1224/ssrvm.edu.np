import { HeroSlider } from '../components/home/HeroSlider';
import { WelcomeSection } from '../components/home/WelcomeSection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSlider />
      <WelcomeSection />
    </div>
  );
}
