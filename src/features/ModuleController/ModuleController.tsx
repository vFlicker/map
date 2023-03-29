import cn from 'classnames';
import { useEffect, useState } from 'react';

import { Module, moduleModel } from '~/entities/module';
import { useAppDispatch, useAppSelector, useIsMobile } from '~/shared/hooks';
import { ModuleTitle } from '~/shared/ui/ModuleTitle';

import classes from './ModuleController.module.css';

export function ModuleController(): JSX.Element | null {
  const dispatch = useAppDispatch();

  const [isModuleOpen, setIsModuleOpen] = useState(false);

  const isMobile = useIsMobile();

  // Close modal on outside click
  useEffect(() => {
    const onOutsideClick = (evt: globalThis.MouseEvent) => {
      if (evt.target) {
        const element = evt.target as Element;
        const parentElement = element.closest(`.${classes.content}`);

        if (!parentElement) setIsModuleOpen(false);
      }
    };

    document.body.addEventListener('click', onOutsideClick);

    return () => document.body.removeEventListener('click', onOutsideClick);
  }, []);

  useEffect(() => {
    if (isMobile) {
      dispatch(moduleModel.changeActiveModuleId('1'));
    }

    return () => {
      dispatch(moduleModel.changeActiveModuleId(''));
    };
  }, [dispatch, isMobile]);

  // TODO: just select ActiveModule
  const activeModuleId = useAppSelector(moduleModel.selectActiveModuleId);
  const allModules = useAppSelector(moduleModel.selectModules);
  const unlockedModules = useAppSelector(moduleModel.selectUnlockedModulesIds);
  const module = useAppSelector((state) =>
    moduleModel.selectModuleById(state, activeModuleId),
  );

  if (!module || !module.data) return null;

  const { title } = module.data;
  const currentModule = +activeModuleId - 1;
  const modulesCount = allModules.length - 1;

  const handleOpenModuleButtonClock = () => {
    setIsModuleOpen(true);
  };

  const handlePrevButtonClick = () => {
    dispatch(moduleModel.changeActiveModuleId(String(+activeModuleId - 1)));
  };

  const handleNextButtonClick = () => {
    dispatch(moduleModel.changeActiveModuleId(String(+activeModuleId + 1)));
  };

  const isPrevButtonDisable = +activeModuleId === 1;
  const isNextButtonDisable = unlockedModules.length === +activeModuleId;

  if (!isModuleOpen) {
    return (
      <div className={classes.controller}>
        <div className={classes.content}>
          <ModuleTitle
            className={classes.moduleTitle}
            size="small"
            id={String(currentModule)}
          />
          <h2 className={classes.title}>{title}</h2>
          <button
            className={classes.buttonLink}
            onClick={handleOpenModuleButtonClock}
          >
            Открыть
          </button>
        </div>
        <div className={classes.footer}>
          <div className={classes.modulesCount}>
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
      </div>
    );
  }

  return (
    <div className={classes.moduleWrapper}>
      <Module id={activeModuleId} />
    </div>
  );
}
