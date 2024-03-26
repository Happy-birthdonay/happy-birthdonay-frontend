import { MouseEventHandler } from 'react';
import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.button<{ $chipColor: string; $unSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  width: fit-content;
  padding: 15px 30px;
  background-color: ${({ theme, $chipColor, $unSelected }) => ($unSelected ? theme.colors.main.grey : $chipColor)};
  height: 50px;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.main.white};

  ${getTypographyStyles('Body2_B')}
`;

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  $chipColor: string;
  $unSelected?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function ColorButton(props: ButtonProps) {
  const { children, $unSelected = false, $chipColor, ...rest } = props;
  //선택되지 않은 props

  return (
    <Wrapper $unSelected={$unSelected} $chipColor={$chipColor} {...rest}>
      {children}
    </Wrapper>
  );
}

export default ColorButton;
