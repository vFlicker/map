import mapBackgroundX1 from '../img/map-bg-x1.png';
import mapBackgroundX2 from '../img/map-bg-x2.png';

const ZoomOption = {
  X1: 'x1',
  X2: 'x2',
};

export const mapZoom = (backgroundElement, mapRegionsElement) => {
  let zoom = ZoomOption.X1;

  backgroundElement.addEventListener('wheel', (event) => {
    event.preventDefault();

    zoom = event.wheelDeltaY > 0 ? ZoomOption.X2 : ZoomOption.X1;

    if (zoom === ZoomOption.X1) {
      backgroundElement.style.backgroundImage = `url(${mapBackgroundX1})`;
      mapRegionsElement.style.display = 'block';
    }

    if (zoom === ZoomOption.X2) {
      backgroundElement.style.backgroundImage = `url(${mapBackgroundX2})`;
      mapRegionsElement.style.display = 'none';
    }
  });
};
