import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/box/new/funnel'];

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const accessToken = request.cookies.get('access_token')?.value;

  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  requestHeaders.set('Authorization', `Bearer ${accessToken}`);
  requestHeaders.set('x-url', request.url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
