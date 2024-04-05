import styled from 'styled-components';

import { getTypographyStyles } from '@/styles/fonts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  h3 {
    ${getTypographyStyles('Headline3_B')}
  }
`;

function MessageButton() {
  return (
    <Wrapper>
      <p>박민주</p>
      <p>생일 축하해~!!</p>
    </Wrapper>
  );
}

export default MessageButton;
