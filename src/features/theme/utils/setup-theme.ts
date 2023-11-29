import getSystemTheme from './get-system-theme';

export const setupTheme = () => {
  const currentTheme = getSystemTheme();

  document.documentElement.setAttribute('theme', currentTheme);
};
