import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/admin/login') {
    return NextResponse.next()
  }
  const session = req.cookies.get('admin_session')
  if (!session?.value || session.value !== process.env.ADMIN_PASSWORD) {
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }
  return NextResponse.next()
}

export const config = { matcher: ['/admin/:path*'] }
