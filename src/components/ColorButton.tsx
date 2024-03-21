import { MouseEventHandler } from 'react';
import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.button<{ color: string; $unSelected: boolean }>`
  width: fit-content;
  padding: 15px 30px;
  background-color: ${({ theme, color, $unSelected }) =>
    $unSelected ? theme.colors.main.grey : theme.colors.button[color]};
  height: 50px;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.main.white};

  ${getTypographyStyles('Body2_B')}
`;

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color: string;
  children: React.ReactNode;
  $unSelected: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function ColorButton(props: ButtonProps) {
  const { children, $unSelected = false, ...rest } = props;
  //선택되지 않은 props

  return (
    <Wrapper $unSelected={$unSelected} {...rest}>
      {children}
    </Wrapper>
  );
}

export default ColorButton;
