import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Calendar, 
  Trophy, 
  MessageSquare, 
  Shield, 
  Clock,
  Gamepad2,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Join the Community - For Mature Gamers',
  description: 'Join a premier gaming community for mature gamers. Connect with like-minded adults, participate in events, and enjoy a respectful gaming environment.',
  keywords: ['adult gaming community', 'mature gamers', 'gaming discord', 'adult gaming group'],
}

const membershipBenefits = [
  {
    icon: Users,
    title: "Mature Gaming Community",
    description: "Connect with fellow gamers who understand having an important work-life balance and appreciate quality gaming experiences.",
    highlight: "18+ Only",
  },
  {
    icon: Shield,
    title: "Respectful Environment",
    description: "Zero tolerance for toxicity. Our moderated community ensures mature, respectful interactions at all times.",
    highlight: "Moderated",
  },
  {
    icon: Clock,
    title: "Flexible Gaming Schedule",
    description: "Events and activities designed around adult schedules - evenings, weekends, and flexible timing.",
    highlight: "Adult-Friendly Times",
  },
  {
    icon: Trophy,
    title: "Competitive & Casual Play",
    description: "Whether you're climbing ranked ladders or enjoying casual sessions, find your perfect gaming match.",
    highlight: "All Skill Levels",
  },
  {
    icon: Calendar,
    title: "Organized Events",
    description: "Regular tournaments, game nights, and community events planned with adult availability in mind.",
    highlight: "Weekly Events",
  },
  {
    icon: MessageSquare,
    title: "Meaningful Connections",
    description: "Build lasting friendships with gamers who share your passion and understand adult responsibilities.",
    highlight: "Real Friendships",
  },
]

const gameCategories = [
  { name: "MMORPGs", games: ["Final Fantasy XIV", "World of Warcraft", "Guild Wars 2"], color: "bg-neon-purple" },
  { name: "ARPGs", games: ["Path of Exile I & II", "Torchlight Infinite", "Diablo 4"], color: "bg-neon-yellow" },
  { name: "FPS Games", games: ["Valorant", "CS2", "Overwatch 2"], color: "bg-neon-blue" },
  { name: "Strategy", games: ["Age of Empires", "Civilization VI", "StarCraft II"], color: "bg-neon-cyan" },
  { name: "Co-op Games", games: ["Deep Rock Galactic", "Destiny 2", "Monster Hunter"], color: "bg-neon-purple" },
  { name: "Battle Royale", games: ["Apex Legends", "PUBG", "Fortnite"], color: "bg-neon-blue" },
  { name: "RPGs", games: ["Baldur's Gate 3", "Cyberpunk 2077", "Elden Ring"], color: "bg-neon-cyan" },
]

const testimonials = [
  {
    name: "Ruby C.",
    age: "32",
    role: "ABG",
    quote: "Finally found a gaming community that gets it. No drama, just great games with great people.",
    games: ["FFXIV", "Valorant"],
  },
  {
    name: "Vextryyn",
    age: "Unknown",
    role: "Resident Navy Vet",
    quote: "I'm just here so I don't get fined.",
    games: ["No Man's Sky", "Civ VI"],
  },
  {
    name: "Andrew",
    age: "27",
    role: "Karoake God",
    quote: "Nobody fucking with my drip.",
    games: ["CS2", "Valorant"],
  },
]

export default function JoinPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 bg-background/50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative z-10 container-noir text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-neon-purple/20 text-neon-purple border-neon-purple/30 text-lg px-4 py-2">
              18+ Gaming Community
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Join <span className="neon-text font-jarvish-blurry">NOIR</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground/90 mt-2">
                Where Gaming Connects You
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with mature gamers who understand that gaming is more than a hobby. It is a passion that can promote mental health, development, strategy and aid in personal growth. We hope to show that gaming can expand self-worth & deserves respect amongst our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4 text-white">
                <Link href="noircommunity.com/discord" target="_blank">
                  Join us on Discord!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-secondary text-lg px-8 py-4">
                <Link href="#benefits">
                  Learn More
                  <Gamepad2 className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Free to Join
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                18+ Only
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                200+ Active Members
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Zero Toxicity Policy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gamers Choose NOIR */}
      <section id="benefits" className="section-padding bg-background">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Why Gamers Choose <span className="neon-text font-jarvish-blurry">NOIR</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the unique needs of gamers. Here's what sets us apart from typical gaming communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="card-noir group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-neon-purple" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {benefit.highlight}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-display">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Games We Play */}
      <section className="section-padding bg-background/50">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Games We <span className="neon-text">Play</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From competitive esports to cooperative adventures, we cover the games that matter to adult gamers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameCategories.map((category, index) => (
              <Card key={index} className="card-noir">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${category.color}`} />
                    <CardTitle className="text-lg font-display">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.games.map((game, gameIndex) => (
                      <div key={gameIndex} className="text-sm text-muted-foreground flex items-center">
                        <Star className="w-3 h-3 mr-2 text-neon-cyan" />
                        {game}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              What Our <span className="neon-text">Members</span> Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real testimonials from adult gamers who found their gaming home with <span className="font-jarvish-blurry neon-text">NOIR</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-noir">
                <CardContent className="pt-6">
                  <blockquote className="text-foreground/90 mb-4 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}, Age {testimonial.age}</div>
                    </div>
                    <div className="flex gap-1">
                      {testimonial.games.map((game, gameIndex) => (
                        <Badge key={gameIndex} variant="outline" className="text-xs">
                          {game}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-neon-purple/10 via-neon-blue/10 to-neon-cyan/10">
        <div className="container-noir text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Ready to Level Up Your <span className="neon-text">Gaming Experience</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join hundreds of adult gamers who've found their perfect gaming community. 
              No commitment required—just click, join, and start gaming with people who get it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4 text-white">
                <Link href="https://www.noircommunity.com/discord" target="_blank">
                  Join Our Discord Server
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-secondary text-lg px-8 py-4">
                <Link href="/contact">
                  Have Questions?
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Free to join • 18+ only • Zero tolerance for toxicity • Respectful gaming environment
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}