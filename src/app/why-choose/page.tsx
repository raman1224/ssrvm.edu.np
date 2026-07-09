import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { WhyChooseContent } from '@/components/whychoose/WhyChooseContent';

export const metadata: Metadata = {
  title: 'Why Choose SSRVM? | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Discover why SSRVM is the right choice for your child.',
  keywords: 'Why Choose SSRVM, SSRVM Belief, SSRVM Faculty, SSRVM Curriculum',
};

export default function WhyChoosePage() {
  return (
    <>
      <PageHeader
        title="Why Choose SSRVM?"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'Why Choose SSRVM?', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section 
        className="py-10 md:py-16 lg:py-20 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: 'url(/images/bg.webp)' }}
      >
        <div className="absolute inset-0 bg-[#1a1a2e]/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhyChooseContent />
        </div>
      </section>
    </>
  );
}