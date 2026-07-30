'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { getAllNewsAdmin, deleteNews, NewsItem } from '@/lib/supabase/news';
import { Pencil, Trash2, Zap } from 'lucide-react';

export default function NewsTable() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState('All');

  const loadNews = useCallback(async () => {
    setLoading(true);
    const data = await getAllNewsAdmin();
    setNews(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  const handleDelete = useCallback(async (id: string) => {
    if (!confirm('Delete this news?')) return;
    setNews((prev) => prev.filter((n) => n.id !== id));
    try {
      await deleteNews(id);
    } catch {
      alert('Failed to delete. Please refresh.');
      loadNews();
    }
  }, [loadNews]);

  // useMemo: category list हरेक render मा नयाँ नबनोस्, news array बदलिएमा मात्र recompute होस्
  const categories = useMemo(() => {
    const unique = new Set(news.map((n) => n.category));
    return ['All', ...Array.from(unique)];
  }, [news]);

  // useMemo: filtered list - filterCategory वा news बदलिएमा मात्र फेरि compute होस्
  const filteredNews = useMemo(() => {
    if (filterCategory === 'All') return news;
    return news.filter((n) => n.category === filterCategory);
  }, [news, filterCategory]);

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (news.length === 0) return <p className="text-gray-500">No news yet.</p>;

  return (
    <div>
      <div className="flex gap-2 mb-4 flex-wrap">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilterCategory(c)}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              filterCategory === c ? 'bg-[#183a6e] text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-500">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredNews.map((n) => (
              <tr key={n.id} className="border-t">
                <td className="px-4 py-3 font-medium flex items-center gap-2">
                  {n.is_breaking && <Zap size={13} className="text-red-500 fill-red-500" />}
                  {n.title}
                </td>
                <td className="px-4 py-3">{n.category}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      n.is_published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {n.is_published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {new Date(n.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-right space-x-3">
                  <Link href={`/admin/news/edit/${n.id}`}>
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
    </div>
  );
}