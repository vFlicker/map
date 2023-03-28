import { ModuleId } from '~/entities/module';

import { regions } from '../../config';
import { Region } from '../Region';

type RegionsProps = {
  activeModuleId: ModuleId;
  modulesIds: ModuleId[];
};

export function Regions({
  activeModuleId,
  modulesIds,
}: RegionsProps): JSX.Element {
  const regionList = regions.map((region) => {
    const isLocked = modulesIds.includes(region.id);
    return (
      <Region
        key={region.id}
        isLocked={isLocked}
        activeModuleId={activeModuleId}
        {...region}
      />
    );
  });

  return (
    <svg
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {regionList}
    </svg>
  );
}
