import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About NOIR Gaming Community',
  description: 'Learn about the NOIR Gaming Community\'s mission, values, what we offer, and why you should join our passionate gaming family.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}