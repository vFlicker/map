import { createEntityAdapter } from '@reduxjs/toolkit';

import { ModuleType } from '~/shared/types';

export const modulesAdapter = createEntityAdapter<ModuleType>();
