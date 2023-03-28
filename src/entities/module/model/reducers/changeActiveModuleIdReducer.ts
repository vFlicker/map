import { PayloadAction } from '@reduxjs/toolkit';

import { ModuleState } from '../../types';

export const changeActiveModuleIdReducer = (
  state: ModuleState,
  { payload }: PayloadAction<ModuleId>,
) => {
  state.activeModuleId = payload;
};
