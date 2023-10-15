import { type FC, type PropsWithChildren } from 'react';

import classes from './MainLayout.module.scss';
import MainLayoutHeader from '@/ui/layouts/MainLayoutHeader';

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
