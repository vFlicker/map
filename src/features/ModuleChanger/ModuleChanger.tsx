import cn from 'classnames';
import { MutableRefObject, useEffect } from 'react';

import { getCurrentModule, moduleModel } from '~/entities/module';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';

import classes from './ModuleChanger.module.css';

type ModuleChangerProps = {
  moduleButtonsRef: MutableRefObject<HTMLButtonElement[]>;
};

export function ModuleChanger({
  moduleButtonsRef,
}: ModuleChangerProps): JSX.Element {
  const dispatch = useAppDispatch();

  const activeModuleId = useAppSelector(moduleModel.selectActiveModuleId);
  const unlockedModules = useAppSelector(moduleModel.selectUnlockedModulesIds);
  const allModules = useAppSelector(moduleModel.selectModules);

  const id = Number(activeModuleId);

  useEffect(() => {
    const buttons = moduleButtonsRef.current;
    const button = buttons[id - 1];

    if (button) {
      button.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, [id, moduleButtonsRef]);

  const handlePrevButtonClick = () => {
    dispatch(moduleModel.changeActiveModuleId(String(id - 1)));
  };

  const handleNextButtonClick = () => {
    dispatch(moduleModel.changeActiveModuleId(String(id + 1)));
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
        disabled={isPrevButtonDisable}
        onClick={handlePrevButtonClick}
      >
        <span className="visually-hidden">Предыдущий модуль</span>
      </button>
      <button
        className={cn(classes.button, classes.next)}
        disabled={isNextButtonDisable}
        onClick={handleNextButtonClick}
      >
        <span className="visually-hidden">Следующий модуль</span>
      </button>
    </div>
  );
}