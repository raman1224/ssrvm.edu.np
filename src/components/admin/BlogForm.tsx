// src/components/admin/BlogForm.tsx
'use client';

import { useState, useCallback, memo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { createBlog, updateBlog, uploadBlogImage, Blog } from '@/lib/supabase/blog';
import { Upload, X, Loader2 } from 'lucide-react';

const categories = ['General', 'Events', 'Academics', 'Sports', 'Achievements', 'Notice'];

interface BlogFormProps {
  initialData?: Blog;
}

const BlogForm = memo(function BlogForm({ initialData }: BlogFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: initialData?.title || '',
    excerpt: initialData?.excerpt || '',
    content: initialData?.content || '',
    cover_image: initialData?.cover_image || '',
    category: initialData?.category || 'General',
    author: initialData?.author || 'SSRVM Admin',
    is_published: initialData?.is_published || false,
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }

    setUploading(true);
    setError('');

    try {
      const url = await uploadBlogImage(file);
      setForm(prev => ({ ...prev, cover_image: url }));
    } catch (err) {
      setError('Failed to upload image. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
    }
  }, []);

  const removeImage = useCallback(() => {
    setForm(prev => ({ ...prev, cover_image: '' }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (initialData) {
        await updateBlog(initialData.id, form);
      } else {
        await createBlog(form);
      }
      router.push('/admin/blog');
      router.refresh();
    } catch (err) {
      setError('Failed to save blog. Please try again.');
      console.error('Save error:', err);
    } finally {
      setLoading(false);
    }
  }, [form, initialData, router]);

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm space-y-5 max-w-4xl">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1">Title *</label>
        <input
          required
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] focus:border-transparent outline-none"
          placeholder="Enter blog title"
        />
      </div>

      {/* Excerpt */}
      <div>
        <label className="block text-sm font-medium mb-1">Excerpt (short summary)</label>
        <textarea
          rows={2}
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] focus:border-transparent outline-none"
          placeholder="Brief summary of the blog"
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium mb-1">Content *</label>
        <textarea
          required
          rows={10}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm font-mono focus:ring-2 focus:ring-[#183a6e] focus:border-transparent outline-none"
          placeholder="HTML supported (e.g. <p>...</p>)"
        />
        <p className="text-xs text-gray-400 mt-1">HTML tags are supported for formatting</p>
      </div>

      {/* Cover Image Upload */}
      <div>
        <label className="block text-sm font-medium mb-1">Cover Image</label>
        <div className="space-y-3">
          {form.cover_image ? (
            <div className="relative w-full max-w-xs">
              <div className="relative h-48 rounded-lg overflow-hidden border">
                <Image
                  src={form.cover_image}
                  alt="Cover"
                  fill
                  className="object-cover"
                />
              </div>
              <button
                type="button"
                onClick={removeImage}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full max-w-xs h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Click to upload image</p>
                <p className="text-xs text-gray-400">PNG, JPG, WEBP (max 5MB)</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={uploading}
              />
            </label>
          )}
          {uploading && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Loader2 className="w-4 h-4 animate-spin" />
              Uploading...
            </div>
          )}
        </div>
      </div>

      {/* Category & Author */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] focus:border-transparent outline-none"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Publish */}
      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={form.is_published}
          onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
          className="w-4 h-4 accent-[#183a6e]"
        />
        Publish immediately
      </label>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading || uploading}
          className="bg-[#183a6e] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center gap-2"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? 'Saving...' : initialData ? 'Update Blog' : 'Create Blog'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/blog')}
          className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
});

export default BlogForm;