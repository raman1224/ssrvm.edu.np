'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllBlogsAdmin, deleteBlog, Blog } from '@/lib/supabase/blog';
import { Pencil, Trash2 } from 'lucide-react';

export default function BlogTable() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadBlogs() {
    setLoading(true);
    const data = await getAllBlogsAdmin();
    setBlogs(data);
    setLoading(false);
  }

  useEffect(() => {
    loadBlogs();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm('Delete this blog post?')) return;
    setBlogs((prev) => prev.filter((b) => b.id !== id));
    try {
      await deleteBlog(id);
    } catch {
      alert('Failed to delete. Please refresh and try again.');
      loadBlogs();
    }
  }

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (blogs.length === 0) return <p className="text-gray-500">No blog posts yet.</p>;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left text-gray-500">
          <tr>
            <th className="px-4 py-3">Title</th>
                        <th className="px-4 py-3">Excerpt</th>

             
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id} className="border-t">
              <td className="px-4 py-3 font-medium">{blog.title}</td>
                            <td className="px-4 py-3">{blog.excerpt}</td>
              <td className="px-4 py-3">{blog.category}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    blog.is_published
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {blog.is_published ? 'Published' : 'Draft'}
                </span>
              </td>
              <td className="px-4 py-3 text-gray-500">
                {new Date(blog.created_at).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 text-right space-x-3">
                <Link href={`/admin/blog/edit/${blog.id}`}>
                  <Pencil size={16} className="inline text-blue-600 hover:opacity-70" />
                </Link>
                <button onClick={() => handleDelete(blog.id)}>
                  <Trash2 size={16} className="inline text-red-600 hover:opacity-70" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}