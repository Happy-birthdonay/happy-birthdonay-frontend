'use server';

import { redirect } from 'next/navigation';

import LoginHome from '@/components/login/LoginHome';
import { getUser } from '@/features/user/api/server';

export default async function Home() {
  const response = await getUser();
  const { data } = response;

  if (data) {
    redirect('/box');
  }
  return <LoginHome />;
}
