'use client';

import { useState, useCallback, memo } from 'react';
import { useRouter } from 'next/navigation';
import {
  createDocument,
  updateDocument,
  uploadDocumentFile,
  formatFileSize,
  DocumentItem,
} from '@/lib/supabase/documents';
import { Upload, FileText, X, Loader2 } from 'lucide-react';

const categories = ['General', 'Syllabus', 'Circular', 'Exam Routine', 'Calendar', 'Homework', 'Form'];

const DocumentForm = memo(function DocumentForm({ initialData }: { initialData?: DocumentItem }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    file_url: initialData?.file_url || '',
    file_name: initialData?.file_name || '',
    file_size: initialData?.file_size || 0,
    file_type: initialData?.file_type || '',
    category: initialData?.category || 'General',
    is_active: initialData?.is_active ?? true,
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Image होइन, document type मात्र
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'text/plain',
      'text/csv',
      'application/zip',
    ];
    if (!allowedTypes.includes(file.type)) {
      setError('Only PDF, Word, Excel, PowerPoint, ZIP, or Text files are allowed.');
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setError('File size should be less than 20MB');
      return;
    }

    setUploading(true);
    setError('');
    try {
      const result = await uploadDocumentFile(file);
      setForm((prev) => ({
        ...prev,
        file_url: result.url,
        file_name: result.fileName,
        file_size: result.fileSize,
        file_type: result.fileType,
        title: prev.title || result.fileName.replace(/\.[^/.]+$/, ''),
      }));
    } catch {
      setError('Failed to upload file. Please try again.');
    } finally {
      setUploading(false);
    }
  }, []);

  const removeFile = useCallback(() => {
    setForm((prev) => ({ ...prev, file_url: '', file_name: '', file_size: 0, file_type: '' }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.file_url) {
      setError('Please upload a file first.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      if (initialData) {
        await updateDocument(initialData.id, form);
      } else {
        await createDocument(form);
      }
      router.push('/admin/documents');
      router.refresh();
    } catch {
      setError('Failed to save document.');
    } finally {
      setLoading(false);
    }
  }, [form, initialData, router]);

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm space-y-5 max-w-2xl">
      <div>
        <label className="block text-sm font-medium mb-1">File *</label>
        {form.file_url ? (
          <div className="flex items-center gap-3 border rounded-lg p-3 max-w-md">
            <FileText className="text-[#183a6e] flex-shrink-0" size={28} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{form.file_name}</p>
              <p className="text-xs text-gray-400">
                {formatFileSize(form.file_size)} · {form.file_type}
              </p>
            </div>
            <button type="button" onClick={removeFile} className="text-red-500 hover:opacity-70">
              <X size={18} />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full max-w-md h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
            <Upload className="w-6 h-6 text-gray-400 mb-1" />
            <p className="text-sm text-gray-500">Click to upload file</p>
            <p className="text-xs text-gray-400">PDF, DOC, XLS, PPT, ZIP (max 20MB)</p>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.zip"
              onChange={handleFileUpload}
              className="hidden"
              disabled={uploading}
            />
          </label>
        )}
        {uploading && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <Loader2 className="w-4 h-4 animate-spin" /> Uploading...
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Title *</label>
        <input
          required
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] outline-none"
          placeholder="e.g. Class 10 Syllabus 2026"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          rows={2}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#183a6e] outline-none"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={form.is_active}
          onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
          className="w-4 h-4 accent-[#183a6e]"
        />
        Show on website
      </label>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading || uploading}
          className="bg-[#183a6e] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? 'Saving...' : initialData ? 'Update Document' : 'Add Document'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/documents')}
          className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
});

export default DocumentForm;