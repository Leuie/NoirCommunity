"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, Trophy } from "lucide-react"

const wallpapers = [
  "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
]

export function HeroSection() {
  const [currentWallpaper, setCurrentWallpaper] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWallpaper((prev) => (prev + 1) % wallpapers.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Slider */}
      <div className="absolute inset-0 z-0">
        {wallpapers.map((wallpaper, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentWallpaper ? "opacity-30" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${wallpaper})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-noir px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
            <span className="block neon-text animate-glow">
              NOIR
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground/90 mt-2">
              Gaming Community
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium">
            For Gamers, By Gamers.
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our thriving community of passionate gamers. Discover curated content, 
            stay updated with the latest gaming news, and connect with fellow enthusiasts 
            who share your love for gaming.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
              <Link href="/join">
                Join the Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary text-lg px-8 py-4">
              <Link href="/about">
                Learn More
                <Play className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-neon-purple" />
              </div>
              <div className="text-2xl font-bold text-foreground">1,000+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="h-8 w-8 text-neon-blue" />
              </div>
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Tournaments</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Play className="h-8 w-8 text-neon-cyan" />
              </div>
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Gaming Action</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}