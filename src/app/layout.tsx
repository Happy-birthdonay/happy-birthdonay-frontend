import { Metadata } from 'next';

import '@/styles/globals.css';
import '@/styles/minireset.css';

import Layout from '@/components/Layout';
import StyledJsxRegistry from './registry';

export const metadata: Metadata = {
  title: `Happy birthDonay`,
  description: `생일선물 대신 가치를 선물하기!`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.2/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.2/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css"
        />
        <StyledJsxRegistry>
          <Layout>{children}</Layout>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
