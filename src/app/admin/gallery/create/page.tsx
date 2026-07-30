'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const GalleryForm = dynamic(() => import('@/components/admin/gallery/GalleryForm'), {
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-sm">
      <Loader2 className="animate-spin text-[#183a6e]" size={32} />
    </div>
  ),
  ssr: false,
});

export default function CreateGalleryPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Add Gallery Image</h2>
      <GalleryForm />
    </div>
  );
}