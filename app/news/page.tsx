import { Metadata } from 'next'
import { NewsPreview } from '@/components/news-preview'

export const metadata: Metadata = {
  title: 'Gaming News - NOIR Gaming Community',
  description: 'Stay updated with the latest gaming news, reviews, and industry insights curated from top gaming publications.',
}

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      <NewsPreview />
    </div>
  )
}