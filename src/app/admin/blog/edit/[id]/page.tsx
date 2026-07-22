import BlogForm from '@/components/admin/BlogForm';
import { getBlogById } from '@/lib/supabase/blog';
import { notFound } from 'next/navigation';

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  let blog;
  try {
    blog = await getBlogById(params.id);
  } catch {
    notFound();
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Edit Blog</h2>
      <BlogForm initialData={blog} />
    </div>
  );
}

