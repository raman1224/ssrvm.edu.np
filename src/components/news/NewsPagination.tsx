'use client';

import { memo, useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default memo(function NewsPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const searchParams = useSearchParams();

  const buildHref = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', String(page));
      return `/news?${params.toString()}`;
    },
    [searchParams]
  );

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-10">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={buildHref(page)}
          className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium ${
            page === currentPage ? 'bg-[#183a6e] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
});