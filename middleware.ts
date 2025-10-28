import { NextRequest, NextResponse } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Create a Supabase client that can read the auth cookie in middleware
  const supabase = createMiddlewareClient({ req, res })

  const { data: { user }, error } = await supabase.auth.getUser()

  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin')
  const isSignIn = req.nextUrl.pathname === '/admin/sign-in'

  if (isAdminRoute && !isSignIn && (!user || error)) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/admin/sign-in'
    redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

export const config = {
  matcher: ['/admin/:path*']
}


