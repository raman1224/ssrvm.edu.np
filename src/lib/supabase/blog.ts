import { supabase } from '@/lib/supabase/client';

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string;
  author: string;
  published_at: string;
}

export async function getBlogs(page = 1, limit = 6, category?: string) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from('blogs')
    .select('*', { count: 'exact' })
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .range(from, to);

  if (category && category !== 'All') {
    query = query.eq('category', category);
  }

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
  return data as Blog[];
}