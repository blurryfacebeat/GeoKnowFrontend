import type { Metadata } from 'next';
import { type FC, type PropsWithChildren } from 'react';

import '@/assets/styles/index.scss';
import { montserrat } from '@/assets/fonts';

export const metadata: Metadata = {
  title: 'Geo Know',
  description: 'The Geoguessr game clone',
};

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
