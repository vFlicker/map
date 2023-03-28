import cn from 'classnames';
import { ComponentPropsWithRef, useEffect, useState, WheelEvent } from 'react';

import { regionImagesSrc } from '~/shared/assets';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';

import {
  changeActiveRegion,
  changeImage,
  changeZoom,
  selectActiveRegion,
  selectZoom,
} from '../../model/map';
import { RegionData } from '../../types';
import classes from './Region.module.css';

type RegionProps = ComponentPropsWithRef<'path'> & {
  region: RegionData;
  isLocked: boolean;
};

export function Region({ region, isLocked }: RegionProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [isActive, setIsActive] = useState(false);

  const activeRegion = useAppSelector(selectActiveRegion);
  const zoom = useAppSelector(selectZoom);

  useEffect(() => {
    if (activeRegion === region.id) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [region.id, activeRegion]);

  const handleWheel = (evt: WheelEvent<SVGPathElement>) => {
    if (evt.deltaY < 0 && zoom === '1' && !isLocked) {
      const index = Number(region.id) - 1;
      const regionImage = regionImagesSrc[index];

      dispatch(changeZoom('2'));
      dispatch(changeImage(regionImage));
    }
  };

  const handleMouseEnter = () => dispatch(changeActiveRegion(region.id));
  const handleMouseLeave = () => dispatch(changeActiveRegion(''));

  const className = cn(classes.region, {
    [classes.active]: !isLocked && isActive,
    [classes.locked]: isLocked,
  });

  return (
    <path
      id={region.id}
      d={region.d}
      className={className}
      onWheel={handleWheel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
