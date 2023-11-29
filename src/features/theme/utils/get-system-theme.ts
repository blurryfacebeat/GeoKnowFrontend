import { BrowserTheme } from '@/features/theme/enums/browser-theme';
import { themeStorage } from './theme-storage';

const getDefaultTheme = (): BrowserTheme => {
  return window.matchMedia('(prefers-color-scheme:dark)').matches
    ? BrowserTheme.DARK
    : BrowserTheme.LIGHT;
};

const getPickedTheme = (): BrowserTheme | null => {
  return themeStorage.getCookie<BrowserTheme>();
};

const getSystemTheme = (): BrowserTheme => {
  if (typeof window === 'undefined') return BrowserTheme.DARK;

  return getPickedTheme() ?? getDefaultTheme();
};

export default getSystemTheme;
