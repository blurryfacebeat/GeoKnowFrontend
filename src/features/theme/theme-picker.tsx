import { type FC } from 'react';
import { MoonIcon, SunIcon } from '@/ui/kit/icons';
import getSystemTheme from '@/features/theme/utils/get-system-theme';

import classes from './theme-picker.module.scss';
import { BrowserTheme } from '@/features/theme/enums/browser-theme';

const ThemePicker: FC = () => {
  const currentTheme = getSystemTheme();

  return (
    <div className={classes.container}>
      {currentTheme === BrowserTheme.DARK ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};

export default ThemePicker;
