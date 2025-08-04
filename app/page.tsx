"use client"

import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CommunityPreview } from "@/components/community-preview"
import { NewsPreview } from "@/components/news-preview"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <CommunityPreview />
      <NewsPreview />
    </div>
  )
}