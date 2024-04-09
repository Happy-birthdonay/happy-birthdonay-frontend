'use client';

import { MouseEventHandler } from 'react';
import { FieldValues, useFormContext, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import Chips from '@/components/Chips';
import Gift from '@/components/GiftBox';
import Input from '@/components/Input';
import { getTypographyStyles } from '@/styles/fonts';
import myTheme from '@/styles/theme';

const Wrapper = styled.div`
  height: 100%;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15px;
  margin-bottom: 30px;
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Text = styled.p`
  ${getTypographyStyles('Body2_M')}
`;

const ColorChips = [
  { key: 'blue', color: myTheme.colors.button['blue'], children: 'Blue' },
  { key: 'orange', color: myTheme.colors.button['orange'], children: 'Orange' },
  { key: 'green', color: myTheme.colors.button['green'], children: 'Green' },
  { key: 'yellow', color: myTheme.colors.button['yellow'], children: 'Yellow' },
  { key: 'pink', color: myTheme.colors.button['pink'], children: 'Pink' },
  { key: 'violet', color: myTheme.colors.button['violet'], children: 'Violet' },
];

type BoxDetailProps = {
  register: UseFormRegister<FieldValues>;
  onNext: MouseEventHandler<HTMLButtonElement>;
};

function BoxDetail(props: BoxDetailProps) {
  const { register, onNext } = props;

  const { setValue, watch } = useFormContext();
  const color = watch('color');

  return (
    <Wrapper>
      <div>
        <Container>
          <Input label="기부 상자 이름을 적어주세요." placeholder="상자 이름" {...register('boxTitle')} />
          <ColorContainer>
            <Text>원하는 색을 골라주세요.</Text>
            <Chips
              chips={ColorChips}
              onSelect={(chip) => {
                console.log('chip', chip);
                setValue('color', chip.key);
              }}
            />
          </ColorContainer>
          <Gift $width="243px">
            <Gift.Box color={color} />
          </Gift>
        </Container>

        <Button onClick={onNext} $buttonType="primary">
          다음
        </Button>
      </div>
    </Wrapper>
  );
}

export default BoxDetail;
