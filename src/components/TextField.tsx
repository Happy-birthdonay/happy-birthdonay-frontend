import { forwardRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  textarea {
    width: 100%;
    height: 100%;
    min-height: 100px;
    padding: 15px 20px;
    background-color: ${({ theme }) => theme.colors.main.white};
    border: 1px solid red;
    border-radius: 10px;
    resize: none;
    //scroll bar delete
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

type TextFieldProps = NonNullable<unknown> & React.InputHTMLAttributes<HTMLTextAreaElement>;
function TextField(props: TextFieldProps, ref: React.Ref<HTMLTextAreaElement>) {
  const { ...rest } = props;

  return (
    <Wrapper>
      <textarea ref={ref} type="text" {...rest} />
    </Wrapper>
  );
}

export default forwardRef(TextField);
