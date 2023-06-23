import { useEffect } from 'react';

import { mapModel } from '~/entities/map';
import { modalModel } from '~/entities/modal';
import { moduleModel } from '~/entities/module';
import { useAppDispatch, useIsMobile } from '~/shared/hooks';

export const useMobileDefaultRegion = () => {
  const dispatch = useAppDispatch();

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      dispatch(moduleModel.changeActiveModuleId(1));
      dispatch(mapModel.changeActiveRegion(1));
      dispatch(modalModel.close());
    }
  }, [dispatch, isMobile]);
};
