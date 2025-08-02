"use client"

import { useState } from 'react'
import { createSupabaseClient } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquare, Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface CreatePostProps {
  onPostCreated?: () => void
}

export function CreatePost({ onPostCreated }: CreatePostProps) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const supabase = createSupabaseClient()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!content.trim()) {
      toast({
        title: "Error",
        description: "Please enter some content for your post.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        toast({
          title: "Error",
          description: "You must be signed in to create a post.",
          variant: "destructive",
        })
        return
      }

      const { error } = await supabase
        .from('community_posts')
        .insert([
          {
            user_id: user.id,
            content: content.trim(),
          }
        ])

      if (error) throw error

      setContent('')
      toast({
        title: "Success",
        description: "Your post has been created!",
      })
      
      if (onPostCreated) {
        onPostCreated()
      }
    } catch (error) {
      console.error('Error creating post:', error)
      toast({
        title: "Error",
        description: "Failed to create post. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="card-noir">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MessageSquare className="w-5 h-5 text-neon-purple" />
          <span>Share with the Community</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="What's on your mind? Share your gaming achievements, thoughts, or ask the community a question..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="resize-none"
            maxLength={500}
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              {content.length}/500 characters
            </span>
            <Button 
              type="submit" 
              disabled={loading || !content.trim()}
              className="btn-primary"
            >
              {loading ? (
                "Posting..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Post
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}