import { PayloadAction } from '@reduxjs/toolkit';

import { NormalizedModules } from '~/shared/api-actions';

import { modulesAdapter } from '../../helpers';
import { ModuleState } from '../../types';

export const fetchAllModulesFulfilled = (
  state: ModuleState,
  action: PayloadAction<NormalizedModules>,
): void => {
  modulesAdapter.setMany(state, action.payload.modules);
  state.status = 'success';
};
