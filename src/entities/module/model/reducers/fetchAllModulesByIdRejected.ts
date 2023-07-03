import { PayloadAction } from '@reduxjs/toolkit';

import { ApiError } from '~/shared/api';

import { ModuleState } from '../../types';

export const fetchAllModulesByIdRejected = (
  state: ModuleState,
  { payload }: PayloadAction<ApiError | undefined>,
): void => {
  state.status = 'failure';
  if (payload) state.error = payload;
};
