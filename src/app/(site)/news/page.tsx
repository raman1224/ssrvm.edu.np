import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { getNews } from '@/lib/supabase/news';
import NewsGrid from '@/components/news/NewsGrid';
import NewsPagination from '@/components/news/NewsPagination';

export const metadata: Metadata = {
  title: 'News | Sri Sri Ravishankar Vidya Mandir',
  description: 'Latest news and updates from SSRVM Biratnagar.',
};

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const { news, total } = await getNews(page, 6, params.category);
  const totalPages = Math.ceil(total / 6);

  return (
    <>
      <PageHeader
        title="News"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsGrid news={news} />
          <NewsPagination currentPage={page} totalPages={totalPages} />
        </div>
      </section>
    </>
  );
}