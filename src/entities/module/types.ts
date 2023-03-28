import { EntityState } from '@reduxjs/toolkit';

import { ModuleType } from '~/shared/types/module';

export type ModuleState = EntityState<ModuleType> & {
  activeModuleId: ModuleId;
  hoveredModuleId: string;
  status: string;
  error: null;
};
