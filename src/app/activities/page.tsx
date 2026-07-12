import { PageHeader } from '@/components/ui/PageHeader';
import { ActivitiesSidebar } from '@/components/activities/ActivitiesSidebar';
import { ActivityContent } from '@/components/activities/ActivityContent';
import { getActivityBySlug } from '@/lib/activities-data';

export default function ActivitiesPage() {
  // Default to showing Indoor Sports content
  const activity = getActivityBySlug('indoor-sports')!;

  return (
    <>
      <PageHeader
        title="Static"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Static', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
            <ActivitiesSidebar />

            <ActivityContent activity={activity} />
          </div>
        </div>
      </section>
    </>
  );
}