'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { postOauthToken } from '@/api/oauth';
import { signUp } from '@/api/user/client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useUser, useUserActions } from '@/store/user/userStore';
import { getTypographyStyles } from '@/styles/fonts';
import { User } from '@/types/user';

const Wrapper = styled.div`
  height: 100%;
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

const birthdayPattern = /^(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;

export default function LoginForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const { setUser } = useUserActions();
  const user = useUser();
  const { control, register, handleSubmit, reset, formState } = useForm<User>();

  useEffect(() => {
    const getToken = async () => {
      try {
        const url = new URL(window.location.href);
        const code = url.searchParams.get('code');

        const { result, message, data } = await postOauthToken(code);
        if (message === 'Succeeded Kakao Login: User already exists') {
          router.replace('/box');
        }
        if (result === 'succeed') {
          setUser(data);
          reset({ name: data.name, birthday: data.birthday });
        }
        setLoading(false);
      } catch (e) {}
    };
    getToken();
  }, []);

  const onSignUp = async (data: User) => {
    console.log('formState', formState);
    try {
      const response = await signUp(data);
      if (response.result === 'succeed') {
        router.push(`/box/new/funnel`);
      } else {
        alert(response.msg);
      }
    } catch (e) {}
  };

  if (loading) {
    return <div>loading....</div>;
  }
  console.log('error', formState.errors);
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
                isError={!!formState.errors.name}
                maxLength={10}
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
                isError={!!formState.errors.birthday}
              />
            )}
          />
        </Container>

        <Button $buttonType="primary" onSubmit={handleSubmit(onSignUp)}>
          다음
        </Button>
      </form>
    </Wrapper>
  );
}
