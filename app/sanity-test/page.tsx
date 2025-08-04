import { redirect } from 'next/navigation'

export default function ContentfulTestPage() {
  // Redirect to home since this page is no longer needed
  redirect('/')
}