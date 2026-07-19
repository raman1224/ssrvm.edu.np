import { getBlogBySlug } from '@/lib/supabase/blog';
import { PageHeader } from '@/components/ui/PageHeader';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  let blog;
  try {
    blog = await getBlogBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={blog.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: blog.title, active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />
      <section className="py-10 md:py-16 max-w-4xl mx-auto px-4">
        <div className="relative h-80 w-full rounded-xl overflow-hidden mb-8">
          <Image src={blog.cover_image} alt={blog.title} fill className="object-cover" />
        </div>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </section>
    </>
  );
}