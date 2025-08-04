import { Metadata } from 'next'
import { BlogPostsList } from '@/components/blog-posts-list'

export const metadata: Metadata = {
  title: 'Blog - NOIR Gaming Community',
  description: 'Read the latest posts from the NOIR Gaming Community. Discover insights, stories, and updates from our passionate gaming community members.',
  keywords: ['gaming blog', 'community posts', 'gaming insights', 'NOIR community'],
}

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <BlogPostsList />
    </div>
  )
}