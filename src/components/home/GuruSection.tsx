'use client';

import { memo } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const GuruSection = memo(function GuruSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 xl:gap-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">

      <div className="lg:w-2/3 order-2 lg:order-1">
        <h3 className="text-[#bb2124] text-lg md:text-xl font-semibold">- Gurudev</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
          Sri Sri Ravishankar says
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          &quot;Every parent would like to have a child whose personality shines wherever the child goes. 
          It is the personality that is appreciated everywhere. Such pleasing personality is what is 
          the main aim of this education.&quot;
        </p>
        <Link 
          href="/inspiration" 
          className="inline-block mt-4 md:mt-6 bg-[#183a6e] hover:bg-[#205099] text-white px-6 md:px-8 py-2 rounded-full transition-colors text-sm md:text-base"
        >
          Read More
        </Link>
      </div>
      <div className="lg:w-1/3 order-1 lg:order-2">
        <div className="relative w-full max-w-xs mx-auto aspect-[4/5] rounded-lg shadow-xl overflow-hidden">
          <OptimizedImage
            src="/images/homepage/gurudev.webp"
            alt="Sri Sri Ravishankar"
            fill
            className="w-full h-full"
            objectFit="cover"
          />
        </div>
      </div>
      </div>
    </div>
  );
});