import { type FC, type PropsWithChildren } from 'react';

const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <>
      <header>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
