'use client';

import { useEffect } from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  const code = window.location.search;
  console.log('code', code);

  useEffect(() => {
    //인가 코드를 받아서 토큰을 받아야함
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('e', e);
  };
  return (
    <Wrapper>
      <form onClick={onSubmit}>
        <Container>
          <h3>Account </h3>

          <Input label="닉네임을 만들어주세요" placeholder="닉네임" />
          <Input label="생년월일을 입력하세요" placeholder="YYYY.MM.DD" />
        </Container>

        <Button buttonType="primary">다음</Button>
      </form>
    </Wrapper>
  );
}
