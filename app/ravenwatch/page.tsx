"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Users, 
  Gamepad2, 
  BookOpen, 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Sword,
  Shield,
  Zap
} from "lucide-react"

const supportedGames = [
  {
    name: "Diablo IV",
    description: "Blizzard's latest entry in the legendary Diablo franchise. Experience the dark world of Sanctuary with endless character customization, challenging dungeons, and epic boss battles.",
    image: "https://4kwallpapers.com/images/walls/thumbs_3t/5969.png?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    status: "Active",
    playerCount: "Low",
  },
  {
    name: "Hero Siege",
    description: "A hack 'n' slash game with roguelike elements. Choose from over 20 classes and explore randomly generated worlds filled with loot, monsters, and challenging bosses.",
    image: "https://imgur.com/jnP5sHs.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    status: "Active",
    playerCount: "Medium",
  },
  {
    name: "Last Epoch",
    description: "A time-traveling ARPG with deep character customization and crafting systems. Master the timeline and forge your destiny across different eras.",
    image: "https://imgur.com/CzgjxyX.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    status: "Active",
    playerCount: "High",
  },
  {
    name: "No Rest For The Wicked",
    description: "A dark fantasy ARPG with stunning hand-drawn visuals. Explore a plague-ridden kingdom and uncover the truth behind the spreading madness.",
    image: "https://imgur.com/mnbeznG.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    status: "Active",
    playerCount: "Medium",
  },
  {
    name: "Path of Exile I",
    description: "The original free-to-play ARPG that redefined the genre. With its complex passive skill tree and ethical free-to-play model, PoE offers endless character possibilities.",
    image: "https://imgur.com/5ElTlKp.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    status: "Active",
    playerCount: "Very High",
  },
  {
    name: "Path of Exile II",
    description: "The highly anticipated sequel featuring a new seven-act campaign, updated graphics, and refined gameplay mechanics while maintaining the depth that made the original legendary.",
    image: "https://imgur.com/yLpjE6z.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    status: "New",
    playerCount: "Very High",
  },
  {
    name: "The Slormancer",
    description: "A 2D pixel-art ARPG with deep RPG mechanics. Battle through hordes of enemies with satisfying combat and extensive character progression systems.",
    image: "https://imgur.com/5J4Luja.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    status: "Active",
    playerCount: "Low",
  },
  {
    name: "Torchlight Infinite",
    description: "A free-to-play ARPG set in the beloved Torchlight universe. Experience fast-paced combat, colorful environments, and endless loot hunting adventures.",
    image: "https://imgur.com/QPMSITX.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
    status: "Active",
    playerCount: "High",
  },
]

const features = [
  {
    icon: Users,
    title: "Expert Community",
    description: "Connect with experienced ARPG players and newcomers alike. Share knowledge, strategies, and build theories.",
    color: "text-neon-purple",
  },
  {
    icon: BookOpen,
    title: "Build Guides & Resources",
    description: "Access comprehensive build guides, spreadsheets, and tools to optimize your character progression.",
    color: "text-neon-blue",
  },
  {
    icon: Sword,
    title: "Strategy Sharing",
    description: "Discuss advanced tactics, boss strategies, and efficient farming methods across all supported games.",
    color: "text-neon-cyan",
  },
  {
    icon: Shield,
    title: "Solo & Co-op Support",
    description: "Whether you prefer solo play or group adventures, find like-minded players and enhance your experience.",
    color: "text-neon-purple",
  },
]

export default function RavenwatchPage() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % supportedGames.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + supportedGames.length) % supportedGames.length)
  }

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 bg-background/50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative z-10 container-noir text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-neon-purple/20 text-neon-purple border-neon-purple/30 text-lg px-4 py-2">
              ARPG Sub-Community
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="neon-text font-jarvish-blurry px-2 py-1 inline-block">Ravenwatch</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground/90 mt-2">
                ARPG Mastery Hub
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A dedicated community for ARPG enthusiasts. Whether you're a seasoned veteran or just beginning your journey, 
              join us to unravel complex builds, share strategies, and forge friendships that transcend the digital realm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4 text-white">
                <Link href="https://discord.gg/ravenwatch" target="_blank">
                  Join Ravenwatch Discord
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-secondary text-lg px-8 py-4">
                <Link href="#games">
                  Explore Supported Games
                  <Gamepad2 className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Ravenwatch */}
      <section className="section-padding bg-background">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              What is <span className="neon-text font-jarvish-blurry px-1 py-0.5 inline-block">Ravenwatch</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">Ravenwatch</span> is a specialized sub-community within <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">NOIR</span> Gaming Community, 
              dedicated exclusively to Action RPG enthusiasts. We bring together players who are deeply invested in the ARPG genre, 
              creating a focused environment for learning, sharing, and growing together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="card-noir group text-center">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-lg bg-background/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-8 w-8 ${feature.color}`} />
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

      {/* Supported Games Slider */}
      <section id="games" className="section-padding bg-background/50">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Supported <span className="neon-text">Games</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Currently featured games in <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">Ravenwatch</span>. We also explore emerging ARPGs that gain mainstream attention.
            </p>
          </div>

          {/* Game Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {supportedGames.map((game, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="card-noir overflow-hidden">
                      <div className="relative h-64 sm:h-80">
                        <Image
                          src={game.image}
                          alt={game.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                        <div className="absolute top-4 right-4 flex gap-2">
                          <Badge 
                            className={`${
                              game.status === 'New' ? 'bg-neon-cyan text-white' : 
                              'bg-neon-purple/20 text-neon-purple border-neon-purple/30'
                            }`}
                          >
                            {game.status}
                          </Badge>
                          <Badge variant="outline" className="bg-background/80">
                            {game.playerCount} Activity
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl font-display text-center">
                          {game.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground leading-relaxed text-center">
                          {game.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur hover:bg-background"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur hover:bg-background"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {supportedGames.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-neon-purple' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="section-padding bg-background">
        <div className="container-noir">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Why Join <span className="neon-text font-jarvish-blurry px-1 py-0.5 inline-block">Ravenwatch</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6 neon-text">
                For Every Type of Player
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Experienced Veterans</h4>
                    <p className="text-muted-foreground text-sm">
                      Share your knowledge, discover new strategies, and help newcomers navigate complex game systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-4 h-4 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Genre Newcomers</h4>
                    <p className="text-muted-foreground text-sm">
                      Get guidance from experienced players, access beginner-friendly builds, and learn at your own pace.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-neon-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solo & Co-op Players</h4>
                    <p className="text-muted-foreground text-sm">
                      Whether you prefer solo adventures or group play, find your perfect gaming companions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="card-noir">
              <CardHeader>
                <CardTitle className="text-2xl font-display neon-text text-center">
                  Coming Soon
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Enhanced Tools & Resources</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    We're working on integrating advanced tools to enhance your ARPG experience:
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Interactive build calculators and planners</li>
                  <li>• Comprehensive spreadsheets for optimization</li>
                  <li>• Detailed guides and strategy resources</li>
                  <li>• Community-driven tier lists and meta analysis</li>
                  <li>• Integration with popular ARPG tools and APIs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-neon-purple/10 via-neon-blue/10 to-neon-cyan/10">
        <div className="container-noir text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Ready to Master the <span className="neon-text font-jarvish-blurry px-1 py-0.5 inline-block">ARPG</span> Genre?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join <span className="font-jarvish-blurry neon-text px-1 py-0.5 inline-block">Ravenwatch</span> today and connect with passionate ARPG players who share your dedication to the genre. 
              Whether you're theory-crafting builds or seeking adventure companions, your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4 text-white">
                <Link href="https://noircommunity.com/ravenwatch" target="_blank">
                  Join Ravenwatch Discord
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
          </div>
        </div>
      </section>
    </div>
  )
}