'use client';

import { memo } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const PrincipalMessage = memo(function PrincipalMessage() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">Principal&apos;s Message</h2>
      <div className="w-20 h-1 bg-[#183a6e] mx-auto mb-6 md:mb-8"></div>
      
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
        <div className="lg:w-1/2 relative aspect-[3/4] rounded-lg shadow-lg overflow-hidden">
          <OptimizedImage
            src="/images/homepage/president.webp"
            alt="Principal"
            fill
            className="w-full h-full"
            objectFit="cover"
          />
        </div>
        
        <div className="lg:w-1/2">
          <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
            Dear Parents,<br />
            Warm greetings and hearty welcome to Sri Sri Ravishankar Vidya Mandir.
          </h4>
          
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            As the Principal of Sri Sri Ravishankar Vidya Mandir, it brings me immense joy to extend a warm welcome 
            to each and every one of you to our dynamic learning environment. At SSRVM, we are dedicated to cultivating 
            a stress-free atmosphere where each student can flourish personally and professionally, emerging as innovative 
            and influential leaders for tomorrow.
            <br /><br />
            Our Motto &quot;Vidya Dadati Poornatwam&quot; (Education brings completeness) reflects our commitment to holistic education. 
            We firmly believe that a school plays a significant role in shaping individuals&apos; lives.
          </p>
          
          <div className="mt-4 md:mt-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-800">
              Jai Gurudev !
              <span className="block text-[#183a6e] text-base md:text-lg font-normal">
                Seema Agrawal<br />
                Principal
              </span>
            </h3>
          </div>
          
          <Link 
            href="/principal-message" 
            className="inline-block mt-4 md:mt-6 bg-[#183a6e] hover:bg-[#205099] text-white px-6 md:px-8 py-2 rounded-full transition-colors text-sm md:text-base"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
});