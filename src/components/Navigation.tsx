'use client';

import { memo, useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import useMediaQuery from '@/hooks/useMediaQuery';

interface NavItem {
  label: string;
  path?: string;
  subItems?: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'About Us', 
    subItems: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Inspiration', path: '/inspiration' },
      { label: 'SSRVM Strategy & Our Pedagogy', path: '/our-pedagogy' },
      { label: 'Why Choose SSRVM?', path: '/why-choose' },
      { label: "Principal's Message", path: '/principal-message' },
      { label: 'Vision & Mission (Guiding Principles)', path: '/mission-vision' },
      { label: 'SSRVM Philosophy', path: '/philosophy' },
    ]
  },
  {
    label: 'Academics',
    subItems: [
      { label: 'Career Counselling', path: '/' },
      { label: 'School Calendar', path: '/' },
      { label: 'Holiday Homework', path: '/' },
      { label: 'School Syllabus', path: '/' },
      { label: 'Exam Routines', path: '/' },
      { label: 'Academic Circulars', path: '/' },
    ]
  },
  {
    label: 'Activities',
    subItems: [
      // { label: 'Indoor Sports', path: '/activities/indoor-sports' },
      // { label: 'Outdoor Sports', path: '/activities/outdoor-sports' },
      // { label: 'Dance & Music', path: '/activities/dance-music' },
      // { label: 'Art', path: '/activities/art' },
      // { label: 'Community Service', path: '/activities/community-service' },
      // { label: 'Educational Trips', path: '/activities/educational-trips' },
            { label: 'Indoor Sports', path: '/activities' },
      { label: 'Outdoor Sports', path: '/activities' },
      { label: 'Dance & Music', path: '/activities' },
      { label: 'Art', path: '/activities' },
      { label: 'Community Service', path: '/activities' },
      { label: 'Educational Trips', path: '/activities' },

    ]
  },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Gallery', path: '/gallery' },
  {
    label: 'Admission',
    subItems: [
      { label: 'Admission Form', path: '/admission' },
      { label: 'Admission Procedure', path: '/admission' },
    ]
  },
  {
    label: 'Awards',
    subItems: [
      { label: "Principal's Awards", path: '/awards/principals-award-achievement' },
      { label: 'School Awards', path: '/awards/schools-award-achievement' },
      { label: "Student's Awards", path: '/awards/students-award-achievement' },
    ]
  },
  { label: 'Blog', path: '/blog' },
    { label: 'Association', path: '/association' },
  { label: 'Soft Copies', path: '/soft-copies' },

  { label: 'Career', path: '/career' },
  { label: 'Contact Us', path: '/contact' },
];

export const Navigation = memo(function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((label: string) => {
    setOpenDropdown(prev => prev === label ? null : label);
  }, []);

  const isActivePath = useCallback((path: string) => {
    return pathname === path;
  }, [pathname]);

  // Generate unique key for sub-items
  const getSubItemKey = useCallback((sub: { label: string; path: string }, index: number) => {
    return `${sub.path}-${index}`;
  }, []);

  const renderNavItems = useCallback((items: NavItem[]) => {
    return items.map((item, itemIndex) => {
      const hasSubItems = item.subItems && item.subItems.length > 0;

      if (hasSubItems) {
        return (
          <li key={`${item.label}-${itemIndex}`} className="relative group">
            <button
              onClick={() => isMobile && toggleDropdown(item.label)}
              className="flex items-center justify-between w-full md:w-auto gap-1 px-2.5 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-white hover:text-[#feb505] transition-colors"
            >
              {item.label}
              <ChevronDown 
                size={14} 
                className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
              />
            </button>
            <ul className={`
              ${isMobile ? 'relative pl-4' : 'absolute left-0 top-full'}
              ${isMobile ? 'block' : 'hidden group-hover:block'}
              bg-white md:shadow-lg rounded-lg min-w-[180px] z-50
              ${openDropdown === item.label || !isMobile ? 'block' : 'hidden'}
            `}>
              {item.subItems?.map((sub, subIndex) => (
                <li key={getSubItemKey(sub, subIndex)}>
                  <Link
                    href={sub.path}
                    className="block px-4 py-2.5 text-xs md:text-sm font-medium text-gray-700 hover:bg-[#183a6e] hover:text-white transition-colors border-b border-gray-100 last:border-0"
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        );
      }

      return (
        <li key={`${item.path}-${itemIndex}`}>
          <Link
            href={item.path || '/'}
            className={`block px-2.5 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider transition-colors ${
              isActivePath(item.path || '/')
                ? 'text-[#feb505]'
                : 'text-white hover:text-[#feb505]'
            }`}
          >
            {item.label}
          </Link>
        </li>
      );
    });
  }, [isMobile, openDropdown, toggleDropdown, isActivePath, getSubItemKey]);

  return (
    <nav className="bg-[#183a6e] border-y border-[#2a4a7a] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-[#2a4a7a] rounded-lg transition-colors text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation - Full width with space between */}
          <ul className="hidden md:flex items-center justify-between w-full py-1">
            {renderNavItems(navItems)}
          </ul>

          {/* Mobile Navigation Overlay */}
          {isOpen && (
            <>
              <div 
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={toggleMenu}
              />
              <ul className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-2 px-4 max-h-[80vh] overflow-y-auto z-50 md:hidden">
                {renderNavItems(navItems)}
              </ul>
            </>
          )}
        </div>
      </div>
    </nav>
  );
});
