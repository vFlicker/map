import { useEffect } from 'react';

import { ModuleChanger } from '~/features/ModuleChanger';
import { modalModel } from '~/entities/modal';
import { moduleModel, ModulePreview } from '~/entities/module';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';

import classes from './ModuleController.module.css';

export function ModuleController(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(moduleModel.changeActiveModuleId('1'));
    dispatch(modalModel.close());
  }, [dispatch]);

  const activeModuleId = useAppSelector(moduleModel.selectActiveModuleId);

  const handleModuleOpen = () => {
    dispatch(modalModel.open());
  };

  return (
    <div className={classes.controller}>
      <ModulePreview id={activeModuleId} onOpen={handleModuleOpen} />
      <ModuleChanger />
    </div>
  );
}
