'use client';

import { memo, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Calendar } from 'lucide-react';
import { NewsItem } from '@/lib/supabase/news';

export default memo(function NewsGrid({ news }: { news: NewsItem[] }) {
  // useMemo: breaking news हरू सधैं अगाडि, अरू date अनुसार - array sort गर्ने logic
  // news prop नबदलिएसम्म फेरि sort नहोस्
  const sortedNews = useMemo(() => {
    return [...news].sort((a, b) => {
      if (a.is_breaking && !b.is_breaking) return -1;
      if (!a.is_breaking && b.is_breaking) return 1;
      return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
    });
  }, [news]);

  if (sortedNews.length === 0) {
    return <p className="text-center text-gray-500 py-16">No news available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedNews.map((item) => (
        <Link
          key={item.id}
          href={`/news/${item.slug}`}
          className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border"
        >
          <div className="relative h-44 w-full bg-gray-100">
            {item.cover_image ? (
              <Image
                src={item.cover_image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#183a6e] to-[#2c7ac2] text-white text-sm">
                SSRVM
              </div>
            )}
            {item.is_breaking && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <Zap size={11} /> Breaking
              </span>
            )}
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
              <Calendar size={11} />
              {new Date(item.published_at).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric',
              })}
              <span className="ml-1">· {item.source}</span>
            </p>
            <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm line-clamp-2">{item.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
});