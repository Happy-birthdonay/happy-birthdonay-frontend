'use client';

import { PropsWithChildren } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalPortal } from '@/GlobalPortal';
import myTheme from '@/styles/theme';

const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  flex: 1;
  width: 100vw;
  max-width: 392px;
  height: 100%;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.main.grey};

  & > main {
    height: 100%;
  }
`;

type LayoutProps = NonNullable<unknown>;

function Layout(props: PropsWithChildren<LayoutProps>) {
  const { children } = props;
  return (
    <ThemeProvider theme={myTheme}>
      <Wrapper>
        <Container>
          <GlobalPortal.Provider>{children} </GlobalPortal.Provider>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Layout;
