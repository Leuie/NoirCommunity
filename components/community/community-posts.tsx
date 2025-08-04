"use client"

import { useState, useEffect } from 'react'
import { createSupabaseClient } from '@/lib/supabase'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface CommunityPost {
  id: string
  content: string
  likes: number
  created_at: string
  profiles: {
    username: string | null
    full_name: string | null
    avatar_url: string | null
  }
}

interface CommunityPostsProps {
  refreshTrigger?: number
}

export function CommunityPosts({ refreshTrigger }: CommunityPostsProps) {
  const [posts, setPosts] = useState<CommunityPost[]>([])
  const [loading, setLoading] = useState(true)
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())
  const supabase = createSupabaseClient()
  const { toast } = useToast()

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('community_posts')
        .select(`
          id,
          content,
          likes,
          created_at,
          profiles (
            username,
            full_name,
            avatar_url
          )
        `)
        .order('created_at', { ascending: false })
        .limit(20)

      if (error) throw error

      setPosts(data || [])
    } catch (error) {
      console.error('Error fetching posts:', error)
      toast({
        title: "Error",
        description: "Failed to load community posts.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [refreshTrigger])

  const handleLike = async (postId: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        toast({
          title: "Error",
          description: "You must be signed in to like posts.",
          variant: "destructive",
        })
        return
      }

      // Optimistic update
      setLikedPosts(prev => new Set([...prev, postId]))
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, likes: post.likes + 1 }
          : post
      ))

      // Update in database
      const { error } = await supabase
        .from('community_posts')
        .update({ likes: posts.find(p => p.id === postId)!.likes + 1 })
        .eq('id', postId)

      if (error) throw error

    } catch (error) {
      // Revert optimistic update on error
      setLikedPosts(prev => {
        const newSet = new Set(prev)
        newSet.delete(postId)
        return newSet
      })
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, likes: post.likes - 1 }
          : post
      ))
      
      console.error('Error liking post:', error)
      toast({
        title: "Error",
        description: "Failed to like post. Please try again.",
        variant: "destructive",
      })
    }
  }

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours} hours ago`
    if (diffInHours < 48) return "1 day ago"
    return `${Math.floor(diffInHours / 24)} days ago`
  }

  if (loading) {
    return (
      <div className="space-y-6">
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
    )
  }

  if (posts.length === 0) {
    return (
      <Card className="card-noir text-center py-12">
        <CardContent>
          <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No posts yet</h3>
          <p className="text-muted-foreground">
            Be the first to share something with the community!
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id} className="card-noir">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage 
                  src={post.profiles.avatar_url || undefined} 
                  alt={post.profiles.full_name || post.profiles.username || 'User'} 
                />
                <AvatarFallback>
                  {(post.profiles.full_name || post.profiles.username || 'U').charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm font-semibold">
                    {post.profiles.full_name || post.profiles.username || 'Anonymous User'}
                  </h4>
                  <Badge variant="secondary" className="text-xs">
                    Member
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {formatTimeAgo(post.created_at)}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-foreground/90 mb-4 leading-relaxed">
              {post.content}
            </p>
            
            <div className="flex items-center justify-between text-muted-foreground">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(post.id)}
                  className={`hover:text-neon-purple transition-colors ${
                    likedPosts.has(post.id) ? 'text-neon-purple' : ''
                  }`}
                >
                  <Heart className={`w-4 h-4 mr-1 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                  <span className="text-xs">{post.likes}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-neon-blue transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span className="text-xs">Reply</span>
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-neon-cyan transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}