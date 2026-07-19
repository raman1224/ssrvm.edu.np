import { Blog } from '@/lib/supabase/blog';
import { BlogCard } from './BlogCard';

export function BlogGrid({ blogs }: { blogs: Blog[] }) {
  if (blogs.length === 0) {
    return (
      <p className="text-center text-gray-500 py-16">
        No blog posts found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}