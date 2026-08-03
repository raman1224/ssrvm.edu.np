import { Suspense } from "react";
import dynamic from "next/dynamic";
import { HeroSlider } from "@/components/home/HeroSlider";
import { Metadata } from "next";

// export const dynamic = "force-static";
export const revalidate = 3600;

// ---------------- Dynamic Imports ----------------

const WelcomeSection = dynamic(() =>
  import("@/components/home/WelcomeSection").then((m) => ({
    default: m.WelcomeSection,
  }))
);

const VisionAchievements = dynamic(() =>
  import("@/components/home/VisionAchievements").then((m) => ({
    default: m.VisionAchievements,
  }))
);

const GuruSection = dynamic(() =>
  import("@/components/home/GuruSection").then((m) => ({
    default: m.GuruSection,
  }))
);

const PrincipalMessage = dynamic(() =>
  import("@/components/home/PrincipalMessage").then((m) => ({
    default: m.PrincipalMessage,
  }))
);

const WhyChooseUs = dynamic(() =>
  import("@/components/home/WhyChooseUs").then((m) => ({
    default: m.WhyChooseUs,
  }))
);

const PhotoGallery = dynamic(() =>
  import("@/components/home/PhotoGallery").then((m) => ({
    default: m.PhotoGallery,
  }))
);

const LocationSection = dynamic(() =>
  import("@/components/home/LocationSection").then((m) => ({
    default: m.LocationSection,
  }))
);

// ---------------- Skeleton ----------------

function SectionSkeleton({ height = "h-80" }: { height?: string }) {
  return (
    <div className={`${height} w-full animate-pulse rounded-lg bg-gray-200`} />
  );
}

export const metadata: Metadata = {
  title: "Home | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal",
  description:
    "Sri Sri Ravishankar Vidya Mandir, a revered temple of knowledge where every child's potential is nurtured.",
};

export default function HomePage() {
  return (
    <>
      {/* Above the fold */}
      <HeroSlider />

      <section className="bg-[#feb505] py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Suspense fallback={<SectionSkeleton />}>
            <WelcomeSection />
          </Suspense>
        </div>
      </section>

      <section className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Suspense fallback={<SectionSkeleton />}>
            <VisionAchievements />
          </Suspense>
        </div>
      </section>

      <section className="bg-[#feaa02] py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Suspense fallback={<SectionSkeleton />}>
            <GuruSection />
          </Suspense>
        </div>
      </section>

      <section className="bg-[#ededec] py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Suspense fallback={<SectionSkeleton />}>
            <PrincipalMessage />
          </Suspense>
        </div>
      </section>

      <section
        className="bg-cover bg-center bg-fixed py-8 md:py-12 lg:py-16 relative"
        style={{ backgroundImage: "url(/images/bg.webp)" }}
      >
        <div className="absolute inset-0 bg-[#1a1a2e]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Suspense fallback={<SectionSkeleton />}>
            <WhyChooseUs />
          </Suspense>
        </div>
      </section>

      <section className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Suspense fallback={<SectionSkeleton />}>
            <PhotoGallery />
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <LocationSection />
      </Suspense>
    </>
  );
}