'use server';

import { type RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

import LoginForm from '@/components/\blogin/LoginForm';

async function getUserInfo(accessToken: RequestCookie) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken.value}`,
    },
  });
  return response;
}
export default async function Home() {
  const cookie = cookies();
  const accessToken = cookie.get('access_token');
  const refreshToken = cookie.get('refresh_token');

  return <LoginForm />;
}
