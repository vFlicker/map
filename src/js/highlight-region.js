export const highlightRegion = (regionElements) => {
  for (const region of regionElements) {
    region.addEventListener('mouseenter', (event) => {
      event.target.style.stroke = '#2DDE5F';
      event.target.style.strokeWidth = '2px';
    });

    region.addEventListener('mouseleave', (event) => {
      event.target.style.stroke = 'transparent';
    });
  }
};
