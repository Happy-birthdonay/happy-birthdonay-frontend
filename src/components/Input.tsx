import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;

  label {
    ${getTypographyStyles('Body2_M')}
  }
`;
const InputContainer = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.main.black};
  height: 34px;

  ${getTypographyStyles('Body1_B')}

  &::placeholder {
    color: '#DCDCDC';
    opacity: 0.3;
  }
`;

type InputProps = {
  placeholder?: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { placeholder, ...rest } = props;

  return (
    <Wrapper>
      <label>{props.label}</label>
      <InputContainer ref={ref} placeholder={placeholder} {...rest} />
    </Wrapper>
  );
}
export default forwardRef(Input);
