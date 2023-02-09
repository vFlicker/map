import { highlightRegion } from './highlight-region';
import { mapZoom } from './map-zoom';
import { touchScroll } from './touch-scroll';

export const setupMap = () => {
  const mapElement = document.querySelector('.map');
  const backgroundElement = mapElement.querySelector('.background');
  const mapRegionsElement = backgroundElement.querySelector('svg');
  const regionElements = mapRegionsElement.querySelectorAll('path');

  touchScroll(mapElement);
  mapZoom(backgroundElement, mapRegionsElement);
  highlightRegion(regionElements);
};
