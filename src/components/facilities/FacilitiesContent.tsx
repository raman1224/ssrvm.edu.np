'use client';

import { memo, useState, useCallback, useEffect } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { facilitiesData } from './facilitiesData';
import { 
  ChevronRight, 
  CheckCircle, 
  ChevronRight as ChevronRightIcon,
  Sparkles,
  Users
} from 'lucide-react';

export const FacilitiesContent = memo(function FacilitiesContent() {
  const [activeFacility, setActiveFacility] = useState('infrastructure');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentFacility = facilitiesData.find(f => f.id === activeFacility) || facilitiesData[0];
  const Icon = currentFacility.icon;

  const handleFacilityChange = useCallback((facilityId: string) => {
    if (facilityId === activeFacility || isTransitioning) return;
    setIsTransitioning(true);
    setActiveFacility(facilityId);
    setIsMobileMenuOpen(false);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [activeFacility, isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = facilitiesData.findIndex(f => f.id === activeFacility);
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % facilitiesData.length;
        handleFacilityChange(facilitiesData[nextIndex].id);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + facilitiesData.length) % facilitiesData.length;
        handleFacilityChange(facilitiesData[prevIndex].id);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeFacility, handleFacilityChange]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
      {/* Sidebar Navigation */}
      <div className="lg:col-span-1">
        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl shadow-lg mb-4"
        >
          <span className="font-semibold text-[#183a6e]">Facilities</span>
          <ChevronRightIcon className={`transform transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`} size={20} />
        </button>

        <div className={`
          bg-white rounded-xl shadow-lg overflow-hidden sticky top-24
          ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}
        `}>
          <div className="bg-gradient-to-r from-[#183a6e] to-[#2c7ac2] p-4">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <Sparkles size={20} />
              Facilities
            </h3>
            <p className="text-white/70 text-xs">Click to explore each facility</p>
          </div>
          <nav className="p-2 max-h-[500px] overflow-y-auto">
            {facilitiesData.map((facility) => {
              const FacilityIcon = facility.icon;
              const isActive = activeFacility === facility.id;
              return (
                <button
                  key={facility.id}
                  onClick={() => handleFacilityChange(facility.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left
                    ${isActive 
                      ? `bg-gradient-to-r ${facility.color} text-white shadow-lg transform scale-105` 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <FacilityIcon size={20} className={isActive ? 'text-white' : 'text-gray-500'} />
                  <span className="text-sm font-medium flex-1">{facility.title}</span>
                  {isActive && <ChevronRight size={16} className="text-white" />}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-3">
        <div className={`bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${currentFacility.color} shadow-lg`}>
              <Icon size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#183a6e]">
                {currentFacility.title}
              </h2>
              <p className="text-gray-600 text-sm">{currentFacility.description}</p>
            </div>
          </div>

          {/* Description */}
          <div className="prose max-w-none mb-6">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {currentFacility.detailedDescription}
            </p>
          </div>

          {/* Features */}
          {currentFacility.features && currentFacility.features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <CheckCircle size={16} className="text-[#bb2124]" />
                Key Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentFacility.features.map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200"
                  >
                    <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Images Gallery */}
          {currentFacility.images && currentFacility.images.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Users size={16} className="text-[#bb2124]" />
                Gallery:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {currentFacility.images.map((image, index) => (
                  <div 
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
                  >
                    <OptimizedImage
                      src={image}
                      alt={`${currentFacility.title} - Image ${index + 1}`}
                      fill
                      className="w-full h-full"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-2">
                      <span className="text-white text-xs font-medium">View</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 pt-4 border-t border-gray-100">
            {facilitiesData.map((facility) => (
              <button
                key={facility.id}
                onClick={() => handleFacilityChange(facility.id)}
                className={`h-2 rounded-full transition-all ${
                  activeFacility === facility.id 
                    ? `w-8 bg-gradient-to-r ${facility.color}` 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to ${facility.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});