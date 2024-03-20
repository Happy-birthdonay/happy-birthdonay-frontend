'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import Gift from '@/components/Gift';
import Input from '@/components/Input';
import TextField from '@/components/TextField';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  height: 100%;

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
  p {
    ${getTypographyStyles('Body2_M')}
  }
`;
function ContentPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('data', data);
  };

  const onClick = () => {
    console.log('다음');
    router.push('/box/new/share');
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <p>친구에게 보여줄 대표 메시지를 적어보세요</p>
          <TextField {...register('message')} />
        </Container>

        <Button onClick={onClick} $buttonType="primary">
          저장하기
        </Button>
      </form>
    </Wrapper>
  );
}

export default ContentPage;
