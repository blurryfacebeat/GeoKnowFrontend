import { type FC, type PropsWithChildren } from 'react';

const EmptyLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return <main>{children}</main>;
};

export default EmptyLayout;
