import { type TBrowserTheme } from '@/features/theme/types/theme';

const getSystemTheme = (): TBrowserTheme => {
  if (typeof window === 'undefined') return 'dark';

  return window.matchMedia('(prefers-color-scheme:dark)').matches
    ? 'dark'
    : 'light';
};

export default getSystemTheme;
