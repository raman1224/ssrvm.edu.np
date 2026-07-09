// 'use client';

// import { memo, useState, useCallback, useEffect } from 'react';
// import OptimizedImage from '@/components/ui/OptimizedImage';
// import { 
//   Dumbbell,
//   Mountain,
//   Music,
//   Palette,
//   Heart,
//   Plane,
//   ChevronRight,
//   Trophy,
//   Users,
//   Sparkles
// } from 'lucide-react';

// interface Activity {
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

// const activitiesData: Activity[] = [
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

// export const ActivitiesContent = memo(function ActivitiesContent() {
//   const [activeActivity, setActiveActivity] = useState('indoor-sports');
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const currentActivity = activitiesData.find(a => a.id === activeActivity) || activitiesData[0];
//   const Icon = currentActivity.icon;

//   const handleActivityChange = useCallback((activityId: string) => {
//     if (activityId === activeActivity || isTransitioning) return;
//     setIsTransitioning(true);
//     setActiveActivity(activityId);
//     setTimeout(() => setIsTransitioning(false), 300);
//   }, [activeActivity, isTransitioning]);

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       const currentIndex = activitiesData.findIndex(a => a.id === activeActivity);
//       if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
//         e.preventDefault();
//         const nextIndex = (currentIndex + 1) % activitiesData.length;
//         handleActivityChange(activitiesData[nextIndex].id);
//       } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
//         e.preventDefault();
//         const prevIndex = (currentIndex - 1 + activitiesData.length) % activitiesData.length;
//         handleActivityChange(activitiesData[prevIndex].id);
//       }
//     };
//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, [activeActivity, handleActivityChange]);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
//       {/* Sidebar Navigation */}
//       <div className="lg:col-span-1">
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
//           <div className="bg-gradient-to-r from-[#183a6e] to-[#2c7ac2] p-4">
//             <h3 className="text-white font-bold text-lg flex items-center gap-2">
//               <Sparkles size={20} />
//               Activities
//             </h3>
//           </div>
//           <nav className="p-2">
//             {activitiesData.map((activity) => {
//               const ActivityIcon = activity.icon;
//               const isActive = activeActivity === activity.id;
//               return (
//                 <button
//                   key={activity.id}
//                   onClick={() => handleActivityChange(activity.id)}
//                   className={`
//                     w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left
//                     ${isActive 
//                       ? `bg-gradient-to-r ${activity.color} text-white shadow-lg transform scale-105` 
//                       : 'text-gray-700 hover:bg-gray-100'
//                     }
//                   `}
//                 >
//                   <ActivityIcon size={20} className={isActive ? 'text-white' : 'text-gray-500'} />
//                   <span className="text-sm font-medium flex-1">{activity.title}</span>
//                   {isActive && <ChevronRight size={16} className="text-white" />}
//                 </button>
//               );
//             })}
//           </nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="lg:col-span-3">
//         <div className={`bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
//           {/* Header */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className={`p-3 rounded-xl bg-gradient-to-r ${currentActivity.color} shadow-lg`}>
//               <Icon size={28} className="text-white" />
//             </div>
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-[#183a6e]">
//                 {currentActivity.title}
//               </h2>
//               <p className="text-gray-600 text-sm">{currentActivity.description}</p>
//             </div>
//           </div>

//           {/* Description */}
//           <div className="prose max-w-none mb-6">
//             <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//               {currentActivity.detailedDescription}
//             </p>
//           </div>

//           {/* Activities List */}
//           <div className="mb-6">
//             <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
//               <Trophy size={16} className="text-[#bb2124]" />
//               Activities Included:
//             </h4>
//             <div className="flex flex-wrap gap-2">
//               {currentActivity.activities.map((activity) => (
//                 <span 
//                   key={activity}
//                   className={`px-3 py-1.5 rounded-full text-xs font-medium ${currentActivity.bgColor} text-gray-700 border border-gray-200`}
//                 >
//                   {activity}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Images Grid */}
//           {currentActivity.images && currentActivity.images.length > 0 && (
//             <div>
//               <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
//                 <Users size={16} className="text-[#bb2124]" />
//                 Gallery:
//               </h4>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                 {currentActivity.images.map((image, index) => (
//                   <div 
//                     key={index}
//                     className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
//                   >
//                     <OptimizedImage
//                       src={image}
//                       alt={`${currentActivity.title} - Image ${index + 1}`}
//                       fill
//                       className="w-full h-full"
//                       objectFit="cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Navigation Dots */}
//           <div className="flex justify-center gap-2 mt-6 pt-4 border-t border-gray-100">
//             {activitiesData.map((activity) => (
//               <button
//                 key={activity.id}
//                 onClick={() => handleActivityChange(activity.id)}
//                 className={`h-2 rounded-full transition-all ${
//                   activeActivity === activity.id 
//                     ? `w-8 bg-gradient-to-r ${activity.color}` 
//                     : 'w-2 bg-gray-300 hover:bg-gray-400'
//                 }`}
//                 aria-label={`Go to ${activity.title}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });


"use client";

import { useState } from "react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { activitiesData } from "./activitiesData";

function ActivitiesContent() {
  const [activeSlug, setActiveSlug] = useState(activitiesData[0].slug);
  const active = activitiesData.find((a) => a.slug === activeSlug) ?? activitiesData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-14">
        {/* Sidebar */}
        <aside className="md:w-64 flex-shrink-0">
          <ul className="border-l border-gray-200">
            {activitiesData.map((item) => {
              const isActive = item.slug === activeSlug;
              return (
                <li key={item.slug}>
                  <button
                    onClick={() => setActiveSlug(item.slug)}
                    className={`w-full text-left py-3 md:py-4 pl-5 pr-2 -ml-px border-l-2 transition-colors text-base md:text-lg ${
                      isActive
                        ? "border-[#2f6fa8] text-[#2f6fa8] font-medium"
                        : "border-transparent text-gray-700 hover:text-[#2f6fa8]"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-gray-900">
            {active.title}
          </h1>
          <div className="w-14 h-[3px] bg-[#feb505] mt-3 mb-2"></div>
          <div className="border-b border-gray-200 mb-6"></div>

          <p className="text-gray-600 leading-relaxed mb-4">{active.description}</p>

          <p className="text-gray-800 mb-2">Our offerings in {active.label} are:</p>
          <p className="font-bold text-gray-900 mb-6">{active.offerings}</p>

          {/* Image grid: big image left, 2x2 grid right */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {/* Large image */}
            <div className="sm:col-span-1 relative rounded overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-full min-h-[260px]">
              <OptimizedImage
                src={active.images[0].src}
                alt={active.images[0].alt}
                fill
                className="w-full h-full"
                objectFit="cover"
              />
            </div>

            {/* 2x2 grid */}
            <div className="sm:col-span-2 grid grid-cols-2 gap-3 md:gap-4">
              {active.images.slice(1, 5).map((img, i) => (
                <div key={i} className="relative rounded overflow-hidden aspect-[4/3]">
                  <OptimizedImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="w-full h-full"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* View More button */}
          <a
            href={`/activities/${active.slug}`}
            className="block w-full text-center bg-[#2f6fa8] hover:bg-[#255a89] text-white font-medium py-3 rounded mt-6 transition-colors"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesContent;