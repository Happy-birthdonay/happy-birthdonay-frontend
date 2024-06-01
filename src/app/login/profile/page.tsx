'use server';

import { redirect } from 'next/navigation';
import { Suspense } from 'react';

import LoginForm from '@/components/login/LoginForm';
import LoginTokenWrapper, { LoadingWrapper } from '@/components/login/LoginTokenWrapper';
import { getUser } from '@/features/user/api/server';

export default async function Home() {
  const response = await getUser();
  const { data } = response;

  if (data) {
    redirect('/box');
  }
  return (
    <Suspense fallback={<LoadingWrapper />}>
      <LoginTokenWrapper>
        <LoginForm />
      </LoginTokenWrapper>
    </Suspense>
  );
}
