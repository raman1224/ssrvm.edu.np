'use client';

import { memo, useState, useCallback, useEffect } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { 
  Mountain, 
  Cloud, 
  Droplet, 
  Flame, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface PedagogyItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ElementType;
  color: string;
}

const pedagogyData: PedagogyItem[] = [
  {
    id: 'concept',
    title: 'CONCEPTS as SOLID as THE Earth',
    subtitle: 'Concept',
    description: 'We Conceptualize through observation & Inference, field trips, Role play / Dramatization, experiential learning and mind maps.',
    image: '/images/pedagogy/1.jpg',
    icon: Mountain,
    color: 'from-green-600 to-green-800',
  },
  {
    id: 'information',
    title: 'INFORMATION like the AIR everywhere',
    subtitle: 'Information',
    description: 'Information becomes relevant only if the concepts are strong. We gather information, from libraries, working on projects, participation in debates / seminars / group discussions & challenging assignments.',
    image: '/images/pedagogy/2.jpg',
    icon: Cloud,
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 'attitude',
    title: 'ATTITUDE like the WATER that takes the shape of the container',
    subtitle: 'Attitude',
    description: 'Concepts and Information acquired can be applied only when the Attitude is Right. We acquire the perfect attitude through inspiring stories, service, Sudarshan Kriya, Pranayama & Meditation.',
    image: '/images/pedagogy/3.jpg',
    icon: Droplet,
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 'imagination',
    title: 'IMAGINATION like the SPARK of FIRE that ignites',
    subtitle: 'Imagination',
    description: 'Clear imagination gives us the depth and expression to our Concepts and Information. We enliven our imagination through creative activities like collage work, pictorial representation, creative writing, composing stories & poems, painting / sketching, dance, music & art forms.',
    image: '/images/pedagogy/4.jpg',
    icon: Flame,
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'freedom',
    title: 'FREEDOM is like the all-pervading SPACE',
    subtitle: 'Freedom',
    description: 'CONCEPT, INFORMATION, ATTITUDE & IMAGINATION can manifest to its fullest only with this fifth aspect FREEDOM. Freedom to express our thoughts, ideas, feelings, and emotions.',
    image: '/images/pedagogy/5.jpg',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
  },
];

export const PedagogyTabs = memo(function PedagogyTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentItem = pedagogyData[activeIndex];
  const Icon = currentItem.icon;

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % pedagogyData.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + pedagogyData.length) % pedagogyData.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const goToTab = useCallback((index: number) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [activeIndex, isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-3 mb-6 md:mb-8">
        {pedagogyData.map((item, index) => {
          const TabIcon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => goToTab(index)}
              className={`
                flex flex-col items-center gap-1 p-3 md:p-4 rounded-lg transition-all duration-300
                ${activeIndex === index 
                  ? 'bg-[#00427c] text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }
              `}
            >
              <TabIcon 
                size={20} 
                className={activeIndex === index ? 'text-white' : 'text-[#00427c]'} 
              />
              <span className="text-xs md:text-sm font-medium text-center leading-tight">
                {item.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Left - Content */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 relative">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${currentItem.color}`}>
                <Icon size={24} className="text-white" />
              </div>
              <span className="text-sm text-gray-500 font-medium">
                {activeIndex + 1} / {pedagogyData.length}
              </span>
            </div>
          </div>

          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <h3 className="text-xl md:text-2xl font-bold text-[#00427c] mb-3">
              {currentItem.title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {currentItem.description}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
            <div className="flex-1"></div>
            <div className="flex gap-1.5">
              {pedagogyData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTab(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex 
                      ? 'w-8 bg-[#00427c]' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <OptimizedImage
              src={currentItem.image}
              alt={currentItem.subtitle}
              fill
              className="w-full h-full"
              objectFit="cover"
            />
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#00427c]/10 pointer-events-none"></div>
          <div className="absolute -top-6 -left-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#bb2124]/10 pointer-events-none"></div>
        </div>
      </div>

      {/* Element Symbols */}
      <div className="grid grid-cols-5 gap-2 mt-6 md:mt-8">
        {pedagogyData.map((item, index) => {
          const SymbolIcon = item.icon;
          return (
            <div 
              key={item.id}
              className={`
                flex flex-col items-center gap-1 p-2 rounded-lg transition-all
                ${index === activeIndex 
                  ? 'bg-gradient-to-br ' + item.color + ' text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-500'
                }
              `}
            >
              <SymbolIcon size={16} />
              <span className="text-[8px] md:text-[10px] font-medium text-center leading-tight">
                {item.subtitle}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
});