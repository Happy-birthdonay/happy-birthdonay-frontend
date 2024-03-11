'use client';

import { useEffect } from 'react';
import styled from 'styled-components';

import Input from '@/components/Input';

const Wrapper = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
  }
`;

export default function Home() {
  const code = window.location.search;
  console.log('code', code);

  useEffect(() => {
    //인가 코드를 받아서 토큰을 받아야함
  }, []);

  return (
    <Wrapper>
      <h3>Account </h3>
      <Input />
    </Wrapper>
  );
}
