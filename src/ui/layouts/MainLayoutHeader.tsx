import { type FC } from 'react';
import { LogoIcon } from '@/ui/kit/icons';
import { Paragraph } from '@/ui/kit/atoms';
import Link from 'next/link';
import routes from '@/utils/routes';

import classes from './MainLayoutHeader.module.scss';

const MainLayoutHeader: FC = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href={routes.main}>
        <LogoIcon className={classes.logoSvg} />
        <Paragraph variant="medium">Geo Know</Paragraph>
      </Link>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </header>
  );
};

export default MainLayoutHeader;
