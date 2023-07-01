import cn from 'classnames';
import { ComponentPropsWithRef, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '~/shared/hooks';

import { changeActiveRegion, selectActiveRegion } from '../../model/map';
import { RegionData } from '../../types';
import classes from './Region.module.css';

type RegionProps = ComponentPropsWithRef<'path'> & {
  region: RegionData;
  isLocked: boolean;
  onRegionClick: (id: ModuleId) => void;
};

export function Region({
  region,
  isLocked,
  onRegionClick,
}: RegionProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [isActive, setIsActive] = useState(false);

  const activeRegion = useAppSelector(selectActiveRegion);

  useEffect(() => {
    if (activeRegion === region.id) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [region.id, activeRegion]);

  const handleClick = () => {
    if (!isLocked) onRegionClick(region.id);
  };

  const handleMouseEnter = () => dispatch(changeActiveRegion(region.id));
  const handleMouseLeave = () => dispatch(changeActiveRegion(-1));

  const className = cn(classes.region, {
    [classes.active]: !isLocked && isActive,
    [classes.locked]: isLocked,
  });

  return (
    <path
      id={region.id.toString()}
      d={region.d}
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
