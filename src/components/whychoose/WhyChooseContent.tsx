'use client';

import { memo } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface ChooseItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const chooseData: ChooseItem[] = [
  {
    id: 1,
    icon: '/images/icon.png',
    title: 'OUR BELIEF',
    description: "Our founder, Gurudev Sri Sri Ravishankar Ji , has given us the '5 Aspects of Education'.",
  },
  {
    id: 2,
    icon: '/images/icon1.png',
    title: 'OUR FACULTY',
    description: 'At SSRVM we take pride in having some of the most talented, dedicated, well.',
  },
  {
    id: 3,
    icon: '/images/icon2.png',
    title: 'OUR CURRICULUM',
    description: 'The core of good learning lies in the curriculum.',
  },
  {
    id: 4,
    icon: '/images/icon3.png',
    title: 'OUR ENVIRONMENT',
    description: 'All SSRVM Schools are located in a calm and serene environment.',
  },
  {
    id: 5,
    icon: '/images/icon4.png',
    title: 'OUR METHODOLOGY',
    description: 'Any curriculum is effective only when it is implemented in the right way.',
  },
  {
    id: 6,
    icon: '/images/icon5.png',
    title: 'OUR STRENGTH',
    description: "Our strength is our motto 'broaden the vision, deepen the roots'.",
  },
];

export const WhyChooseContent = memo(function WhyChooseContent() {
  return (
    <div className="py-8 md:py-12">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Why <span className="text-[#feb505]">Choose Us?</span>
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
          Discover what makes SSRVM the perfect choice for your child&apos;s education
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#feb505] to-[#f78c35] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chooseData.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl p-6 shadow-lg hover:shadow-xl border border-white/10 flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
              <OptimizedImage
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="object-contain brightness-0 invert"
              />
            </div>

            <div className="flex-1">
              <h4 className="text-white font-bold text-base mb-1">
                {item.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-10">
        <span className="inline-block w-2 h-2 rounded-full bg-[#feb505]"></span>
        <span className="inline-block w-2 h-2 rounded-full bg-[#f78c35]"></span>
        <span className="inline-block w-2 h-2 rounded-full bg-white"></span>
        <span className="inline-block w-2 h-2 rounded-full bg-[#f78c35]"></span>
        <span className="inline-block w-2 h-2 rounded-full bg-[#feb505]"></span>
      </div>
    </div>
  );
});