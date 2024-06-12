import { Metadata } from 'next';

import '@/styles/globals.css';
import '@/styles/minireset.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';

import Layout from '@/components/Layout';
import StyledJsxRegistry from './registry';

export const metadata: Metadata = {
  title: 'HappyBirthDonay',
  description: `생일선물 대신 가치를 선물하기! 생일을 기념해서 선물 상자를 만들고, 축하 메시지를 받은 마음을 함께 기부하세요!`,
  openGraph: {
    type: 'website',
    title: 'HappyBirthDonay',
    description: `생일선물 대신 가치를 선물하기! 생일을 기념해서 선물 상자를 만들고, 축하 메시지를 받은 마음을 함께 기부하세요!`,
    images: '/logo.png,',
  },
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
          <Layout>
            {children}
            <Analytics />
          </Layout>
          <GoogleAnalytics gaId="G-0ZXJN94TRJ" />
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
