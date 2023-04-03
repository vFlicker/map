import { RefObject, useEffect } from 'react';

export const useDrag = (mapRef: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const mapElement = mapRef.current;

    if (!mapElement) return;

    let pos = {
      top: 0,
      left: 0,
      x: 0,
      y: 0,
    };

    const mouseDownHandler = (evt: globalThis.MouseEvent) => {
      pos = {
        left: mapElement.scrollLeft,
        top: mapElement.scrollTop,
        // Get the current mouse position
        x: evt.clientX,
        y: evt.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = (evt: globalThis.MouseEvent) => {
      // How far the mouse has been moved
      const dx = evt.clientX - pos.x;
      const dy = evt.clientY - pos.y;

      // Scroll the element
      mapElement.scrollTop = pos.top - dy;
      mapElement.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    mapElement.addEventListener('mousedown', mouseDownHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      mapElement.removeEventListener('mousedown', mouseDownHandler);
    };
  }, [mapRef]);
};
