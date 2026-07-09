'use client';

import { memo } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const PhilosophyContent = memo(function PhilosophyContent() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Quote Section */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block bg-gradient-to-r from-[#bb2124] to-[#f78c35] text-transparent bg-clip-text">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            We never compromise on our values.
          </h2>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#183a6e] mt-3 mb-6">
          OUR CORE VALUES
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#bb2124] to-[#f78c35] mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-serif italic">
          &quot;The goal of education is to increase awareness not information. 
          Watching our inner-responses, knowing that they are there, increases our self-awareness.&quot;
        </p>
      </div>

      {/* Philosophy Image */}
      <div className="relative w-full max-w-2xl mx-auto h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
        <OptimizedImage
          src="/images/philosophy/philosophy.webp"
          alt="SSRVM Philosophy - Core Values"
          fill
          priority
          className="w-full h-full"
          objectFit="cover"
        />
      </div>

      {/* Quote Below Image */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="border-t-2 border-gray-200 pt-8">
          <p className="text-xl md:text-2xl font-medium text-[#183a6e]">
            &quot;Make it a way of life.&quot;
          </p>
        </div>
      </div>
    </div>
  );
});