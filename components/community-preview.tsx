"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Heart, Share2, ArrowRight } from "lucide-react"
import { client, communityPostsQuery } from "@/lib/sanity"

interface CommunityPost {
  _id: string
  content: string
  author: {
    name: string
    avatar?: any
    badge: string
  }
  _createdAt: string
  likes: number
  comments: number
  tags: string[]
}

// Fallback data
const fallbackPosts = [
  {
    _id: "1",
    content: "Just hit level 100 in my favorite MMO! The grind was real but totally worth it. Thanks to everyone in the guild for the support! 🎮",
    author: {
      name: "GamerPro2024",
      badge: "veteran",
    },
    _createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    likes: 24,
    comments: 8,
    tags: ["MMO", "Achievement"],
  },
  {
    _id: "2",
    content: "Amazing tournament last night! Congrats to all participants. The final match was absolutely insane! Can't wait for the next one 🏆",
    author: {
      name: "StreamQueen",
      badge: "streamer",
    },
    _createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    likes: 42,
    comments: 15,
    tags: ["Tournament", "Esports"],
  },
  {
    _id: "3",
    content: "Found this gem at a local game store today! Sometimes the best treasures are hiding in plain sight. What's your best gaming find?",
    author: {
      name: "RetroGamer",
      badge: "collector",
    },
    _createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    likes: 18,
    comments: 12,
    tags: ["Retro", "Collection"],
  },
]

function formatTimeAgo(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
  
  if (diffInHours < 1) return "Just now"
  if (diffInHours < 24) return `${diffInHours} hours ago`
  if (diffInHours < 48) return "1 day ago"
  return `${Math.floor(diffInHours / 24)} days ago`
}

function getBadgeDisplayName(badge: string) {
  const badgeMap: { [key: string]: string } = {
    veteran: "Veteran",
    streamer: "Streamer",
    collector: "Collector",
    pro: "Pro Player",
    creator: "Content Creator",
    moderator: "Moderator",
    vip: "VIP",
  }
  return badgeMap[badge] || badge
}

export function CommunityPreview() {
  const [posts, setPosts] = React.useState<CommunityPost[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await client.fetch(communityPostsQuery)
        setPosts(data.length > 0 ? data.slice(0, 3) : fallbackPosts)
      } catch (error) {
        console.log('Using fallback data:', error)
        setPosts(fallbackPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Community <span className="neon-text">Highlights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Loading community posts...
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="card-noir">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-full animate-pulse" />
                    <div className="flex-1">
                      <div className="h-4 bg-muted rounded animate-pulse mb-1" />
                      <div className="h-3 bg-muted rounded animate-pulse w-1/2" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-muted rounded animate-pulse mb-2" />
                  <div className="h-4 bg-muted rounded animate-pulse mb-2" />
                  <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="section-padding">
      <div className="container-noir">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Community <span className="neon-text">Highlights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our amazing community members are up to. Share your gaming moments, 
            achievements, and connect with fellow gamers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {posts.map((post) => (
            <Card key={post._id} className="card-noir">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage 
                      src={post.author.avatar ? `https://cdn.sanity.io/images/nbeqhsdj/production/${post.author.avatar.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}?w=100&h=100&fit=crop` : `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop`} 
                      alt={post.author.name} 
                    />
                    <AvatarFallback>{post.author.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-sm font-semibold">{post.author.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {getBadgeDisplayName(post.author.badge)}
                      </Badge>
                    </div>
                    <CardDescription className="text-xs text-muted-foreground">
                      {formatTimeAgo(post._createdAt)}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-foreground/90 mb-4 leading-relaxed">
                  {post.content}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 hover:text-neon-purple transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-neon-blue transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs">{post.comments}</span>
                    </button>
                  </div>
                  <button className="hover:text-neon-cyan transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="btn-primary">
            <Link href="/community">
              View Full Community Wall
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}