import Image from 'next/image';
import Link from 'next/link';
import { getRecentBlogs } from '@/lib/supabase/blog';

const categories = ['All', 'Events', 'Academics', 'Sports', 'Achievements', 'Notice'];

export async function BlogSidebar() {
  const recentBlogs = await getRecentBlogs();

  return (
    <aside className="space-y-8">
      <div className="bg-gray-50 p-5 rounded-xl">
        <h4 className="font-semibold mb-4">Categories</h4>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href={`/blog?category=${cat}`}
                className="text-gray-600 hover:text-primary text-sm"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-50 p-5 rounded-xl">
        <h4 className="font-semibold mb-4">Recent Posts</h4>
        <div className="space-y-4">
          {recentBlogs?.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="flex gap-3 group"
            >
              <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={blog.cover_image || '/images/blog-placeholder.jpg'}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-700 group-hover:text-primary line-clamp-2">
                {blog.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}