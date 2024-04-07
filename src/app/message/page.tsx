'use client';

import styled from 'styled-components';

import Button from '@/components/Button';
import MessageButton from '@/components/GiftBox/MessageButton';
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
const messageTag = [
  {
    messageId: 1,
    tag: 'love',
    contents: '사랑합니다.사랑합니다.사랑합니다.사랑합니다.사랑합니다.사랑합니다.사랑합니다.사랑합니다.사랑합니다.',
    createdBy: '오이선경',
  },
  {
    messageId: 2,

    tag: 'happiness',
    contents: '행복한 삶을 사는 당신을 응원 합니다. 해피니스 콘텐츠',
    createdBy: '선경',
  },
] as const;

function CompleteBox() {
  return (
    <Wrapper>
      <h3>[그린피스]</h3>
      <Container>
        {messageTag.map((message) => (
          <MessageButton
            key={message.messageId}
            messageId={message.messageId}
            tag={message.tag}
            contents={message.contents}
            createdBy={message.createdBy}
          />
        ))}
      </Container>
      <p>
        메시지를 남겨준 사람들이 담긴 <br /> 나만의 기부 증서를 만들어 공유해 보세요!
      </p>

      <Button>기부 증서 만들기</Button>
    </Wrapper>
  );
}

export default CompleteBox;
