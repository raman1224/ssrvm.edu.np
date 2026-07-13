
'use client';

import { memo, useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    ],
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
    ],
  },
  {
    label: 'Activities',
    subItems: [
      { label: 'Indoor Sports', path: '/activities' },
      { label: 'Outdoor Sports', path: '/activities' },
      { label: 'Dance & Music', path: '/activities' },
      { label: 'Art', path: '/activities' },
      { label: 'Community Service', path: '/activities' },
      { label: 'Educational Trips', path: '/activities' },
    ],
  },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Gallery', path: '/gallery' },
  {
    label: 'Admission',
    subItems: [
      { label: 'Admission Form', path: '/admission' },
      { label: 'Admission Procedure', path: '/admission' },
    ],
  },
  {
    label: 'Awards',
    subItems: [
      { label: "Principal's Awards", path: '/awards/principals-award-achievement' },
      { label: 'School Awards', path: '/awards/schools-award-achievement' },
      { label: "Student's Awards", path: '/awards/schools-award-achievement' },
    ],
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
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = useCallback(() => setIsOpen((p) => !p), []);
  const toggleDropdown = useCallback((label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }, []);
  const isActivePath = useCallback((path: string) => pathname === path, [pathname]);

  return (
    <nav ref={navRef} className="bg-[#183a6e] border-y border-[#2a4a7a] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-12">
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:bg-[#2a4a7a] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop nav — spans full container width, flush with edges like the logo/admission button above */}
          <ul className="hidden md:flex items-center justify-between w-full">
            {navItems.map((item, idx) => {
              const hasSub = !!item.subItems?.length;
              const isFirst = idx === 0;
              const isLast = idx === navItems.length - 1;
              const edgeFix = `${isFirst ? '-ml-2 lg:-ml-3' : ''} ${isLast ? '-mr-2 lg:-mr-3' : ''}`;

              if (hasSub) {
                return (
                  <li key={`${item.label}-${idx}`} className={`relative group ${edgeFix}`}>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center gap-1 px-2 lg:px-3 py-3 text-[12px] lg:text-[13px] font-semibold uppercase tracking-wide text-white hover:text-[#feb505] transition-colors whitespace-nowrap"
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`text-[#5fd6c4] transition-transform duration-200 ${
                          openDropdown === item.label ? 'rotate-180' : 'group-hover:rotate-180'
                        }`}
                      />
                    </button>
                    <ul
                      className={`absolute left-0 top-full bg-white shadow-lg rounded-b-md min-w-[220px] py-1 z-50 transition-opacity duration-150 ${
                        openDropdown === item.label
                          ? 'opacity-100 visible'
                          : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                      }`}
                    >
                      {item.subItems!.map((sub, si) => (
                        <li key={`${sub.path}-${si}`}>
                          <Link
                            href={sub.path}
                            className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-[#183a6e] hover:text-white transition-colors"
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
                <li key={`${item.path}-${idx}`} className={edgeFix}>
                  <Link
                    href={item.path || '/'}
                    className={`block px-2 lg:px-3 py-3 text-[12px] lg:text-[13px] font-semibold uppercase tracking-wide whitespace-nowrap transition-colors ${
                      isActivePath(item.path || '/') ? 'text-[#feb505]' : 'text-white hover:text-[#feb505]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="md:hidden w-6" />
        </div>

        {isOpen && (
          <>
            <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleMenu} />
            <ul className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-2 px-4 max-h-[80vh] overflow-y-auto z-50 md:hidden">
              {navItems.map((item, idx) => {
                const hasSub = !!item.subItems?.length;

                if (hasSub) {
                  return (
                    <li key={`${item.label}-${idx}`} className="border-b border-gray-100 last:border-0">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full py-3 text-sm font-semibold uppercase text-gray-800"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <ul className="pl-4 pb-2">
                          {item.subItems!.map((sub, si) => (
                            <li key={`${sub.path}-${si}`}>
                              <Link href={sub.path} className="block py-2 text-sm text-gray-600">
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={`${item.path}-${idx}`} className="border-b border-gray-100 last:border-0">
                    <Link href={item.path || '/'} className="block py-3 text-sm font-semibold uppercase text-gray-800">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';