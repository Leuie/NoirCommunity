'use client'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-neon-purple mx-auto mb-4"></div>
        <p className="text-lg text-muted-foreground">Loading Sanity Studio...</p>
      </div>
    </div>
  )
}