'use server';

import LoginForm from '@/components/login/LoginForm';

export default async function Home() {
  return (
    <>
      <LoginForm />
    </>
  );
}
