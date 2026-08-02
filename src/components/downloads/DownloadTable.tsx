'use client';

import { memo, useMemo, useState, useCallback } from 'react';
import { FileText, Download } from 'lucide-react';
import { DocumentItem, formatFileSize } from '@/lib/supabase/documents';

export default memo(function DownloadTable({ documents }: { documents: DocumentItem[] }) {
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = useMemo(() => {
    const unique = new Set(documents.map((d) => d.category));
    return ['All', ...Array.from(unique)];
  }, [documents]);

  const filteredDocs = useMemo(() => {
    if (filterCategory === 'All') return documents;
    return documents.filter((d) => d.category === filterCategory);
  }, [documents, filterCategory]);

  const handleFilterChange = useCallback((cat: string) => setFilterCategory(cat), []);

  if (documents.length === 0) {
    return <p className="text-center text-gray-500 py-16">No documents available at the moment.</p>;
  }

  return (
    <div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => handleFilterChange(c)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              filterCategory === c ? 'bg-[#183a6e] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-500">
            <tr>
              <th className="px-5 py-3">Title</th>
              <th className="px-5 py-3">Size</th>
              <th className="px-5 py-3">Type</th>
              <th className="px-5 py-3">Last Updated</th>
              <th className="px-5 py-3 text-right">Download</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocs.map((doc) => (
              <tr key={doc.id} className="border-t hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4 font-medium text-gray-800 flex items-center gap-2">
                  <FileText size={16} className="text-[#183a6e] flex-shrink-0" />
                  {doc.title}
                </td>
                <td className="px-5 py-4 text-gray-500">{formatFileSize(doc.file_size)}</td>
                <td className="px-5 py-4 text-gray-500">{doc.file_type}</td>
                <td className="px-5 py-4 text-gray-500">
                  {new Date(doc.updated_at).toLocaleDateString('en-US', {
                    month: 'numeric', day: 'numeric', year: 'numeric',
                  })}
                </td>
                <td className="px-5 py-4 text-right">
                  <a
                    href={doc.file_url}
                    download={doc.file_name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#183a6e] text-white px-4 py-1.5 rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
                  >
                    <Download size={13} /> Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {filteredDocs.map((doc) => (
          <div key={doc.id} className="bg-white rounded-xl shadow-sm border p-4">
            <div className="flex items-start gap-3">
              <FileText size={20} className="text-[#183a6e] flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 text-sm">{doc.title}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {formatFileSize(doc.file_size)} · {doc.file_type}
                </p>
                <p className="text-xs text-gray-400">
                  Updated: {new Date(doc.updated_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            <a
              href={doc.file_url}
              download={doc.file_name}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-1.5 bg-[#183a6e] text-white px-4 py-2 rounded-lg text-xs font-medium w-full"
            >
              <Download size={13} /> Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
});