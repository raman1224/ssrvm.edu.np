export interface ActivityImage {
  src: string;
  alt: string;
}

export interface Activity {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  offerings?: string[];
  images?: ActivityImage[];
  url: string;
}

export const activities: Activity[] = [
  {
    slug: 'indoor-sports',
    navLabel: 'Indoor Sports',
    title: 'INDOOR SPORTS',
    description: 'The need for physical exercise in the growth of the child has been validated over and over. Sports and games build stamina, instill confidence, promote team-work and determine the balanced of an individual. We offer a wide array of Indoor and Outdoor games conducted by trained specialists who instruct keeping the highest standards of safety and security. Students are encouraged and trained to participate and excel in competitions at every level, Intra-school, Inter School, Zonal and National events.',
    offerings: ['Table Tennis', 'Swimming', 'Gymnasium', 'Gymnastics', 'Badminton', 'Carom', 'Chess'],
    images: [
      { src: '/images/activities/GD-Goenka-Public-School-2021_09_27_14_23_43_1200.jpg', alt: 'Sports Activity' },
      { src: '/images/activities/GD-Goenka-Public-School-2021_09_27_14_08_44_yoga3.jpg', alt: 'Yoga Class 2' },
      { src: '/images/activities/GD-Goenka-Public-School-2021_08_07_15_51_46yoga2.jpg', alt: 'Yoga Practice' },
      { src: '/images/activities/GD-Goenka-Public-School-2021_08_07_15_51_46yoga.jpg', alt: 'Yoga Class' },
      { src: '/images/activities/GD-Goenka-Public-School-2021_08_07_15_51_46t1t.jpg', alt: 'Table Tennis' },
      { src: '/images/activities/GD-Goenka-Public-School-2021_08_07_15_51_46swimming2.jpg', alt: 'Swimming' },
      { src: '/images/activities/GD-Goenka-Public-School-2021_08_07_15_51_46swimming.jpg', alt: 'Swimming Pool' },
      { src: '/images/activities/GD-Goenka-Public-School-2021_08_07_15_51_46gymn.jpg', alt: 'Gymnastics Training' },
      { src: '/images/activities/GD-Goenka-Public-School-2021_09_27_14_08_34_gym.jpg', alt: 'Gymnasium' },
      { src: '/images/activities/GD-Goenka-Public-School-2021_09_27_14_08_30_bad.jpg', alt: 'Badminton' },
      { src: '/images/activities/GD-Goenka-Public-School-2021_09_27_14_08_39_swimming2.jpg', alt: 'Swimming Pool 2' },
      { src: '/images/activities/GD-Goenka-Public-School-2021_09_27_14_08_44_yoga3.jpg', alt: 'Yoga Class 2' },
    ],
    url: 'https://gdgoenkaschool.in/activities/Indoor-Sports',
  },
  {
    slug: 'outdoor-sports',
    navLabel: 'Outdoor Sports',
    title: 'OUTDOOR SPORTS',
    description: 'Outdoor sports play a vital role in developing physical fitness, strategic thinking, and leadership qualities. Our students participate in various outdoor sports that help them build character, learn teamwork, and develop a competitive spirit.',
    offerings: ['Football', 'Cricket', 'Basketball', 'Volleyball', 'Athletics', 'Tennis'],
    images: [],
    url: 'https://gdgoenkaschool.in/activities/Outdoor-Sports',
  },
  {
    slug: 'dance-and-music',
    navLabel: 'Dance & Music',
    title: 'DANCE & MUSIC',
    description: 'Dance and music are integral parts of our curriculum, helping students express themselves creatively and develop artistic skills. Our trained instructors teach various dance forms and musical instruments.',
    offerings: ['Classical Dance', 'Western Dance', 'Folk Dance', 'Vocal Music', 'Instrumental Music'],
    images: [],
    url: 'https://gdgoenkaschool.in/activities/Dance-and-Music',
  },
  {
    slug: 'art-and-culture',
    navLabel: 'Art & Culture',
    title: 'ART & CULTURE',
    description: 'Art education is essential for developing creativity, imagination, and fine motor skills. Our art program includes various forms of visual arts, crafts, and cultural activities.',
    offerings: ['Painting', 'Drawing', 'Sculpture', 'Craft Work', 'Pottery', 'Calligraphy'],
    images: [],
    url: 'https://gdgoenkaschool.in/activities/Art-and-Culture',
  },
  {
    slug: 'community-service',
    navLabel: 'G4H Community Service',
    title: 'G4H COMMUNITY SERVICE',
    description: 'Community service is a vital part of our educational philosophy, helping students develop empathy, social responsibility, and leadership skills.',
    offerings: ['Tree Plantation', 'Cleanliness Drives', 'Old Age Home Visits', 'Fundraising', 'Awareness Campaigns'],
    images: [],
    url: 'https://gdgoenkaschool.in/activities/G4H-Community-Service',
  },
  {
    slug: 'edu-travel',
    navLabel: 'Edu-Travel',
    title: 'EDU-TRAVEL',
    description: 'Educational trips provide students with experiential learning opportunities outside the classroom. These trips enhance understanding of various subjects and develop observational skills.',
    offerings: ['Museum Visits', 'Historical Sites', 'Science Centers', 'Nature Trails', 'Industrial Visits'],
    images: [],
    url: 'https://gdgoenkaschool.in/activities/Edu-Travel',
  },
  {
    slug: 'programme-and-celebrations',
    navLabel: 'Programme & Celebrations',
    title: 'PROGRAMME & CELEBRATIONS',
    description: 'We celebrate various cultural and academic events throughout the year, providing students with opportunities to showcase their talents and learn about different traditions.',
    offerings: ['Annual Day', 'Sports Day', 'Cultural Festivals', 'Independence Day', 'Children\'s Day'],
    images: [],
    url: 'https://gdgoenkaschool.in/activities/Programme-and-Celebrations',
  },
  {
    slug: 'special-events',
    navLabel: 'Special Events',
    title: 'SPECIAL EVENTS',
    description: 'Special events and workshops are organized to enhance learning and provide unique experiences for our students.',
    offerings: ['Workshops', 'Seminars', 'Guest Lectures', 'Competitions', 'Exhibitions'],
    images: [],
    url: 'https://gdgoenkaschool.in/activities/Special-Events',
  },
];

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((activity) => activity.slug === slug);
}