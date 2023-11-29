import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { type FC, type PropsWithChildren } from 'react';

import '@/assets/styles/index.scss';
import { montserrat } from '@/assets/fonts';
import { THEME_STORAGE_KEY } from '@/features/theme/utils/theme-storage';
import getSystemTheme from '@/features/theme/utils/get-system-theme';

export const metadata: Metadata = {
  title: 'Geo Know',
  description: 'The Geoguessr game clone',
};

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const theme = cookies().get(THEME_STORAGE_KEY)?.value || getSystemTheme();

  return (
    <html lang="en" data-theme={theme}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
