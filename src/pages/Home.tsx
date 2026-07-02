import React, { memo } from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { WelcomeSection } from '../components/home/WelcomeSection';

const Home = memo(() => {
  return (
    <div className="overflow-hidden">
      <HeroSlider />
    <WelcomeSection />
    </div>
  );
});

Home.displayName = 'Home';

export default Home;