'use client';

import { useEffect } from 'react';

import { User } from '@/shared/types/user';
import { useUserActions } from './userStore';

type UserClientSideStateManagerProps = {
  state: User;
};
function UserClientSideStateManager(props: UserClientSideStateManagerProps) {
  const { state } = props;

  const { setUser } = useUserActions();

  useEffect(() => {
    setUser(state);
  });

  return <></>;
}

export default UserClientSideStateManager;
