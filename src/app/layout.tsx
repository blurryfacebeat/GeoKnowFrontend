import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type FC, type PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Geo Know',
  description: 'The Geoguessr game clone',
};

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
