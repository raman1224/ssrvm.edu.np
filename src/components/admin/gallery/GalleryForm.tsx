'use client';

import { useState, useCallback, memo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { createGalleryImage, updateGalleryImage, uploadGalleryImage, GalleryImage } from '@/lib/supabase/gallery';
import { Upload, X, Loader2 } from 'lucide-react';

interface GalleryFormProps {
  initialData?: GalleryImage;
}

const GalleryForm = memo(function GalleryForm({ initialData }: GalleryFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    image_url: initialData?.image_url || '',
    alt_text: initialData?.alt_text || '',
    display_order: initialData?.display_order ?? 0,
    is_active: initialData?.is_active ?? true,
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
      const url = await uploadGalleryImage(file);
      setForm((prev) => ({ ...prev, image_url: url }));
    } catch (err) {
      setError('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  }, []);

  const removeImage = useCallback(() => {
    setForm((prev) => ({ ...prev, image_url: '' }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.image_url) {
      setError('Please upload an image first.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      if (initialData) {
        await updateGalleryImage(initialData.id, form);
      } else {
        await createGalleryImage(form);
      }
      router.push('/admin/gallery');
      router.refresh();
    } catch (err) {
      setError('Failed to save. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [form, initialData, router]);

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm space-y-5 max-w-lg">
      <div>
        <label className="block text-sm font-medium mb-1">Image *</label>
        {form.image_url ? (
          <div className="relative w-full max-w-xs">
            <div className="relative h-48 rounded-lg overflow-hidden border">
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
          <label className="flex flex-col items-center justify-center w-full max-w-xs h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Click to upload image</p>
              <p className="text-xs text-gray-400">PNG, JPG, WEBP (max 5MB)</p>
            </div>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
          </label>
        )}
        {uploading && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Uploading...
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Alt Text (image description) *</label>
        <input
          required
          value={form.alt_text}
          onChange={(e) => setForm({ ...form, alt_text: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] outline-none"
          placeholder="e.g. Annual Sports Day 2026"
        />
        <p className="text-xs text-gray-400 mt-1">This used for screen-reader and SEO.</p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Display Order</label>
        <input
          type="number"
          value={form.display_order}
          onChange={(e) => setForm({ ...form, display_order: Number(e.target.value) })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] outline-none"
        />
        <p className="text-xs text-gray-400 mt-1">first look small number like (0, 1, 2...)</p>
      </div>

      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={form.is_active}
          onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
          className="w-4 h-4 accent-[#183a6e]"
        />
        Show on website
      </label>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading || uploading}
          className="bg-[#183a6e] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? 'Saving...' : initialData ? 'Update Image' : 'Add Image'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/gallery')}
          className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
});

export default GalleryForm;