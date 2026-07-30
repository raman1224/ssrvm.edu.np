import { supabase } from './client';

export interface GalleryImage {
  id: string;
  image_url: string;
  alt_text: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

// ---- PUBLIC ----
export async function getActiveGalleryImages(limit = 6) {
  const { data, error } = await supabase
    .from('gallery')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as GalleryImage[];
}

export async function getAllActiveGalleryImages() {
  const { data, error } = await supabase
    .from('gallery')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });
  if (error) throw error;
  return (data ?? []) as GalleryImage[];
}

// ---- ADMIN ----
export async function getAllGalleryAdmin() {
  const { data, error } = await supabase
    .from('gallery')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as GalleryImage[];
}

export async function getGalleryById(id: string) {
  const { data, error } = await supabase
    .from('gallery')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data as GalleryImage;
}

export async function uploadGalleryImage(file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `gallery/${fileName}`;

  const { error } = await supabase.storage.from('gallery-images').upload(filePath, file);
  if (error) throw error;

  const { data } = supabase.storage.from('gallery-images').getPublicUrl(filePath);
  return data.publicUrl;
}

export async function createGalleryImage(payload: {
  image_url: string;
  alt_text: string;
  display_order: number;
  is_active: boolean;
}) {
  const { data, error } = await supabase
    .from('gallery')
    .insert([payload])
    .select()
    .single();
  if (error) throw error;
  return data as GalleryImage;
}

export async function updateGalleryImage(id: string, payload: Partial<GalleryImage>) {
  const { data, error } = await supabase
    .from('gallery')
    .update(payload)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as GalleryImage;
}

export async function deleteGalleryImage(id: string) {
  const { error } = await supabase.from('gallery').delete().eq('id', id);
  if (error) throw error;
}