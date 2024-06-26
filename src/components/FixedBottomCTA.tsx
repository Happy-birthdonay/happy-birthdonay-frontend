import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { GlobalPortal } from '../GlobalPortal';

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
`;

const Container = styled.div`
  padding: 0 20px 40px;
`;
function FixedBottomCTA(props: PropsWithChildren) {
  return (
    <GlobalPortal.Consumer>
      <Wrapper>
        <Container>{props.children}</Container>
      </Wrapper>
    </GlobalPortal.Consumer>
  );
}

export default FixedBottomCTA;
