import { EntityState } from '@reduxjs/toolkit';

import { ModuleType } from '~/shared/types/module';

export type ModuleState = EntityState<ModuleType> & {
  activeModuleId: ModuleId;
  status: string;
  error: null;
};
