import Image from 'next/image';
import Link from 'next/link';
import { Blog } from '@/lib/supabase/blog';

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={blog.cover_image || '/images/blog-placeholder.jpg'}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {blog.category && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
            {blog.category}
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-2">
          {new Date(blog.published_at).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary">
          {blog.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-3">{blog.excerpt}</p>
        <span className="inline-block mt-3 text-primary text-sm font-medium">
          Read More →
        </span>
      </div>
    </Link>
  );
}