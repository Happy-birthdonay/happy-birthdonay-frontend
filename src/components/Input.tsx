import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;

  label {
    ${getTypographyStyles('Body2_M')}
    margin-bottom:15px;
  }
`;
const InputContainer = styled.input<{ $isError: boolean }>`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme, $isError }) => ($isError ? theme.colors.main.red : theme.colors.main.black)};
  height: 34px;
  margin-bottom: 2px;

  ${getTypographyStyles('Body1_B')}

  &::placeholder {
    color: '#DCDCDC';
    opacity: 0.3;
  }
`;

const Span = styled.span`
  position: absolute;
  right: 20px;
  top: 40px;
  ${getTypographyStyles('Body1_B')};
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomText = styled.p<{ $isError?: boolean }>`
  color: ${({ theme, $isError }) => ($isError ? theme.colors.main.red : theme.colors.main.grey)};
  ${getTypographyStyles('Caption2_M')};
`;

const LengthText = styled.p<{ $isError?: boolean }>`
  ${getTypographyStyles('Caption2_M')};
  color: ${({ theme, $isError }) => ($isError ? theme.colors.main.red : theme.colors.main.grey)};
`;

type InputProps = {
  label: string;
  bottomText?: string;
  length?: number;
  maxLength?: number;
  $isError?: boolean;
  unit?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { placeholder, bottomText, length, maxLength, $isError = false, unit, ...rest } = props;

  return (
    <Wrapper>
      <label>{props.label}</label>
      <InputContainer ref={ref} placeholder={placeholder} $isError={$isError} {...rest} />
      {unit ? <Span>{unit}</Span> : null}
      <TextContainer>
        <BottomText $isError={$isError}>{bottomText ? bottomText : null}</BottomText>
        <LengthText $isError={$isError}>{maxLength ? `${length}/${props.maxLength}` : null}</LengthText>
      </TextContainer>
    </Wrapper>
  );
}

export default forwardRef(Input);
