export const touchScroll = (element) => {
  element.style.cursor = 'grab';

  let pos = {
    top: 0,
    left: 0,
    x: 0,
    y: 0,
  };

  const mouseDownHandler = (event) => {
    element.style.cursor = 'grabbing';
    element.style.userSelect = 'none';

    pos = {
      left: element.scrollLeft,
      top: element.scrollTop,
      // Get the current mouse position
      x: event.clientX,
      y: event.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = (event) => {
    // How far the mouse has been moved
    const dx = event.clientX - pos.x;
    const dy = event.clientY - pos.y;

    // Scroll the element
    element.scrollTop = pos.top - dy;
    element.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = () => {
    element.style.cursor = 'grab';
    element.style.removeProperty('user-select');

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  // Attach the handler
  element.addEventListener('mousedown', mouseDownHandler);
};
