// src/components/studentlife/StudentLifeContent.tsx
'use client';

import { memo } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const studentLifeData = [
  { id: 1, title: 'Sporting Activities', image: '/images/student/1.jpg' },
  { id: 2, title: 'Co-curricular Activities', image: '/images/student/2.jpg' },
  { id: 3, title: 'Community Services', image: '/images/student/3.jpg' },
  { id: 4, title: 'Student Council', image: '/images/student/4.jpg' },
  { id: 5, title: 'Field Trips', image: '/images/student/5.jpg' },
  { id: 6, title: 'Project Day & Sessions', image: '/images/student/6.jpg' },
];

export const StudentLifeContent = memo(function StudentLifeContent() {
  return (
    <>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {studentLifeData.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
          >
            <div className="relative w-full h-64 md:h-72 overflow-hidden">
              <OptimizedImage
                src={item.image}
                alt={item.title}
                fill
                className="w-full h-full"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <div className="p-5 bg-white">
              <div className="w-12 h-1 bg-gradient-to-r from-[#bb2124] to-[#f78c35] rounded-full mb-3"></div>
              <h3 className="text-lg font-bold text-[#183a6e] group-hover:text-[#bb2124] transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      
    </>
  );
});