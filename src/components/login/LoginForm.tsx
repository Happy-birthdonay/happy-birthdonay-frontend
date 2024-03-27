'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { postOauthToken } from '@/api/oauth';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useUser, useUserActions } from '@/store/userStore';
import { getTypographyStyles } from '@/styles/fonts';
import ApiResponse from '@/types/api-response';
import { User } from '@/types/user';
import getCookie from '@/utils/getCookie';

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
  const code = typeof window !== 'undefined' ? new URL(window.location.toString()).searchParams.get('code') : null;
  const router = useRouter();

  const user = useUser();
  const { setUser } = useUserActions();
  const { register, handleSubmit, reset } = useForm<User>();

  useEffect(() => {
    //인가 코드를 받아서 토큰을 받아야함
    console.log('user', user);
    const handOverCode = async () => {
      if (code && user.name === undefined && user.birthday === undefined) {
        const { data } = await postOauthToken<ApiResponse.ResponseAuthTokenData>(code);
        //DateTime 을 YYMMDD로 변환

        setUser(data);
        reset({ name: data.name, birthday: data.birthday });
      }
    };
    handOverCode();
  }, []);

  const onSignUp = async (data: User) => {
    console.log('onSignUp data', data);
    const accessToken = getCookie('access_token');
    const response = await fetch('/api/sign-up', {
      method: 'PATCH',
      body: JSON.stringify({ name: data.name, birthday: data.birthday }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('response', response);
    router.push('/box/new');
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
