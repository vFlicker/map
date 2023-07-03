import cn from 'classnames';
import { MutableRefObject, useRef } from 'react';

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

type PreviewBlockProps = {
  buttonsRef: MutableRefObject<HTMLButtonElement[]>;
  onOpen: (id: ModuleId) => void;
};

export function Map(): JSX.Element {
  const dispatch = useAppDispatch();

  const mapRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLButtonElement[]>([]);

  useDrag(mapRef);
  useWheel(mapRef);
  useMobileDefaultRegion();
  useChangeZoneOnMobile(buttonsRef);

  const isOpenModal = useAppSelector(modalModel.selectIsOpen);
  const lockedModulesIds = useAppSelector(moduleModel.selectLockedModulesIds);

  const handleRegionClick = (id: ModuleId) => {
    dispatch(moduleModel.changeActiveModuleId(id));
    dispatch(modalModel.open());
  };

  const moduleController = !isOpenModal && <ModuleController />;

  return (
    <div className={classes.map} ref={mapRef}>
      <div className={classes.background}>
        <PreviewBlocks buttonsRef={buttonsRef} onOpen={handleRegionClick} />
        <Regions
          modulesIds={lockedModulesIds}
          onRegionClick={handleRegionClick}
        />
      </div>

      {moduleController}
    </div>
  );
}

function PreviewBlocks({ buttonsRef, onOpen }: PreviewBlockProps): JSX.Element {
  const isMobile = useIsMobile();

  const isOpenModal = useAppSelector(modalModel.selectIsOpen);

  const lockedModulesIds = useAppSelector(moduleModel.selectLockedModulesIds);
  const unlockedModulesIds = useAppSelector(
    moduleModel.selectUnlockedModulesIds,
  );

  const activeBlocks = unlockedModulesIds.map((id, index) => {
    const canShow = !isOpenModal && !isMobile;

    const className = cn(classes.previewBlock, {
      [classes.active]: canShow,
    });

    return (
      <div key={id} className={className}>
        {canShow && <ModulePreview id={id} onOpen={() => onOpen(id)} />}
        <ShowModuleButton
          className={classes.previewBlockButton}
          moduleId={id}
          ref={(button: HTMLButtonElement) => {
            buttonsRef.current[index] = button;
          }}
        />
      </div>
    );
  });

  const lockedBlocks = lockedModulesIds.map((id, index) => {
    const canShow = !isOpenModal && !isMobile;

    const className = cn(classes.previewBlock, {
      [classes.active]: canShow,
    });

    if (index === 0) {
      return (
        <div key={id} className={className}>
          {canShow && (
            <ModulePreview id={id} disabled onOpen={() => onOpen(id)} />
          )}
          <Lock key={id} className={classes.previewBlockButton} />
        </div>
      );
    }

    return (
      <div key={id} className={classes.previewBlock}>
        <Lock key={id} />
      </div>
    );
  });

  return (
    <>
      {activeBlocks}
      {lockedBlocks}
    </>
  );
}

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
