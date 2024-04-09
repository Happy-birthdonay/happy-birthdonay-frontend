// /middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const accessToken = request.cookies.get('access_token')?.value ?? '';
  requestHeaders.set('Authorization', `Bearer ${accessToken}`);

  requestHeaders.set('x-url', request.url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
