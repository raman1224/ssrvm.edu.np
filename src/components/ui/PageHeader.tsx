'use client';

import { memo } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  breadcrumbs: Array<{
    label: string;
    href?: string;
    active?: boolean;
  }>;
  backgroundImage?: string;
  className?: string;
}

export const PageHeader = memo(function PageHeader({
  title,
  breadcrumbs,
  backgroundImage = '/images/bg3.webp',
  className = '',
}: PageHeaderProps) {
  return (
    <section 
      className={`relative py-12 md:py-16 lg:py-20 overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
          {title}
        </h1>
        
        {/* Breadcrumbs */}
        <nav className="inline-flex items-center gap-2 text-sm md:text-base text-gray-300" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {crumb.href ? (
                <Link 
                  href={crumb.href}
                  className="hover:text-[#fdb92e] transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className={crumb.active ? 'text-[#fdb92e]' : 'text-gray-300'}>
                  {crumb.label}
                </span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight size={16} className="text-gray-400" />
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
});