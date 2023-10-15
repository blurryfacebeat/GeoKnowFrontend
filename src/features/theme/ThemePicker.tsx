import { type FC } from 'react';
import { MoonIcon, SunIcon } from '@/ui/kit/icons';
import getSystemTheme from '@/features/theme/utils/getSystemTheme';

import classes from './ThemePicker.module.scss';

const ThemePicker: FC = () => {
  const currentTheme = getSystemTheme();

  return (
    <div className={classes.container}>
      {currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};

export default ThemePicker;
