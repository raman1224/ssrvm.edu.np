'use  client'
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';
const BlogForm = dynamic(() => import('@/components/admin/BlogForm'), {
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-sm">
      <Loader2 className="animate-spin text-[#183a6e]" size={32} />
    </div>
  ),
});
import { getBlogById } from '@/lib/supabase/blog';
import { notFound } from 'next/navigation';

export default async function EditBlogPage({ 
  params
 }: {
  params: Promise<{ id: string }>
 }) {
  const {id} = await params;
  let blog;
  try {
    blog = await getBlogById(id);
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

