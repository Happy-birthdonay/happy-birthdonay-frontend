'use client';

import { useStateMachine } from 'little-state-machine';
import { FieldValues, useForm } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@/components/Button';
import Chips from '@/components/Chips';
import Gift from '@/components/GiftBox';
import Input from '@/components/Input';
import { getTypographyStyles } from '@/styles/fonts';
import myTheme from '@/styles/theme';
import updateAction from './updateAction';

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
  onNext: () => void;
};

function BoxDetail(props: BoxDetailProps) {
  const { onNext } = props;

  const { register, handleSubmit, setValue, formState, watch } = useForm();
  const { actions } = useStateMachine({ updateAction });

  const onSubmit = (data: FieldValues) => {
    actions.updateAction(data);
    onNext();
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Input
            label="기부 상자 이름을 적어주세요."
            placeholder="상자 이름"
            bottomText={formState.errors.boxTitle?.message as string}
            $isError={!!formState.errors.boxTitle}
            {...register('boxTitle', {
              required: { value: true, message: '상자 이름을 입력해주세요.' },
            })}
          />
          <ColorContainer>
            <Text>원하는 색을 골라주세요.</Text>
            <Chips
              chips={ColorChips}
              onSelect={(chip) => {
                setValue('color', chip.key);
              }}
            />
          </ColorContainer>
          <Gift $width="243px">
            <Gift.Box color={watch('color', { required: { value: true, message: '원하는 색상을 골라 주세요' } })} />
          </Gift>
        </Container>

        <Button type="submit" $buttonType="primary">
          다음
        </Button>
      </form>
    </Wrapper>
  );
}

export default BoxDetail;
