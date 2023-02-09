import '../css/style.css';
import { setupModals } from './modal';
import { setupMap } from './map.js';
import { renderModalContent } from './render-modal-content';

setupMap();
setupModals(renderModalContent);
