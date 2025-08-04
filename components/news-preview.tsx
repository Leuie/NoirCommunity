"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { fetchPosts, PayloadPost } from "@/lib/payload"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight, ExternalLink } from "lucide-react"

const categories = ["All", "MMO", "ARPG", "MOBA", "FPS", "RPG", "Action", "Sports", "Indie", "TCG"]

// Fallback data in case Sanity is not available
const fallbackArticles = [
  {
    id: "1",
    title: "The Future of Gaming: What to Expect in 2025",
    excerpt: "From AI-powered NPCs to revolutionary VR experiences, discover what's coming next in the gaming industry.",
    slug: "future-of-gaming-2025",
    category: "industry",
    author: "Gaming Analyst",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    readTime: "5 min read",
    source: "The Verge Gaming",
    content: {},
    status: "published" as const,
  },
  {
    id: "2",
    title: "Top 10 Indie Games That Deserve Your Attention",
    excerpt: "Hidden gems from independent developers that are pushing the boundaries of creativity and gameplay.",
    slug: "top-indie-games",
    category: "indie",
    author: "Indie Reviewer",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    readTime: "8 min read",
    source: "Polygon",
    content: {},
    status: "published" as const,
  },
  {
    id: "3",
    title: "Esports Championship: Record-Breaking Viewership",
    excerpt: "The latest esports tournament shattered all previous records with millions of viewers worldwide.",
    slug: "esports-championship",
    category: "esports",
    author: "Esports Reporter",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    readTime: "3 min read",
    source: "Kotaku",
    content: {},
    status: "published" as const,
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

function getCategoryDisplayName(category: string) {
  const categoryMap: { [key: string]: string } = {
    industry: "Industry",
    indie: "Indie",
    esports: "Esports",
    mmo: "MMO",
    arpg: "ARPG",
    moba: "MOBA",
    fps: "FPS",
    rpg: "RPG",
    action: "Action",
    sports: "Sports",
    tcg: "TCG",
  }
  return categoryMap[category] || category
}

export function NewsPreview() {
  const [articles, setArticles] = React.useState<PayloadPost[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchArticles() {
      try {
        const posts = await fetchPosts(6)
        setArticles(posts.length > 0 ? posts : fallbackArticles)
      } catch (error) {
        console.log('Using fallback data:', error)
        setArticles(fallbackArticles)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (loading) {
    return (
      <section className="section-padding bg-background/50">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Latest Gaming <span className="neon-text">News</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Loading the latest gaming news...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="card-noir overflow-hidden">
                <div className="h-48 bg-muted animate-pulse" />
                <CardHeader>
                  <div className="h-4 bg-muted rounded animate-pulse mb-2" />
                  <div className="h-6 bg-muted rounded animate-pulse" />
                </CardHeader>
                <CardContent>
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
    <section className="section-padding bg-background/50">
      <div className="container-noir">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Latest Gaming <span className="neon-text">News</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest gaming news, reviews, and industry insights 
            curated from top gaming publications.
          </p>
        </div>

        {/* Category Filter Preview */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.slice(0, 6).map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-neon-purple hover:text-white transition-colors"
            >
              {category}
            </Badge>
          ))}
          <Badge variant="outline" className="cursor-pointer">
            +{categories.length - 6} more
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Card key={article.id} className="card-noir overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.featuredImage?.url || "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-background/80 text-foreground">
                    {getCategoryDisplayName(article.category)}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span>{article.source || `by ${article.author}` || 'NOIR Community'}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{formatTimeAgo(article.createdAt)}</span>
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold leading-tight hover:text-neon-purple transition-colors cursor-pointer">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.readTime || '5 min read'}</span>
                  <Link href={`/${article.slug}`}>
                    <Button variant="ghost" size="sm" className="text-neon-purple hover:text-neon-purple hover:bg-neon-purple/10">
                      Read More
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="btn-primary">
            <Link href="/news">
              View All Gaming News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}