'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import Input from '@/components/Input';
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
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;
function ContentPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  const onClick = () => {
    console.log('다음');
    router.push('name');
  };
  return (
    <Wrapper>
      <form onClick={handleSubmit(onSubmit)}>
        <Container>
          <Input label="어디에 기부할까요?" placeholder="기부처 이름" {...register('donation')} />
          <Input label="링크를 넣어주세요" placeholder="기부처 링크" {...register('birthday')} />
          <Input label="기부할 금액을 알려주세요" placeholder="기부할 금액" {...register('birthday')} />
        </Container>

        <Button onClick={onClick} $buttonType="primary">
          다음
        </Button>
      </form>
    </Wrapper>
  );
}

export default ContentPage;
