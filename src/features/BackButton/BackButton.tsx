import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import { useIsMobile } from '~/shared/hooks';

import classes from './BackButton.module.css';

type BackButtonProps = ComponentPropsWithoutRef<'button'>;

export function BackButton({ className }: BackButtonProps): JSX.Element | null {
  const isMobile = useIsMobile();

  const classNames = cn(className, classes.button);

  const handleClick = () => {
    history.back();
  };

  if (isMobile) return null;

  return (
    <button className={classNames} onClick={handleClick}>
      Назад
    </button>
  );
}
