'use client';

import styled from 'styled-components';

import Button from '@/components/Button';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  width: 95%;
  padding: 25px;
`;

type MessageListProps = {
  boxId: number;
  children: React.ReactNode;
};

function MessageList(props: MessageListProps) {
  const { children } = props;

  return (
    <Wrapper>
      <h3>[그린피스]</h3>
      <Container>{children}</Container>
      <p>
        메시지를 남겨준 사람들이 담긴 <br /> 나만의 기부 증서를 만들어 공유해 보세요!
      </p>

      <Button>기부 증서 만들기</Button>
    </Wrapper>
  );
}

export default MessageList;
