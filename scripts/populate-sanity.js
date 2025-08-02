const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'qgn02sj5',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2024-01-01',
})

// Authors
const authors = [
  {
    _type: 'author',
    name: 'Alex Chen',
    slug: { _type: 'slug', current: 'alex-chen' },
    bio: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Senior gaming journalist with 8+ years covering PC gaming, hardware reviews, and esports. Passionate about ARPGs and competitive gaming.',
          },
        ],
      },
    ],
  },
  {
    _type: 'author',
    name: 'Sarah Martinez',
    slug: { _type: 'slug', current: 'sarah-martinez' },
    bio: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Tech hardware specialist and gaming enthusiast. Known for in-depth GPU and CPU reviews, with a focus on gaming performance.',
          },
        ],
      },
    ],
  },
  {
    _type: 'author',
    name: 'Mike Thompson',
    slug: { _type: 'slug', current: 'mike-thompson' },
    bio: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Indie game advocate and MMO veteran. Covers emerging gaming trends and community-driven content.',
          },
        ],
      },
    ],
  },
]

// Community Members
const communityMembers = [
  {
    _type: 'communityMember',
    name: 'DragonSlayer_92',
    badge: 'veteran',
    joinedAt: '2023-01-15T10:00:00Z',
  },
  {
    _type: 'communityMember',
    name: 'TechWiz_Sarah',
    badge: 'creator',
    joinedAt: '2023-03-22T14:30:00Z',
  },
  {
    _type: 'communityMember',
    name: 'ProGamer_Alex',
    badge: 'pro',
    joinedAt: '2023-02-08T09:15:00Z',
  },
  {
    _type: 'communityMember',
    name: 'StreamQueen_Luna',
    badge: 'streamer',
    joinedAt: '2023-04-12T16:45:00Z',
  },
  {
    _type: 'communityMember',
    name: 'RetroCollector',
    badge: 'collector',
    joinedAt: '2023-01-30T11:20:00Z',
  },
]

// Team Members
const teamMembers = [
  {
    _type: 'teamMember',
    name: 'Leuie',
    role: 'Founder & Lead Developer',
    description: 'Visionary behind NOIR, passionate about creating the ultimate gaming community experience.',
    order: 1,
  },
  {
    _type: 'teamMember',
    name: 'Ward',
    role: 'Community Manager',
    description: 'The heart of NOIR, ensuring a welcoming and engaging environment for all members.',
    order: 2,
  },
  {
    _type: 'teamMember',
    name: 'LeerOne',
    role: 'Content Strategist',
    description: 'Creates engaging content and manages our social media presence across all platforms.',
    order: 3,
  },
  {
    _type: 'teamMember',
    name: 'Chuyo',
    role: 'Security Architect',
    description: 'Cybersecurity professional by day, ensuring our community stays safe and secure.',
    order: 4,
  },
]

// News Articles
const newsArticles = [
  {
    _type: 'newsArticle',
    title: 'Path of Exile 2 Early Access Breaks Steam Records',
    slug: { _type: 'slug', current: 'path-of-exile-2-early-access-breaks-records' },
    excerpt: 'Grinding Gear Games\' highly anticipated ARPG sequel has shattered concurrent player records on Steam, with over 1 million players diving into the dark fantasy world.',
    category: 'arpg',
    publishedAt: '2024-12-15T10:00:00Z',
    readTime: '4 min read',
    source: 'PC Gamer',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Path of Exile 2 has taken the gaming world by storm, with its early access launch breaking multiple Steam records. The game peaked at over 1.2 million concurrent players, making it one of the most successful ARPG launches in recent history.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'The sequel introduces six new character classes, a completely revamped skill system, and stunning visual improvements that have impressed both veterans and newcomers to the franchise.',
          },
        ],
      },
    ],
  },
  {
    _type: 'newsArticle',
    title: 'NVIDIA RTX 5090 Leaked Specs Promise 40% Performance Boost',
    slug: { _type: 'slug', current: 'nvidia-rtx-5090-leaked-specs' },
    excerpt: 'Industry insiders reveal specifications for NVIDIA\'s next flagship GPU, suggesting massive performance improvements for 4K gaming and ray tracing.',
    category: 'industry',
    publishedAt: '2024-12-14T15:30:00Z',
    readTime: '6 min read',
    source: 'TechPowerUp',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Leaked specifications for the upcoming NVIDIA GeForce RTX 5090 suggest a revolutionary leap in gaming performance. The flagship GPU is rumored to feature 24GB of GDDR7 memory and a significantly improved RT core architecture.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Early benchmarks indicate up to 40% performance improvements over the RTX 4090, with particular gains in ray tracing and DLSS 4.0 performance. The card is expected to launch in Q2 2025.',
          },
        ],
      },
    ],
  },
  {
    _type: 'newsArticle',
    title: 'Marvel Rivals Reaches 20 Million Players in First Month',
    slug: { _type: 'slug', current: 'marvel-rivals-20-million-players' },
    excerpt: 'NetEase\'s superhero team shooter has achieved remarkable success, becoming one of the fastest-growing competitive games of 2024.',
    category: 'fps',
    publishedAt: '2024-12-13T12:00:00Z',
    readTime: '3 min read',
    source: 'GameSpot',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Marvel Rivals has exceeded all expectations, reaching 20 million registered players within its first month of release. The free-to-play hero shooter combines beloved Marvel characters with competitive team-based gameplay.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'The game features 33 playable heroes at launch, with more characters planned for regular updates. Its success has positioned it as a serious competitor to Overwatch 2 in the hero shooter market.',
          },
        ],
      },
    ],
  },
  {
    _type: 'newsArticle',
    title: 'Steam Deck OLED 2 Rumored for Late 2025 Release',
    slug: { _type: 'slug', current: 'steam-deck-oled-2-rumored-2025' },
    excerpt: 'Valve reportedly working on a more powerful Steam Deck with improved battery life, better performance, and a larger OLED display.',
    category: 'industry',
    publishedAt: '2024-12-12T09:45:00Z',
    readTime: '5 min read',
    source: 'The Verge',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Industry sources suggest Valve is developing a second-generation Steam Deck OLED with significant hardware improvements. The new handheld is expected to feature a more powerful AMD APU and enhanced battery technology.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Key improvements may include a 8.4-inch OLED display, 50% better battery life, and performance capable of running AAA games at higher settings. The device could launch in late 2025 at a competitive price point.',
          },
        ],
      },
    ],
  },
  {
    _type: 'newsArticle',
    title: 'Diablo IV Season 7 Introduces Witchcraft Powers',
    slug: { _type: 'slug', current: 'diablo-iv-season-7-witchcraft' },
    excerpt: 'Blizzard\'s latest season brings dark magic mechanics, new endgame content, and quality-of-life improvements that fans have been requesting.',
    category: 'arpg',
    publishedAt: '2024-12-11T14:20:00Z',
    readTime: '4 min read',
    source: 'IGN',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Diablo IV Season 7: Season of Witchcraft introduces powerful new magical abilities and a compelling storyline centered around ancient witch covens. Players can harness dark powers through the new Witchcraft skill tree.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'The season also includes new dungeons, improved loot systems, and the highly requested armory feature that allows players to save and swap between different builds instantly.',
          },
        ],
      },
    ],
  },
  {
    _type: 'newsArticle',
    title: 'AMD Ryzen 9000X3D CPUs Launch with Gaming Dominance',
    slug: { _type: 'slug', current: 'amd-ryzen-9000x3d-gaming-dominance' },
    excerpt: 'AMD\'s latest 3D V-Cache processors deliver unprecedented gaming performance, outpacing Intel\'s flagship chips in most gaming benchmarks.',
    category: 'industry',
    publishedAt: '2024-12-10T11:15:00Z',
    readTime: '7 min read',
    source: 'AnandTech',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'AMD has launched its Ryzen 9000X3D series processors, featuring advanced 3D V-Cache technology that provides massive gaming performance improvements. The flagship 9800X3D shows up to 25% better gaming performance than previous generation.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'These processors excel particularly in CPU-intensive games and high-refresh-rate gaming scenarios. The improved cache architecture reduces memory latency significantly, making them ideal for competitive gaming.',
          },
        ],
      },
    ],
  },
  {
    _type: 'newsArticle',
    title: 'Indie Game "Hollow Knight: Silksong" Finally Gets Release Date',
    slug: { _type: 'slug', current: 'hollow-knight-silksong-release-date' },
    excerpt: 'Team Cherry announces that the highly anticipated sequel will launch in Spring 2025, ending years of speculation from eager fans.',
    category: 'indie',
    publishedAt: '2024-12-09T16:30:00Z',
    readTime: '3 min read',
    source: 'Polygon',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'After years of anticipation, Team Cherry has finally announced that Hollow Knight: Silksong will release in Spring 2025. The metroidvania sequel promises expanded gameplay mechanics and a new protagonist, Hornet.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'The game will feature over 150 new enemies, dozens of new tools and abilities, and a completely new kingdom to explore. Pre-orders begin next month across all platforms.',
          },
        ],
      },
    ],
  },
  {
    _type: 'newsArticle',
    title: 'Esports Viewership Hits All-Time High in 2024',
    slug: { _type: 'slug', current: 'esports-viewership-2024-record' },
    excerpt: 'Global esports viewership reached 650 million in 2024, driven by major tournaments in League of Legends, CS2, and Valorant.',
    category: 'esports',
    publishedAt: '2024-12-08T13:45:00Z',
    readTime: '5 min read',
    source: 'ESPN Esports',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'The esports industry has reached unprecedented heights in 2024, with global viewership surpassing 650 million unique viewers. This represents a 15% increase from 2023, driven by major tournament expansions and improved streaming technology.',
          },
        ],
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'League of Legends Worlds 2024 alone attracted over 100 million viewers, while CS2 Major tournaments and Valorant Champions contributed significantly to the growth. Mobile esports also saw substantial increases in viewership.',
          },
        ],
      },
    ],
  },
]

// Community Posts
const communityPosts = [
  {
    _type: 'communityPost',
    content: 'Just hit Paragon 100 in Diablo IV Season 7! The new Witchcraft powers are absolutely insane. Anyone else loving the dark magic theme? 🔮⚡',
    likes: 24,
    comments: 8,
    tags: ['Diablo IV', 'Season 7', 'ARPG', 'Achievement'],
    featured: true,
  },
  {
    _type: 'communityPost',
    content: 'Finally got my hands on the RTX 4080 Super! The performance jump from my old 3070 is incredible. Path of Exile 2 is running buttery smooth at 4K now 🎮',
    likes: 31,
    comments: 12,
    tags: ['Hardware', 'RTX 4080', 'Path of Exile 2', 'Upgrade'],
    featured: false,
  },
  {
    _type: 'communityPost',
    content: 'Marvel Rivals is seriously addictive! Been maining Spider-Man and the web-slinging mechanics feel so satisfying. Who are your favorite heroes to play?',
    likes: 18,
    comments: 15,
    tags: ['Marvel Rivals', 'FPS', 'Spider-Man', 'Discussion'],
    featured: false,
  },
  {
    _type: 'communityPost',
    content: 'Steam Deck OLED has been a game-changer for my commute. Currently playing through Baldur\'s Gate 3 and it looks absolutely stunning on the OLED screen ✨',
    likes: 27,
    comments: 9,
    tags: ['Steam Deck', 'Baldurs Gate 3', 'Handheld Gaming', 'OLED'],
    featured: true,
  },
  {
    _type: 'communityPost',
    content: 'Anyone else excited for Hollow Knight: Silksong? I\'ve been replaying the original to prepare. Team Cherry really knows how to craft atmospheric worlds 🦋',
    likes: 22,
    comments: 11,
    tags: ['Hollow Knight', 'Silksong', 'Indie Games', 'Metroidvania'],
    featured: false,
  },
  {
    _type: 'communityPost',
    content: 'Built my first custom loop water cooling system! Temps dropped by 20°C and it looks absolutely gorgeous with the RGB. Worth every penny 💧',
    likes: 35,
    comments: 18,
    tags: ['PC Building', 'Water Cooling', 'RGB', 'Custom Loop'],
    featured: true,
  },
  {
    _type: 'communityPost',
    content: 'The new AMD Ryzen 9800X3D is a beast for gaming! Getting consistent 240+ FPS in CS2 now. Intel who? 😎',
    likes: 29,
    comments: 14,
    tags: ['AMD', 'Ryzen 9800X3D', 'CS2', 'High Refresh Gaming'],
    featured: false,
  },
]

async function createContent() {
  try {
    console.log('Creating authors...')
    const createdAuthors = []
    for (const author of authors) {
      const result = await client.create(author)
      createdAuthors.push(result)
      console.log(`Created author: ${author.name}`)
    }

    console.log('Creating community members...')
    const createdMembers = []
    for (const member of communityMembers) {
      const result = await client.create(member)
      createdMembers.push(result)
      console.log(`Created community member: ${member.name}`)
    }

    console.log('Creating team members...')
    for (const member of teamMembers) {
      const result = await client.create(member)
      console.log(`Created team member: ${member.name}`)
    }

    console.log('Creating news articles...')
    for (let i = 0; i < newsArticles.length; i++) {
      const article = { ...newsArticles[i] }
      // Assign random author reference
      const randomAuthor = createdAuthors[Math.floor(Math.random() * createdAuthors.length)]
      article.author = { _type: 'reference', _ref: randomAuthor._id }
      
      const result = await client.create(article)
      console.log(`Created news article: ${article.title}`)
    }

    console.log('Creating community posts...')
    for (let i = 0; i < communityPosts.length; i++) {
      const post = { ...communityPosts[i] }
      // Assign random community member reference
      const randomMember = createdMembers[Math.floor(Math.random() * createdMembers.length)]
      post.author = { _type: 'reference', _ref: randomMember._id }
      
      const result = await client.create(post)
      console.log(`Created community post: ${post.content.substring(0, 50)}...`)
    }

    console.log('✅ All content created successfully!')
    console.log('🎉 Your Sanity studio now has sample content to work with!')
    
  } catch (error) {
    console.error('Error creating content:', error)
  }
}

createContent()