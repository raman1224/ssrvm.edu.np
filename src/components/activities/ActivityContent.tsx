'use client';

import { motion } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Activity } from '@/lib/activities-data';

interface ActivityContentProps {
  activity: Activity;
}

export function ActivityContent({ activity }: ActivityContentProps) {
  return (
    <motion.div
      key={activity.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-900 sm:text-3xl">
        {activity.title}
      </h2>
      <div className="h-1 w-14 bg-[#0561ab]" />

      {/* Description */}
      <p className="text-[15px] leading-relaxed text-gray-600">
        {activity.description}
      </p>

      {/* Offerings */}
      {activity.offerings && activity.offerings.length > 0 && (
        <div>
          <p className="text-[15px] font-semibold text-gray-700">
            Our offerings in {activity.title} are:
          </p>
          <p className="text-[15px] font-medium text-[#0561ab]">
            {activity.offerings.join(' + ')}
          </p>
        </div>
      )}

      {/* Images Grid */}
      {activity.images && activity.images.length > 0 && (
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {activity.images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-sm ring-1 ring-black/5"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                objectFit="cover"
                className="w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* View More Button - opens external link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mt-6"
      >
        <a
          href={activity.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#0561ab] hover:bg-[#044a8a] text-white px-6 py-2.5 rounded-md transition-all duration-300 hover:scale-105 text-sm font-medium"
        >
          View More
        </a>
      </motion.div>
    </motion.div>
  );
}