'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { getAllBlogsAdmin, deleteBlog, Blog } from '@/lib/supabase/blog';
import { Pencil, Trash2, Plus, Eye, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function AdminBlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const loadBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllBlogsAdmin();
      setBlogs(data);
    } catch (error) {
      console.error('Error loading blogs:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBlogs();
  }, [loadBlogs]);

  const handleDelete = useCallback(async (id: string) => {
    if (!confirm('Delete this blog post? This action cannot be undone.')) return;
    
    setDeleting(id);
    try {
      await deleteBlog(id);
      await loadBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog. Please try again.');
    } finally {
      setDeleting(null);
    }
  }, [loadBlogs]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-semibold">Blog Posts</h2>
        <Link
          href="/admin/blog/create"
          className="flex items-center gap-2 bg-[#183a6e] text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
        >
          <Plus size={16} /> New Blog
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-[#183a6e]" />
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500">No blog posts yet.</p>
          <Link
            href="/admin/blog/create"
            className="inline-block mt-4 text-[#183a6e] hover:underline"
          >
            Create your first blog post →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-500">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3 hidden sm:table-cell">Category</th>
                  <th className="px-4 py-3 hidden md:table-cell">Status</th>
                  <th className="px-4 py-3 hidden lg:table-cell">Date</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id} className="border-t hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {blog.cover_image && (
                          <div className="relative w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={blog.cover_image}
                              alt={blog.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span className="font-medium line-clamp-1">{blog.title}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                        {blog.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          blog.is_published
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {blog.is_published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell text-gray-500">
                      {new Date(blog.created_at).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          className="p-1.5 text-gray-400 hover:text-[#183a6e] transition-colors"
                          title="View"
                        >
                          <Eye size={16} />
                        </Link>
                        <Link
                          href={`/admin/blog/edit/${blog.id}`}
                          className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          disabled={deleting === blog.id}
                          className="p-1.5 text-gray-400 hover:text-red-600 transition-colors disabled:opacity-50"
                          title="Delete"
                        >
                          {deleting === blog.id ? (
                            <Loader2 size={16} className="animate-spin" />
                          ) : (
                            <Trash2 size={16} />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}