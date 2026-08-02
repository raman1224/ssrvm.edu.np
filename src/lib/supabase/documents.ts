import { supabase } from './client';

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  file_url: string;
  file_name: string;
  file_size: number;
  file_type: string;
  category: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ---- PUBLIC ----
export async function getActiveDocuments(category?: string) {
  let query = supabase
    .from('documents')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (category && category !== 'All') query = query.eq('category', category);

  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as DocumentItem[];
}

// ---- ADMIN ----
export async function getAllDocumentsAdmin() {
  const { data, error } = await supabase
    .from('documents')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as DocumentItem[];
}

export async function getDocumentById(id: string) {
  const { data, error } = await supabase
    .from('documents')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data as DocumentItem;
}

// file extension to readable "type" name out
function getFileTypeLabel(fileName: string): string {
  const ext = fileName.split('.').pop()?.toLowerCase() || '';
  const map: Record<string, string> = {
    pdf: 'PDF Document',
    doc: 'Word Document',
    docx: 'Word Document',
    xls: 'Excel Sheet',
    xlsx: 'Excel Sheet',
    ppt: 'PowerPoint',
    pptx: 'PowerPoint',
    zip: 'ZIP Archive',
    rar: 'RAR Archive',
    txt: 'Text File',
    csv: 'CSV File',
  };
  return map[ext] || ext.toUpperCase() + ' File';
}

// ---- FILE UPLOAD (not image any document) ----
export async function uploadDocumentFile(file: File): Promise<{
  url: string;
  fileName: string;
  fileSize: number;
  fileType: string;
}> {
//   const fileExt = file.name.split('.').pop();
  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const uniqueName = `${Date.now()}-${safeName}`;
  const filePath = `documents/${uniqueName}`;

  const { error } = await supabase.storage.from('documents').upload(filePath, file);
  if (error) throw error;

  const { data } = supabase.storage.from('documents').getPublicUrl(filePath);

  return {
    url: data.publicUrl,
    fileName: file.name,
    fileSize: file.size,
    fileType: getFileTypeLabel(file.name),
  };
}

export async function createDocument(payload: {
  title: string;
  description: string;
  file_url: string;
  file_name: string;
  file_size: number;
  file_type: string;
  category: string;
  is_active: boolean;
}) {
  const { data, error } = await supabase
    .from('documents')
    .insert([payload])
    .select()
    .single();
  if (error) throw error;
  return data as DocumentItem;
}

export async function updateDocument(id: string, payload: Partial<DocumentItem>) {
  const { data, error } = await supabase
    .from('documents')
    .update(payload)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as DocumentItem;
}

export async function deleteDocument(id: string) {
  const { error } = await supabase.from('documents').delete().eq('id', id);
  if (error) throw error;
}

// ---- Helper: bytes  "32.48 KB"  readable  ----
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}