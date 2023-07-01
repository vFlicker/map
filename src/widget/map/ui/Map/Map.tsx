import { useRef } from 'react';

import { ModuleChanger } from '~/features/ModuleChanger';
import { ShowModuleButton } from '~/features/ShowModuleButton';
import { Regions } from '~/entities/map';
import { modalModel } from '~/entities/modal';
import { moduleModel, ModulePreview } from '~/entities/module';
import { useAppDispatch, useAppSelector, useIsMobile } from '~/shared/hooks';
import { Lock } from '~/shared/ui/Lock';

import {
  useChangeZoneOnMobile,
  useDrag,
  useMobileDefaultRegion,
  useWheel,
} from '../../hooks';
import classes from './Map.module.css';

function ModuleController(): JSX.Element | null {
  const dispatch = useAppDispatch();

  const isMobile = useIsMobile();

  const activeModuleId = useAppSelector(moduleModel.selectActiveModuleId);

  const handleModuleOpen = () => {
    dispatch(modalModel.open());
  };

  if (!isMobile) return null;

  return (
    <div className={classes.controller}>
      <ModulePreview id={activeModuleId} onOpen={handleModuleOpen} />
      <ModuleChanger />
    </div>
  );
}

export function Map(): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLButtonElement[]>([]);

  useDrag(mapRef);
  useWheel(mapRef);
  useMobileDefaultRegion();
  useChangeZoneOnMobile(buttonsRef);

  const isOpenModal = useAppSelector(modalModel.selectIsOpen);
  const lockedModulesIds = useAppSelector(moduleModel.selectLockedModulesIds);
  const unlockedModulesIds = useAppSelector(
    moduleModel.selectUnlockedModulesIds,
  );

  const moduleButtons = unlockedModulesIds.map((id, index) => (
    <ShowModuleButton
      key={id}
      className={classes.button}
      moduleId={id}
      ref={(button: HTMLButtonElement) => {
        buttonsRef.current[index] = button;
      }}
    />
  ));

  const lockButtons = lockedModulesIds.map((id) => (
    <Lock key={id} className={classes.button} />
  ));

  const regions = <Regions modulesIds={lockedModulesIds} />;

  const moduleController = !isOpenModal && <ModuleController />;

  return (
    <div className={classes.map} ref={mapRef}>
      <div className={classes.background}>
        {moduleButtons}
        {lockButtons}
        {regions}
      </div>

      {moduleController}
    </div>
  );
}
