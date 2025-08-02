"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Users, Trophy, MessageSquare, Calendar, Star } from "lucide-react"

const features = [
  {
    icon: Gamepad2,
    title: "Multi-Genre Gaming",
    description: "From MMOs to FPS, RPGs to MOBAs - we cover all your favorite gaming genres with dedicated communities for each.",
    color: "text-neon-purple",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Connect with thousands of passionate gamers, form teams, make friends, and share your gaming experiences.",
    color: "text-neon-blue",
  },
  {
    icon: Trophy,
    title: "Tournaments & Events",
    description: "Participate in regular tournaments, seasonal events, and community challenges with amazing prizes.",
    color: "text-neon-cyan",
  },
  {
    icon: MessageSquare,
    title: "Community Wall",
    description: "Share your achievements, screenshots, and gaming moments with the community on our interactive wall.",
    color: "text-neon-purple",
  },
  {
    icon: Calendar,
    title: "Gaming News",
    description: "Stay updated with the latest gaming news, reviews, and industry insights curated just for you.",
    color: "text-neon-blue",
  },
  {
    icon: Star,
    title: "Exclusive Content",
    description: "Access exclusive content, early game previews, and special community perks available only to members.",
    color: "text-neon-cyan",
  },
]

export function FeaturesSection() {
  return (
    <section className="section-padding bg-background/50">
      <div className="container-noir">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Why Choose <span className="neon-text font-jarvish-blurry px-1 py-0.5 inline-block">NOIR</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're more than just a gaming community - we're a family of gamers dedicated to 
            creating the ultimate gaming experience for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="card-noir group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-display">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}