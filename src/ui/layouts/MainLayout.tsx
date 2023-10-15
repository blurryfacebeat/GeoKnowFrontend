import { type FC, type PropsWithChildren } from 'react';

import classes from './MainLayout.module.scss';

const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <>
      <header className={classes.header}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </header>
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>Footer</footer>
    </>
  );
};

export default MainLayout;
