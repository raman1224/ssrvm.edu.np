import { supabase } from './client';

export interface Notice {
  id: string;
  title: string;
  description: string;
  image_url: string;
  link_url: string;
  is_pinned: boolean;
  is_active: boolean;
  expiry_date: string | null;
  created_at: string;
  updated_at: string;
}

// ---- PUBLIC ----
export async function getActiveNotices(limit = 20) {
  const { data, error } = await supabase
    .from('notices')
    .select('*')
    .eq('is_active', true)
    .or(`expiry_date.is.null,expiry_date.gte.${new Date().toISOString().split('T')[0]}`)
    .order('is_pinned', { ascending: false })
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as Notice[];
}

// ---- ADMIN ----
export async function getAllNoticesAdmin() {
  const { data, error } = await supabase
    .from('notices')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as Notice[];
}

export async function getNoticeById(id: string) {
  const { data, error } = await supabase
    .from('notices')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data as Notice;
}

export async function uploadNoticeImage(file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `notices/${fileName}`;

  const { error } = await supabase.storage.from('notice-images').upload(filePath, file);
  if (error) throw error;

  const { data } = supabase.storage.from('notice-images').getPublicUrl(filePath);
  return data.publicUrl;
}

export async function createNotice(payload: {
  title: string;
  description: string;
  image_url: string;
  link_url: string;
  is_pinned: boolean;
  is_active: boolean;
  expiry_date: string | null;
}) {
  const { data, error } = await supabase
    .from('notices')
    .insert([payload])
    .select()
    .single();
  if (error) throw error;
  return data as Notice;
}

export async function updateNotice(id: string, payload: Partial<Notice>) {
  const { data, error } = await supabase
    .from('notices')
    .update(payload)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as Notice;
}

export async function deleteNotice(id: string) {
  const { error } = await supabase.from('notices').delete().eq('id', id);
  if (error) throw error;
}