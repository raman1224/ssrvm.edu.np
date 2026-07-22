'use client';

import { useSearchParams } from 'next/navigation';
import { PageHeader } from '@/components/ui/PageHeader';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { activities } from '@/lib/activities-data';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ActivityDetailsPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') || 'indoor-sports';
  const activity = activities.find(a => a.slug === slug);

  if (!activity) {
    return (
      <>
        <PageHeader
          title="Activity Details"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Activities', href: '/activities' },
            { label: 'Details', active: true },
          ]}
          backgroundImage="/images/bg3.webp"
        />
        <div className="py-20 text-center">
          <p className="text-gray-600">Activity not found</p>
          <Link href="/activities" className="text-[#0561ab] hover:underline mt-4 inline-block">
            Back to Activities
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Activity Details"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Activities', href: '/activities' },
          { label: activity.title, active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Link 
              href="/activities" 
              className="inline-flex items-center gap-2 text-[#0561ab] hover:text-[#044a8a] transition-colors"
            >
              ← Back to Activities
            </Link>

            <h1 className="text-3xl font-bold uppercase text-gray-900">
              {activity.title}
            </h1>
            <div className="h-1 w-20 bg-[#0561ab]" />

            <p className="text-lg leading-relaxed text-gray-600">
              {activity.description}
            </p>

            {activity.offerings && activity.offerings.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-3">Activities Included:</h3>
                <div className="flex flex-wrap gap-2">
                  {activity.offerings.map((item) => (
                    <span 
                      key={item}
                      className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activity.images && activity.images.length > 0 && (
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {activity.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md"
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
          </motion.div>
        </div>
      </section>
    </>
  );
}