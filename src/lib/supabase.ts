import { createClient } from "@supabase/supabase-js";

// Handle missing environment variables gracefully for development/static build
const supabaseUrl = import.meta.env.SUPABASE_URL || 'https://fake-url.supabase.co';
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || 'fake-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);