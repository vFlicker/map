import cn from 'classnames';

import { ModuleTitle } from '~/shared/ui/ModuleTitle';

import classes from './ModuleController.module.css';

export function ModuleController(): JSX.Element {
  const currentModule = '1';
  const allModules = 10;

  return (
    <div className={classes.controller}>
      <div className={classes.content}>
        <ModuleTitle
          className={classes.moduleTitle}
          size="small"
          id={currentModule}
        />
        <h2 className={classes.title}>Описание проекта ALGORITHM</h2>
        <button className={classes.buttonLink}>Открыть</button>
      </div>
      <div className={classes.footer}>
        <div className={classes.modulesCount}>
          <span>{currentModule}</span>/{allModules}
        </div>
        <button className={cn(classes.button, classes.left)}>
          <span className="visually-hidden">Предыдущий модуль</span>
        </button>
        <button className={cn(classes.button, classes.right)}>
          <span className="visually-hidden">Следующий модуль</span>
        </button>
      </div>
    </div>
  );
}
