import { useEffect } from 'react';

import { ModuleChanger } from '~/features/ModuleChanger';
import { modalModel } from '~/entities/modal';
import { moduleModel, ModulePreview } from '~/entities/module';
import { useAppDispatch, useAppSelector, useIsMobile } from '~/shared/hooks';

import classes from './ModuleController.module.css';

export function ModuleController(): JSX.Element | null {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(moduleModel.changeActiveModuleId('1'));
    dispatch(modalModel.close());
  }, [dispatch]);

  const isMobile = useIsMobile();

  const isOpenModal = useAppSelector(modalModel.selectIsOpen);
  const activeModuleId = useAppSelector(moduleModel.selectActiveModuleId);

  const handleModuleOpen = () => {
    dispatch(modalModel.open());
  };

  if (!isMobile || isOpenModal) return null;

  return (
    <div className={classes.controller}>
      <ModulePreview id={activeModuleId} onOpen={handleModuleOpen} />
      <ModuleChanger />
    </div>
  );
}
