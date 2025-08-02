import { createClient } from '@supabase/supabase-js'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Check if we have valid Supabase configuration
const hasSupabaseConfig = () => {
  // Return false if no environment variables
  if (!supabaseUrl || !supabaseAnonKey) return false
  
  // Return false if still using placeholder values
  if (supabaseUrl.includes('your_supabase_project_url_here') || 
      supabaseUrl.includes('your-project-ref') ||
      supabaseAnonKey.includes('your_supabase_anon_key_here') ||
      supabaseAnonKey.includes('your-anon-public-key')) {
    return false
  }
  
  // Validate URL format
  try {
    new URL(supabaseUrl)
    return true
  } catch {
    return false
  }
}

// Client-side Supabase client
export const supabase = hasSupabaseConfig() ? createClient(supabaseUrl, supabaseAnonKey) : null

// Client component client
export const createSupabaseClient = () => {
  if (!hasSupabaseConfig()) {
    return null
  }
  return createClientComponentClient()
}


// Database types (will be generated from your schema)
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          website: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      community_posts: {
        Row: {
          id: string
          user_id: string
          content: string
          likes: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          content: string
          likes?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          content?: string
          likes?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}