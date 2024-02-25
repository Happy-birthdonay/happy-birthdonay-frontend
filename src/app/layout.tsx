import { Metadata } from 'next';

import './globals.css';

import Layout from '@/ui/Layout';
import StyledJsxRegistry from './registry';

export const metadata: Metadata = {
  title: `TypeScript starter for Next.js by João Pedro Schmitz`,
  description: `TypeScript starter for Next.js that includes all you need to build amazing apps`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body>
        <StyledJsxRegistry>
          <Layout>{children}</Layout>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
