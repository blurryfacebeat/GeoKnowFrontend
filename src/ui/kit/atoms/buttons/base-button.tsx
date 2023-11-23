import {
  type ButtonHTMLAttributes,
  type FC,
  type PropsWithChildren,
} from 'react';

import classes from './base-button.scss';
import classNames from 'classnames';

type TBaseButton = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

const BaseButton: FC<TBaseButton> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <button className={classNames(classes.container, className)} {...restProps}>
      {children}
    </button>
  );
};

export default BaseButton;
