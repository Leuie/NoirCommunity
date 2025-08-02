import { Metadata } from 'next'
import { CommunityPreview } from '@/components/community-preview'

export const metadata: Metadata = {
  title: 'Community - NOIR Gaming Community',
  description: 'Connect with fellow gamers in the NOIR Gaming Community. Share your achievements, participate in discussions, and build lasting friendships.',
}

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      <CommunityPreview />
    </div>
  )
}