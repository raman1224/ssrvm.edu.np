'use client';

import { useState, useCallback, memo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { createNews, updateNews, uploadNewsImage, NewsItem } from '@/lib/supabase/news';
import { Upload, X, Loader2 } from 'lucide-react';

const categories = ['General', 'Academic', 'Achievement', 'Sports', 'Announcement', 'Press'];

const NewsForm = memo(function NewsForm({ initialData }: { initialData?: NewsItem }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: initialData?.title || '',
    summary: initialData?.summary || '',
    content: initialData?.content || '',
    cover_image: initialData?.cover_image || '',
    category: initialData?.category || 'General',
    source: initialData?.source || 'SSRVM',
    is_breaking: initialData?.is_breaking || false,
    is_published: initialData?.is_published || false,
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  // useCallback: हरेक re-render मा नयाँ function नबनोस्, input change हुँदा मात्र चलोस्
  const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }
    setUploading(true);
    setError('');
    try {
      const url = await uploadNewsImage(file);
      setForm((prev) => ({ ...prev, cover_image: url }));
    } catch {
      setError('Failed to upload image.');
    } finally {
      setUploading(false);
    }
  }, []);

  const removeImage = useCallback(() => {
    setForm((prev) => ({ ...prev, cover_image: '' }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (initialData) {
        await updateNews(initialData.id, form);
      } else {
        await createNews(form);
      }
      router.push('/admin/news');
      router.refresh();
    } catch {
      setError('Failed to save news.');
    } finally {
      setLoading(false);
    }
  }, [form, initialData, router]);

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm space-y-5 max-w-3xl">
      <div>
        <label className="block text-sm font-medium mb-1">Title *</label>
        <input
          required
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] outline-none"
          placeholder="e.g. SSRVM Wins Inter-School Quiz Competition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Summary (short one-liner)</label>
        <textarea
          rows={2}
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Full Content *</label>
        <textarea
          required
          rows={8}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm font-mono focus:ring-2 focus:ring-[#183a6e] outline-none"
          placeholder="HTML supported"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Cover Image</label>
        {form.cover_image ? (
          <div className="relative w-full max-w-xs">
            <div className="relative h-40 rounded-lg overflow-hidden border">
              <Image src={form.cover_image} alt="Preview" fill className="object-cover" />
            </div>
            <button
              type="button"
              onClick={removeImage}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full max-w-xs h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
            <Upload className="w-6 h-6 text-gray-400 mb-1" />
            <p className="text-xs text-gray-500">Click to upload</p>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
          </label>
        )}
        {uploading && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <Loader2 className="w-4 h-4 animate-spin" /> Uploading...
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] outline-none"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Source</label>
          <input
            value={form.source}
            onChange={(e) => setForm({ ...form, source: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] outline-none"
          />
        </div>
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={form.is_breaking}
            onChange={(e) => setForm({ ...form, is_breaking: e.target.checked })}
            className="w-4 h-4 accent-[#183a6e]"
          />
          Mark as Breaking News
        </label>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={form.is_published}
            onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
            className="w-4 h-4 accent-[#183a6e]"
          />
          Publish immediately
        </label>
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading || uploading}
          className="bg-[#183a6e] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? 'Saving...' : initialData ? 'Update News' : 'Publish News'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/news')}
          className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
});

export default NewsForm;