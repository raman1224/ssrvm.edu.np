'use client';

import { memo, useState, useCallback } from 'react';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Leaf, 
  Lightbulb, 
  Shield,
  Globe,
  GraduationCap,
  Sparkles
} from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  { 
    icon: Heart, 
    title: 'OUR BELIEF', 
    description: "Our founder, Gurudev Sri Sri Ravishankar Ji, has given us the '5 Aspects of Education'." 
  },
  { 
    icon: Users, 
    title: 'OUR FACULTY', 
    description: 'At SSRVM we take pride in having some of the most talented, dedicated, well-trained teachers.' 
  },
  { 
    icon: BookOpen, 
    title: 'OUR CURRICULUM', 
    description: 'The core of good learning lies in the curriculum that balances academics with life skills.' 
  },
  { 
    icon: Leaf, 
    title: 'OUR ENVIRONMENT', 
    description: 'All SSRVM Schools are located in a calm and serene environment conducive to learning.' 
  },
  { 
    icon: Lightbulb, 
    title: 'OUR METHODOLOGY', 
    description: 'Any curriculum is effective only when it is implemented in the right way with innovative methods.' 
  },
  { 
    icon: Shield, 
    title: 'OUR STRENGTH', 
    description: "Our strength is our motto 'broaden the vision, deepen the roots' for holistic development." 
  },
  { 
    icon: Globe, 
    title: 'GLOBAL PERSPECTIVE', 
    description: 'We provide a global perspective while nurturing Indian values and culture.' 
  },
  { 
    icon: GraduationCap, 
    title: 'ACADEMIC EXCELLENCE', 
    description: 'Consistent track record of academic excellence with innovative teaching methods.' 
  },
  { 
    icon: Sparkles, 
    title: 'HOLISTIC DEVELOPMENT', 
    description: 'Focus on overall development through sports, arts, values, and life skills.' 
  },
];

export const WhyChooseUs = memo(function WhyChooseUs() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);

  const displayedFeatures = showAll ? features : features.slice(0, 6);

  return (
    <div className="py-8 md:py-12 lg:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-2">
        Why <span className="text-[#feb505]">Choose Us?</span>
      </h2>
      <p className="text-center text-gray-200 text-sm md:text-base mb-8 max-w-2xl mx-auto">
        Discover what makes SSRVM the perfect choice for your child&apos;s education and overall development
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {displayedFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl flex items-start gap-3 md:gap-4 border border-white/10"
            >
              <div className="flex-shrink-0 mt-1">
                <Icon size={28} className="md:size-32 text-[#feb505]" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm md:text-base">{feature.title}</h4>
                <p className="text-gray-200 text-xs md:text-sm mt-1 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      {features.length > 6 && (
        <div className="text-center mt-6 md:mt-8">
          <button
            onClick={toggleShowAll}
            className="bg-[#feb505] hover:bg-[#e6a304] text-[#1a1a2e] font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-md transition-all duration-300 hover:scale-105 text-sm md:text-base shadow-lg"
          >
            {showAll ? 'View Less' : 'View More Features'}
          </button>
        </div>
      )}
    </div>
  );
});