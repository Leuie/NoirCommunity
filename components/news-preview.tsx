"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight, ExternalLink } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "The Future of Gaming: What to Expect in 2025",
    excerpt: "From AI-powered NPCs to revolutionary VR experiences, discover what's coming next in the gaming industry.",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    source: "The Verge Gaming",
    category: "Industry",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Top 10 Indie Games That Deserve Your Attention",
    excerpt: "Hidden gems from independent developers that are pushing the boundaries of creativity and gameplay.",
    image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    source: "Polygon",
    category: "Indie",
    publishedAt: "4 hours ago",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Esports Championship: Record-Breaking Viewership",
    excerpt: "The latest esports tournament shattered all previous records with millions of viewers worldwide.",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    source: "Kotaku",
    category: "Esports",
    publishedAt: "6 hours ago",
    readTime: "3 min read",
  },
]

const categories = ["All", "MMO", "ARPG", "MOBA", "FPS", "RPG", "Action", "Sports", "Indie", "TCG"]

export function NewsPreview() {
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
          {newsArticles.map((article) => (
            <Card key={article.id} className="card-noir overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-background/80 text-foreground">
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span>{article.source}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.publishedAt}</span>
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
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  <Button variant="ghost" size="sm" className="text-neon-purple hover:text-neon-purple hover:bg-neon-purple/10">
                    Read More
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </Button>
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