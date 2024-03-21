'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValue, FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import ColorButton from '@/components/ColorButton';
import Gift from '@/components/GiftBox';
import Input from '@/components/Input';
import { getTypographyStyles } from '@/styles/fonts';
import { type BoxColor } from '@/types/donationBox';

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

const ChipContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 9px 6px;
  grid-template-columns: fit-content(100px) fit-content(100px) fit-content(100px);
  justify-content: center;
  button {
    justify-self: center;
  }
`;

const Text = styled.p`
  ${getTypographyStyles('Body2_M')}
`;

const ColorChip = [
  { color: 'blue', label: 'Blue' },
  { color: 'orange', label: 'Orange' },
  { color: 'green', label: 'Green' },
  { color: 'yellow', label: 'Yellow' },
  { color: 'pink', label: 'Pink' },
  { color: 'violet', label: 'Violet' },
] as const;

type BoxDetailProps = {
  register: UseFormRegister<FieldValues>;
  onNext: (data: FieldValues) => void;
};

function BoxDetail(props: BoxDetailProps) {
  const { register, onNext } = props;
  const [color, setColor] = useState('none');

  const selectColor = (color: string) => {
    console.log('color', color);
    setColor(color);
    register('color', { value: color });
  };

  return (
    <Wrapper>
      <div>
        <Container>
          <Input label="기부 상자 이름을 적어주세요." placeholder="상자 이름" {...register('boxTitle')} />
          <ColorContainer>
            <Text>원하는 색을 골라주세요.</Text>
            <ChipContainer>
              {ColorChip.map((chip) => (
                <ColorButton
                  key={chip.color}
                  color={chip.color}
                  $unSelected={color !== 'none' && color !== chip.color}
                  onClick={() => selectColor(chip.color)}
                >
                  {chip.label}
                </ColorButton>
              ))}
            </ChipContainer>
          </ColorContainer>
          <Gift>
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
