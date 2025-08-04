const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001'

export interface PayloadPost {
  id: string
  title: string
  author: string
  slug: string
  category: string
  excerpt: string
  content: any
  featuredImage?: {
    url: string
    alt?: string
  }
  tags?: Array<{ tag: string }>
  readTime?: string
  source?: string
  status: 'draft' | 'published'
  createdAt: string
  updatedAt: string
}

export interface PayloadCommunityPost {
  id: string
  content: string
  author: {
    name: string
    avatar?: {
      url: string
      alt?: string
    }
    badge: string
  }
  likes: number
  comments: number
  tags?: Array<{ tag: string }>
  createdAt: string
  updatedAt: string
}

export interface PayloadTeamMember {
  id: string
  name: string
  role: string
  description: string
  image?: {
    url: string
    alt?: string
  }
  order: number
  createdAt: string
  updatedAt: string
}

// Fetch posts from Payload CMS
export async function fetchPosts(limit = 12): Promise<PayloadPost[]> {
  try {
    // Check if Payload server is running
    const healthCheck = await fetch(`${PAYLOAD_URL}/api/health`).catch(() => null)
    if (!healthCheck) {
      console.warn('Payload CMS server not running, using fallback data')
      return []
    }
    
    const response = await fetch(`${PAYLOAD_URL}/api/posts?limit=${limit}&where[status][equals]=published&sort=-createdAt`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Fetch single post by slug
export async function fetchPostBySlug(slug: string): Promise<PayloadPost | null> {
  try {
    // Check if Payload server is running
    const healthCheck = await fetch(`${PAYLOAD_URL}/api/health`).catch(() => null)
    if (!healthCheck) {
      console.warn('Payload CMS server not running, using fallback data')
      return null
    }
    
    const response = await fetch(`${PAYLOAD_URL}/api/posts?where[slug][equals]=${slug}&where[status][equals]=published`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data.docs?.[0] || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// Fetch community posts
export async function fetchCommunityPosts(limit = 20): Promise<PayloadCommunityPost[]> {
  try {
    // Check if Payload server is running
    const healthCheck = await fetch(`${PAYLOAD_URL}/api/health`).catch(() => null)
    if (!healthCheck) {
      console.warn('Payload CMS server not running, using fallback data')
      return []
    }
    
    const response = await fetch(`${PAYLOAD_URL}/api/community-posts?limit=${limit}&sort=-createdAt`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching community posts:', error)
    return []
  }
}

// Fetch team members
export async function fetchTeamMembers(): Promise<PayloadTeamMember[]> {
  try {
    // Check if Payload server is running
    const healthCheck = await fetch(`${PAYLOAD_URL}/api/health`).catch(() => null)
    if (!healthCheck) {
      console.warn('Payload CMS server not running, using fallback data')
      return []
    }
    
    const response = await fetch(`${PAYLOAD_URL}/api/team-members?sort=order`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}