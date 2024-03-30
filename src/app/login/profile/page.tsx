'use server';

import { headers } from 'next/headers';

import { postOauthToken } from '@/api/oauth';
import LoginForm from '@/components/login/LoginForm';
import UserClientSideStateManager from '@/store/user/UserClientSideStateManager';

export default async function Home() {
  const headersList = headers();
  const headerUrl = headersList.get('x-url') || '';

  const url = new URL(headerUrl);
  const code = url.searchParams.get('code');

  console.log('code', code);
  const response = await postOauthToken(code);
  console.log('response', response.data);

  return (
    <>
      <UserClientSideStateManager state={response.data} />
      <LoginForm />
    </>
  );
}
