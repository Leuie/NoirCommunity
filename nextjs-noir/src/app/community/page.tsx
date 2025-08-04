import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="container mx-auto min-h-screen max-w-4xl p-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Community Hub
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Connect with fellow gamers, share your achievements, and be part of the conversation. 
          This is where the NOIR community comes together.
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { label: "Active Members", value: "200+", icon: "👥" },
          { label: "Posts Shared", value: "1.2K+", icon: "💬" },
          { label: "Community Activity", value: "24/7", icon: "📈" }
        ].map((stat, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Featured Content */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Join Our Discord</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Connect with fellow gamers, share your achievements, and be part of the conversation on our Discord server.
          </p>
          <a 
            href="https://discord.noircommunity.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            Join Discord Server
          </a>
        </div>

        <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Community Guidelines</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Be respectful to all community members</li>
            <li>• No spam or self-promotion without permission</li>
            <li>• Keep discussions gaming-related</li>
            <li>• Use appropriate language and content</li>
            <li>• Help create a welcoming environment</li>
          </ul>
        </div>
      </div>

      {/* Games We Play */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Games We <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Play</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { category: "MMORPGs", games: ["Final Fantasy XIV", "Guild Wars II", "World of Warcraft"], color: "from-purple-500 to-purple-600" },
            { category: "ARPGs", games: ["Diablo IV", "Path of Exile", "Last Epoch"], color: "from-blue-500 to-blue-600" },
            { category: "FPS Games", games: ["CS2", "Valorant", "Overwatch 2"], color: "from-cyan-500 to-cyan-600" },
            { category: "Strategy", games: ["Age of Empires", "Civilization VI", "StarCraft II"], color: "from-purple-500 to-blue-500" },
            { category: "Co-op Games", games: ["Deep Rock Galactic", "Destiny 2", "Monster Hunter"], color: "from-blue-500 to-cyan-500" },
            { category: "Battle Royale", games: ["Apex Legends", "Fortnite", "PUBG"], color: "from-cyan-500 to-purple-500" }
          ].map((gameCategory, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${gameCategory.color} mb-3`}></div>
              <h3 className="text-lg font-semibold text-white mb-3">{gameCategory.category}</h3>
              <ul className="space-y-1">
                {gameCategory.games.map((game, gameIndex) => (
                  <li key={gameIndex} className="text-gray-400 text-sm flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    {game}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-12 border border-purple-500/20">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Ready to Level Up Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Gaming Experience</span>?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of gamers who've found their perfect gaming community. 
          No commitment required—just click, join, and start gaming with people who get it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://discord.noircommunity.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            Join Our Discord
          </a>
          <Link 
            href="/" 
            className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Back to Posts
          </Link>
        </div>
      </div>
    </div>
  );
}