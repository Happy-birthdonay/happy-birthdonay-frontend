'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import { postOauthToken } from '@/features/oauth/api/client';
import { useUserActions } from '@/shared/store/user/userStore';
import { LoadingSpinner } from '../LoadingSpinner';

// import LoginForm from './LoginForm';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
`;

export function LoadingWrapper() {
  return (
    <SpinnerContainer>
      <LoadingSpinner />
    </SpinnerContainer>
  );
}
function LoginTokenWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { setUser } = useUserActions();

  const [getTokenIsLoading, setGetTokenIsLoading] = useState(true);

  const getToken = useCallback(async () => {
    try {
      const url = new URL(window.location.href);
      const code = url.searchParams.get('code');

      const response = await postOauthToken(code);
      const { result, message, data } = response;

      if (message === 'Succeeded Kakao Login: User already exists') {
        router.replace('/box');
      } else {
        if (result === 'succeed' && data) {
          setUser(data);
        } else {
          window.alert(message);
          router.push('/');
        }
        setGetTokenIsLoading(false);
      }
    } catch (e) {
      console.error(e);
      setGetTokenIsLoading(false);
    }
  }, [setUser]);

  useLayoutEffect(() => {
    getToken();
  }, []);

  return (
    <>
      {getTokenIsLoading ? (
        <SpinnerContainer>
          <LoadingSpinner />
        </SpinnerContainer>
      ) : (
        children
      )}
    </>
  );
}

export default LoginTokenWrapper;
