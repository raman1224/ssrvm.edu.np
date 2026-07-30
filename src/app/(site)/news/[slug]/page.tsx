import { getNewsBySlug } from '@/lib/supabase/news';
import { PageHeader } from '@/components/ui/PageHeader';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let item;
  try {
    item = await getNewsBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={item.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News', href: '/news' },
          { label: item.title, active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />
      <section className="py-10 md:py-16 max-w-3xl mx-auto px-4">
        {item.cover_image && (
          <div className="relative h-72 w-full rounded-xl overflow-hidden mb-8">
            <Image src={item.cover_image} alt={item.title} fill className="object-cover" />
          </div>
        )}
        <p className="text-xs text-gray-400 mb-4">
          {new Date(item.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} · {item.source}
        </p>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: item.content }} />
      </section>
    </>
  );
}