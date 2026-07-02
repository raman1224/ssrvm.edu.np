import { memo } from 'react';
import Link from 'next/link';

export const WelcomeSection = memo(() => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-3/5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#183a6e] mb-4 border-l-4 border-[#f3432c] pl-4">
          <span className="block text-base md:text-lg text-gray-700 font-normal">Welcome to</span>
          Sri Sri Ravishankar Vidya Mandir
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Sri Sri Ravishankar Vidya Mandir, a revered temple of knowledge where every child's potential is nurtured. 
          At our institution, we embrace the profound principle of 'Vidya Dadati Poornatvam' (Education Brings Completeness), 
          guiding our dedication to holistic development.
        </p>
        <Link 
          href="/about" 
          className="inline-block mt-6 bg-[#183a6e] hover:bg-[#205099] text-white px-8 py-2 rounded-full transition-colors text-sm md:text-base"
        >
          Read More
        </Link>
      </div>
      <div className="md:w-2/5">
        <img 
          src="/images/homepage/img.jpg" 
          alt="School Campus" 
          className="w-full h-auto rounded-lg shadow-lg"
          loading="lazy"
          width="600"
          height="400"
        />
      </div>
    </div>
  );
});

WelcomeSection.displayName = 'WelcomeSection';
