import React, { Suspense } from 'react';
import StyledComponentsRegistry from '../../lib/registry';
import './globals.css';
import Loading from './loading';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}