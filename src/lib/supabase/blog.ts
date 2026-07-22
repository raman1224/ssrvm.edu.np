// src/lib/supabase/blog.ts
import { supabase } from './client';

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string;
  author: string;
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}

// ---- PUBLIC ----
export async function getBlogs(page = 1, limit = 6, category?: string) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from('blogs')
    .select('*', { count: 'exact' })
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .range(from, to);

  if (category && category !== 'All') query = query.eq('category', category);

  const { data, count, error } = await query;
  if (error) throw error;
  return { blogs: data as Blog[], total: count ?? 0 };
}

export async function getBlogBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();
  if (error) throw error;
  return data as Blog;
}

export async function getRecentBlogs(limit = 4) {
  const { data } = await supabase
    .from('blogs')
    .select('id, title, slug, cover_image, published_at')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(limit);
  return (data ?? []) as Blog[];
}

// ---- ADMIN ----
export async function getAllBlogsAdmin() {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as Blog[];
}

export async function getBlogById(id: string) {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data as Blog;
}

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// ---- IMAGE UPLOAD ----
export async function uploadBlogImage(file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `blog-images/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('blog-images')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: urlData } = supabase.storage
    .from('blog-images')
    .getPublicUrl(filePath);

  return urlData.publicUrl;
}

// ---- CRUD ----
export async function createBlog(payload: {
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string;
  author: string;
  is_published: boolean;
}) {
  const slug = generateSlug(payload.title) + '-' + Date.now().toString().slice(-6);
  const { data, error } = await supabase
    .from('blogs')
    .insert([{ ...payload, slug }])
    .select()
    .single();
  if (error) throw error;
  return data as Blog;
}

export async function updateBlog(id: string, payload: Partial<Blog>) {
  const { data, error } = await supabase
    .from('blogs')
    .update({ ...payload, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as Blog;
}

export async function deleteBlog(id: string) {
  const { error } = await supabase.from('blogs').delete().eq('id', id);
  if (error) throw error;
}