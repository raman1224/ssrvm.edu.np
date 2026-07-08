import { 
  Dumbbell,
  Mountain,
  Music,
  Palette,
  Heart,
  Plane,
} from 'lucide-react';

export interface Activity {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  detailedDescription: string;
  activities: string[];
  images: string[];
  color: string;
  bgColor: string;
}

export const activitiesData: Activity[] = [
  {
    id: 'indoor-sports',
    title: 'Indoor Sports',
    icon: Dumbbell,
    description: 'Physical exercise for stamina, confidence, and team-work',
    detailedDescription: 'The need for physical exercise in the growth of the child has been validated over and over. Sports and games build stamina, instill confidence, promote team-work and determine the balance of an individual. We offer a wide array of Indoor games conducted by trained specialists who instruct keeping the highest standards of safety and security. Students are encouraged and trained to participate and excel in competitions at every level, Intra-school, Inter School, Zonal and National events.',
    activities: ['Table Tennis', 'Swimming', 'Gymnasium', 'Gymnastics', 'Badminton', 'Carom', 'Chess'],
    images: [
      '/images/activities/indoor1.jpg',
      '/images/activities/indoor2.jpg',
      '/images/activities/indoor3.jpg',
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'outdoor-sports',
    title: 'Outdoor Sports',
    icon: Mountain,
    description: 'Building teamwork and leadership through outdoor activities',
    detailedDescription: 'Outdoor sports play a vital role in developing physical fitness, strategic thinking, and leadership qualities. Our students participate in various outdoor sports that help them build character, learn teamwork, and develop a competitive spirit. We provide professional coaching and state-of-the-art facilities for all outdoor sports.',
    activities: ['Football', 'Cricket', 'Basketball', 'Volleyball', 'Athletics', 'Tennis', 'Kabaddi'],
    images: [
      '/images/activities/outdoor1.jpg',
      '/images/activities/outdoor2.jpg',
      '/images/activities/outdoor3.jpg',
    ],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    id: 'dance-music',
    title: 'Dance & Music',
    icon: Music,
    description: 'Expressing creativity through rhythm and melody',
    detailedDescription: 'Dance and music are integral parts of our curriculum, helping students express themselves creatively and develop artistic skills. Our trained instructors teach various dance forms and musical instruments, providing students with opportunities to perform at school events and competitions. These activities enhance creativity, build confidence, and promote cultural appreciation.',
    activities: ['Classical Dance', 'Western Dance', 'Folk Dance', 'Vocal Music', 'Instrumental Music', 'Band', 'Choir'],
    images: [
      '/images/activities/dance1.jpg',
      '/images/activities/dance2.jpg',
      '/images/activities/dance3.jpg',
    ],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'art',
    title: 'Art & Culture',
    icon: Palette,
    description: 'Exploring creativity through visual arts and crafts',
    detailedDescription: 'Art education is essential for developing creativity, imagination, and fine motor skills. Our art program includes various forms of visual arts, crafts, and cultural activities that help students express themselves creatively. We organize art exhibitions, competitions, and workshops to nurture artistic talent.',
    activities: ['Painting', 'Drawing', 'Sculpture', 'Craft Work', 'Pottery', 'Calligraphy', 'Digital Art'],
    images: [
      '/images/activities/art1.jpg',
      '/images/activities/art2.jpg',
      '/images/activities/art3.jpg',
    ],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'community-service',
    title: 'Community Service',
    icon: Heart,
    description: 'Building empathy and social responsibility',
    detailedDescription: 'Community service is a vital part of our educational philosophy, helping students develop empathy, social responsibility, and leadership skills. Through various community outreach programs, students learn to contribute to society and understand the importance of giving back. These experiences shape compassionate and responsible citizens.',
    activities: ['Tree Plantation', 'Cleanliness Drives', 'Old Age Home Visits', 'Fundraising', 'Awareness Campaigns', 'Blood Donation Camps'],
    images: [
      '/images/activities/service1.jpg',
      '/images/activities/service2.jpg',
      '/images/activities/service3.jpg',
    ],
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-50',
  },
  {
    id: 'educational-trips',
    title: 'Educational Trips',
    icon: Plane,
    description: 'Learning beyond the classroom through exploration',
    detailedDescription: 'Educational trips provide students with experiential learning opportunities outside the classroom. These trips enhance understanding of various subjects, develop observational skills, and create lasting memories. We organize field trips to museums, historical sites, science centers, and nature reserves that complement our curriculum.',
    activities: ['Museum Visits', 'Historical Sites', 'Science Centers', 'Nature Trails', 'Industrial Visits', 'Cultural Tours', 'Adventure Camps'],
    images: [
      '/images/activities/trip1.jpg',
      '/images/activities/trip2.jpg',
      '/images/activities/trip3.jpg',
    ],
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
  },
];