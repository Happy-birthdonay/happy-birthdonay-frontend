'use server';

import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { getUser } from '@/features/user/api/server';

async function layout(props: PropsWithChildren) {
  const { children } = props;

  const user = await getUser();
  if (user.msg === 'Token has expired') {
    redirect('/');
  }
  return <>{children}</>;
}

export default layout;
