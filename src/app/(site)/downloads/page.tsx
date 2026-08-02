import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { getActiveDocuments } from '@/lib/supabase/documents';
import DownloadTable from '@/components/downloads/DownloadTable';

export const metadata: Metadata = {
  title: 'Downloads | Sri Sri Ravishankar Vidya Mandir',
  description: 'Download syllabus, circulars, exam routines, and other important documents from SSRVM Biratnagar.',
};

export default async function DownloadsPage() {
  const documents = await getActiveDocuments();

  return (
    <>
      <PageHeader
        title="Downloads"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Downloads', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <DownloadTable documents={documents} />
        </div>
      </section>
    </>
  );
}