import { MutableRefObject, useLayoutEffect } from 'react';

import { moduleModel } from '~/entities/module';
import { useAppSelector, useIsMobile } from '~/shared/hooks';

export const useChangeZoneOnMobile = (
  buttonsRef: MutableRefObject<HTMLButtonElement[]>,
) => {
  const isMobile = useIsMobile();

  const activeModuleId = useAppSelector(moduleModel.selectActiveModuleId);
  const { length } = useAppSelector(moduleModel.selectUnlockedModulesIds);

  useLayoutEffect(() => {
    if (isMobile && buttonsRef.current) {
      const buttons = buttonsRef.current;
      const index = Number(activeModuleId) - 1;
      const button = buttons[index];

      if (button) {
        button.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }
    }
  }, [activeModuleId, buttonsRef, isMobile, length]);
};
