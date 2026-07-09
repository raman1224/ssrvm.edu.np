// src/components/mission/MissionVisionContent.tsx
import { memo } from "react";

export const MissionVisionContent = memo(function MissionVisionContent() {
  const objectives = [
    "To create a happy and caring School environment in which the children learn the language, courtesy, good manners and consideration for others.",
    "To develop helpful learning attitude, useful learning skills with continuity and progression, to increase the child's knowledge and understanding.",
    "To motivate children to learn, to read fluently and accurately, and to promote an enjoyment of reading and writing.",
    "To develop a knowledge and understanding of information into transformations.",
    "To encourage scientific curiosity and to improve the children's skill and knowledge in science, information technology, and to further develop the knowledge to make the world a better place to live.",
    "To awake an awareness of the world around us through historical, geographical and scientific studies.",
    "To help students maximize their potential through self development programs from the international acclaimed Art of Living that includes yoga, breathing techniques, meditation and social services.",
    "To create young adults who are equipped to face the challenges of the colleges and universities of any part of the world after 10 + 2.",
    "To provide a stimulating environment where the international standards of work and behavior is achieved.",
    "To nurture and develop a child's unique talent.",
    "To build positive relationships between children, teachers and parents to ensure a consistent approach to holistic learning.",
    "To be full of confidence, positivity and enthusiasm after completion of school.",
  ];

  return (
    <div className="max-w-4xl mx-auto py-6 md:py-10">
      {/* Vision Section */}
      <div className="mb-8 md:mb-12">
        <h1 className="font-bold text-[#183a6e] text-2xl md:text-3xl lg:text-4xl">Vision</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-[#bb2124] to-[#f78c35] rounded-full mb-4"></div>
        
        <div className="space-y-4">
          <h3 className="text-[#bb2124] font-bold text-lg md:text-xl">Broaden the vision Deepen the Roots</h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            At Sri Sri Ravishankar Vidya Mandir, we respect the imperative of imparting an educational experience that is world-class and holistic, which prepares them to be a person of integrity and an embodiment of values.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Sri Sri Ravishankar Vidya Mandir, is a temple of learning where knowledge is revered, enabling students to Broaden their vision and Deepen their roots by providing them with the modern tools as well as moral and spiritual strengths such as Yoga, Breathing techniques, Pranayams needed to face the challenges of the modern world, thereby making the learning experience holistic which is aimed at all round development of the students personalities, enhancing human values of love, compassion, sharing and caring towards the environment and society in a joyful stress free manner.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mb-8 md:mb-12">
        <h1 className="font-bold text-[#183a6e] text-2xl md:text-3xl lg:text-4xl">Mission</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-[#bb2124] to-[#f78c35] rounded-full mb-4"></div>
        
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            The school's mission is to provide a learning environment that enhances to <span className="text-[#183a6e] font-bold">"Discover the True Potential within a child"</span>, through the joy of learning and deep rooted everlasting values.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            To provide the child with modern tools as well as the moral and spiritual strength needed to face the challenges of the modern world and thus evolve into model citizens.
          </p>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="bg-gray-50 rounded-lg p-4 md:p-6 lg:p-8 border border-gray-200">
        <h2 className="font-bold text-[#183a6e] text-xl md:text-2xl mb-4">Objectives</h2>
        
        <div className="space-y-3">
          {objectives.map((objective, index) => (
            <div key={index} className="flex items-start gap-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <span className="text-[#bb2124] font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
              <span>{objective}</span>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
});