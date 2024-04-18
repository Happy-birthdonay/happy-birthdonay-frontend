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
  height: auto;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  flex: 1;
  width: 100vw;
  max-width: 480px;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.main.grey};
`;

type LayoutProps = NonNullable<unknown>;

function Layout(props: PropsWithChildren<LayoutProps>) {
  const { children } = props;
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalPortal.Provider>
        <Wrapper>
          <Container>{children}</Container>
        </Wrapper>
      </GlobalPortal.Provider>
    </ThemeProvider>
  );
}

export default Layout;
