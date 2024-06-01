/* Client side component */
'use client';

import { useEffect } from 'react';

import { useUser, useUserActions } from './userStore';

import type { User } from '@/shared/types/user';

export function ClientSideStateManager({ state }: { state: Partial<User> }) {
  const { setUser } = useUserActions();
  const prevState = useUser();
  useEffect(() => {
    setUser({ ...prevState, ...state });
  }, [setUser, state]);

  return <></>;
}
