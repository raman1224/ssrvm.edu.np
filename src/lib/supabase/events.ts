import { supabase } from './client';

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  cover_image: string;
  event_date: string;
  event_time: string;
  venue: string;
  category: string;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const today = () => new Date().toISOString().split('T')[0];

// ---- PUBLIC ----
export async function getUpcomingEvents(limit = 20) {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('is_active', true)
    .gte('event_date', today())
    .order('event_date', { ascending: true })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as Event[];
}

export async function getPastEvents(limit = 20) {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('is_active', true)
    .lt('event_date', today())
    .order('event_date', { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as Event[];
}

export async function getFeaturedEvents(limit = 3) {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('is_active', true)
    .eq('is_featured', true)
    .gte('event_date', today())
    .order('event_date', { ascending: true })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as Event[];
}

export async function getEventBySlug(slug: string) {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single();
  if (error) throw error;
  return data as Event;
}

// ---- ADMIN ----
export async function getAllEventsAdmin() {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: false });
  if (error) throw error;
  return data as Event[];
}

export async function getEventById(id: string) {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data as Event;
}

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export async function uploadEventImage(file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `events/${fileName}`;

  const { error } = await supabase.storage.from('event-images').upload(filePath, file);
  if (error) throw error;

  const { data } = supabase.storage.from('event-images').getPublicUrl(filePath);
  return data.publicUrl;
}

export async function createEvent(payload: {
  title: string;
  description: string;
  cover_image: string;
  event_date: string;
  event_time: string;
  venue: string;
  category: string;
  is_featured: boolean;
  is_active: boolean;
}) {
  const slug = generateSlug(payload.title) + '-' + Date.now().toString().slice(-6);
  const { data, error } = await supabase
    .from('events')
    .insert([{ ...payload, slug }])
    .select()
    .single();
  if (error) throw error;
  return data as Event;
}

export async function updateEvent(id: string, payload: Partial<Event>) {
  const { data, error } = await supabase
    .from('events')
    .update(payload)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data as Event;
}

export async function deleteEvent(id: string) {
  const { error } = await supabase.from('events').delete().eq('id', id);
  if (error) throw error;
}