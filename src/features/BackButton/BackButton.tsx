import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import { useIsMobile } from '~/shared/hooks';

import classes from './BackButton.module.css';

type BackButtonProps = ComponentPropsWithoutRef<'a'>;

export function BackButton({ className }: BackButtonProps): JSX.Element | null {
  const isMobile = useIsMobile();

  const classNames = cn(className, classes.button);

  if (isMobile) return null;

  return (
    <a
      href="https://academy.algbot.com/teach/control/stream/view/id/703133249"
      className={classNames}
    >
      Назад
    </a>
  );
}
