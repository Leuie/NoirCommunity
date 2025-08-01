"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Heart, Share2, ArrowRight } from "lucide-react"

const communityPosts = [
  {
    id: 1,
    author: {
      name: "GamerPro2024",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      badge: "Veteran",
    },
    content: "Just hit level 100 in my favorite MMO! The grind was real but totally worth it. Thanks to everyone in the guild for the support! 🎮",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    tags: ["MMO", "Achievement"],
  },
  {
    id: 2,
    author: {
      name: "StreamQueen",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      badge: "Streamer",
    },
    content: "Amazing tournament last night! Congrats to all participants. The final match was absolutely insane! Can't wait for the next one 🏆",
    timestamp: "5 hours ago",
    likes: 42,
    comments: 15,
    tags: ["Tournament", "Esports"],
  },
  {
    id: 3,
    author: {
      name: "RetroGamer",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      badge: "Collector",
    },
    content: "Found this gem at a local game store today! Sometimes the best treasures are hiding in plain sight. What's your best gaming find?",
    timestamp: "1 day ago",
    likes: 18,
    comments: 12,
    tags: ["Retro", "Collection"],
  },
]

export function CommunityPreview() {
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
          {communityPosts.map((post) => (
            <Card key={post.id} className="card-noir">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-sm font-semibold">{post.author.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {post.author.badge}
                      </Badge>
                    </div>
                    <CardDescription className="text-xs text-muted-foreground">
                      {post.timestamp}
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