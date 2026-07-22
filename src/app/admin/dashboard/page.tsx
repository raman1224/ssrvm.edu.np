import { getAllBlogsAdmin } from '@/lib/supabase/blog';
import { FileText,  Calendar, Eye } from 'lucide-react';

export default async function AdminDashboardPage() {
  const blogs = await getAllBlogsAdmin();
  const published = blogs.filter(b => b.is_published).length;
  const drafts = blogs.filter(b => !b.is_published).length;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#183a6e]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Blogs</p>
              <p className="text-2xl font-bold mt-1">{blogs.length}</p>
            </div>
            <FileText className="w-8 h-8 text-[#183a6e] opacity-50" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Published</p>
              <p className="text-2xl font-bold mt-1 text-green-600">{published}</p>
            </div>
            <Eye className="w-8 h-8 text-green-500 opacity-50" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Drafts</p>
              <p className="text-2xl font-bold mt-1 text-yellow-600">{drafts}</p>
            </div>
            <FileText className="w-8 h-8 text-yellow-500 opacity-50" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Categories</p>
              <p className="text-2xl font-bold mt-1 text-purple-600">6</p>
            </div>
            <Calendar className="w-8 h-8 text-purple-500 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}