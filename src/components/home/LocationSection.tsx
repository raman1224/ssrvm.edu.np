'use client';

import { memo } from 'react';

export const LocationSection = memo(function LocationSection() {
  return (
    <div className="bg-white py-8 md:py-12 lg:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#183a6e] mb-2">
          Find Us Here
        </h2>
        <p className="text-center text-gray-600 text-sm md:text-base mb-8 max-w-2xl mx-auto">
          Visit our campus and experience the learning environment firsthand
        </p>
        
        <div >
          {/* Map - Takes 2/3 on large screens */}
          <div className="lg:col-span-2 h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=Sri+Sri+Ravishankar+Vidya+Mandir+(SSRVM),+Biratnagar,+Nepal&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            />
          </div>

         
        </div>
      </div>
  );
});