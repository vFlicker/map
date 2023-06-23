import { EntityState } from '@reduxjs/toolkit';

import { ApiError } from '~/shared/api';
import { ModuleType } from '~/shared/types';

export type ModuleState = EntityState<ModuleType> & {
  activeModuleId: ModuleId;
  status: 'idle' | 'loading' | 'success' | 'failure';
  error: ApiError | null;
};
