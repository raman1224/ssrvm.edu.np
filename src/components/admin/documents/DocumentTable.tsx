'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { getAllDocumentsAdmin, deleteDocument, formatFileSize, DocumentItem } from '@/lib/supabase/documents';
import { Pencil, Trash2, FileText } from 'lucide-react';

export default function DocumentTable() {
  const [docs, setDocs] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);

  const loadDocs = useCallback(async () => {
    setLoading(true);
    const data = await getAllDocumentsAdmin();
    setDocs(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadDocs();
  }, [loadDocs]);

  const handleDelete = useCallback(async (id: string) => {
    if (!confirm('Delete this document?')) return;
    setDocs((prev) => prev.filter((d) => d.id !== id));
    try {
      await deleteDocument(id);
    } catch {
      alert('Failed to delete. Please refresh.');
      loadDocs();
    }
  }, [loadDocs]);

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (docs.length === 0) return <p className="text-gray-500">No documents yet.</p>;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left text-gray-500">
          <tr>
            <th className="px-4 py-3">Title</th>
                                    <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Size</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {docs.map((d) => (
            <tr key={d.id} className="border-t">
              <td className="px-4 py-3 font-medium flex items-center gap-2">
                <FileText size={15} className="text-[#183a6e]" /> {d.title}
              </td>
               <td className="px-4 py-3 font-medium  ">
                {d.description}
              </td>
              <td className="px-4 py-3 text-gray-500">{formatFileSize(d.file_size)}</td>
              <td className="px-4 py-3 text-gray-500">{d.file_type}</td>
              <td className="px-4 py-3 text-gray-500">{d.category}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    d.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {d.is_active ? 'Active' : 'Hidden'}
                </span>
              </td>
              <td className="px-4 py-3 text-right space-x-3">
                <Link href={`/admin/documents/edit/${d.id}`}>
                  <Pencil size={16} className="inline text-blue-600 hover:opacity-70" />
                </Link>
                <button onClick={() => handleDelete(d.id)}>
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