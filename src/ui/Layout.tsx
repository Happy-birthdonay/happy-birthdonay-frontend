'use client';

import { PropsWithChildren } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import myTheme from '@/styles/theme';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: block;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  flex: 1;
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
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Layout;
