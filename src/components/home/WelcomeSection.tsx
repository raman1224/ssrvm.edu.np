'use client';

import { memo } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const WelcomeSection = memo(function WelcomeSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
      <div className="md:w-3/5">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#183a6e] mb-3 md:mb-4 border-l-4 border-[#f3432c] pl-3 md:pl-4">
          <span className="block text-sm sm:text-base md:text-lg text-gray-700 font-normal">Welcome to</span>
          Sri Sri Ravishankar Vidya Mandir
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Sri Sri Ravishankar Vidya Mandir, a revered temple of knowledge where every child&apos;s potential is nurtured. 
          At our institution, we embrace the profound principle of &apos;Vidya Dadati Poornatvam&apos; (Education Brings Completeness), 
          guiding our dedication to holistic development.
        </p>
        <Link 
          href="/about" 
          className="inline-block mt-4 md:mt-6 bg-[#183a6e] hover:bg-[#205099] text-white px-6 md:px-8 py-2 rounded-full transition-colors text-sm md:text-base"
        >
          Read More
        </Link>
      </div>
      <div className="md:w-2/5">
        <div className="relative w-full aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
          <OptimizedImage
            src="/images/homepage/img.jpg"
            alt="School Campus"
            fill
            className="w-full h-full"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
});