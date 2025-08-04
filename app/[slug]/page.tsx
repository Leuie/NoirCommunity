import { fetchPostBySlug, fetchPosts, ContentfulPost } from "@/lib/contentful";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const posts = await fetchPosts(100); // Fetch more posts to ensure we get all slugs
    
    if (posts && posts.length > 0) {
      return posts.map((post) => ({
        slug: post.fields.slug,
      }));
    }
    
    // Fallback to predefined slugs if no posts are fetched
    return [
      { slug: 'top-indie-games' },
      { slug: 'welcome-to-noir' },
      { slug: 'getting-started' }
    ];
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return fallback slugs when fetch fails
    return [
      { slug: 'top-indie-games' },
      { slug: 'welcome-to-noir' },
      { slug: 'getting-started' }
    ];
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post: ContentfulPost | null = null;
  
  try {
    post = await fetchPostBySlug(slug);
  } catch (error) {
    console.error('Error fetching post:', error);
  }
  
  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto min-h-screen max-w-4xl p-8">
      {/* Navigation */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          ← Back to posts
        </Link>
      </div>

      {/* Post Header */}
      <header className="mb-12">
        {post.fields.featuredImage && (
          <div className="mb-8">
            <img
              src={`https:${post.fields.featuredImage.fields.file.url}`}
              alt={post.fields.featuredImage.fields.title || post.fields.title}
              className="w-full aspect-video rounded-xl object-cover border border-purple-500/20"
            />
          </div>
        )}
        
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            {post.fields.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <span>By {post.fields.author}</span>
            <span>•</span>
            <time dateTime={post.fields.publishedAt}>
              {new Date(post.fields.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.fields.readTime && (
              <>
                <span>•</span>
                <span>{post.fields.readTime}</span>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Post Content */}
      <div className="bg-slate-800/30 backdrop-blur border border-purple-500/20 rounded-xl p-8">
        <div className="prose prose-invert prose-purple max-w-none">
          {post.fields.excerpt && (
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-medium">
              {post.fields.excerpt}
            </p>
          )}
          
          {/* Rich text content would be rendered here */}
          <div className="text-gray-300 leading-relaxed">
            {/* For now, showing excerpt as content since we need to implement Contentful rich text rendering */}
            <p>Content from Contentful will be rendered here once rich text rendering is implemented.</p>
            <p>This post is about: {post.fields.excerpt}</p>
          </div>
          
          {/* Tags */}
          {post.fields.tags && post.fields.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-purple-500/20">
              <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.fields.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Post Footer */}
      <footer className="mt-12 pt-8 border-t border-purple-500/20">
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            ← Back to All Posts
          </Link>
        </div>
      </footer>
    </article>
  );
}