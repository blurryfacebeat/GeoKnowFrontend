import { type FC } from 'react';
import { LogoIcon } from '@/ui/kit/icons';
import { Paragraph } from '@/ui/kit/atoms';
import Link from 'next/link';
import routes from '@/utils/routes';

import classes from './main-layout-header.module.scss';
import ThemePicker from '@/features/theme/theme-picker';

const MainLayoutHeader: FC = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href={routes.main}>
        <LogoIcon className={classes.logoSvg} />
        <Paragraph variant="medium">Geo Know</Paragraph>
      </Link>
      <ThemePicker />
    </header>
  );
};

export default MainLayoutHeader;
