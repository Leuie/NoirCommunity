require('dotenv').config({ path: '.env.local' })
const contentful = require('contentful-management')

// Your existing hardcoded data
const existingData = {
  teamMembers: [
    {
      name: "Leuie",
      role: "Founder & Lead Developer",
      description: "Visionary behind NOIR, passionate about gaming and community building.",
      order: 1,
    },
    {
      name: "Ward",
      role: "Community Manager", 
      description: "The heart of NOIR, ensuring a welcoming and engaging environment for all members.",
      order: 2,
    },
    {
      name: "LeerOne",
      role: "Content Strategist",
      description: "Conceives and iterates on the latest graphics. Creating engaging content for the community.",
      order: 3,
    },
    {
      name: "Chuyo",
      role: "Security Architect",
      description: "Cybersecurity Professional by day, Gamer by night.",
      order: 4,
    },
  ],
  
  communityPosts: [
    {
      content: "Just hit level 100 in my favorite MMO! The grind was real but totally worth it. Thanks to everyone in the guild for the support! 🎮",
      authorName: "GamerPro2024",
      authorBadge: "veteran",
      likes: 24,
      comments: 8,
      tags: ["MMO", "Achievement"],
    },
    {
      content: "Amazing tournament last night! Congrats to all participants. The final match was absolutely insane! Can't wait for the next one 🏆",
      authorName: "StreamQueen", 
      authorBadge: "streamer",
      likes: 42,
      comments: 15,
      tags: ["Tournament", "Esports"],
    },
    {
      content: "Found this gem at a local game store today! Sometimes the best treasures are hiding in plain sight. What's your best gaming find?",
      authorName: "RetroGamer",
      authorBadge: "collector", 
      likes: 18,
      comments: 12,
      tags: ["Retro", "Collection"],
    },
  ],

  newsArticles: [
    {
      title: "The Future of Gaming: What to Expect in 2025",
      slug: "future-of-gaming-2025",
      excerpt: "From AI-powered NPCs to revolutionary VR experiences, discover what's coming next in the gaming industry.",
      author: "The Verge Gaming",
      category: "industry",
      readTime: "5 min read",
    },
    {
      title: "Top 10 Indie Games That Deserve Your Attention",
      slug: "top-indie-games",
      excerpt: "Hidden gems from independent developers that are pushing the boundaries of creativity and gameplay.",
      author: "Polygon",
      category: "indie", 
      readTime: "8 min read",
    },
    {
      title: "Esports Championship: Record-Breaking Viewership",
      slug: "esports-championship",
      excerpt: "The latest esports tournament shattered all previous records with millions of viewers worldwide.",
      author: "Kotaku",
      category: "esports",
      readTime: "3 min read",
    },
  ],

  posts: [
    {
      title: "Welcome to NOIR Gaming Community",
      slug: "welcome-to-noir",
      excerpt: "Join us as we embark on this exciting journey to build the ultimate gaming community.",
      author: "NOIR Team",
      category: "community",
      readTime: "3 min read",
    },
    {
      title: "Getting Started with NOIR",
      slug: "getting-started",
      excerpt: "Everything you need to know to make the most of your NOIR community experience.",
      author: "NOIR Team", 
      category: "guide",
      readTime: "5 min read",
    },
  ]
}

async function migrateData() {
  try {
    // Initialize Contentful Management client
    const client = contentful.createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
    })

    const space = await client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
    const environment = await space.getEnvironment('master')

    console.log('🚀 Starting data migration to Contentful...')

    // Migrate Team Members
    console.log('📝 Migrating team members...')
    for (const member of existingData.teamMembers) {
      try {
        const entry = await environment.createEntry('teamMember', {
          fields: {
            name: { 'en-US': member.name },
            role: { 'en-US': member.role },
            description: { 'en-US': member.description },
            order: { 'en-US': member.order }
          }
        })
        await entry.publish()
        console.log(`✅ Created team member: ${member.name}`)
      } catch (error) {
        console.error(`❌ Error creating team member ${member.name}:`, error.message)
      }
    }

    // First, create authors for community posts
    console.log('👥 Creating community post authors...')
    const authors = {}
    for (const post of existingData.communityPosts) {
      if (!authors[post.authorName]) {
        try {
          const authorEntry = await environment.createEntry('author', {
            fields: {
              name: { 'en-US': post.authorName },
              badge: { 'en-US': post.authorBadge }
            }
          })
          await authorEntry.publish()
          authors[post.authorName] = authorEntry
          console.log(`✅ Created author: ${post.authorName}`)
        } catch (error) {
          console.error(`❌ Error creating author ${post.authorName}:`, error.message)
        }
      }
    }

    // Migrate Community Posts
    console.log('💬 Migrating community posts...')
    for (const post of existingData.communityPosts) {
      try {
        const entry = await environment.createEntry('communityPost', {
          fields: {
            content: { 'en-US': post.content },
            author: { 'en-US': { sys: { type: 'Link', linkType: 'Entry', id: authors[post.authorName].sys.id } } },
            likes: { 'en-US': post.likes },
            comments: { 'en-US': post.comments },
            tags: { 'en-US': post.tags }
          }
        })
        await entry.publish()
        console.log(`✅ Created community post by: ${post.authorName}`)
      } catch (error) {
        console.error(`❌ Error creating community post:`, error.message)
      }
    }

    // Migrate News Articles
    console.log('📰 Migrating news articles...')
    for (const article of existingData.newsArticles) {
      try {
        const entry = await environment.createEntry('newsArticle', {
          fields: {
            title: { 'en-US': article.title },
            slug: { 'en-US': article.slug },
            excerpt: { 'en-US': article.excerpt },
            author: { 'en-US': article.author },
            category: { 'en-US': article.category },
            readTime: { 'en-US': article.readTime },
            publishedAt: { 'en-US': new Date().toISOString() }
          }
        })
        await entry.publish()
        console.log(`✅ Created news article: ${article.title}`)
      } catch (error) {
        console.error(`❌ Error creating news article ${article.title}:`, error.message)
      }
    }

    // Migrate Blog Posts
    console.log('📝 Migrating blog posts...')
    for (const post of existingData.posts) {
      try {
        const entry = await environment.createEntry('post', {
          fields: {
            title: { 'en-US': post.title },
            slug: { 'en-US': post.slug },
            excerpt: { 'en-US': post.excerpt },
            author: { 'en-US': post.author },
            category: { 'en-US': post.category },
            readTime: { 'en-US': post.readTime },
            publishedAt: { 'en-US': new Date().toISOString() }
          }
        })
        await entry.publish()
        console.log(`✅ Created blog post: ${post.title}`)
      } catch (error) {
        console.error(`❌ Error creating blog post ${post.title}:`, error.message)
      }
    }

    console.log('🎉 Data migration completed successfully!')
    console.log('📋 Summary:')
    console.log(`   - ${existingData.teamMembers.length} team members`)
    console.log(`   - ${existingData.communityPosts.length} community posts`)
    console.log(`   - ${existingData.newsArticles.length} news articles`)
    console.log(`   - ${existingData.posts.length} blog posts`)

  } catch (error) {
    console.error('💥 Migration failed:', error)
  }
}

// Run the migration
migrateData()