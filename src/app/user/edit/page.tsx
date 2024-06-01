import { redirect } from 'next/navigation';
import { Suspense } from 'react';

import Header from '@/components/Header';
import { LoadingWrapper } from '@/components/login/LoginTokenWrapper';
import UserEditForm from '@/components/UserEditForm';
import { getUser } from '@/features/user/api/server';
import { ClientSideStateManager } from '@/shared/store/user/ClientSideStateManager';

async function UserEditPage() {
  const response = await getUser();
  const { data, msg } = response;

  console.log('edit', response);
  if (!data) {
    window.alert(`로그인을 다시 시도해 주세요. ${msg}`);
    redirect('/');
  }

  return (
    <Suspense fallback={<LoadingWrapper />}>
      <ClientSideStateManager state={data} />
      <Header />
      {data && <UserEditForm user={data} />}
    </Suspense>
  );
}

export default UserEditPage;
