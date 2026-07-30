'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllNoticesAdmin, deleteNotice, Notice } from '@/lib/supabase/notices';
import { Pencil, Trash2, Pin } from 'lucide-react';

export default function NoticeTable() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadNotices() {
    setLoading(true);
    const data = await getAllNoticesAdmin();
    setNotices(data);
    setLoading(false);
  }

  useEffect(() => {
    loadNotices();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm('Delete this notice?')) return;
    setNotices((prev) => prev.filter((n) => n.id !== id));
    try {
      await deleteNotice(id);
    } catch {
      alert('Failed to delete. Please refresh.');
      loadNotices();
    }
  }

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (notices.length === 0) return <p className="text-gray-500">No notices yet.</p>;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left text-gray-500">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Expiry</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((n) => (
            <tr key={n.id} className="border-t">
              <td className="px-4 py-3 font-medium flex items-center gap-2">
                {n.is_pinned && <Pin size={13} className="text-[#f0aa00]" />}
                {n.title}
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    n.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {n.is_active ? 'Active' : 'Hidden'}
                </span>
              </td>
              <td className="px-4 py-3 text-gray-500">
                {n.expiry_date ? new Date(n.expiry_date).toLocaleDateString() : '—'}
              </td>
              <td className="px-4 py-3 text-gray-500">
                {new Date(n.created_at).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 text-right space-x-3">
                <Link href={`/admin/notices/edit/${n.id}`}>
                  <Pencil size={16} className="inline text-blue-600 hover:opacity-70" />
                </Link>
                <button onClick={() => handleDelete(n.id)}>
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