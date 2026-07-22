'use client';

import Link from 'next/link';

const categories = ['All', 'General', 'Events', 'Academics', 'Sports', 'Achievements', 'Notice'];

export function BlogCategoryFilter({ activeCategory }: { activeCategory: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <Link
          key={cat}
          href={cat === 'All' ? '/blog' : `/blog?category=${cat}`}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeCategory === cat
              ? 'bg-[#183a6e] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}