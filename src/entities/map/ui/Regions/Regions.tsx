import { regions } from '../../config';
import { Region } from '../Region';
import classes from './Regions.module.css';

type RegionsProps = {
  modulesIds: ModuleId[];
  onRegionClick: (id: ModuleId) => void;
};

export function Regions({
  modulesIds,
  onRegionClick,
}: RegionsProps): JSX.Element {
  const regionList = regions.map((region) => {
    const isLocked = modulesIds.includes(region.id);
    return (
      <Region
        key={region.id}
        region={region}
        isLocked={isLocked}
        onRegionClick={onRegionClick}
      />
    );
  });

  return (
    <svg
      width="1920"
      height="1080"
      className={classes.regions}
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {regionList}
    </svg>
  );
}
