'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import LoginForm from '@/components/login/LoginForm';

export default async function Home() {
  console.log('cookies()', cookies());
  if (cookies().get('access_token')?.value) {
    redirect('/box');
  }
  return (
    <>
      <LoginForm />
    </>
  );
}
