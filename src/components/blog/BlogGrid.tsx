'use client';

import { memo } from 'react';
import { Blog } from '@/lib/supabase/blog';
import { BlogCard } from './BlogCard';

interface BlogGridProps {
  blogs: Blog[];
}

export const BlogGrid = memo(function BlogGrid({ blogs }: BlogGridProps) {
  if (blogs.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
});