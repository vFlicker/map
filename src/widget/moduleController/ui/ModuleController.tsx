import { useEffect, useState } from 'react';

import { ModuleChanger } from '~/features/ModuleChanger';
import { Module, moduleModel, ModulePreview } from '~/entities/module';
import { useAppDispatch, useAppSelector, useIsMobile } from '~/shared/hooks';

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
        const parentElement = element.closest('[data-content]');

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

  const activeModuleId = useAppSelector(moduleModel.selectActiveModuleId);

  const handleModuleOpen = () => setIsModuleOpen(true);

  if (!isModuleOpen) {
    return (
      <div className={classes.controller}>
        <ModulePreview id={activeModuleId} onOpen={handleModuleOpen} />
        <ModuleChanger />
      </div>
    );
  }

  return (
    <div className={classes.moduleWrapper}>
      <Module id={activeModuleId} />
    </div>
  );
}
