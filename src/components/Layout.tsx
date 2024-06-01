'use client';

import { usePathname } from 'next/navigation';
import { PropsWithChildren, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalPortal } from '@/GlobalPortal';
import myTheme from '@/styles/theme';
import Header from './Header';
import MenuHeader from './MenuHeader';

const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: calc(env(safe-area-inset-bottom));
`;

const Container = styled.div`
  position: relative;
  flex: 1;
  width: 100vw;
  max-width: 392px;
  max-height: 844px;
  height: 100%;
  padding: 60px 20px 40px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.main.grey};

  & > main {
    height: 100%;
  }
`;

type LayoutProps = NonNullable<unknown>;

function Layout(props: PropsWithChildren<LayoutProps>) {
  const { children } = props;

  const pathname = usePathname();

  const renderHeaderByPath = useCallback(() => {
    const regexPaths = [
      /^\/box\/\d+$/, // ㅡ Matches '/box/[number]'
      /^\/box\/new$/, // ㅡ Matches '/box/new'
      /^\/box\/new\/funnel$/, // ㅡ Matches '/box/new/funnel'
      /^\/box\/\d+\/open$/, // ㅡ Matches '/box/[number]/open'
      /^\/box\/\d+\/message\/\d+$/, // ㅡ Matches '/box/[number]/message/[number]'
      /^\/box\/\d+\/certification$/, // ㅡ Matches '/box/[number]/certification'
      /^\/guest\/\d+\/message$/, // ㅡ Matches '/guest/[number]/message'
    ];

    if (pathname === '/box') {
      return <MenuHeader />;
    } else if (regexPaths.some((regexPath) => regexPath.test(pathname))) {
      return <Header />;
    } else {
      return null;
    }
  }, [pathname]);

  return (
    <ThemeProvider theme={myTheme}>
      <Wrapper>
        <Container>
          {renderHeaderByPath()}
          <GlobalPortal.Provider>{children} </GlobalPortal.Provider>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Layout;
