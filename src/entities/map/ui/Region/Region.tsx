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
import classes from './Region.module.css';

type RegionProps = ComponentPropsWithRef<'path'> & {
  id: string;
  d: string;
  isLocked: boolean;
  activeModuleId: string;
};

export function Region({ id, d, isLocked }: RegionProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [isActive, setIsActive] = useState(false);

  const activeRegion = useAppSelector(selectActiveRegion);
  const zoom = useAppSelector(selectZoom);

  useEffect(() => {
    if (activeRegion === id) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [id, activeRegion]);

  const handleWheel = (evt: WheelEvent<SVGPathElement>) => {
    if (evt.deltaY < 0 && zoom === '1' && !isLocked) {
      const index = Number(id) - 1;
      const regionImage = regionImagesSrc[index];

      dispatch(changeZoom('2'));
      dispatch(changeImage(regionImage));
    }
  };

  const handleMouseEnter = () => dispatch(changeActiveRegion(id));
  const handleMouseLeave = () => dispatch(changeActiveRegion(''));

  const className = cn(classes.region, {
    [classes.active]: !isLocked && isActive,
    [classes.locked]: isLocked,
  });

  return (
    <path
      id={id}
      d={d}
      className={className}
      onWheel={handleWheel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
