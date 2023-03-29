import { useLayoutEffect, useState } from 'react';

const DesktopSize = 992;

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const onResizeHandler = () => setIsMobile(window.innerWidth < DesktopSize);

    window.addEventListener('resize', onResizeHandler);
    onResizeHandler(); // Set initial value on mount

    return () => window.removeEventListener('resize', onResizeHandler);
  }, [isMobile]);

  return isMobile;
};
