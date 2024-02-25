'use client';

import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: block;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  border: 1px solid #e7e7e7;
  max-width: 480px;
  min-height: 100vh;
  flex: 1;
`;

type LayoutProps = NonNullable<unknown>;

function Layout(props: PropsWithChildren<LayoutProps>) {
  const { children } = props;
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

export default Layout;
