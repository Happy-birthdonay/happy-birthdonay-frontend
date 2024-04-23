'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PropsWithChildren, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalPortal } from '@/GlobalPortal';
import myTheme from '@/styles/theme';
import Header from './Header';

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
  const search = useSearchParams();
  const router = useRouter();
  console.log('search', search);
  console.log('pathname', pathname);
  console.log('router', router);

  const renderHeaderByPath = useCallback(() => {
    const regexPaths = [
      /^\/$/, // ㅡ Matches '/'
      /^\/box$/, // ㅡ Matches '/box'
      /^\/box\/new$/, // ㅡ Matches '/box/new'
      /^\/login\/profile$/, // ㅡ Matches '/login/profile'
      /^\/box\/new\/funnel$/, // ㅡ Matches '/box/new/funnel'
      /^\/box\/\d+\/open$/, // Matches '/box/[number]/open'
      /^\/box\/new\/funnel\/complete\/\d+$/, //Maches '/box/new/funnel/complete/[number]'
    ];

    if (regexPaths.some((regexPath) => regexPath.test(pathname))) {
      // pathname matches one of the regex paths
      return null;
    } else {
      return <Header />;
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
