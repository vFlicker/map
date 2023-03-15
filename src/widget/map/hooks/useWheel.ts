import { RefObject, useEffect } from 'react';

import { mapModel } from '~/entities/map';
import { mapBackgroundX1ImageSrc } from '~/shared/assets';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';

export const useWheel = (mapRef: RefObject<HTMLDivElement>) => {
  const dispatch = useAppDispatch();

  const zoom = useAppSelector(mapModel.selectZoom);

  useEffect(() => {
    const mapElement = mapRef.current;

    if (!mapElement) return;

    const handleWheel = (evt: globalThis.WheelEvent) => {
      evt.preventDefault();

      if (evt.deltaY > 0 && zoom === '2') {
        dispatch(mapModel.changeZoom('1'));
        dispatch(mapModel.changeImage(mapBackgroundX1ImageSrc));
      }
    };

    mapElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      mapElement.removeEventListener('wheel', handleWheel);
    };
  }, [dispatch, mapRef, zoom]);
};
