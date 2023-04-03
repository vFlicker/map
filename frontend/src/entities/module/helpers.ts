import { createEntityAdapter } from '@reduxjs/toolkit';

import { ModuleType } from '~/shared/types/module';

export const modulesAdapter = createEntityAdapter<ModuleType>();
