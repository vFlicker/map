import cn from 'classnames';

import { mapModel } from '~/entities/map';
import { getCurrentModule, moduleModel } from '~/entities/module';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';

import classes from './ModuleChanger.module.css';

type ModuleChangerProps = {
  disabled?: boolean;
};

export function ModuleChanger({
  disabled = false,
}: ModuleChangerProps): JSX.Element {
  const dispatch = useAppDispatch();

  const activeModuleId = useAppSelector(moduleModel.selectActiveModuleId);
  const unlockedModules = useAppSelector(moduleModel.selectUnlockedModulesIds);
  const allModules = useAppSelector(moduleModel.selectModules);

  const id = Number(activeModuleId);

  const handlePrevButtonClick = () => {
    const prevId = id - 1;

    dispatch(moduleModel.changeActiveModuleId(prevId));
    dispatch(mapModel.changeActiveRegion(prevId));
  };

  const handleNextButtonClick = () => {
    const nextId = id + 1;

    dispatch(moduleModel.changeActiveModuleId(nextId));
    dispatch(mapModel.changeActiveRegion(nextId));
  };

  const modulesCount = allModules.length;
  const currentModule = getCurrentModule(activeModuleId);
  const isPrevButtonDisable = id === 1;
  const isNextButtonDisable = unlockedModules.length === id;

  return (
    <div className={classes.wrapper}>
      <div className={classes.counter}>
        <span>{currentModule}</span>/{modulesCount}
      </div>
      <button
        className={cn(classes.button, classes.prev)}
        disabled={isPrevButtonDisable || disabled}
        onClick={handlePrevButtonClick}
      >
        <span className="visually-hidden">Предыдущий модуль</span>
      </button>
      <button
        className={cn(classes.button, classes.next)}
        disabled={isNextButtonDisable || disabled}
        onClick={handleNextButtonClick}
      >
        <span className="visually-hidden">Следующий модуль</span>
      </button>
    </div>
  );
}
