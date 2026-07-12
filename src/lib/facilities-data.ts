// src/lib/facilities-data.ts
export interface FacilityImage {
  src: string;
  alt: string;
}

export interface Facility {
  slug: string;
  navLabel: string;
  title?: string;
  description?: string;
  images?: FacilityImage[];
  url: string; // Added URL field
}

const baseUrl = 'https://gdgoenkabudaun.com/facilities';

export const facilities: Facility[] = [
  {
    slug: 'infrastructure',
    navLabel: 'Infrastructure',
    title: 'Infrastructure',
    description:
      "At GDGPS, we aim for a perfect balance of complementing facts: ancient and advanced, Indian and international, traditional and innovative. The School building campus with centrally air-conditioned and has a unique architectural design, state-of-the-art furniture and furnishings, an elegant reception hall, specialist studios for computer education and science, visual and performing arts, a digital e-library with a vast collection of books, facilities for indoor and outdoor games including a health and fitness centre, a student's cafeteria and a medical centre.",
    images: [
      { src: '/images/facilities/infrastructure1.jpg', alt: 'SSRVM campus infrastructure' },
      { src: '/images/facilities/infrastructure2.jpg', alt: 'SSRVM school building' },
    ],
    url: `${baseUrl}/infrastructure`,
  },
  {
    slug: 'gyan-sarovar-the-main-school-building',
    navLabel: 'Gyan Sarovar - The Main School Building',
    url: `${baseUrl}/gyan-sarovar-the-main-school-building`,
  },
  {
    slug: 'glee-and-google-the-pre-primary-section',
    navLabel: 'Glee & Google - The Pre Primary Section',
    url: `${baseUrl}/glee-and-google-the-pre-primary-section`,
  },
  {
    slug: 'air-conditioned-and-gps-enabled-transport-system',
    navLabel: 'Air Conditioned & GPS Enabled Transport System',
    url: `${baseUrl}/air-conditioned-and-gps-enabled-transport-system`,
  },
  {
    slug: 'medical-facility',
    navLabel: '24x7 Medical Facility',
    url: `${baseUrl}/medical-facility`,
  },
  {
    slug: 'safety-and-security',
    navLabel: 'Safety & Security',
    url: `${baseUrl}/safety-and-security`,
  },
  {
    slug: 'well-panopolied-library',
    navLabel: 'Library',
    url: `${baseUrl}/well-panopolied-library`,
  },
  {
    slug: 'laboratories',
    navLabel: 'Laboratories',
    url: `${baseUrl}/laboratories`,
  },
  {
    slug: 'computer-lab',
    navLabel: 'Computer Lab',
    url: `${baseUrl}/computer-lab`,
  },
  {
    slug: 'health-and-hygiene',
    navLabel: 'Health & Hygiene',
    url: `${baseUrl}/health-and-hygiene`,
  },
  {
    slug: 'smart-class',
    navLabel: 'Smart Class',
    url: `${baseUrl}/smart-class`,
  },
  {
    slug: 'indian-and-western-dance',
    navLabel: 'Indian & Western Dance',
    url: `${baseUrl}/indian-and-western-dance`,
  },
  {
    slug: 'indian-and-western-music',
    navLabel: 'Indian & Western Music',
    url: `${baseUrl}/indian-and-western-music`,
  },
  {
    slug: 'indian-and-western-instruments',
    navLabel: 'Indian & Western Instruments',
    url: `${baseUrl}/indian-and-western-instruments`,
  },
  {
    slug: 'playground',
    navLabel: 'Playground',
    url: `${baseUrl}/playground`,
  },
  {
    slug: 'ac-school-and-hostel-campus',
    navLabel: 'AC School & Campus',
    url: `${baseUrl}/ac-school-and-hostel-campus`,
  },
  {
    slug: 'wifi-enabled-school-campus',
    navLabel: 'WiFi Enabled School Campus',
    url: `${baseUrl}/wifi-enabled-school-campus`,
  },
  {
    slug: 'cctv-enabled-school-campus',
    navLabel: 'CCTV Enabled School Campus',
    url: `${baseUrl}/cctv-enabled-school-campus`,
  },
];

export function getFacilityBySlug(slug: string): Facility | undefined {
  return facilities.find((facility) => facility.slug === slug);
}