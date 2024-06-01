/* Client side component */
'use client';

import { useEffect } from 'react';

import { useUserActions } from './userStore';

export function ClientSideStateManager({ state }: any) {
  const { setUser } = useUserActions();

  useEffect(() => {
    setUser(state);
    console.log('setUser', state);
  }, [setUser, state]);

  return <></>;
}
