import { type FC, type HTMLProps, type PropsWithChildren } from 'react';
import classNames from 'classnames';

import classes from './paragraph.module.scss';

type TVariant = 'regular' | 'medium';

type TParagraph = PropsWithChildren &
  HTMLProps<HTMLParagraphElement> & {
    variant?: TVariant;
  };

const Paragraph: FC<TParagraph> = (props) => {
  const { children, variant = 'regular', className, ...restProps } = props;

  const styles = classNames(classes.container, className, {
    [classes.regular]: variant === 'regular',
    [classes.medium]: variant === 'medium',
  });

  return (
    <p className={styles} {...restProps}>
      {children}
    </p>
  );
};

export default Paragraph;
