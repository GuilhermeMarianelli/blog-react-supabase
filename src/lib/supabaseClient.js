import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// A palavra 'export' antes do 'const' é o segredo:
export const supabase = createClient(supabaseUrl, supabaseAnonKey)