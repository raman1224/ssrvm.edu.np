// import { getAllBlogsAdmin } from '@/lib/supabase/blog';
// import { getAllDocumentsAdmin } from '@/lib/supabase/documents';
// import { getAllEventsAdmin } from '@/lib/supabase/events';
// import { getAllGalleryAdmin } from '@/lib/supabase/gallery';
// import { getAllNewsAdmin } from '@/lib/supabase/news';
// import { getAllNoticesAdmin } from '@/lib/supabase/notices';
// import { FileText,  Calendar, Eye } from 'lucide-react';

// export default async function AdminDashboardPage() {
//   const blogs = await getAllBlogsAdmin();
//   const events = await getAllEventsAdmin();
//   const gallery = await getAllGalleryAdmin();
//   const notices = await getAllNoticesAdmin();
//   const news = await getAllNewsAdmin();
//   const downloads = await getAllDocumentsAdmin();
//   const published = blogs.filter(b => b.is_published).length;
//   const drafts = blogs.filter(b => !b.is_published).length;

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#183a6e]">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Total Blogs</p>
//               <p className="text-2xl font-bold mt-1">{blogs.length}</p>
//             </div>
//             <FileText className="w-8 h-8 text-[#183a6e] opacity-50" />
//           </div>
//         </div>

//  <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#2b8d92]">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Total Gallery</p>
//               <p className="text-2xl font-bold mt-1">{gallery.length}</p>
//             </div>
//             <FileText className="w-8 h-8 text-[#183a6e] opacity-50" />
//           </div>
//         </div>

//          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#30bc3e]">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Total Events</p>
//               <p className="text-2xl font-bold mt-1">{events.length}</p>
//             </div>
//             <FileText className="w-8 h-8 text-[#183a6e] opacity-50" />
//           </div>
//         </div>

//   <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#962bb7]">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Total Notices</p>
//               <p className="text-2xl font-bold mt-1">{notices.length}</p>
//             </div>
//             <FileText className="w-8 h-8 text-[#183a6e] opacity-50" />
//           </div>
//         </div>

//   <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#818626]">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Total News</p>
//               <p className="text-2xl font-bold mt-1">{news.length}</p>
//             </div>
//             <FileText className="w-8 h-8 text-[#183a6e] opacity-50" />
//           </div>
//         </div>


//   <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#4d2285]">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Total Downloads</p>
//               <p className="text-2xl font-bold mt-1">{downloads.length}</p>
//             </div>
//             <FileText className="w-8 h-8 text-[#183a6e] opacity-50" />
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Published</p>
//               <p className="text-2xl font-bold mt-1 text-green-600">{published}</p>
//             </div>
//             <Eye className="w-8 h-8 text-green-500 opacity-50" />
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Drafts</p>
//               <p className="text-2xl font-bold mt-1 text-yellow-600">{drafts}</p>
//             </div>
//             <FileText className="w-8 h-8 text-yellow-500 opacity-50" />
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Categories</p>
//               <p className="text-2xl font-bold mt-1 text-purple-600">6</p>
//             </div>
//             <Calendar className="w-8 h-8 text-purple-500 opacity-50" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { getAllBlogsAdmin } from '@/lib/supabase/blog';
import { getAllDocumentsAdmin } from '@/lib/supabase/documents';
import { getAllEventsAdmin } from '@/lib/supabase/events';
import { getAllGalleryAdmin } from '@/lib/supabase/gallery';
import { getAllNewsAdmin } from '@/lib/supabase/news';
import { getAllNoticesAdmin } from '@/lib/supabase/notices';
import { FileText, Calendar, Eye, Image, Bell, Newspaper, Download, LayoutDashboard } from 'lucide-react';

export default async function AdminDashboardPage() {
  const [blogs, events, gallery, notices, news, downloads] = await Promise.all([
    getAllBlogsAdmin(),
    getAllEventsAdmin(),
    getAllGalleryAdmin(),
    getAllNoticesAdmin(),
    getAllNewsAdmin(),
    getAllDocumentsAdmin(),
  ]);

  const published = blogs.filter(b => b.is_published).length;
  const drafts = blogs.filter(b => !b.is_published).length;

  const stats = [
    { 
      label: 'Total Blogs', 
      value: blogs.length, 
      icon: FileText, 
      color: 'border-[#183a6e]', 
      textColor: 'text-[#183a6e]' 
    },
    { 
      label: 'Total Gallery', 
      value: gallery.length, 
      icon: Image, 
      color: 'border-[#2b8d92]', 
      textColor: 'text-[#2b8d92]' 
    },
    { 
      label: 'Total Events', 
      value: events.length, 
      icon: Calendar, 
      color: 'border-[#30bc3e]', 
      textColor: 'text-[#30bc3e]' 
    },
    { 
      label: 'Total Notices', 
      value: notices.length, 
      icon: Bell, 
      color: 'border-[#962bb7]', 
      textColor: 'text-[#962bb7]' 
    },
    { 
      label: 'Total News', 
      value: news.length, 
      icon: Newspaper, 
      color: 'border-[#818626]', 
      textColor: 'text-[#818626]' 
    },
    { 
      label: 'Total Downloads', 
      value: downloads.length, 
      icon: Download, 
      color: 'border-[#4d2285]', 
      textColor: 'text-[#4d2285]' 
    },
    { 
      label: 'Published', 
      value: published, 
      icon: Eye, 
      color: 'border-green-500', 
      textColor: 'text-green-600' 
    },
    { 
      label: 'Drafts', 
      value: drafts, 
      icon: FileText, 
      color: 'border-yellow-500', 
      textColor: 'text-yellow-600' 
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <LayoutDashboard className="w-5 h-5 text-[#183a6e]" />
        <h2 className="text-lg md:text-xl font-semibold">Dashboard</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`bg-white p-4 md:p-5 rounded-xl shadow-sm border-l-4 ${stat.color} hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
                  <p className={`text-xl md:text-2xl font-bold mt-1 ${stat.textColor}`}>
                    {stat.value}
                  </p>
                </div>
                <Icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.textColor} opacity-50`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}