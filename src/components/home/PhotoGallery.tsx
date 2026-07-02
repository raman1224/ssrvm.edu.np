'use client';

import { memo, useState, useCallback } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';

const galleryImages = [
  { id: 1, src: '/images/gallery/gallery-1.jpg', alt: 'School Event 1' },
  { id: 2, src: '/images/gallery/gallery-2.jpg', alt: 'School Event 2' },
  { id: 3, src: '/images/gallery/gallery-3.jpg', alt: 'School Event 3' },
  { id: 4, src: '/images/gallery/gallery-4.jpg', alt: 'School Event 4' },
  { id: 5, src: '/images/gallery/gallery-5.jpg', alt: 'School Event 5' },
  { id: 6, src: '/images/gallery/gallery-6.jpg', alt: 'School Event 6' },
];

export const PhotoGallery = memo(function PhotoGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleMouseEnter = useCallback((id: number) => {
    setHoveredId(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
      <div className="lg:col-span-1 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002749] mb-3 md:mb-4">
          Photo Gallery
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          The school photo gallery showcases a variety of memorable moments captured throughout the academic year.
        </p>
        <Link 
          href="/gallery" 
          className="inline-block mt-3 md:mt-4 bg-[#f0aa00] hover:bg-[#d99a00] text-[#002749] font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full transition-colors text-sm md:text-base w-fit"
        >
          View All
        </Link>
      </div>

      <div className="lg:col-span-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square"
              onMouseEnter={() => handleMouseEnter(image.id)}
              onMouseLeave={handleMouseLeave}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                objectFit="cover"
              />
              {hoveredId === image.id && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity">
                  <Link 
                    href="/gallery"
                    className="text-white text-2xl md:text-3xl hover:scale-110 transition-transform"
                  >
                    <span className="sr-only">View gallery</span>
                    +
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-4 mt-4 md:mt-6">
        <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/jEP5hzMOTPg?si=JqW87KDcT4oQ3XT_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
});