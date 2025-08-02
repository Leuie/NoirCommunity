import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto min-h-screen max-w-4xl p-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About NOIR
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Discover the passion, purpose, and people behind the Community.
          We are more than just gamers; we are nerds united by our shared love for gaming & technology.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-white">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            NOIR Gaming Community provides a comprehensive platform for gamers to connect, compete, and grow.
          </p>
          <ul className="space-y-4 text-gray-300">
            <li><span className="font-semibold text-white">Inclusivity:</span> We welcome everyone, regardless of their gaming preferences or experience.</li>
            <li><span className="font-semibold text-white">Respect:</span> We promote a culture of mutual respect and positive interaction.</li>
            <li><span className="font-semibold text-white">Engagement:</span> We strive to keep our community active and entertained with diverse content and events.</li>
            <li><span className="font-semibold text-white">Passion:</span> We are driven by a shared love for gaming and the desire to explore new worlds together.</li>
          </ul>
        </div>
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-purple-500/20">
          <img
            src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
            alt="Gaming Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        </div>
      </div>

      {/* What We Offer */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          What We <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Offer</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Diverse Gaming Channels",
              description: "Dedicated channels for various game genres including MMOs, FPS, RPGs, MOBAs, and more. Find your niche!"
            },
            {
              title: "Regular Tournaments & Events",
              description: "Compete in exciting tournaments with prizes, participate in community game nights, and special events."
            },
            {
              title: "Active & Supportive Community",
              description: "Connect with thousands of like-minded gamers, form teams, and make lasting friendships."
            },
            {
              title: "Latest Gaming News",
              description: "Stay informed with curated news, reviews, and insights from the gaming industry."
            },
            {
              title: "Content Creation Support",
              description: "Showcase your streams, videos, and fan art. Get feedback and grow your audience within NOIR."
            },
            {
              title: "Exclusive Member Perks",
              description: "Access to exclusive Discord roles, early access to betas, and special giveaways."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Meet the <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Squad</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Leuie", role: "Founder & Lead Developer", description: "Visionary behind NOIR, passionate about creating the ultimate gaming community experience." },
            { name: "Ward", role: "Community Manager", description: "The heart of NOIR, ensuring a welcoming and engaging environment for all members." },
            { name: "LeerOne", role: "Content Strategist", description: "Creates engaging content and manages our social media presence across all platforms." },
            { name: "Chuyo", role: "Security Architect", description: "Cybersecurity professional by day, ensuring our community stays safe and secure." }
          ].map((member, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-400/40 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-purple-400 text-sm mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-12 border border-purple-500/20">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Ready to Join the <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Community</span>?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Connect with passionate gamers, participate in events, and be part of something special.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://discord.noircommunity.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            Join Discord Server
          </a>
          <Link 
            href="/community" 
            className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}