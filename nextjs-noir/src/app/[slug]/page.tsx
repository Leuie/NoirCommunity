import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  
  if (!post) {
    return (
      <div className="container mx-auto min-h-screen max-w-3xl p-8">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The post you're looking for doesn't exist.</p>
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            ← Back to Posts
          </Link>
        </div>
      </div>
    );
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(800).height(400).url()
    : null;

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
        {postImageUrl && (
          <div className="mb-8">
            <img
              src={postImageUrl}
              alt={post.title}
              className="w-full aspect-video rounded-xl object-cover border border-purple-500/20"
              width="800"
              height="400"
            />
          </div>
        )}
        
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <time dateTime={post.publishedAt}>
              Published: {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>
      </header>

      {/* Post Content */}
      <div className="bg-slate-800/30 backdrop-blur border border-purple-500/20 rounded-xl p-8">
        <div className="prose prose-invert prose-purple max-w-none">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
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