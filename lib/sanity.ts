import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const newsQuery = `*[_type == "newsArticle"] | order(publishedAt desc) {
  _id,
  title,
  excerpt,
  slug,
  mainImage,
  publishedAt,
  author->{
    name,
    image
  },
  category,
  readTime
}`

export const communityPostsQuery = `*[_type == "communityPost"] | order(_createdAt desc) {
  _id,
  content,
  author->{
    name,
    avatar,
    badge
  },
  _createdAt,
  likes,
  comments,
  tags
}`

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  description,
  image,
  order
}`