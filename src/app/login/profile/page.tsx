'use server';

import { redirect } from 'next/navigation';

import LoginForm from '@/components/login/LoginForm';
import { getUser } from '@/features/user/api/server';

export default async function Home() {
  const user = await getUser();
  if (user) {
    redirect('/box');
  }
  return (
    <>
      <LoginForm />
    </>
  );
}
