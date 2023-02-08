import { mapZoom } from "./map-zoom";
import { touchScroll } from "./touch-scroll";

export const setupMap = (element) => {
 const backgroundElement = element.querySelector('.background');

  touchScroll(element);
  mapZoom(backgroundElement);
}
