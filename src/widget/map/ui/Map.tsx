import { useRef } from 'react';

import { ShowModuleButton } from '~/features/ShowModuleButton';
import { mapModel, Regions } from '~/entities/map';
import { moduleModel } from '~/entities/module';
import { useAppSelector } from '~/shared/hooks';
import { Lock } from '~/shared/ui/Lock';

import { useDrag, useWheel } from '../hooks';
import classes from './Map.module.css';

export function Map(): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);

  useDrag(mapRef);
  useWheel(mapRef);

  const image = useAppSelector(mapModel.selectImage);
  const zoom = useAppSelector(mapModel.selectZoom);
  const unlockedModulesIds = useAppSelector(
    moduleModel.selectUnlockedModulesIds,
  );

  const lockedModulesIds = useAppSelector(moduleModel.selectLockedModulesIds);

  const style = { backgroundImage: `url(${image})` };
  const isDefaultMapZoom = zoom === '1';

  const moduleButtons =
    isDefaultMapZoom &&
    unlockedModulesIds.map((id) => (
      <ShowModuleButton key={id} className={classes.button} moduleId={id} />
    ));

  const lockButtons =
    isDefaultMapZoom &&
    lockedModulesIds.map((id) => {
      return <Lock key={id} className={classes.button} />;
    });

  const regions = isDefaultMapZoom && <Regions modulesIds={lockedModulesIds} />;

  return (
    <div className={classes.map} ref={mapRef}>
      <div className={classes.background} style={style}>
        {moduleButtons}
        {lockButtons}
        {regions}
      </div>
    </div>
  );
}
