import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div className="container mx-auto min-h-screen max-w-4xl p-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          NOIR Gaming Community
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Welcome to our gaming community hub. Discover the latest posts, connect with fellow gamers, 
          and stay updated with everything happening in the NOIR universe.
        </p>
      </div>

      {/* Posts Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-white">Latest Posts</h2>
        
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link 
                href={`/${post.slug.current}`} 
                key={post._id}
                className="group"
              >
                <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Published: {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <div className="mt-4 text-purple-400 text-sm font-medium">
                    Read more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">No Posts Yet</h3>
              <p className="text-gray-400">
                Posts will appear here once they're published in your Sanity CMS.
              </p>
              <div className="mt-6">
                <a 
                  href="https://qgn02sj5.sanity.studio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Open Sanity Studio
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Community Features */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Join Our Community</h3>
          <p className="text-gray-400 mb-4">
            Connect with fellow gamers, share your achievements, and be part of the conversation.
          </p>
          <Link 
            href="/community" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            Explore Community →
          </Link>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Gaming News</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with the latest gaming news, reviews, and industry insights.
          </p>
          <Link 
            href="/news" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            Read News →
          </Link>
        </div>
      </div>
    </div>
  );
}