import { createClient } from 'contentful'

// Contentful client configuration
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master',
})

// TypeScript interfaces for Contentful entries
export interface ContentfulPost {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: {
    title: string
    slug: string
    excerpt: string
    content: any
    featuredImage?: {
      fields: {
        file: {
          url: string
        }
        title?: string
      }
    }
    author: string
    category: string
    tags?: string[]
    readTime?: string
    publishedAt: string
  }
}

export interface ContentfulCommunityPost {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: {
    content: string
    author: {
      fields: {
        name: string
        avatar?: {
          fields: {
            file: {
              url: string
            }
          }
        }
        badge: string
      }
    }
    likes: number
    comments: number
    tags?: string[]
  }
}

export interface ContentfulTeamMember {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: {
    name: string
    role: string
    description: string
    image?: {
      fields: {
        file: {
          url: string
        }
        title?: string
      }
    }
    order: number
  }
}

// Fetch posts from Contentful
export async function fetchPosts(limit = 12): Promise<ContentfulPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'post',
      limit,
      order: '-fields.publishedAt',
    })
    
    return response.items as ContentfulPost[]
  } catch (error) {
    console.error('Error fetching posts from Contentful:', error)
    return []
  }
}

// Fetch single post by slug
export async function fetchPostBySlug(slug: string): Promise<ContentfulPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'post',
      'fields.slug': slug,
      limit: 1,
    })
    
    return response.items[0] as ContentfulPost || null
  } catch (error) {
    console.error('Error fetching post by slug from Contentful:', error)
    return null
  }
}

// Fetch community posts
export async function fetchCommunityPosts(limit = 20): Promise<ContentfulCommunityPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'communityPost',
      limit,
      order: '-sys.createdAt',
    })
    
    return response.items as ContentfulCommunityPost[]
  } catch (error) {
    console.error('Error fetching community posts from Contentful:', error)
    return []
  }
}

// Fetch team members
export async function fetchTeamMembers(): Promise<ContentfulTeamMember[]> {
  try {
    const response = await client.getEntries({
      content_type: 'teamMember',
      order: 'fields.order',
    })
    
    return response.items as ContentfulTeamMember[]
  } catch (error) {
    console.error('Error fetching team members from Contentful:', error)
    return []
  }
}

// Fetch news articles
export async function fetchNewsArticles(limit = 12): Promise<ContentfulPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'newsArticle',
      limit,
      order: '-fields.publishedAt',
    })
    
    return response.items as ContentfulPost[]
  } catch (error) {
    console.error('Error fetching news articles from Contentful:', error)
    return []
  }
}