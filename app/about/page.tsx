import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About NOIR Gaming Community',
  description: 'Learn about the NOIR Gaming Community\'s mission, values, what we offer, and why you should join our passionate gaming family.',
};

const teamMembers = [
  {
    name: "Leuie",
    role: "Founder & Lead Developer",
    description: "Visionary behind NOIR, passionate about gaming and community building.",
    image: "https://i.imgur.com/Kj1YaTI.png?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    name: "Ward",
    role: "Community Manager",
    description: "The heart of NOIR, ensuring a welcoming and engaging environment for all members.",
    image: "https://i.imgur.com/8AmuFBl.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    name: "LeerOne",
    role: "Content Strategist",
    description: "Conceives and iterates on the latest graphics. Creating engaging content for the community.",
    image: "https://i.imgur.com/sgYVMV6.png?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section for About Page */}
      <section className="relative py-24 sm:py-32 lg:py-40 bg-background/50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative z-10 container-noir text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 neon-text">
            About NOIR
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the passion, purpose, and people behind the Community.
            We are more than just gamers; we are a nerds united by our shared love for gaming & technology.
          </p>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section-padding bg-background">
        <div className="container-noir grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Our <span className="neon-text">Mission & Values</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At NOIR, our mission is to foster a vibrant, inclusive, and engaging environment for gamers of all backgrounds and skill levels. We believe in the power of gaming to connect people, build friendships, and create unforgettable experiences.
            </p>
            <ul className="space-y-4 text-muted-foreground text-base">
              <li><span className="font-semibold text-foreground">Inclusivity:</span> We welcome everyone, regardless of their gaming preferences or experience.</li>
              <li><span className="font-semibold text-foreground">Respect:</span> We promote a culture of mutual respect and positive interaction.</li>
              <li><span className="font-semibold text-foreground">Engagement:</span> We strive to keep our community active and entertained with diverse content and events.</li>
              <li><span className="font-semibold text-foreground">Passion:</span> We are driven by a shared love for gaming and the desire to explore new worlds together.</li>
            </ul>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg border border-border/50">
            <img
              src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1280&h=720&fit=crop"
              alt="Gaming Community"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-padding bg-background/50">
        <div className="container-noir text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            What We <span className="neon-text">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            NOIR Gaming Community provides a comprehensive platform for gamers to connect, compete, and grow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-noir">
              <CardHeader>
                <CardTitle className="text-xl font-display">Diverse Gaming Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Dedicated channels for various game genres including MMOs, FPS, RPGs, MOBAs, and more. Find your niche!
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="card-noir">
              <CardHeader>
                <CardTitle className="text-xl font-display">Regular Tournaments & Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Compete in exciting tournaments with prizes, participate in community game nights, and special events.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="card-noir">
              <CardHeader>
                <CardTitle className="text-xl font-display">Active & Supportive Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Connect with thousands of like-minded gamers, form teams, and make lasting friendships.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="card-noir">
              <CardHeader>
                <CardTitle className="text-xl font-display">Latest Gaming News</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Stay informed with curated news, reviews, and insights from the gaming industry.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="card-noir">
              <CardHeader>
                <CardTitle className="text-xl font-display">Content Creation Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Showcase your streams, videos, and fan art. Get feedback and grow your audience within NOIR.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="card-noir">
              <CardHeader>
                <CardTitle className="text-xl font-display">Exclusive Member Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Access to exclusive Discord roles, early access to betas, and special giveaways.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join NOIR Section */}
      <section className="section-padding bg-background">
        <div className="container-noir text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Why Join <span className="neon-text">NOIR</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            We are more than just a gaming community; we are a family. Here's what sets us apart:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-noir text-left">
              <CardHeader>
                <CardTitle className="text-2xl font-display neon-text">True Community Spirit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Unlike other large, impersonal communities, NOIR focuses on genuine connections. We foster an environment where every member feels valued, heard, and part of something special. Our moderators and leadership are actively engaged, ensuring a positive experience for all.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="card-noir text-left">
              <CardHeader>
                <CardTitle className="text-2xl font-display neon-text">Player-Centric Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Your gaming experience is our priority. We constantly evolve based on community feedback, introducing new features, events, and channels that truly resonate with our members. From casual play to competitive esports, we cater to diverse interests.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <Button asChild size="lg" className="btn-primary">
              <Link href="/join">
                Become a Member Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Meet the Squad Section */}
      <section className="section-padding bg-background/50">
        <div className="container-noir text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Meet the <span className="neon-text">Squad</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Get to know the dedicated individuals who make the NOIR Gaming Community thrive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-noir flex flex-col items-center text-center p-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-neon-purple">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-display mb-2">{member.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4">
                  {member.role}
                </CardDescription>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}