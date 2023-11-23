import { type FC, type PropsWithChildren } from 'react';

import classes from './main-layout.module.scss';
import MainLayoutHeader from '@/ui/layouts/main-layout/main-layout-header';

const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <>
      <MainLayoutHeader />
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>Footer</footer>
    </>
  );
};

export default MainLayout;
