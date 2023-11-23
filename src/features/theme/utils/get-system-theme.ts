import { BrowserTheme } from '@/features/theme/enums/browser-theme';

const getSystemTheme = (): BrowserTheme => {
  if (typeof window === 'undefined') return BrowserTheme.DARK;

  return window.matchMedia('(prefers-color-scheme:dark)').matches
    ? BrowserTheme.DARK
    : BrowserTheme.LIGHT;
};

export default getSystemTheme;
