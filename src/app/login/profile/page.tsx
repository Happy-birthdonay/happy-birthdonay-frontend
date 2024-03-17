'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import instance from '@/api';
import Button from '@/components/Button';
import Input from '@/components/Input';
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

export default function Home() {
  // const code = window.location.search;
  const code = typeof window !== 'undefined' ? new URL(window.location.toString()).searchParams.get('code') : null;
  const router = useRouter();
  console.log('code', code);
  const { register, handleSubmit } = useForm<User>();

  useEffect(() => {
    //인가 코드를 받아서 토큰을 받아야함
    const handleLogin = async () => {
      if (code) {
        const response = await instance.post('/api/oauth/token', {
          code,
        });
        console.log('response', response);
      }
    };
    handleLogin();
  }, []);

  const onSubmit = (data: User) => {
    console.log(data);
    router.push('/box/new');
  };
  return (
    <Wrapper>
      <form onClick={handleSubmit(onSubmit)}>
        <Container>
          <h3>Account </h3>

          <Input label="닉네임을 만들어주세요" placeholder="닉네임" {...register('nickname')} />
          <Input label="생년월일을 입력하세요" placeholder="YYYY.MM.DD" {...register('birthday')} />
        </Container>

        <Button $buttonType="primary">다음</Button>
      </form>
    </Wrapper>
  );
}
