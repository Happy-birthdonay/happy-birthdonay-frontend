// /middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const accessToken = request.cookies.get('access_token');
  console.log('middleware accessToken', accessToken);
  if (accessToken) requestHeaders.set('Authorization', `Bearer ${accessToken.value}`);

  requestHeaders.set('x-url', request.url);

  console.log('requestHeaders', requestHeaders);
  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    },
  });
}
