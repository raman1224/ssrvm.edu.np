// import { 
//   Dumbbell,
//   Mountain,
//   Music,
//   Palette,
//   Heart,
//   Plane,
// } from 'lucide-react';

// export interface Activity {
//   id: string;
//   title: string;
//   icon: React.ElementType;
//   description: string;
//   detailedDescription: string;
//   activities: string[];
//   images: string[];
//   color: string;
//   bgColor: string;
// }

// export const activitiesData: Activity[] = [
//   {
//     id: 'indoor-sports',
//     title: 'Indoor Sports',
//     icon: Dumbbell,
//     description: 'Physical exercise for stamina, confidence, and team-work',
//     detailedDescription: 'The need for physical exercise in the growth of the child has been validated over and over. Sports and games build stamina, instill confidence, promote team-work and determine the balance of an individual. We offer a wide array of Indoor games conducted by trained specialists who instruct keeping the highest standards of safety and security. Students are encouraged and trained to participate and excel in competitions at every level, Intra-school, Inter School, Zonal and National events.',
//     activities: ['Table Tennis', 'Swimming', 'Gymnasium', 'Gymnastics', 'Badminton', 'Carom', 'Chess'],
//     images: [
//       '/images/activities/indoor1.jpg',
//       '/images/activities/indoor2.jpg',
//       '/images/activities/indoor3.jpg',
//     ],
//     color: 'from-blue-500 to-cyan-500',
//     bgColor: 'bg-blue-50',
//   },
//   {
//     id: 'outdoor-sports',
//     title: 'Outdoor Sports',
//     icon: Mountain,
//     description: 'Building teamwork and leadership through outdoor activities',
//     detailedDescription: 'Outdoor sports play a vital role in developing physical fitness, strategic thinking, and leadership qualities. Our students participate in various outdoor sports that help them build character, learn teamwork, and develop a competitive spirit. We provide professional coaching and state-of-the-art facilities for all outdoor sports.',
//     activities: ['Football', 'Cricket', 'Basketball', 'Volleyball', 'Athletics', 'Tennis', 'Kabaddi'],
//     images: [
//       '/images/activities/outdoor1.jpg',
//       '/images/activities/outdoor2.jpg',
//       '/images/activities/outdoor3.jpg',
//     ],
//     color: 'from-green-500 to-emerald-500',
//     bgColor: 'bg-green-50',
//   },
//   {
//     id: 'dance-music',
//     title: 'Dance & Music',
//     icon: Music,
//     description: 'Expressing creativity through rhythm and melody',
//     detailedDescription: 'Dance and music are integral parts of our curriculum, helping students express themselves creatively and develop artistic skills. Our trained instructors teach various dance forms and musical instruments, providing students with opportunities to perform at school events and competitions. These activities enhance creativity, build confidence, and promote cultural appreciation.',
//     activities: ['Classical Dance', 'Western Dance', 'Folk Dance', 'Vocal Music', 'Instrumental Music', 'Band', 'Choir'],
//     images: [
//       '/images/activities/dance1.jpg',
//       '/images/activities/dance2.jpg',
//       '/images/activities/dance3.jpg',
//     ],
//     color: 'from-purple-500 to-pink-500',
//     bgColor: 'bg-purple-50',
//   },
//   {
//     id: 'art',
//     title: 'Art & Culture',
//     icon: Palette,
//     description: 'Exploring creativity through visual arts and crafts',
//     detailedDescription: 'Art education is essential for developing creativity, imagination, and fine motor skills. Our art program includes various forms of visual arts, crafts, and cultural activities that help students express themselves creatively. We organize art exhibitions, competitions, and workshops to nurture artistic talent.',
//     activities: ['Painting', 'Drawing', 'Sculpture', 'Craft Work', 'Pottery', 'Calligraphy', 'Digital Art'],
//     images: [
//       '/images/activities/art1.jpg',
//       '/images/activities/art2.jpg',
//       '/images/activities/art3.jpg',
//     ],
//     color: 'from-orange-500 to-red-500',
//     bgColor: 'bg-orange-50',
//   },
//   {
//     id: 'community-service',
//     title: 'Community Service',
//     icon: Heart,
//     description: 'Building empathy and social responsibility',
//     detailedDescription: 'Community service is a vital part of our educational philosophy, helping students develop empathy, social responsibility, and leadership skills. Through various community outreach programs, students learn to contribute to society and understand the importance of giving back. These experiences shape compassionate and responsible citizens.',
//     activities: ['Tree Plantation', 'Cleanliness Drives', 'Old Age Home Visits', 'Fundraising', 'Awareness Campaigns', 'Blood Donation Camps'],
//     images: [
//       '/images/activities/service1.jpg',
//       '/images/activities/service2.jpg',
//       '/images/activities/service3.jpg',
//     ],
//     color: 'from-red-500 to-rose-500',
//     bgColor: 'bg-red-50',
//   },
//   {
//     id: 'educational-trips',
//     title: 'Educational Trips',
//     icon: Plane,
//     description: 'Learning beyond the classroom through exploration',
//     detailedDescription: 'Educational trips provide students with experiential learning opportunities outside the classroom. These trips enhance understanding of various subjects, develop observational skills, and create lasting memories. We organize field trips to museums, historical sites, science centers, and nature reserves that complement our curriculum.',
//     activities: ['Museum Visits', 'Historical Sites', 'Science Centers', 'Nature Trails', 'Industrial Visits', 'Cultural Tours', 'Adventure Camps'],
//     images: [
//       '/images/activities/trip1.jpg',
//       '/images/activities/trip2.jpg',
//       '/images/activities/trip3.jpg',
//     ],
//     color: 'from-indigo-500 to-blue-500',
//     bgColor: 'bg-indigo-50',
//   },
// ];


export interface ActivityImage {
  src: string;
  alt: string;
}

export interface ActivityCategory {
  slug: string;
  label: string; // sidebar label
  title: string; // content heading
  description: string;
  offerings: string; // bold "X + Y + Z" line
  images: ActivityImage[]; // exactly 5 images: [big, tr, br?, ...] - first is large left image
}

export const activitiesData: ActivityCategory[] = [
  {
    slug: "indoor-sports",
    label: "Indoor Sports",
    title: "INDOOR SPORTS",
    description:
      "The need for physical exercise in the growth of the child has been validated over and over. Sports and games build stamina, instill confidence, promote team-work and determine the balanced of an individual. We offer a wide array of Indoor and Outdoor games conducted by trained specialists who instruct keeping the highest standards of safety and security. Students are encouraged and trained to participate and excel in competitions at every level, Intra-school, Inter School, Zonal and National events.",
    offerings: "Table Tennis + Swimming + Gymnasium + Gymnastics + Badminton + Carom + Chess",
    images: [
      { src: "/images/activities/indoor-1.jpg", alt: "Gymnastics" },
      { src: "/images/activities/indoor-2.jpg", alt: "Stretching" },
      { src: "/images/activities/indoor-3.jpg", alt: "Badminton" },
      { src: "/images/activities/indoor-4.jpg", alt: "Swimming" },
      { src: "/images/activities/indoor-5.jpg", alt: "Gym" },
    ],
  },
  {
    slug: "outdoor-sports",
    label: "Outdoor Sports",
    title: "OUTDOOR SPORTS",
    description:
      "Outdoor sports build endurance, teamwork and resilience in an open, natural environment. Our trained coaches guide students through structured practice sessions and competitive matches that build both physical fitness and sportsmanship.",
    offerings: "Football + Cricket + Basketball + Athletics + Volleyball + Kabaddi",
    images: [
      { src: "/images/activities/outdoor-1.jpg", alt: "Football" },
      { src: "/images/activities/outdoor-2.jpg", alt: "Cricket" },
      { src: "/images/activities/outdoor-3.jpg", alt: "Basketball" },
      { src: "/images/activities/outdoor-4.jpg", alt: "Athletics" },
      { src: "/images/activities/outdoor-5.jpg", alt: "Volleyball" },
    ],
  },
  {
    slug: "dance-music",
    label: "Dance & Music",
    title: "DANCE & MUSIC",
    description:
      "Music and dance nurture creativity, discipline and self-expression. Students explore classical and contemporary forms under experienced instructors, building confidence through regular practice and performance opportunities.",
    offerings: "Classical Dance + Western Dance + Vocal + Instrumental + Choir",
    images: [
      { src: "/images/activities/dance-1.jpg", alt: "Dance" },
      { src: "/images/activities/dance-2.jpg", alt: "Music" },
      { src: "/images/activities/dance-3.jpg", alt: "Choir" },
      { src: "/images/activities/dance-4.jpg", alt: "Instruments" },
      { src: "/images/activities/dance-5.jpg", alt: "Performance" },
    ],
  },
  {
    slug: "art-culture",
    label: "Art & Culture",
    title: "ART & CULTURE",
    description:
      "Our art and culture programs encourage students to explore visual arts, craft and cultural traditions, developing imagination and an appreciation for heritage alongside practical creative skills.",
    offerings: "Painting + Craft + Pottery + Sculpture + Cultural Studies",
    images: [
      { src: "/images/activities/art-1.jpg", alt: "Painting" },
      { src: "/images/activities/art-2.jpg", alt: "Craft" },
      { src: "/images/activities/art-3.jpg", alt: "Pottery" },
      { src: "/images/activities/art-4.jpg", alt: "Sculpture" },
      { src: "/images/activities/art-5.jpg", alt: "Culture" },
    ],
  },
  {
    slug: "g4h-community-service",
    label: "G4H Community Service",
    title: "G4H COMMUNITY SERVICE",
    description:
      "Giving for Humanity (G4H) instills empathy and civic responsibility in students through hands-on community service initiatives, teaching them the value of contributing to society from a young age.",
    offerings: "Charity Drives + Tree Plantation + Awareness Campaigns + Volunteering",
    images: [
      { src: "/images/activities/g4h-1.jpg", alt: "Community service" },
      { src: "/images/activities/g4h-2.jpg", alt: "Tree plantation" },
      { src: "/images/activities/g4h-3.jpg", alt: "Charity drive" },
      { src: "/images/activities/g4h-4.jpg", alt: "Awareness campaign" },
      { src: "/images/activities/g4h-5.jpg", alt: "Volunteering" },
    ],
  },
  {
    slug: "edu-travel",
    label: "Edu-Travel",
    title: "EDU-TRAVEL",
    description:
      "Educational trips extend learning beyond the classroom, exposing students to new places, cultures and real-world contexts that deepen their understanding of academic subjects.",
    offerings: "Field Trips + Historical Tours + Nature Camps + Industry Visits",
    images: [
      { src: "/images/activities/edu-1.jpg", alt: "Field trip" },
      { src: "/images/activities/edu-2.jpg", alt: "Historical tour" },
      { src: "/images/activities/edu-3.jpg", alt: "Nature camp" },
      { src: "/images/activities/edu-4.jpg", alt: "Industry visit" },
      { src: "/images/activities/edu-5.jpg", alt: "Excursion" },
    ],
  },
  {
    slug: "programme-celebrations",
    label: "Programme & Celebrations",
    title: "PROGRAMME & CELEBRATIONS",
    description:
      "Throughout the year, students take part in festivals, national celebrations and school programmes that build a sense of community, tradition and shared joy across the school.",
    offerings: "Annual Day + Festivals + National Days + Cultural Programmes",
    images: [
      { src: "/images/activities/programme-1.jpg", alt: "Annual day" },
      { src: "/images/activities/programme-2.jpg", alt: "Festival" },
      { src: "/images/activities/programme-3.jpg", alt: "National day" },
      { src: "/images/activities/programme-4.jpg", alt: "Cultural programme" },
      { src: "/images/activities/programme-5.jpg", alt: "Celebration" },
    ],
  },
  {
    slug: "special-events",
    label: "Special Events",
    title: "SPECIAL EVENTS",
    description:
      "Special events give students a platform to showcase talent, leadership and organizational skills through workshops, competitions and school-wide gatherings held throughout the academic year.",
    offerings: "Workshops + Competitions + Guest Lectures + Exhibitions",
    images: [
      { src: "/images/activities/special-1.jpg", alt: "Workshop" },
      { src: "/images/activities/special-2.jpg", alt: "Competition" },
      { src: "/images/activities/special-3.jpg", alt: "Guest lecture" },
      { src: "/images/activities/special-4.jpg", alt: "Exhibition" },
      { src: "/images/activities/special-5.jpg", alt: "Event" },
    ],
  },
];