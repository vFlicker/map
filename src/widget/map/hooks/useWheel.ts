import { RefObject, useEffect } from 'react';

export const useWheel = (mapRef: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const mapElement = mapRef.current;

    if (!mapElement) return;

    const handleWheel = (evt: globalThis.WheelEvent) => {
      evt.preventDefault();
    };

    mapElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      mapElement.removeEventListener('wheel', handleWheel);
    };
  }, [mapRef]);
};
