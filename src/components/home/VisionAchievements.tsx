'use client';

import { memo } from 'react';
import Link from 'next/link';
import { Target, Award, Bell, Calendar } from 'lucide-react';

interface NoticeItem {
  id: number;
  title: string;
  date: string;
  description: string;
  link?: string;
}

const notices: NoticeItem[] = [
  {
    id: 1,
    title: 'Green Day Celebration',
    date: 'June 5, 2024',
    description: 'Join us in celebrating World Environment Day (Our Land, Our Future) and also celebrate "No Paper Day" on June 5, 2024 (Jestha 21, 2081).'
  },
  {
    id: 2,
    title: 'First Unit Test',
    date: 'Jestha 29-32, 2081',
    description: 'The First Unit Test is scheduled to be held from Jestha 29 to Jestha 32, 2081. Click here for the routine.'
  },
  {
    id: 3,
    title: 'International Yoga Day',
    date: 'June 21, 2024',
    description: 'Celebrate International Yoga Day on June 21, 2024 (Asar 7, 2081) in collaboration with various community schools.'
  },
  {
    id: 4,
    title: 'First Terminal Examination',
    date: 'Asar 21, 2081',
    description: 'The 1st Terminal Examination will commence from Asar 21, 2081. Click here for the routine.'
  },
  {
    id: 5,
    title: 'Admission Open for 2081 Session',
    date: '2024-25',
    description: 'Admissions are now open for the 2081(2024-25) session. Limited seats available for admission in Class I to IX (Maximum up to 18 seats per class) Hurry up to secure your spot!!'
  }
];

export const VisionAchievements = memo(function VisionAchievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 py-10 md:py-14 max-w-7xl mx-auto">

      {/* Vision, Mission & Values */}
      <div className="bg-[#1a237e] text-white p-6 rounded-lg shadow-lg h-full flex flex-col">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Target size={24} className="flex-shrink-0" />
          Vision, Mission &amp; Values
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed flex-grow">
          An outstanding school that provides &quot;Education at its best&quot; through the finest blend of Indian 
          and global learning methods making schooling a joyful experience and ...
        </p>
        <Link 
          href="/mission-vision" 
          className="inline-block mt-4 text-[#f0aa00] hover:text-[#ffc844] transition-colors font-semibold text-sm"
        >
          Read more &gt;&gt;
        </Link>
      </div>

      {/* Our Achievements */}
      <div className="bg-[#0d47a1] text-white p-6 rounded-lg shadow-lg h-full flex flex-col">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Award size={24} className="flex-shrink-0" />
          Our Achievements
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed flex-grow">
          The Awards &amp; Achievements received by our school has not only enriched the glory of the school 
          but has also inspired us to work with greater dedication to explore and excel.
        </p>
        <Link 
          href="/awards" 
          className="inline-block mt-4 bg-[#f0aa00] hover:bg-[#d99a00] text-[#002749] font-semibold px-6 py-2 rounded-md transition-colors text-sm w-fit"
        >
          Find Out More
        </Link>
      </div>

      {/* Important Notice */}
      <div className="bg-[#2c3e50] text-white p-6 rounded-lg shadow-lg h-full flex flex-col">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Bell size={24} className="flex-shrink-0" />
          Important Notice
        </h3>
        
        <div className="flex-grow overflow-hidden relative">
          <div className="space-y-3 max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            {notices.map((notice) => (
              <div key={notice.id} className="border-b border-white/10 last:border-0 pb-2 last:pb-0">
                <div className="flex items-start gap-2">
                  <Calendar size={14} className="text-[#f0aa00] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-[#f0aa00]">
                      {notice.title}
                    </h5>
                    <p className="text-[13px] text-gray-300 mt-0.5 leading-relaxed">
                      {notice.description}
                    </p>
                    <span className="text-[13px] text-gray-400 block mt-0.5">
                      {notice.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
});