'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllGalleryAdmin, deleteGalleryImage, GalleryImage } from '@/lib/supabase/gallery';
import { Pencil, Trash2 } from 'lucide-react';

export default function GalleryGridAdmin() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadImages() {
    setLoading(true);
    const data = await getAllGalleryAdmin();
    setImages(data);
    setLoading(false);
  }

  useEffect(() => {
    loadImages();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm('Delete this image?')) return;
    setImages((prev) => prev.filter((img) => img.id !== id));
    try {
      await deleteGalleryImage(id);
    } catch {
      alert('Failed to delete. Please refresh and try again.');
      loadImages();
    }
  }

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (images.length === 0) return <p className="text-gray-500">No images yet.</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img) => (
        <div key={img.id} className="bg-white rounded-xl shadow-sm overflow-hidden group relative">
          <div className="relative h-36 w-full">
            <Image src={img.image_url} alt={img.alt_text} fill className="object-cover" />
            {!img.is_active && (
              <span className="absolute top-2 left-2 bg-gray-800/80 text-white text-[10px] px-2 py-0.5 rounded-full">
                Hidden
              </span>
            )}
          </div>
          <div className="p-3">
            <p className="text-xs text-gray-600 truncate">{img.alt_text}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-[10px] text-gray-400">Order: {img.display_order}</span>
              <div className="flex gap-2">
                <Link href={`/admin/gallery/edit/${img.id}`}>
                  <Pencil size={14} className="text-blue-600 hover:opacity-70" />
                </Link>
                <button onClick={() => handleDelete(img.id)}>
                  <Trash2 size={14} className="text-red-600 hover:opacity-70" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}