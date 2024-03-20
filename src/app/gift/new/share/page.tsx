'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import Gift from '@/components/Gift';
import Input from '@/components/Input';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;
function ContentPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  const onClick = () => {
    console.log('다음');
    router.push('/box/new/step2');
  };

  // url 에 해당하는 기부 상자 id 로 API 요청해서 상자 데이터를 가져와야함.
  return (
    <Wrapper>
      <h3>기부 상자가 완성 됐어요!</h3>
      <Container>
        <Gift color={'red'} />
      </Container>
      <Button onClick={onClick} $buttonType="primary">
        공유하기
      </Button>
    </Wrapper>
  );
}

export default ContentPage;
