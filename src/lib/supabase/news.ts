import { supabase } from './client';

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  cover_image: string;
  category: string;
  source: string;
  is_breaking: boolean;
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}

// ---- PUBLIC ----
export async function getNews(page = 1, limit = 6, category?: string) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from('news')
    .select('*', { count: 'exact' })
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .range(from, to);

  if (category && category !== 'All') query = query.eq('category', category);

  const { data, count, error } = await query;
  if (error) throw error;
  return { news: data as NewsItem[], total: count ?? 0 };
}

export async function getNewsBySlug(slug: string) {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();
  if (error) throw error;
  return data as NewsItem;
}

export async function getBreakingNews(limit = 5) {
  const { data, error } = await supabase
    .from('news')
    .select('id, title, slug')
    .eq('is_published', true)
    .eq('is_breaking', true)
    .order('published_at', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as Pick<NewsItem, 'id' | 'title' | 'slug'>[];
}

// ---- ADMIN ----
export async function getAllNewsAdmin() {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as NewsItem[];
}

export async function getNewsById(id: string) {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data as NewsItem;
}

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export async function uploadNewsImage(file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `news/${fileName}`;

  const { error } = await supabase.storage.from('news-images').upload(filePath, file);
  if (error) throw error;

  const { data } = supabase.storage.from('news-images').getPublicUrl(filePath);
  return data.publicUrl;
}

export async function createNews(payload: {
  title: string;
  summary: string;
  content: string;
  cover_image: string;
  category: string;
  source: string;
  is_breaking: boolean;
  is_published: boolean;
}) {
  const slug = generateSlug(payload.title) + '-' + Date.now().toString().slice(-6);
  const { data, error } = await supabase
    .from('news')
    .insert([{ ...payload, slug }])
    .select()
    .single();
  if (error) throw error;
  return data as NewsItem;
}

export async function updateNews(id: string, payload: Partial<NewsItem>) {
  const { data, error } = await supabase
    .from('news')
    .update(payload)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as NewsItem;
}

export async function deleteNews(id: string) {
  const { error } = await supabase.from('news').delete().eq('id', id);
  if (error) throw error;
}