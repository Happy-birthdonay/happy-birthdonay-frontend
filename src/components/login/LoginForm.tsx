'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { postOauthToken } from '@/api/oauth';
import { signUp } from '@/api/user';
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

export default function LoginForm() {
  const router = useRouter();

  const { setUser } = useUserActions();
  const user = useUser();
  const { register, handleSubmit, reset } = useForm<User>();

  useEffect(() => {
    const getToken = async () => {
      try {
        const url = new URL(window.location.href);
        const code = url.searchParams.get('code');

        const { result, data } = await postOauthToken(code);
        if (result === 'succeed') {
          setUser(data);
          reset({ name: data.name, birthday: data.birthday });
        }
      } catch (e) {}
    };
    getToken();
  }, []);

  const onSignUp = async (data: User) => {
    try {
      const response = await signUp(data);
      console.log('response', response);
      if (response.result === 'succeed') {
        const { data } = response;
        console.log('data', data);
        router.push(`/box/new/funnel`);
      } else {
        alert(response.statusText);
      }
    } catch (e) {}
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSignUp)}>
        <Container>
          <h3>Account </h3>

          <Input label="닉네임을 만들어주세요" placeholder="닉네임" defaultValue={user.name} {...register('name')} />
          <Input label="생일을 입력하세요" placeholder="MM.DD" defaultValue={user.birthday} {...register('birthday')} />
        </Container>

        <Button $buttonType="primary" onSubmit={handleSubmit(onSignUp)}>
          다음
        </Button>
      </form>
    </Wrapper>
  );
}