import classNames from 'classnames';

import { getCurrentModule } from '../../lib';
import classes from './ModuleToken.module.css';

type ModuleProps = {
  id: ModuleId;
  size: 'big' | 'small';
  className?: string;
};

export function ModuleToken({
  id,
  size,
  className,
}: ModuleProps): JSX.Element | null {
  const currentModule = getCurrentModule(id);

  return (
    <div className={classNames(className, classes.token, classes[size])}>
      <span>Модуль {currentModule}</span>
    </div>
  );
}
