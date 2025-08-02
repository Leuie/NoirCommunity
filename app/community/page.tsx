'use client'

import { useState } from 'react'
import { CommunityPreview } from '@/components/community-preview'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, MessageSquare, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 bg-background/50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative z-10 container-noir text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Community <span className="neon-text font-jarvish-blurry px-2 py-1 inline-block">Wall</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with fellow gamers, share your achievements, and be part of the conversation. 
            This is where the <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span> community comes together.
          </p>
        </div>
      </section>

      {/* Community Stats */}
      <section className="section-padding bg-background">
        <div className="container-noir">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="card-noir text-center">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 text-neon-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </CardContent>
            </Card>
            <Card className="card-noir text-center">
              <CardContent className="pt-6">
                <MessageSquare className="w-8 h-8 text-neon-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">1.2K+</div>
                <div className="text-sm text-muted-foreground">Posts Shared</div>
              </CardContent>
            </Card>
            <Card className="card-noir text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Community Activity</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="card-noir text-center py-12">
                <CardContent>
                  <MessageSquare className="w-12 h-12 text-neon-purple mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Join Our Discord Community</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with fellow gamers, share your achievements, and be part of the conversation on our Discord server.
                  </p>
                  <Button asChild className="btn-primary">
                    <Link href="https://discord.gg/noircommunity" target="_blank">
                      Join Discord Server
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="card-noir">
                <CardHeader>
                  <CardTitle className="text-lg">Community Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>• Be respectful to all community members</p>
                  <p>• No spam or self-promotion without permission</p>
                  <p>• Keep discussions gaming-related</p>
                  <p>• Use appropriate language and content</p>
                  <p>• Help create a welcoming environment</p>
                </CardContent>
              </Card>

              <Card className="card-noir">
                <CardHeader>
                  <CardTitle className="text-lg">Join the Conversation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join our Discord server to share your gaming moments, connect with other players, and be part of the community.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://discord.gg/noircommunity" target="_blank">
                      Join Discord
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}