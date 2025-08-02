'use client'

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'qgn02sj5',
  dataset: 'production',
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

// Test queries for debugging
export const testQueries = {
  // Check if any documents exist
  allDocuments: `*[defined(_id)] | order(_createdAt desc) [0...10] {
    _id,
    _type,
    _createdAt
  }`,
  
  // Check document types
  documentTypes: `array::unique(*[]._type)`,
  
  // Count documents by type
  documentCounts: `{
    "newsArticles": count(*[_type == "newsArticle"]),
    "communityPosts": count(*[_type == "communityPost"]),
    "teamMembers": count(*[_type == "teamMember"]),
    "authors": count(*[_type == "author"]),
    "communityMembers": count(*[_type == "communityMember"])
  }`
}