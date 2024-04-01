// /middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  // Store current request url in a custom header, which you can read later
  const accessToken = request.cookies.get('access_token');
  if (accessToken) requestHeaders.set('Authorization', `Bearer ${accessToken.value}`);

  requestHeaders.set('x-url', request.url);

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    },
  });
}
