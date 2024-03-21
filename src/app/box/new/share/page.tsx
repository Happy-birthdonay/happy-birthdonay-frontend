'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import Button from '@/components/Button';
import Gift from '@/components/Gift';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 15px;
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 23px;
  align-items: center;

  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;
function SharePage() {
  const router = useRouter();

  const onClick = () => {
    console.log('다음');
    router.push('/box/new/step2');
  };

  // url 에 해당하는 기부 상자 id 로 API 요청해서 상자 데이터를 가져와야함.
  return (
    <Wrapper>
      <Container>
        <h3>기부 상자가 완성 됐어요!</h3>
        <Gift color={'red'} />
      </Container>
      <Button onClick={onClick} $buttonType="primary">
        공유하기
      </Button>
    </Wrapper>
  );
}

export default SharePage;
