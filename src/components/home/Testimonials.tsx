'use client';

import { memo, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const testimonials = [
  {
    id: 1,
    name: 'Er. Amit Surana, Principal',
    title: 'Eastern College of Engineering, Biratnagar',
    parentOf: 'Parent of Purvi Surana - Grade IV',
    image: '/images/person1.jpg',
    text: 'SSRVM, Biratnagar, is a very good school. We have had a truly great experience for almost 8 years. My daughter enjoyed all her academics in an innovative way. The curriculum and activities are awesome. The teachers are very caring and efficient.'
  },
  {
    id: 2,
    name: 'Dr. Prerna Arjyal Kafle',
    title: 'Assistant Professor, Ophthalmologist and Oculoplastic Surgeon',
    parentOf: 'Birat Medical College Teaching Hospital',
    image: '/images/person2.jpg',
    text: 'I am a proud mother of two. When searching for a school for my son, SSRVM caught my attention due to its nurturing environment and small class sizes. Witnessing his growth in academics, values, and social skills affirmed our decision.'
  },
  {
    id: 3,
    name: 'Jonathan Subba',
    title: 'Former Teacher',
    parentOf: 'SSRVM',
    image: '/images/person3.jpg',
    text: 'I worked with SSRVM, Biratnagar for almost 3 years as an English Teacher. I enjoyed every moment in SSRVM. The impression engraved in me being in SSRVM were many but being an educationist, the vision of helping children learn not only through books but through experiential learning.'
  },
];

export const Testimonials = memo(function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), []);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">Testimonials</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-[#3190E7] mb-3 md:mb-4">
              <OptimizedImage
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                fill
                className="w-full h-full"
                objectFit="cover"
              />
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              {testimonials[currentIndex].text}
            </p>
            <div className="bg-[#3190E7] text-white px-4 md:px-6 py-2 rounded-lg">
              <p className="font-semibold text-sm md:text-base">{testimonials[currentIndex].name}</p>
              <p className="text-xs opacity-90">{testimonials[currentIndex].title}</p>
              <p className="text-xs opacity-75">{testimonials[currentIndex].parentOf}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 md:gap-4 mt-4 md:mt-6">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#3190E7] w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
});