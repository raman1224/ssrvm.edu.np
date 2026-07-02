import React, { memo, useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import useMediaQuery from '../hooks/useMediaQuery';

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
      { label: 'Vision & Mission', path: '/mission-vision' },
      { label: 'SSRVM Philosophy', path: '/philosophy' },
    ]
  },
  {
    label: 'Academics',
    subItems: [
      { label: 'Career Counselling', path: '/academics/career-counselling' },
      { label: 'School Calendar', path: '/academics/calendar' },
      { label: 'Holiday Homework', path: '/academics/holiday-homework' },
      { label: 'School Syllabus', path: '/academics/syllabus' },
      { label: 'Exam Routines', path: '/academics/exam-routines' },
      { label: 'Academic Circulars', path: '/academics/circulars' },
    ]
  },
  {
    label: 'Activities',
    subItems: [
      { label: 'Indoor Sports', path: '/activities/indoor-sports' },
      { label: 'Outdoor Sports', path: '/activities/outdoor-sports' },
      { label: 'Dance & Music', path: '/activities/dance-music' },
      { label: 'Art', path: '/activities/art' },
      { label: 'Community Service', path: '/activities/community-service' },
      { label: 'Educational Trips', path: '/activities/educational-trips' },
    ]
  },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Gallery', path: '/gallery' },
  {
    label: 'Admission',
    subItems: [
      { label: 'Admission Form', path: '/admission' },
      { label: 'Admission Procedure', path: '/admission/procedure' },
    ]
  },
  {
    label: 'Awards',
    subItems: [
      { label: "Principal's Awards", path: '/awards/principal' },
      { label: 'School Awards', path: '/awards/school' },
      { label: "Student's Awards", path: '/awards/students' },
    ]
  },
  { label: 'Blog', path: '/blog' },
  { label: 'Career', path: '/career' },
  { label: 'Contact Us', path: '/contact' },
];

export const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((label: string) => {
    setOpenDropdown(prev => prev === label ? null : label);
  }, []);

  const isActivePath = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const renderNavItems = useCallback((items: NavItem[]) => {
    return items.map((item) => {
      const hasSubItems = item.subItems && item.subItems.length > 0;

      if (hasSubItems) {
        return (
          <li key={item.label} className="relative group">
            <button
              onClick={() => isMobile && toggleDropdown(item.label)}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0095e8] transition-colors w-full md:w-auto"
            >
              {item.label}
              <ChevronDown 
                size={16} 
                className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
              />
            </button>
            <ul className={`
              ${isMobile ? 'relative' : 'absolute left-0 top-full'}
              ${isMobile ? 'block' : 'hidden group-hover:block'}
              bg-white shadow-lg rounded-lg min-w-[220px] z-50
              ${openDropdown === item.label || !isMobile ? 'block' : 'hidden'}
            `}>
              {item.subItems?.map((sub) => (
                <li key={sub.path}>
                  <Link
                    to={sub.path}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#0095e8] transition-colors border-b border-gray-100 last:border-0"
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
        <li key={item.path}>
          <Link
            to={item.path || '/'}
            className={`block px-3 py-2 text-sm font-medium transition-colors ${
              isActivePath(item.path || '/')
                ? 'text-[#0095e8]'
                : 'text-gray-700 hover:text-[#0095e8]'
            }`}
          >
            {item.label}
          </Link>
        </li>
      );
    });
  }, [isMobile, openDropdown, toggleDropdown, isActivePath]);

  return (
    <nav className="bg-[#f6f6f6] border-y border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:justify-start">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-200 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 py-2 overflow-x-auto">
            {renderNavItems(navItems)}
          </ul>

          {/* Mobile Navigation */}
          {isOpen && (
            <ul className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-2 px-4 max-h-[80vh] overflow-y-auto md:hidden">
              {renderNavItems(navItems)}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';