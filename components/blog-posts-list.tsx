"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight, ExternalLink } from "lucide-react"
import { fetchPosts, ContentfulPost } from "@/lib/contentful"

const categories = ["All", "Community", "Guide", "Tutorial", "Review", "Opinion", "Event", "Update"]

// Fallback data for blog posts from the community
const fallbackPosts: ContentfulPost[] = [
  {
    sys: {
      id: "1",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    fields: {
      title: "Welcome to NOIR Gaming Community",
      slug: "welcome-to-noir",
      excerpt: "Join us as we embark on this exciting journey to build the ultimate gaming community for passionate gamers.",
      content: null,
      author: "NOIR Team",
      category: "community",
      publishedAt: new Date().toISOString(),
      readTime: "3 min read",
    }
  },
  {
    sys: {
      id: "2",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    fields: {
      title: "Getting Started with NOIR",
      slug: "getting-started",
      excerpt: "Everything you need to know to make the most of your NOIR community experience and connect with fellow gamers.",
      content: null,
      author: "NOIR Team",
      category: "guide",
      publishedAt: new Date().toISOString(),
      readTime: "5 min read",
    }
  },
  {
    sys: {
      id: "3",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    fields: {
      title: "Building the Perfect Gaming Setup",
      slug: "perfect-gaming-setup",
      excerpt: "Tips and tricks from our community members on creating the ultimate gaming environment for maximum performance.",
      content: null,
      author: "Community Contributors",
      category: "guide",
      publishedAt: new Date().toISOString(),
      readTime: "7 min read",
    }
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
    community: "Community",
    guide: "Guide",
    tutorial: "Tutorial",
    review: "Review",
    opinion: "Opinion",
    event: "Event",
    update: "Update",
  }
  return categoryMap[category] || category
}

export function BlogPostsList() {
  const [posts, setPosts] = React.useState<ContentfulPost[]>([])
  const [loading, setLoading] = React.useState(true)
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  React.useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const data = await fetchPosts()
        setPosts(data.length > 0 ? data : fallbackPosts)
      } catch (error) {
        console.log('Using fallback data:', error)
        setPosts(fallbackPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.fields.category.toLowerCase() === selectedCategory.toLowerCase())

  if (loading) {
    return (
      <section className="section-padding bg-background/50">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Community <span className="neon-text font-jarvish-blurry px-2 py-1 inline-block">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Loading community blog posts...
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Community <span className="neon-text font-jarvish-blurry px-2 py-1 inline-block">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover insights, stories, and updates from our passionate gaming community members. 
            Read about gaming experiences, guides, and community highlights.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              className="cursor-pointer hover:bg-neon-purple hover:text-white transition-colors"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post) => (
            <Card key={post.sys.id} className="card-noir overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.fields.featuredImage ? `https:${post.fields.featuredImage.fields.file.url}?w=400&h=250&fit=crop` : "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"}
                  alt={post.fields.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-background/80 text-foreground">
                    {getCategoryDisplayName(post.fields.category)}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span>{post.fields.author}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{formatTimeAgo(post.fields.publishedAt)}</span>
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold leading-tight hover:text-neon-purple transition-colors cursor-pointer">
                  <Link href={`/${post.fields.slug}`}>
                    {post.fields.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {post.fields.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.fields.readTime || '5 min read'}</span>
                  <Button variant="ghost" size="sm" className="text-neon-purple hover:text-neon-purple hover:bg-neon-purple/10" asChild>
                    <Link href={`/${post.fields.slug}`}>
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">No posts found</h3>
            <p className="text-muted-foreground">
              No blog posts found for the selected category. Try selecting a different category.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 pt-16 border-t border-border/40">
          <h2 className="text-2xl font-display font-bold mb-4">
            Want to Share Your Story?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our community and share your gaming experiences, guides, and insights with fellow gamers.
          </p>
          <Button asChild size="lg" className="btn-primary">
            <Link href="/join">
              Join the Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}