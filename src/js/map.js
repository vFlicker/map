import { highlightRegion } from './highlight-region';
import { mapZoom } from './map-zoom';
import { touchScroll } from './touch-scroll';

export const setupMap = () => {
  const mapElement = document.querySelector('#map');
  const backgroundElement = mapElement.querySelector('.background');
  const mapRegionsElement = mapElement.querySelector('svg');
  const regionElements = mapElement.querySelectorAll('path');

  touchScroll(mapElement);
  mapZoom(backgroundElement, mapRegionsElement);
  highlightRegion(regionElements);
};
