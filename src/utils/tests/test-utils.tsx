import { render, type RenderOptions } from '@testing-library/react';
import { type FC, type PropsWithChildren, type ReactElement } from 'react';

const AllTheProviders: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return <>{children}</>;
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// eslint-disable-next-line import/export
export * from '@testing-library/react';
