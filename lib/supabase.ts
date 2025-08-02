import { createClient } from '@supabase/supabase-js'

// For static exports, we need to handle environment variables differently
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kawpvyebacqujxwbsjad.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imthd3B2eWViYWNxdWp4d2JzamFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMjE2NzUsImV4cCI6MjA2OTY5NzY3NX0.P4zY2ECJwpyzATxb9L4aDp7_9oAsYQOpM5I1a-ssnNM'

// Check if we have valid Supabase configuration
const hasSupabaseConfig = () => {
  // For static exports, we'll hardcode the check since env vars are embedded at build time
  return supabaseUrl.includes('kawpvyebacqujxwbsjad.supabase.co') && supabaseAnonKey.length > 100
}

// Client-side Supabase client
export const supabase = hasSupabaseConfig() ? createClient(supabaseUrl, supabaseAnonKey) : null

// Client component client
export const createSupabaseClient = () => {
  if (!hasSupabaseConfig()) {
    console.warn('Supabase configuration missing or invalid')
    return null
  }
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  })
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