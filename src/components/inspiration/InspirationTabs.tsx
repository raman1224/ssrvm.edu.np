'use client';

import { memo, useState, useCallback } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Building2, Users, Globe } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

const tabs: Tab[] = [
  {
    id: 'founder',
    label: 'Founder',
    content: <FounderTab />,
  },
  {
    id: 'trust',
    label: 'SSRVM Trust',
    content: <TrustTab />,
  },
  {
    id: 'art-of-living',
    label: 'Art of Living Foundation',
    content: <ArtOfLivingTab />,
  },
];

function FounderTab() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Single Hero Section: bg image + overlaid title (top) + overlaid quote box (bottom-left) */}
      <div className="relative overflow-hidden min-h-[420px] md:min-h-[500px] lg:min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/inspiration/bg4.webp"
            alt="Gurudev Sri Sri Ravi Shankar"
            fill
            className="w-full h-full"
            objectFit="cover"
          />
          {/* subtle overlay so white title text stays legible on any photo */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Title - top left */}
        <div className="relative z-10 px-6 md:px-10 pt-8 md:pt-12">
          <h4 className="text-base md:text-lg text-white/90 font-semibold">
            Founded by
          </h4>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1a1464] mt-1">
            Gurudev Sri Sri Ravi Shankar
          </h3>
        </div>

        {/* Quote box - bottom left, overlapping the image */}
        <div className="absolute left-6 right-6 md:left-10 md:right-auto bottom-6 md:bottom-10 z-10 bg-[#1a1464]/95 text-white p-6 md:p-8 rounded-md max-w-xl">
          <h2 className="text-lg md:text-xl lg:text-2xl font-light italic font-serif leading-snug">
            &quot;Education is a vehicle for transformation or metamorphosis of the
            self and an aid to the growth of economy.&quot;
          </h2>
          <p className="text-white/90 font-medium mt-4">
            -Sri Sri Ravi Shankar
          </p>
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-4 text-gray-700 leading-relaxed px-6 md:px-0">
        <p>
          Gurudev Sri Sri Ravi Shankar is a globally revered spiritual and humanitarian leader. He has spearheaded an
          unprecedented worldwide movement for a stress-free, violence-free society. Through a myriad of programs and
          teachings, a network of organizations including the Art of Living and the International Association for Human
          Values, and a rapidly growing presence across 156 countries, Gurudev has reached an estimated 450 million people.
          Gurudev has developed unique, impactful programs that empower, equip and transform individuals to tackle challenges
          at global, national, community and individual levels.
        </p>

        <div className="bg-[#f8f9fa] border-l-4 border-[#feb505] p-4 md:p-6 rounded-r-lg">
          <p className="text-base md:text-lg font-medium text-gray-800 italic">
            &quot;Basic human values need to be encouraged in the classroom. A child is born with these values and a teacher
            needs to uncover them. What are these human values? Compassion, Co-operation, friendliness, smiles, laughter,
            lightness, wanting to help, a sense of belonging and caring for each other.&quot;
          </p>
        </div>

        <p>
          Through his initiatives and addresses, Sri Sri has consistently emphasized the need for reinforcing human values
          and recognizing humanity as our highest identity beyond nation, faith and gender. Fostering interfaith harmony,
          bridging communal divides and calling for a multi-cultural education as the remedy for fanaticism are a significant
          part of his efforts to achieve sustainable peace on our planet. Each of our institute is based on this philosophy
          and is imparting education to thousands, so as to create a better society.
        </p>
      </div>
    </div>
  );
}

export default FounderTab;
function TrustTab() {
  const stats = [
    { value: '68', label: 'Vidya Mandirs' },
    { value: '12', label: 'Bal Mandirs' },
    { value: '10', label: 'Sri Sri Academys' },
    { value: '2', label: 'Ayurvedic Colleges' },
    { value: '1', label: 'Sri Sri University' },
    { value: '2', label: 'Ayurvedic Research' },
    { value: '1', label: 'Junior College' },
    { value: '1', label: 'Computer Sciences' },
    { value: '1', label: 'Seva Mandirs' },
    { value: '1', label: 'Institute of Nursing' },
    { value: '3', label: 'B.ED & PU College' },
  ];

  return (
    <div className="space-y-8 md:space-y-10">
      {/* Trust Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <h3 className="text-2xl md:text-3xl font-bold text-[#505254] flex items-center gap-3">
            <Building2 className="text-[#bb2124]" size={32} />
            Sri Sri Ravi Shankar Vidya Mandir Trust
          </h3>
          <p>
            Gurudev Sri Sri Ravi Shankar believes that just information is not education. It is culturing our behavior 
            and attitude. It is our ability to perceive things better. The purpose of education is to increase awareness. 
            Only an education that can nourish inbuilt virtues can impart true intelligence.
          </p>
          <p>
            With these thoughts in mind, SRI SRI RAVISHANKAR VIDYA MANDIR TRUST was founded in the year 1999 by Gurudev 
            Sri Sri Ravishankar as the educational wing of the Art of Living, to promote holistic education in a stress 
            free and child friendly environment.
          </p>
        </div>

        <div className="relative h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-lg">
          <OptimizedImage
            src="/images/inspiration/img2.jpg"
            alt="SSRVM Trust Campus"
            fill
            className="w-full h-full"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Global Footprint */}
      <div className="bg-[#f8f9fa] rounded-lg p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-[#183a6e] mb-6 flex items-center gap-3">
          <Globe className="text-[#bb2124]" size={32} />
          Our Global Footprint
        </h3>
        
        <p className="text-gray-600 mb-6">
          Our educational institutes have created a web of excellence across geographies, around the world. 
          We have 117 Institutes including Sri Sri University, Sri Sri Ayurveda College and Hospital, Sri Sri Institute of Nursing.
        </p>

        {/* Countries */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 max-w-md mx-auto">
          {[
            { name: 'India', flag: '/images/inspiration/1.jpg' },
            { name: 'Oman', flag: '/images/inspiration/2.jpg' },
            { name: 'Nepal', flag: '/images/inspiration/3.jpg' },
          ].map((country) => (
            <div key={country.name} className="text-center">
              <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden border-4 border-[#bb2124] shadow-md">
                <OptimizedImage
                  src={country.flag}
                  alt={country.name}
                  fill
                  className="w-full h-full"
                  objectFit="cover"
                />
              </div>
              <p className="mt-2 font-semibold text-gray-700 text-sm md:text-base">{country.name}</p>
            </div>
          ))}
        </div>

        <h4 className="text-xl md:text-2xl font-bold text-[#183a6e] mb-6 text-center">
          60000+ Students
        </h4>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="bg-white rounded-lg p-3 md:p-4 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#bb2124]">{stat.value}</p>
              <p className="text-[10px] md:text-xs text-gray-600 mt-1 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Image */}
      <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden shadow-lg">
        <OptimizedImage
          src="/images/inspiration/img3.jpg"
          alt="SSRVM Institutions"
          fill
          className="w-full h-full"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

function ArtOfLivingTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <div className="relative w-48 h-20 mb-4">
          <OptimizedImage
            src="/images/inspiration/art-of-living.png"
            alt="Art of Living Foundation"
            width={200}
            height={80}
            className="object-contain"
          />
        </div>

        <p>
          Operating in 156 countries, The Art of Living is a non-profit, educational and humanitarian organization 
          founded in 1981 by the world-renowned humanitarian and spiritual teacher - Gurudev Sri Sri Ravi Shankar. 
          All our programs are guided by Gurudev&apos;s philosophy: &quot;Unless we have a stress-free mind and a 
          violence-free society, we cannot achieve world peace.&quot;
        </p>

        <p>
          The Art of Living community is diverse and attracts people from all walks of life.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-[#183a6e] mt-6 flex items-center gap-3">
          <Users className="text-[#bb2124]" size={28} />
          Gurudev Sri Sri Ravi Shankar
        </h3>

        <p>
          Gurudev has brought yoga, meditation, and practical wisdom to millions of people in 156 countries.
        </p>

        <div className="bg-[#f8f9fa] border-l-4 border-[#feb505] p-4 md:p-6 rounded-r-lg">
          <p className="text-base md:text-lg font-medium text-gray-800 italic">
            &quot;Whenever you are in love and feel joyous, your mind is in the present. That is when you achieve yoga. 
            The art of living lies in being in the present moment.&quot;
          </p>
        </div>

        <div className="aspect-video rounded-lg overflow-hidden shadow-lg mt-6">
          <iframe
            src="https://www.youtube.com/embed/aBwSNy4Vj6w?si=rh2fB-k3MLYuq-AN"
            title="Art of Living Foundation - Gurudev Sri Sri Ravi Shankar"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
        <OptimizedImage
          src="/images/inspiration/img4.jpg"
          alt="Art of Living Foundation"
          fill
          className="w-full h-full"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export const InspirationTabs = memo(function InspirationTabs() {
  const [activeTab, setActiveTab] = useState('founder');

  const handleTabClick = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row gap-2 mb-8 md:mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              px-6 py-3 text-sm md:text-base font-semibold rounded-lg transition-all duration-300 flex-1 sm:flex-none
              ${activeTab === tab.id 
                ? 'bg-[#f78c35] text-white shadow-lg transform scale-105' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg p-4 md:p-6 lg:p-8 shadow-sm border border-gray-100">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? 'block animate-fade-in' : 'hidden'}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
});