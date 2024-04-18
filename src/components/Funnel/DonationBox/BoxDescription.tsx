'use client';

import { MouseEventHandler } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
// import FixedBottomCTA from '@/components/FixedBottomCTA';
import TextField from '@/components/TextField';
import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  height: 100%;
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

type BoxDescriptionProps = {
  register: UseFormRegister<FieldValues>;
  onNext: MouseEventHandler<HTMLButtonElement>;
};

function BoxDescription(props: BoxDescriptionProps) {
  const { register, onNext } = props;

  return (
    <Wrapper>
      <div>
        <Container>
          <p>친구에게 보여줄 대표 메시지를 적어보세요</p>
          <TextField {...register('boxDescription')} />
        </Container>
        {/* <FixedBottomCTA> */}
        <Button onClick={onNext} $buttonType="primary">
          저장하기
        </Button>
        {/* </FixedBottomCTA> */}
      </div>
    </Wrapper>
  );
}

export default BoxDescription;
