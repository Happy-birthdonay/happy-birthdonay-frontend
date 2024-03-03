import { MouseEventHandler, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button<{ type: ButtonProps['type'] }>`
  width: 100%;
  padding: 20px 20px;
  border-radius: 15px;
  text-align: center;
  background-color: ${({ type, theme }) => (type === 'primary' ? theme.colors.main.red : theme.colors.main.white)};
  color: ${({ type, theme }) => (type === 'primary' ? theme.colors.main.white : theme.colors.main.black)};
  border: ${({ type, theme }) => (type === 'primary' ? 'none' : `1px solid ${theme.colors.main.red}`)};
  font-weight: bold;
`;

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'primary' | 'secondary';
} & PropsWithChildren;

function Button(props: ButtonProps) {
  const { type = 'primary', onClick, children } = props;
  return (
    <Wrapper onClick={onClick} type={type}>
      {children}
    </Wrapper>
  );
}

export default Button;
