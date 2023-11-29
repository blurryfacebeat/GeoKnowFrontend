import { BrowserTheme } from '../enums/browser-theme';
import getSystemTheme from './get-system-theme';
import { themeStorage } from './theme-storage';

export const changeSystemTheme = () => {
  const currentTheme = getSystemTheme();
  const newTheme =
    currentTheme === BrowserTheme.DARK ? BrowserTheme.LIGHT : BrowserTheme.DARK;

  themeStorage.setCookie<BrowserTheme>(newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
};
