'use client';

import { type FC } from 'react';
import { ThemeIcon } from '@/ui/kit/icons';

import classes from './theme-picker.module.scss';
import { changeSystemTheme } from './utils/change-system-theme';

const ThemePicker: FC = () => {
  const handleClick = () => {
    changeSystemTheme();
  };

  return (
    <div className={classes.container} onClick={handleClick}>
      <ThemeIcon />
    </div>
  );
};

export default ThemePicker;
