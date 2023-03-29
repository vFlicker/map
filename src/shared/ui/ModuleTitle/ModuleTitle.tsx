import classNames from 'classnames';

import classes from './ModuleTitle.module.css';

type ModuleProps = {
  id: ModuleId;
  size: 'big' | 'small';
  className?: string;
};

export function ModuleTitle({
  id,
  size,
  className,
}: ModuleProps): JSX.Element | null {
  return (
    <div className={classNames(className, classes.moduleTitle, classes[size])}>
      <span>Модуль {id}</span>
    </div>
  );
}
