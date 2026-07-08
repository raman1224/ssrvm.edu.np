'use client';

import { memo } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { 
  Heart, 
  Shield, 
  Lightbulb, 
  Users, 
  Star, 
  Award,
  Sparkles,
  Target,
  Compass,
  Globe,
  GraduationCap
} from 'lucide-react';

interface CoreValue {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const coreValues: CoreValue[] = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Nurturing empathy and kindness in every child',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Building character with honesty and moral strength',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Encouraging creative thinking and problem solving',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Fostering teamwork and community spirit',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Striving for the highest standards in everything',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Award,
    title: 'Respect',
    description: 'Valuing diversity and treating all with dignity',
    color: 'from-red-500 to-orange-500',
  },
];

export const PhilosophyContent = memo(function PhilosophyContent() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Quote Section */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block bg-gradient-to-r from-[#bb2124] to-[#f78c35] text-transparent bg-clip-text">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            We never compromise on our values.
          </h2>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#183a6e] mt-3 mb-6">
          OUR CORE VALUES
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#bb2124] to-[#f78c35] mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-serif italic">
          &quot;The goal of education is to increase awareness not information. 
          Watching our inner-responses, knowing that they are there, increases our self-awareness.&quot;
        </p>
      </div>

      {/* Philosophy Image */}
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
        <OptimizedImage
          src="/images/philosophy.webp"
          alt="SSRVM Philosophy - Core Values"
          fill
          priority
          className="w-full h-full"
          objectFit="cover"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#183a6e]/30 to-transparent"></div>
        
        {/* Floating Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-2xl">
            <p className="text-white text-lg md:text-xl font-light leading-relaxed">
              &quot;Make it a way of life.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="mt-12 md:mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#183a6e] mb-3">
          Our Guiding Principles
        </h3>
        <p className="text-center text-gray-600 text-sm md:text-base mb-8 max-w-2xl mx-auto">
          These core values shape everything we do and every child we nurture
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Gradient Icon Background */}
                <div className={`absolute -top-4 left-6 w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-[#183a6e] group-hover:text-[#bb2124] transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {value.description}
                  </p>
                </div>
                
                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Philosophy in Action Section */}
      <div className="mt-12 md:mt-16 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-2xl p-6 md:p-10 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#183a6e] mb-4">
              Philosophy in Action
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                At SSRVM, our philosophy isn't just words on paper—it's lived every day through:
              </p>
              <ul className="space-y-3">
                {[
                  'Holistic development of every child',
                  'Value-based education with practical application',
                  'Stress-free learning environment',
                  'Individual attention with 1:9 teacher-student ratio',
                  'Integration of yoga and meditation',
                  'Focus on life skills and character building'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Sparkles size={18} className="text-[#bb2124] flex-shrink-0 mt-1" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: GraduationCap, label: 'Quality Education', color: 'from-blue-500 to-cyan-500' },
              { icon: Target, label: 'Clear Vision', color: 'from-purple-500 to-pink-500' },
              { icon: Compass, label: 'Right Direction', color: 'from-emerald-500 to-teal-500' },
              { icon: Globe, label: 'Global Perspective', color: 'from-orange-500 to-red-500' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${item.color} text-white mb-3`}>
                    <Icon size={24} />
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-gray-700">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="text-center max-w-3xl mx-auto pt-4">
        <div className="border-t-2 border-gray-200 pt-8">
          <p className="text-lg md:text-xl font-medium text-[#183a6e]">
            &quot;Make it a way of life.&quot;
          </p>
          <div className="flex justify-center gap-2 mt-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#bb2124]"></span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#f78c35]"></span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#183a6e]"></span>
          </div>
        </div>
      </div>
    </div>
  );
});