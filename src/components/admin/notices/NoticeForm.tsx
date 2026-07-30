'use client';

import { useState, useCallback, memo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { createNotice, updateNotice, uploadNoticeImage, Notice } from '@/lib/supabase/notices';
import { Upload, X, Loader2 } from 'lucide-react';

const NoticeForm = memo(function NoticeForm({ initialData }: { initialData?: Notice }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    image_url: initialData?.image_url || '',
    link_url: initialData?.link_url || '',
    is_pinned: initialData?.is_pinned || false,
    is_active: initialData?.is_active ?? true,
    expiry_date: initialData?.expiry_date || '',
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

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
      const url = await uploadNoticeImage(file);
      setForm((prev) => ({ ...prev, image_url: url }));
    } catch {
      setError('Failed to upload image.');
    } finally {
      setUploading(false);
    }
  }, []);

  const removeImage = useCallback(() => {
    setForm((prev) => ({ ...prev, image_url: '' }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const payload = { ...form, expiry_date: form.expiry_date || null };
      if (initialData) {
        await updateNotice(initialData.id, payload);
      } else {
        await createNotice(payload as any);
      }
      router.push('/admin/notices');
      router.refresh();
    } catch {
      setError('Failed to save notice.');
    } finally {
      setLoading(false);
    }
  }, [form, initialData, router]);

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm space-y-5 max-w-2xl">
      <div>
        <label className="block text-sm font-medium mb-1">Title *</label>
        <input
          required
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] outline-none"
          placeholder="e.g. Green Day Celebration"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          rows={4}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Image (optional)</label>
        {form.image_url ? (
          <div className="relative w-full max-w-xs">
            <div className="relative h-40 rounded-lg overflow-hidden border">
              <Image src={form.image_url} alt="Preview" fill className="object-cover" />
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

      <div>
        <label className="block text-sm font-medium mb-1">Link URL (optional)</label>
        <input
          value={form.link_url}
          onChange={(e) => setForm({ ...form, link_url: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] outline-none"
          placeholder="https://... (if you have add PDF/circular link )"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Expiry Date (optional)</label>
          <input
            type="date"
            value={form.expiry_date}
            onChange={(e) => setForm({ ...form, expiry_date: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] outline-none"
          />
        </div>
        <div className="flex flex-col justify-end gap-2 pb-1">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={form.is_pinned}
              onChange={(e) => setForm({ ...form, is_pinned: e.target.checked })}
              className="w-4 h-4 accent-[#183a6e]"
            />
            Pin to top (important)
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={form.is_active}
              onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
              className="w-4 h-4 accent-[#183a6e]"
            />
            Show on website
          </label>
        </div>
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading || uploading}
          className="bg-[#183a6e] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? 'Saving...' : initialData ? 'Update Notice' : 'Create Notice'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/notices')}
          className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
});

export default NoticeForm;