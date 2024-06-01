'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { postOauthToken } from '@/features/oauth/api/client';
import { signUp } from '@/features/user/api/client';
import { useUser, useUserActions } from '@/shared/store/user/userStore';
import { User } from '@/shared/types/user';
import { getTypographyStyles } from '@/styles/fonts';
import { LoadingSpinner } from '../LoadingSpinner';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;

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

const birthdayPattern = /^(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;

export default function LoginForm() {
  const router = useRouter();

  const [getTokenIsLoading, setGetTokenIsLoading] = useState(true);
  const [signUpIsLoading, setSignUpIsLoading] = useState(false);

  const { setUser } = useUserActions();
  const user = useUser();
  const { control, register, handleSubmit, reset, formState } = useForm<User>();

  const getToken = useCallback(async () => {
    try {
      const url = new URL(window.location.href);
      const code = url.searchParams.get('code');

      const response = await postOauthToken(code);
      const { result, message, data } = response;
      if (message === 'Succeeded Kakao Login: User already exists') {
        router.replace('/box');
      }

      if (result === 'succeed' && data) {
        setUser(data);
        reset({ name: data.name, birthday: data.birthday });
      } else {
        window.alert(message);
        router.push('/');
      }
    } catch (e) {
    } finally {
      setGetTokenIsLoading(false);
    }
  }, [reset, router, setUser]);

  useEffect(() => {
    getToken();
  }, []);

  const onSignUp = async (data: User) => {
    try {
      setSignUpIsLoading(true);
      const response = await signUp(data);
      setSignUpIsLoading(false);
      if (response.result === 'succeed') {
        router.push(`/box/new/funnel`);
      } else {
        alert(response.msg);
      }
    } catch (e) {}
  };

  if (getTokenIsLoading || !user) {
    return (
      <SpinnerContainer>
        <LoadingSpinner />
      </SpinnerContainer>
    );
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSignUp)}>
        <Container>
          <h3>Account </h3>

          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                {...register('name', {
                  required: true,
                  maxLength: 10,
                })}
                label="닉네임을 만들어주세요"
                placeholder="닉네임"
                defaultValue={user.name}
                length={value?.length ?? 0}
                $isError={!!formState.errors.name}
                maxLength={20}
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
              />
            )}
          />
          <Controller
            name="birthday"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                {...register('birthday', {
                  required: true,
                  pattern: {
                    value: birthdayPattern,
                    message: '생일을 입력해주세요 ex) 0101',
                  },
                })}
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                label="생일을 입력하세요"
                placeholder="MMDD"
                defaultValue={user.birthday}
                bottomText={formState.errors.birthday?.message}
                $isError={!!formState.errors.birthday}
              />
            )}
          />
        </Container>

        <Button isLoading={signUpIsLoading} $buttonType="primary" onSubmit={handleSubmit(onSignUp)}>
          다음
        </Button>
      </form>
    </Wrapper>
  );
}
