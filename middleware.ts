import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export function middleware(request: NextRequest) {
  // Handle auth callback route
  if (request.nextUrl.pathname === '/auth/callback') {
    return NextResponse.next()
  }

  // For static export compatibility, don't run auth middleware on other routes
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/auth/callback',
  ],
}