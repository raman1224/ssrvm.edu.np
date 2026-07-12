'use client';

import { memo } from 'react';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const Header = memo(function Header() {
  return (
    <div className="bg-white shadow-sm py-2 md:py-3 lg:py-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-4 group">
            <div className="relative w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0">
              <OptimizedImage
                src="/images/logo.png"
                alt="Sri Sri Ravishankar Vidya Mandir"
                fill
                priority
                className="w-full h-full"
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#2f3192] font-['Arno_Pro'] leading-tight">
                Sri Sri Ravishankar Vidya Mandir
              </h1>
              <span className="inline-block bg-[#2f3192] text-white text-[8px] md:text-[10px] lg:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-lg font-medium uppercase tracking-wider w-fit">
                Biratnagar
              </span>
            </div>
          </Link>

          <Link 
            href="/admission" 
            className="flex items-center gap-1 md:gap-2 bg-gradient-to-r from-[#8d27d6] via-[#2c7ac2] to-[#01519c] text-white px-3 md:px-5 lg:px-6 py-1.5 md:py-2.5 rounded-md hover:shadow-lg transition-all hover:scale-105 text-xs md:text-sm lg:text-base font-medium whitespace-nowrap"
          >
            <GraduationCap size={18} className="flex-shrink-0" />
            <span className="hidden sm:inline">Admission</span>
          </Link>
        </div>
      </div>
    </div>
  );
});